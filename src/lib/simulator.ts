/** Operating-case numbers from the evCloud 2.0 BM deck (5-charger site, annual P&L). */

export const OPEX_PER_CHARGER = 439_000 / 5;
export const FREE_CHARGERS = 10;
export const EXTRA_CHARGER_FEE = 10_000;
export const PG_RATE = 0.05;

/** Electricity cost for a 5-charger site at given kWh/charger/month (same period as the deck). */
const ELEC_COST_5: ReadonlyArray<readonly [number, number]> = [
  [100, 1_820_000],
  [200, 2_556_000],
  [300, 3_293_000],
  [400, 4_029_000],
  [500, 4_765_000],
  [700, 6_974_000],
  [1000, 8_447_000],
];

export const MODELS = [
  {
    id: "welfare",
    name: "복지형",
    rate: 200,
    blurb: "입주민 부담을 낮추는 요금",
    caption: "공용주택 · 입주민 복지",
  },
  {
    id: "balance",
    name: "밸런스형",
    rate: 250,
    blurb: "비용과 수익의 균형",
    caption: "단지 · 사옥 표준",
  },
  {
    id: "profit",
    name: "수익형",
    rate: 320,
    blurb: "운영 이익을 극대화",
    caption: "상업시설 · 수익 사업",
  },
] as const;

export type ModelId = (typeof MODELS)[number]["id"];

export function electricityCost(kwhPerCharger: number, chargers: number) {
  const table = ELEC_COST_5;
  const x = Math.min(1000, Math.max(100, kwhPerCharger));
  let lo = table[0];
  let hi = table[table.length - 1];
  for (let i = 0; i < table.length - 1; i++) {
    const a = table[i];
    const b = table[i + 1];
    if (x >= a[0] && x <= b[0]) {
      lo = a;
      hi = b;
      break;
    }
  }
  const t = hi[0] === lo[0] ? 0 : (x - lo[0]) / (hi[0] - lo[0]);
  const cost5 = lo[1] + (hi[1] - lo[1]) * t;
  return (cost5 / 5) * chargers;
}

export function evCloudFeeMonthly(chargers: number) {
  return Math.max(0, chargers - FREE_CHARGERS) * EXTRA_CHARGER_FEE;
}

export type SimInput = {
  chargers: number;
  kwh: number;
  rate: number;
  includePg: boolean;
};

export type SimResult = {
  revenue: number;
  opex: number;
  electricity: number;
  platform: number;
  pg: number;
  spend: number;
  profit: number;
  monthly: number;
};

export function simulate({ chargers, kwh, rate, includePg }: SimInput): SimResult {
  const revenue = rate * kwh * chargers * 12;
  const opex = OPEX_PER_CHARGER * chargers;
  const electricity = electricityCost(kwh, chargers);
  const platform = evCloudFeeMonthly(chargers) * 12;
  const pg = includePg ? revenue * PG_RATE : 0;
  const spend = opex + electricity + platform + pg;
  const profit = revenue - spend;
  return { revenue, opex, electricity, platform, pg, spend, profit, monthly: profit / 12 };
}

export function profitCurve(chargers: number, rate: number, includePg: boolean) {
  const points = [100, 200, 300, 400, 500, 700, 1000];
  return points.map((kwh) => ({
    kwh,
    profit: simulate({ chargers, kwh, rate, includePg }).profit,
  }));
}

export const MARKET_RATE = 350;
export const RAMP_HORIZON = 24;

export type MonthPoint = {
  month: number;
  kwh: number;
  monthly: number;
  cumulative: number;
  saved: number;
  savedCum: number;
};

export function kwhAtMonth(month: number, startKwh: number, targetKwh: number, rampMonths: number) {
  if (rampMonths <= 1) return targetKwh;
  const t = Math.min(1, (month - 1) / (rampMonths - 1));
  return startKwh + (targetKwh - startKwh) * t;
}

export type RampInput = {
  chargers: number;
  rate: number;
  startKwh: number;
  targetKwh: number;
  rampMonths: number;
  includePg: boolean;
  horizon?: number;
};

export function rampTimeline({
  chargers,
  rate,
  startKwh,
  targetKwh,
  rampMonths,
  includePg,
  horizon = RAMP_HORIZON,
}: RampInput) {
  const points: MonthPoint[] = [];
  let cumulative = 0;
  let savedCum = 0;
  let turnMonth: number | null = null;
  let recoverMonth: number | null = null;

  for (let month = 1; month <= horizon; month++) {
    const kwh = Math.round(kwhAtMonth(month, startKwh, targetKwh, rampMonths));
    const monthly = simulate({ chargers, kwh, rate, includePg }).monthly;
    cumulative += monthly;
    const saved = Math.max(0, MARKET_RATE - rate) * kwh * chargers;
    savedCum += saved;
    if (turnMonth === null && monthly >= 0) turnMonth = month;
    if (recoverMonth === null && cumulative >= 0) recoverMonth = month;
    points.push({ month, kwh, monthly, cumulative, saved, savedCum });
  }

  return { points, turnMonth, recoverMonth };
}

