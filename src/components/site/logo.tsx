import { cn } from "@/lib/utils";

export function Logo({ className, mark = true }: { className?: string; mark?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      {mark ? (
        <svg
          viewBox="0 0 28 28"
          className="size-7 shrink-0"
          aria-hidden="true"
        >
          <rect width="28" height="28" rx="8" className="fill-orange" />
          <path
            d="M8 16.5c0-3.4 2.4-6.2 6-6.2 2.4 0 4.5 1.3 5.5 3.2"
            className="stroke-ink"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M19.6 11.2v3.2h-3.1"
            className="stroke-ink"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="10.2" cy="19.2" r="1.15" className="fill-ink" />
        </svg>
      ) : null}
      <span className="flex items-baseline gap-1.5 leading-none">
        <span className="font-display text-[1.05em] font-semibold tracking-tight">evCloud</span>
        <span className="text-[0.68em] font-medium text-orange">2.0</span>
      </span>
    </span>
  );
}
