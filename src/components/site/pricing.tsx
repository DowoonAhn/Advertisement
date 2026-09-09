import { Check } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { useInquiry } from "@/lib/inquiry";

const BASIC = [
  "충전기 10기 이하 시스템 연동 무료",
  "충전소 5개소 이하 연동 무료",
  "단일 요금제 직접 설정",
  "기본 대시보드",
  "가입 제한 없음",
];

const OPTIONS = [
  { name: "초과 충전기 연동", price: "1기당 월 10,000원" },
  { name: "초과 충전소 연동", price: "1개소당 월 10,000원" },
  { name: "통신 모뎀 요금", price: "월 8,900원" },
  { name: "라우터 구매", price: "최초 30,000원" },
  { name: "365일 24시간 콜센터", price: "월 10,000원/기" },
  { name: "PG 위탁 정산", price: "매출의 5%" },
];

export function Pricing() {
  const setOpen = useInquiry((s) => s.setOpen);

  return (
    <section id="price" className="bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <p className="text-[11px] tracking-[0.18em] text-ember uppercase">Basic</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl tracking-tight md:text-4xl">
            관리 시스템은 무료.
            <br />
            필요할 때만 옵션을 붙입니다.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <Reveal className="rounded-2xl bg-ink p-7 text-paper lg:col-span-5">
            <p className="text-xs tracking-[0.16em] text-orange uppercase">Basic · 무료</p>
            <p className="mt-4 font-display text-5xl tracking-tight">₩0</p>
            <p className="mt-2 text-sm text-fog">충전기 10기 · 충전소 5개소까지</p>
            <ul className="mt-8 grid gap-3">
              {BASIC.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-mist">
                  <Check className="mt-0.5 size-4 shrink-0 text-orange" strokeWidth={1.75} />
                  {item}
                </li>
              ))}
            </ul>
            <Button className="mt-8 w-full" size="lg" onClick={() => setOpen(true)}>
              무료로 시작하기
            </Button>
          </Reveal>

          <Reveal delay={80} className="rounded-2xl bg-paper-2 p-7 lg:col-span-7">
            <p className="text-xs tracking-[0.16em] text-ember uppercase">선택 옵션</p>
            <p className="mt-2 text-sm text-ink/60">운영에 필요한 것만 켜면 됩니다. 안 쓰면 비용이 없습니다.</p>
            <ul className="mt-6 divide-y divide-ink/8">
              {OPTIONS.map((o) => (
                <li key={o.name} className="flex items-baseline justify-between gap-4 py-3.5 text-sm">
                  <span>{o.name}</span>
                  <span className="shrink-0 tabular-nums text-ink/55">{o.price}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-ink/45">
              A/S는 이슈 발생 시 출장비 6만 원(자재·공임 별도). Pro(100기 이상)·Enterprise는 수량 단가 및 커스터마이징으로 별도 협의합니다.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
