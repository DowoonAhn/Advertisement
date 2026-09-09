import { Eye, ShieldCheck, Wallet } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { DashboardPreview } from "@/components/site/dashboard-preview";
import { RatePlayground } from "@/components/site/rate-playground";

const POINTS = [
  {
    icon: Wallet,
    title: "낮은 충전 요금 설정",
    body: "입주민이 부담하는 충전비를 대폭 낮출 수 있습니다. 남이 정한 요금이 아니라, 단지가 정하는 요금입니다.",
  },
  {
    icon: ShieldCheck,
    title: "관리 걱정 ZERO",
    body: "운영 지식·인력·경험 없이도 충전소를 돌립니다. 관제·정산·상태는 시스템이 맡습니다.",
  },
  {
    icon: Eye,
    title: "24시간 실시간 모니터링",
    body: "충전기 상태와 사용량을 한 화면에서 봅니다. 관리사무소에 별도의 당직이 필요 없습니다.",
  },
];

export function Apartment() {
  return (
    <section id="home" className="bg-paper text-ink">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-12 md:gap-10 md:py-28">
        <div className="md:col-span-5">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-[11px] tracking-[0.22em] text-ember uppercase">
              <span className="font-display text-sm tracking-normal">02</span>
              공용주택
            </p>
            <h2 className="font-display text-3xl leading-snug font-semibold tracking-[-0.03em] md:text-4xl">
              입주민이 직접 정하는
              <br />
              합리적인 충전 요금
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink/70">
              아파트·오피스텔은 수익보다 입주민 복지가 먼저입니다. 전기비와 운영비만 맞추면, 시중 CPO보다 훨씬 낮은 요금으로 단지를 운영할 수 있습니다.
            </p>
          </Reveal>
          <ul className="mt-10 grid gap-6">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} delay={80 * (i + 1)}>
                <li className="flex gap-4">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg bg-paper-2">
                    <p.icon className="size-4 text-ember" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-medium">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/65">{p.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="md:col-span-7">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/images/apartment.jpg"
                alt="아파트 주차장의 전기차 충전기"
                className="aspect-[4/3] w-full object-cover framed-paper"
              />
              <div className="hidden md:block md:absolute md:bottom-5 md:left-5 md:w-[300px]">
                <DashboardPreview />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="mt-4 md:hidden">
            <DashboardPreview />
          </Reveal>
        </div>
      </div>

      <div className="border-t border-ink/8">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
          <Reveal>
            <p className="text-[11px] tracking-[0.18em] text-ember uppercase">입주민 요금 체험</p>
            <h3 className="mt-3 font-display text-2xl tracking-tight">
              한 달 충전비,
              <br />
              요금을 낮추면 이렇게 달라집니다.
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/65">
              월 200kWh를 쓰는 입주민 기준입니다. 슬라이더로 단지가 정하는 kWh당 요금을 바꿔 보세요.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <RatePlayground />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
