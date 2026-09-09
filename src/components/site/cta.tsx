import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { useInquiry } from "@/lib/inquiry";

const PILLS = ["내 맘대로 요금 설정", "충전기 10기 무료 등록", "모니터링 페이지"];

export function Cta() {
  const setOpen = useInquiry((s) => s.setOpen);

  return (
    <section id="start" className="relative overflow-hidden bg-ink">
      <img
        src="/images/charger.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/70" />
      <div className="relative mx-auto max-w-3xl px-5 py-28 text-center md:py-36">
        <Reveal>
          <p className="mb-5 flex items-center justify-center gap-3 text-xs tracking-widest text-orange uppercase">
            <span className="font-display text-sm tracking-normal">05</span>
            시작하기
          </p>
          <ul className="mb-8 flex flex-wrap justify-center gap-2">
            {PILLS.map((p) => (
              <li
                key={p}
                className="rounded-full bg-ink-3 px-3.5 py-1.5 text-xs text-mist shadow-border"
              >
                {p}
              </li>
            ))}
          </ul>
          <h2 className="font-display text-3xl leading-snug font-semibold tracking-tight text-paper md:text-5xl md:leading-tight">
            저렴한 요금.
            <br />
            수익 창출.
            <br />
            뭐든지 가능합니다.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-mist">
            evCloud 2.0, 지금 바로 시작해 보세요.
          </p>
          <Button size="lg" className="mt-8" onClick={() => setOpen(true)}>
            무료로 시작하기
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
