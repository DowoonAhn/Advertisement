import { Logo } from "@/components/site/logo";

export function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-fog">미래 에너지 생활을 설계합니다.</p>
        </div>
        <p className="text-xs text-fog">
          타이드테크놀로지 · evCloud 2.0 사업모델 정책안 기반 소개 페이지
        </p>
      </div>
    </footer>
  );
}
