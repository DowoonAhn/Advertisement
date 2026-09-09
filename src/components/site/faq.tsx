import { Reveal } from "@/components/site/reveal";

const ITEMS = [
  {
    q: "정말 무료인가요?",
    a: "충전기 10기까지 시스템 연동 무료입니다. 초과분은 1기·1개소당 월 1만 원입니다.",
  },
  {
    q: "운영 인력이 필요한가요?",
    a: "없습니다. evCloud가 관제·현황·요금 설정을 담당합니다. 콜센터와 A/S는 필요할 때만 옵션으로 붙입니다.",
  },
  {
    q: "요금은 어떻게 정하나요?",
    a: "Basic은 단일 요금제를 직접 설정합니다. 입주민 복지형으로 낮출 수도, 상업시설 수익형으로 맞출 수도 있습니다.",
  },
  {
    q: "정산은 직접 해야 하나요?",
    a: "직접 정산하거나, 타디스 PG 위탁(매출의 5%)을 선택할 수 있습니다.",
  },
];

export function Faq() {
  return (
    <section className="bg-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-12 md:py-24">
        <Reveal className="md:col-span-4">
          <h2 className="font-display text-3xl tracking-tight">자주 묻는 질문</h2>
        </Reveal>
        <div className="md:col-span-8">
          {ITEMS.map((item, i) => (
            <Reveal key={item.q} delay={i * 60}>
              <details className="group border-t border-paper/10 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium">
                  {item.q}
                  <span className="text-fog transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-fog">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
