import { Banknote, LineChart, Settings2 } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { krw } from "@/lib/utils";

const POINTS = [
  {
    icon: Settings2,
    title: "전력·운영비를 보고 요금을 책정",
    body: "전기 기본요금, 사용량, 통신·콜센터 옵션까지 반영해 단지가 아니라 사업자가 마진을 정합니다.",
  },
  {
    icon: Banknote,
    title: "복잡한 위탁 없이 이익 수취",
    body: "지금까지 CPO가 가져가던 매출을 시설 주인이 직접 받습니다. 수익 사업으로 전환할 수 있습니다.",
  },
  {
    icon: LineChart,
    title: "사용량만 받쳐 주면 흑자 구조",
    body: "5기 운영 · 월 500kWh/기 · 320원 모델 기준, 연간 이익 약 440만 원. 시뮬레이터에서 바로 확인해 보세요.",
  },
];

export function Commercial() {
  return (
    <section id="biz" className="relative bg-ink">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-12 md:py-28">
        <div className="relative md:col-span-6 md:order-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/images/commercial.jpg"
                alt="상업시설 주차장의 전기차 충전 인프라"
                className="aspect-[4/3] w-full object-cover framed"
              />
              <div className="hidden md:block md:absolute md:bottom-5 md:left-5 md:w-[260px]">
                <div className="rounded-2xl bg-ink-2 p-5 shadow-border">
                  <p className="text-xs tracking-widest text-fog uppercase">수익형 모델</p>
                  <p className="mt-2 font-display text-3xl tracking-tight tabular-nums text-orange">
                    {krw(4_396_000)}
                  </p>
                  <p className="mt-1 text-xs text-mist">연간 손익 · 5기 · 500kWh · 320원</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="mt-4 md:hidden">
            <div className="rounded-2xl bg-ink-2 p-5 shadow-border">
              <p className="text-xs tracking-widest text-fog uppercase">수익형 모델</p>
              <p className="mt-2 font-display text-3xl tracking-tight tabular-nums text-orange">
                {krw(4_396_000)}
              </p>
              <p className="mt-1 text-xs text-mist">연간 손익 · 5기 · 500kWh · 320원</p>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:order-1">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-[11px] tracking-[0.22em] text-orange uppercase">
              <span className="font-display text-sm tracking-normal">03</span>
              상업시설
            </p>
            <h2 className="font-display text-3xl leading-snug font-semibold tracking-[-0.03em] md:text-4xl">
              직접 설정하는
              <br />
              스마트한 수익 모델
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-mist">
              전력 및 운영비를 고려해 최적 요금을 직접 책정하세요. 복잡한 절차 없이 이익을 수취할 수 있습니다.
            </p>
          </Reveal>
          <ul className="mt-10 grid gap-6">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} delay={80 * (i + 1)}>
                <li className="flex gap-4">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg bg-ink-3 shadow-border">
                    <p.icon className="size-4 text-orange" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-medium text-paper">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-fog">{p.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
