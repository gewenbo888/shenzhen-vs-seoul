"use client";

import { useEffect, useState } from "react";
import { useLang } from "./LanguageProvider";

const SECTIONS = [
  { id: "open", en: "Open",        zh: "序" },
  { id: "s1",   en: "Philosophy",  zh: "哲学" },
  { id: "s2",   en: "Timeline",    zh: "年表" },
  { id: "s3",   en: "Supply",      zh: "供应链" },
  { id: "s4",   en: "AI · Robotics", zh: "AI·机器人" },
  { id: "s5",   en: "Culture",     zh: "文化" },
  { id: "s6",   en: "Urban",       zh: "城市形态" },
  { id: "s7",   en: "Giants",      zh: "巨头" },
  { id: "s8",   en: "Geopolitics", zh: "地缘" },
  { id: "s9",   en: "Civilization", zh: "文明层" },
  { id: "s10",  en: "2050",        zh: "2050" },
  { id: "end",  en: "Coda",        zh: "尾声" },
];

export default function Nav() {
  const { lang, setLang } = useLang();
  const [active, setActive] = useState("open");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? "bg-void/70 backdrop-blur-xl border-b border-line" : "bg-transparent"
    }`}>
      <div className="max-w-[1480px] mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-3">
        <a href="#open" className="flex items-center gap-3 shrink-0">
          <span className="relative w-7 h-7 grid place-items-center">
            <span className="absolute inset-0 grid grid-cols-2">
              <span className="bg-sz-300/80" />
              <span className="bg-sl-300/80" />
            </span>
            <span className="absolute inset-y-0 left-1/2 w-px bg-sz-warm/90 -translate-x-px" />
          </span>
          <div className="leading-tight">
            <div className="font-display text-[14px] tracking-tight text-bone">
              Shenzhen × Seoul
            </div>
            <div className="font-han text-[10px] tracking-[0.3em] text-ash">
              深圳 × 首尔
            </div>
          </div>
        </a>

        <nav className="hidden xl:flex items-center gap-0 flex-1 justify-center overflow-x-auto">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`px-2 py-1 text-[10.5px] font-mono tracking-widest uppercase whitespace-nowrap transition-colors ${
                active === s.id ? "text-sz-glow" : "text-ash/60 hover:text-ash"
              }`}
            >
              {lang === "zh" ? s.zh : s.en}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={() => setLang("en")}
            className={`px-2 py-1 text-[11px] font-mono rounded ${
              lang === "en" ? "text-sz-300 border border-sz-300/40" : "text-ash/40"
            }`}
          >EN</button>
          <button
            onClick={() => setLang("zh")}
            className={`px-2 py-1 text-[11px] font-han rounded ${
              lang === "zh" ? "text-sl-200 border border-sl-300/40" : "text-ash/40"
            }`}
          >中文</button>
        </div>
      </div>
    </header>
  );
}
