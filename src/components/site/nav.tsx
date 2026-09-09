import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";
import { useInquiry } from "@/lib/inquiry";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#problem", id: "problem", n: "01", label: "문제" },
  { href: "#home", id: "home", n: "02", label: "공용주택" },
  { href: "#biz", id: "biz", n: "03", label: "상업시설" },
  { href: "#sim", id: "sim", n: "04", label: "시뮬레이터" },
  { href: "#start", id: "start", n: "05", label: "시작" },
];

export function Nav() {
  const setOpen = useInquiry((s) => s.setOpen);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("problem");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis?.target.id) setActive(vis.target.id);
      },
      { threshold: [0.25, 0.45], rootMargin: "-20% 0px -40% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-200",
          scrolled ? "bg-ink/85 shadow-border backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#problem" className="text-paper" aria-label="evCloud 2.0 홈">
            <Logo />
          </a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="섹션">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={l.href}
                className={cn(
                  "text-[13px] tracking-wide transition-colors duration-150",
                  active === l.id ? "text-orange" : "text-mist hover:text-paper",
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <Button size="sm" onClick={() => setOpen(true)}>
            도입 문의
          </Button>
        </div>
      </header>

      <nav
        className="pointer-events-none fixed top-1/2 right-5 z-30 hidden -translate-y-1/2 lg:block"
        aria-label="챕터"
      >
        <ol className="pointer-events-auto flex flex-col gap-3">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={l.href}
                className="group flex items-center justify-end gap-3"
                aria-current={active === l.id ? "true" : undefined}
              >
                <span
                  className={cn(
                    "text-[11px] tracking-widest uppercase transition-opacity duration-150",
                    active === l.id ? "text-orange opacity-100" : "text-fog opacity-0 group-hover:opacity-100",
                  )}
                >
                  {l.n} {l.label}
                </span>
                <span
                  className={cn(
                    "block h-px transition-[width,background-color] duration-200",
                    active === l.id ? "w-8 bg-orange" : "w-4 bg-paper/25 group-hover:w-6",
                  )}
                />
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
