import { useEffect, useState } from "react";
import { cn, krw } from "@/lib/utils";

const RATE = 250;
const TICK_MS = 2200;

const BASE_CHARGERS = [
  { id: "A-01", state: "충전중", kwh: 18.4, tone: "live" },
  { id: "A-02", state: "대기", kwh: 0, tone: "fog" },
  { id: "A-03", state: "충전중", kwh: 7.2, tone: "live" },
  { id: "B-01", state: "대기", kwh: 0, tone: "fog" },
  { id: "B-02", state: "대기", kwh: 0, tone: "fog" },
] as const;

function currentTick() {
  return Math.floor(Date.now() / TICK_MS);
}

/**
 * Deterministic function of a shared wall-clock tick, not accumulated
 * per-instance state — so the two DashboardPreview instances mounted at
 * once (mobile/desktop breakpoints in apartment.tsx) always agree, and the
 * number oscillates around `base` instead of growing without bound.
 */
function liveKwh(base: number, seed: number, tick: number) {
  if (base <= 0) return 0;
  const wave = (Math.sin(tick * 0.35 + seed) + 1) * 0.4; // 0..0.8
  return Math.round((base + wave) * 10) / 10;
}

export function DashboardPreview({ className }: { className?: string }) {
  // Seed with a fixed tick (0) so server and first client render match —
  // Date.now() only enters after mount, avoiding a hydration mismatch.
  const [tick, setTick] = useState(0);

  useEffect(() => {
    setTick(currentTick());
    const id = window.setInterval(() => setTick(currentTick()), TICK_MS);
    return () => window.clearInterval(id);
  }, []);

  const chargers = BASE_CHARGERS.map((c, i) => ({
    ...c,
    kwh: c.tone === "live" ? liveKwh(c.kwh, i, tick) : c.kwh,
  }));
  const totalKwh = chargers.reduce((sum, c) => sum + c.kwh, 0);

  return (
    <div
      className={cn(
        "rounded-2xl bg-ink-2/92 p-4 shadow-border backdrop-blur-sm",
        className,
      )}
    >
      <div className="mb-3 flex items-center justify-between">
        <p className="text-[11px] tracking-[0.16em] text-fog uppercase">Live Monitor</p>
        <span className="flex items-center gap-1.5 text-[11px] text-orange">
          <span className="size-1.5 rounded-full bg-orange animate-pulse" />
          실시간
        </span>
      </div>
      <div className="mb-4 grid grid-cols-3 gap-2">
        <Stat label="오늘 충전" value={`${totalKwh.toFixed(1)} kWh`} />
        <Stat label="적용 요금" value={`${RATE}원`} />
        <Stat label="오늘 매출" value={krw(totalKwh * RATE)} />
      </div>
      <ul className="grid gap-1.5">
        {chargers.map((c) => (
          <li
            key={c.id}
            className="flex items-center justify-between rounded-lg bg-ink/60 px-3 py-2"
          >
            <span className="flex items-center gap-2 text-sm">
              <span
                className={cn(
                  "size-1.5 rounded-full",
                  c.tone === "live" ? "bg-orange animate-pulse" : "bg-fog/70",
                )}
              />
              {c.id}
            </span>
            <span className="text-xs text-fog">{c.state}</span>
            <span className="font-medium tabular-nums text-sm">
              {c.kwh > 0 ? `${c.kwh.toFixed(1)} kWh` : "—"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-ink/60 px-2.5 py-2">
      <p className="text-[10px] text-fog">{label}</p>
      <p className="mt-0.5 text-sm font-medium tabular-nums">{value}</p>
    </div>
  );
}
