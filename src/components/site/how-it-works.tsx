import { Reveal } from "@/components/site/reveal";

const STEPS = [
  {
    n: "01",
    title: "무료로 가입하고 충전기를 등록합니다",
    body: "충전기 10기, 충전소 5개소까지 시스템 연동은 무료입니다. 이미 타이드가 연동한 모델은 바로 붙습니다.",
  },
  {
    n: "02",
    title: "단지가 원하는 요금을 직접 넣습니다",
    body: "복지형·밸런스형·수익형, 어떤 숫자든 시설 주인이 정합니다. 남이 정한 요금을 그대로 쓸 필요가 없습니다.",
  },
  {
    n: "03",
    title: "모니터링만 하고, 운영은 시스템이 합니다",
    body: "실시간 현황, 선택적 콜센터·A/S·통신. 운영 리소스 없이 낮은 요금으로, 또는 수익 사업으로.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="text-xs tracking-widest text-orange uppercase">How it works</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
              가입하고, 요금을 정하고, 보기만 하면 됩니다.
            </h2>
          </Reveal>
          <Reveal delay={80} className="hidden overflow-hidden rounded-2xl md:col-span-5 md:block">
            <img
              src="/images/charger.jpg"
              alt="충전기 커넥터와 민트빛 상태 링"
              className="aspect-[4/3] w-full object-cover framed"
            />
          </Reveal>
        </div>
        <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <li className="border-t border-paper/10 pt-6">
                <p className="font-display text-sm text-orange">{s.n}</p>
                <h3 className="mt-3 text-lg font-medium leading-snug">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fog">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
