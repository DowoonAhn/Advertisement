import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useState, type ComponentProps, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useInquiry } from "@/lib/inquiry";

const STORAGE_KEY = "evcloud-inquiries";

export function InquiryDialog() {
  const open = useInquiry((s) => s.open);
  const setOpen = useInquiry((s) => s.setOpen);
  const [sending, setSending] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setSending(true);
    const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as unknown[];
    prev.push({ ...data, at: new Date().toISOString() });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prev));
    window.setTimeout(() => {
      setSending(false);
      setOpen(false);
      form.reset();
      toast.success("도입 문의가 접수되었습니다. 담당자가 연락드립니다.");
    }, 420);
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/70" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[min(92vw,440px)] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-ink-2 p-6 shadow-border focus:outline-none">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <Dialog.Title className="font-display text-xl text-paper">도입 문의</Dialog.Title>
              <Dialog.Description className="mt-1 text-sm text-fog">
                충전기 10기까지 시스템 연동은 무료입니다.
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                className="relative size-11 rounded-lg text-mist hover:bg-paper/6"
                aria-label="닫기"
              >
                <X className="absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2" />
              </button>
            </Dialog.Close>
          </div>
          <form className="grid gap-3.5" onSubmit={onSubmit}>
            <Field name="name" label="이름" required placeholder="홍길동" />
            <Field name="phone" label="연락처" required placeholder="010-0000-0000" type="tel" />
            <Field name="site" label="시설명" placeholder="○○아파트 / ○○빌딩" />
            <div className="grid gap-1.5">
              <Label htmlFor="kind">시설 유형</Label>
              <select
                id="kind"
                name="kind"
                className="h-11 w-full rounded-lg bg-ink-3 px-3.5 text-sm text-paper shadow-border outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                defaultValue="아파트"
              >
                <option>아파트</option>
                <option>오피스텔</option>
                <option>상업시설</option>
                <option>사옥 · 주차장</option>
                <option>기타</option>
              </select>
            </div>
            <Field name="chargers" label="충전기 대수" placeholder="예: 8" type="number" />
            <div className="grid gap-1.5">
              <Label htmlFor="note">문의 내용</Label>
              <textarea
                id="note"
                name="note"
                rows={3}
                className="resize-none rounded-lg bg-ink-3 px-3.5 py-2.5 text-sm text-paper placeholder:text-fog shadow-border outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                placeholder="원하시는 요금 모델이나 현재 운영 방식을 알려주세요."
              />
            </div>
            <label className="flex items-start gap-2.5 text-xs leading-5 text-fog">
              <input
                type="checkbox"
                required
                className="mt-0.5 size-4 accent-orange"
                name="agree"
              />
              도입 상담을 위해 이름·연락처를 수집하는 데 동의합니다.
            </label>
            <Button type="submit" size="lg" className="mt-1 w-full" disabled={sending}>
              {sending ? "접수 중…" : "무료로 시작하기"}
            </Button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function Field({
  name,
  label,
  ...props
}: { name: string; label: string } & ComponentProps<typeof Input>) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} {...props} />
    </div>
  );
}
