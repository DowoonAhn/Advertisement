import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInquiry } from "@/lib/inquiry";

export function Hero() {
  const setOpen = useInquiry((s) => s.setOpen);

  return (
    <section id="problem" className="relative min-h-dvh overflow-hidden">
      <img
        src="/images/hero.jpg"
        alt="지하주차장에 설치된 전기차 충전기"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/20 to-transparent" />

      <div className="relative mx-auto flex min-h-dvh max-w-6xl flex-col justify-end px-5 pt-24 pb-16 md:pb-20">
        <p className="mb-5 flex items-center gap-3 text-[11px] tracking-[0.22em] text-orange uppercase">
          <span className="font-display text-sm tracking-normal">01</span>
          문제제기
        </p>
        <h1 className="max-w-3xl font-display text-[2.05rem] leading-[1.22] font-semibold tracking-[-0.03em] text-paper sm:text-5xl md:text-[3.4rem] md:leading-[1.18]">
          전기차 충전기,
          <br />
          왜 항상 남이 정한
          <br />
          비싼 요금으로 써야 할까요?
        </h1>
        <p className="mt-6 max-w-md text-base text-mist md:text-lg">
          이제 직접 요금을 정하고, 관리는 편하게.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button size="lg" onClick={() => setOpen(true)}>
            무료로 시작하기
          </Button>
          <Button size="lg" variant="ghost" asChild>
            <a href="#sim">
              <Play className="size-3.5 fill-current" />
              요금 시뮬레이터
            </a>
          </Button>
        </div>

        <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-paper/10 pt-6">
          <HeroStat value="10기" label="시스템 연동 무료" />
          <HeroStat value="0" label="운영 인력 필요" />
          <HeroStat value="24h" label="실시간 모니터링" />
        </dl>
      </div>
    </section>
  );
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-2xl tracking-tight text-paper md:text-3xl">{value}</dt>
      <dd className="mt-1 text-xs text-fog">{label}</dd>
    </div>
  );
}
