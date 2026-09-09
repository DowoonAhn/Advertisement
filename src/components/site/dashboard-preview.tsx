import { useEffect, useState } from "react";
import { cn, krw } from "@/lib/utils";

const RATE = 250;

const BASE_CHARGERS = [
  { id: "A-01", state: "충전중", kwh: 18.4, tone: "live" },
  { id: "A-02", state: "대기", kwh: 0, tone: "fog" },
  { id: "A-03", state: "충전중", kwh: 7.2, tone: "live" },
  { id: "B-01", state: "대기", kwh: 0, tone: "fog" },
  { id: "B-02", state: "대기", kwh: 0, tone: "fog" },
] as const;

export function DashboardPreview({ className }: { className?: string }) {
  const [chargers, setChargers] = useState<Array<{ id: string; state: string; kwh: number; tone: string }>>(
    () => BASE_CHARGERS.map((c) => ({ ...c })),
  );

  // Purely cosmetic tick so the "실시간" label on a marketing screenshot
  // isn't a lie — nudges only the chargers already marked "충전중".
  useEffect(() => {
    const id = window.setInterval(() => {
      setChargers((prev) =>
        prev.map((c) =>
          c.tone === "live" ? { ...c, kwh: Math.round((c.kwh + Math.random() * 0.3) * 10) / 10 } : c,
        ),
      );
    }, 2200);
    return () => window.clearInterval(id);
  }, []);

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
