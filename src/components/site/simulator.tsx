import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ComposedChart,
  Line,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Slider } from "@/components/ui/slider";
import { ClientOnly } from "@/components/site/client-only";
import { Reveal } from "@/components/site/reveal";
import {
  MARKET_RATE,
  MODELS,
  profitCurve,
  rampTimeline,
  simulate,
  type ModelId,
} from "@/lib/simulator";
import { cn, krw, signedKrw } from "@/lib/utils";

const ORANGE = "#FF7A3A";
const MIST = "#8A918C";

type Mode = "annual" | "ramp";

export function Simulator() {
  const [mode, setMode] = useState<Mode>("annual");
  const [model, setModel] = useState<ModelId | "custom">("profit");
  const [rate, setRate] = useState(320);
  const [chargers, setChargers] = useState(5);
  const [kwh, setKwh] = useState(500);
  const [includePg, setIncludePg] = useState(false);
  const [startKwh, setStartKwh] = useState(100);
  const [targetKwh, setTargetKwh] = useState(450);
  const [rampMonths, setRampMonths] = useState(12);
  const [chartReady, setChartReady] = useState(false);

  useEffect(() => setChartReady(true), []);

  function pickModel(id: ModelId) {
    const next = MODELS.find((m) => m.id === id)!;
    setModel(id);
    setRate(next.rate);
  }

  function onRate(next: number) {
    setRate(next);
    const match = MODELS.find((m) => m.rate === next);
    setModel(match?.id ?? "custom");
  }

  const result = useMemo(
    () => simulate({ chargers, kwh, rate, includePg }),
    [chargers, kwh, rate, includePg],
  );
  const curve = useMemo(
    () => profitCurve(chargers, rate, includePg),
    [chargers, rate, includePg],
  );

  const safeStart = Math.min(startKwh, targetKwh);
  const safeTarget = Math.max(startKwh, targetKwh);
  const { points, turnMonth, recoverMonth } = useMemo(
    () =>
      rampTimeline({
        chargers,
        rate,
        startKwh: safeStart,
        targetKwh: safeTarget,
        rampMonths,
        includePg: false,
      }),
    [chargers, rate, safeStart, safeTarget, rampMonths],
  );
  const turn = turnMonth ? points[turnMonth - 1] : null;
  const last = points[points.length - 1];

  return (
    <section id="sim" className="bg-ink-2">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 text-xs tracking-widest text-orange uppercase">
            <span className="font-display text-sm tracking-normal">04</span>
            운영 시뮬레이터
          </p>
          <h2 className="max-w-xl font-display text-3xl leading-snug font-semibold tracking-tight md:text-4xl">
            요금을 정하면
            <br />
            손익이 바로 보입니다.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-fog">
            사업모델 정책안의 5기 운영 테이블을 보간한 값입니다. 충전기 수·요금을 바꿔 연간 손익과 흑자 전환 시점을 함께 확인해 보세요.
          </p>
        </Reveal>

        <div className="mt-8 inline-flex rounded-full bg-ink p-1 shadow-border">
          <ModeTab active={mode === "annual"} onClick={() => setMode("annual")}>
            연간 손익
          </ModeTab>
          <ModeTab active={mode === "ramp"} onClick={() => setMode("ramp")}>
            흑자 전환 시점
          </ModeTab>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          <div className="rounded-2xl bg-ink p-5 shadow-border md:p-6 lg:col-span-5">
            <div className="grid grid-cols-3 gap-2">
              {MODELS.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => pickModel(m.id)}
                  className={cn(
                    "rounded-xl px-2 py-3 text-center transition-colors duration-150",
                    model === m.id ? "bg-orange text-ink" : "bg-ink-3 text-mist hover:text-paper",
                  )}
                >
                  <span className="block text-sm font-medium">{m.name}</span>
                  <span className="mt-0.5 block text-xs tabular-nums opacity-80">{m.rate}원</span>
                </button>
              ))}
            </div>

            <ClientOnly fallback={<div className="mt-5 h-40 rounded-xl bg-ink-3/50" />}>
              <Control label="충전 요금" value={`${rate.toLocaleString("ko-KR")}원/kWh`}>
                <Slider
                  min={150}
                  max={400}
                  step={5}
                  value={[rate]}
                  onValueChange={(v) => onRate(v[0] ?? 250)}
                  aria-label="충전 요금"
                />
              </Control>
              <Control label="충전기 대수" value={`${chargers}기`}>
                <Slider
                  min={1}
                  max={20}
                  step={1}
                  value={[chargers]}
                  onValueChange={(v) => setChargers(v[0] ?? 5)}
                  aria-label="충전기 대수"
                />
              </Control>

              {mode === "annual" ? (
                <Control label="월 충전량 / 1기" value={`${kwh.toLocaleString("ko-KR")} kWh`}>
                  <Slider
                    min={100}
                    max={1000}
                    step={10}
                    value={[kwh]}
                    onValueChange={(v) => setKwh(v[0] ?? 500)}
                    aria-label="월 충전량"
                  />
                </Control>
              ) : (
                <>
                  <Control label="시작 충전량 / 1기" value={`${safeStart.toLocaleString("ko-KR")} kWh`}>
                    <Slider
                      min={100}
                      max={500}
                      step={10}
                      value={[startKwh]}
                      onValueChange={(v) => setStartKwh(v[0] ?? 100)}
                      aria-label="시작 충전량"
                    />
                  </Control>
                  <Control label="목표 충전량 / 1기" value={`${safeTarget.toLocaleString("ko-KR")} kWh`}>
                    <Slider
                      min={200}
                      max={800}
                      step={10}
                      value={[targetKwh]}
                      onValueChange={(v) => setTargetKwh(v[0] ?? 450)}
                      aria-label="목표 충전량"
                    />
                  </Control>
                  <Control label="목표 도달" value={`${rampMonths}개월`}>
                    <Slider
                      min={6}
                      max={24}
                      step={1}
                      value={[rampMonths]}
                      onValueChange={(v) => setRampMonths(v[0] ?? 12)}
                      aria-label="목표 도달 개월"
                    />
                  </Control>
                </>
              )}
            </ClientOnly>

            {mode === "annual" ? (
              <>
                <ClientOnly>
                  <label className="mt-5 flex items-center gap-2.5 text-sm text-mist">
                    <input
                      type="checkbox"
                      checked={includePg}
                      onChange={(e) => setIncludePg(e.target.checked)}
                      className="size-4 accent-orange"
                    />
                    PG 위탁 정산 (매출의 5%)
                  </label>
                </ClientOnly>
                {chargers > 10 ? (
                  <p className="mt-3 text-xs text-fog">
                    10기 초과분 {chargers - 10}기는 월 1만 원씩 연동 이용료가 반영됩니다.
                  </p>
                ) : (
                  <p className="mt-3 text-xs text-fog">10기까지 시스템 연동 이용료는 없습니다.</p>
                )}
              </>
            ) : (
              <p className="mt-4 text-xs leading-relaxed text-fog">
                시작량은 적게, 목표는 단지 통상 사용량으로 두었습니다. 충전량이 목표에 선형으로 다가간다고 가정합니다.
              </p>
            )}
          </div>

          <div className="rounded-2xl bg-ink p-5 shadow-border md:p-6 lg:col-span-7">
            {mode === "annual" ? (
              <>
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="text-xs text-fog">연간 손익</p>
                    <p
                      className={cn(
                        "font-display text-4xl tracking-tight tabular-nums md:text-5xl",
                        result.profit >= 0 ? "text-orange" : "text-danger",
                      )}
                    >
                      {signedKrw(result.profit)}
                    </p>
                  </div>
                  <p className="text-sm text-mist">
                    월 <span className="tabular-nums text-paper">{signedKrw(result.monthly)}</span>
                  </p>
                </div>

                <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <Mini label="매출" value={krw(result.revenue)} />
                  <Mini label="전기비" value={krw(result.electricity)} />
                  <Mini label="운영·통신·의무" value={krw(result.opex)} />
                  <Mini label="플랫폼" value={result.platform ? krw(result.platform) : "무료"} />
                  <Mini label="지출 합계" value={krw(result.spend)} />
                  {includePg ? <Mini label="PG" value={krw(result.pg)} /> : <Mini label="PG" value="미적용" />}
                </dl>

                <div className="mt-6 h-48">
                  {chartReady ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={curve} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="profitFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={ORANGE} stopOpacity={0.35} />
                            <stop offset="100%" stopColor={ORANGE} stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid stroke="rgba(243,239,230,0.06)" vertical={false} />
                        <XAxis
                          dataKey="kwh"
                          tick={{ fill: MIST, fontSize: 11 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis
                          tick={{ fill: MIST, fontSize: 11 }}
                          axisLine={false}
                          tickLine={false}
                          width={56}
                          tickFormatter={(v: number) =>
                            v === 0 ? "0" : `${Math.round(v / 10_000)}만`
                          }
                        />
                        <Tooltip
                          contentStyle={{
                            background: "#141716",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: 12,
                            fontSize: 12,
                          }}
                          formatter={(v) => [krw(Number(v ?? 0)), "연간 손익"]}
                          labelFormatter={(l) => `월 ${l} kWh / 기`}
                        />
                        <Area
                          type="monotone"
                          dataKey="profit"
                          stroke={ORANGE}
                          strokeWidth={2}
                          fill="url(#profitFill)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  ) : null}
                </div>
                <p className="mt-2 text-xs text-fog">가로축: 월 충전량(kWh/기) · 곡선: 현재 요금의 연간 손익</p>
              </>
            ) : (
              <>
                {turn ? (
                  <>
                    <p className="text-xs text-fog">월 손익 흑자 전환</p>
                    <p className="font-display text-4xl tracking-tight text-orange md:text-5xl">
                      {turn.month}
                      <span className="ml-1 text-2xl text-paper">개월 후</span>
                    </p>
                    <p className="mt-2 text-sm text-mist">
                      그때 월 충전량{" "}
                      <span className="tabular-nums text-paper">
                        {turn.kwh.toLocaleString("ko-KR")} kWh/기
                      </span>
                      · 월 손익{" "}
                      <span className="tabular-nums text-paper">{signedKrw(turn.monthly)}</span>
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-xs text-fog">월 손익 흑자 전환</p>
                    <p className="font-display text-3xl tracking-tight text-paper md:text-4xl">
                      24개월 내 전환이 어렵습니다
                    </p>
                    <p className="mt-2 text-sm text-mist">
                      목표 충전량이나 요금을 조금 높이면 흑자 시점이 앞당겨집니다.
                    </p>
                  </>
                )}

                <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <Mini
                    label="누적 손익 회복"
                    value={recoverMonth ? `${recoverMonth}개월` : "24개월+"}
                  />
                  <Mini
                    label="24개월 운영 손익"
                    value={last ? signedKrw(last.cumulative) : "—"}
                  />
                  <Mini
                    label="24개월 입주민 절감"
                    value={last ? krw(last.savedCum) : "—"}
                  />
                </dl>

                <div className="mt-6 h-48">
                  {chartReady ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={points} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                        <CartesianGrid stroke="rgba(243,239,230,0.06)" vertical={false} />
                        <XAxis
                          dataKey="month"
                          tick={{ fill: MIST, fontSize: 11 }}
                          axisLine={false}
                          tickLine={false}
                          ticks={[1, 6, 12, 18, 24]}
                          tickFormatter={(v: number) => `${v}M`}
                        />
                        <YAxis
                          tick={{ fill: MIST, fontSize: 11 }}
                          axisLine={false}
                          tickLine={false}
                          width={56}
                          tickFormatter={(v: number) =>
                            Math.abs(v) < 500 ? "0" : `${Math.round(v / 10_000)}만`
                          }
                        />
                        <Tooltip
                          contentStyle={{
                            background: "#141716",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: 12,
                            fontSize: 12,
                          }}
                          formatter={(v, name) => [
                            krw(Number(v ?? 0)),
                            String(name) === "monthly" ? "월 손익" : "누적 손익",
                          ]}
                          labelFormatter={(l) => `${l}개월차`}
                        />
                        <ReferenceLine y={0} stroke="rgba(243,239,230,0.18)" />
                        {turnMonth ? (
                          <ReferenceLine
                            x={turnMonth}
                            stroke={ORANGE}
                            strokeDasharray="4 4"
                            strokeOpacity={0.7}
                          />
                        ) : null}
                        <Line
                          type="monotone"
                          dataKey="cumulative"
                          stroke={ORANGE}
                          strokeWidth={2.25}
                          dot={false}
                        />
                        <Line
                          type="monotone"
                          dataKey="monthly"
                          stroke={MIST}
                          strokeWidth={1.5}
                          dot={false}
                        />
                      </ComposedChart>
                    </ResponsiveContainer>
                  ) : null}
                </div>
                <p className="mt-2 text-xs text-fog">
                  주황: 누적 손익 · 회색: 월 손익 · 점선: 월 흑자 전환
                  {rate < MARKET_RATE
                    ? ` · 입주민 절감은 시중 ${MARKET_RATE}원 대비`
                    : ""}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ModeTab({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-150",
        active ? "bg-orange text-ink" : "text-mist hover:text-paper",
      )}
    >
      {children}
    </button>
  );
}

function Control({
  label,
  value,
  children,
}: {
  label: string;
  value: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-5">
      <div className="flex items-center justify-between text-sm">
        <span className="text-mist">{label}</span>
        <span className="tabular-nums text-paper">{value}</span>
      </div>
      {children}
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-ink-3 px-3 py-2.5">
      <dt className="text-xs text-fog">{label}</dt>
      <dd className="mt-0.5 text-sm font-medium tabular-nums">{value}</dd>
    </div>
  );
}
