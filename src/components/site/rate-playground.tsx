import { useState } from "react";
import { SliderPaper } from "@/components/ui/slider";
import { ClientOnly } from "@/components/site/client-only";
import { krw } from "@/lib/utils";

const KWH = 200;
const MARKET = 350;

export function RatePlayground() {
  const [rate, setRate] = useState(200);
  const mine = rate * KWH;
  const theirs = MARKET * KWH;
  const save = theirs - mine;

  return (
    <div className="rounded-2xl bg-paper-2 p-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs text-ink/50">단지 설정 요금</p>
          <p className="mt-1 font-display text-4xl tracking-tight tabular-nums">
            {rate}
            <span className="ml-1 text-lg text-ink/50">원/kWh</span>
          </p>
        </div>
        <p className="text-right text-sm text-ember">
          시중 대비
          <br />
          <span className="font-medium tabular-nums">{krw(save)}</span> 절감
        </p>
      </div>
      <ClientOnly fallback={<div className="mt-6 h-11" />}>
        <SliderPaper
          className="mt-6"
          min={150}
          max={400}
          step={10}
          value={[rate]}
          onValueChange={(v) => setRate(v[0] ?? 200)}
          aria-label="충전 요금"
        />
      </ClientOnly>
      <div className="mt-2 flex justify-between text-[11px] text-ink/45">
        <span>150원</span>
        <span>400원</span>
      </div>
      <dl className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-paper px-4 py-3">
          <dt className="text-xs text-ink/50">단지 요금 · 월 {KWH}kWh</dt>
          <dd className="mt-1 text-lg font-medium tabular-nums">{krw(mine)}</dd>
        </div>
        <div className="rounded-xl bg-paper px-4 py-3">
          <dt className="text-xs text-ink/50">시중 {MARKET}원 기준</dt>
          <dd className="mt-1 text-lg font-medium tabular-nums text-ink/45 line-through">
            {krw(theirs)}
          </dd>
        </div>
      </dl>
    </div>
  );
}
