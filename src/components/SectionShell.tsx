"use client";

import { ReactNode } from "react";
import Reveal from "./Reveal";

export function SectionShell({
  id, index, kicker, kickerZh, headline, headlineZh,
  reveal, revealZh, children, className = "",
}: {
  id: string; index: string;
  kicker: string; kickerZh: string;
  headline: string; headlineZh: string;
  reveal?: string; revealZh?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative border-t border-line ${className}`}>
      <div className="max-w-[1480px] mx-auto px-4 md:px-10 py-24 md:py-36">
        <Reveal>
          <div className="flex items-baseline gap-6 mb-10 md:mb-16">
            <span className="font-mono text-[12px] tracking-[0.3em] text-sz-300">{index}</span>
            <div className="flex-1 hairline-h" />
            <div className="text-right">
              <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-ash">{kicker}</div>
              <div className="font-han text-[10px] tracking-[0.3em] text-sl-200 mt-1">{kickerZh}</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.04] tracking-tight max-w-5xl text-bone">
            {headline}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="font-han text-2xl md:text-4xl text-ash leading-snug mt-3 max-w-5xl">
            {headlineZh}
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20">{children}</div>

        {(reveal || revealZh) && (
          <Reveal delay={0.1}>
            <div className="mt-20 md:mt-28 border-t border-line pt-10">
              <div className="text-[11px] font-mono tracking-widest text-sz-warm uppercase mb-2">— Reveal · 揭示</div>
              {reveal && <p className="font-display text-3xl md:text-5xl text-sz-glow leading-tight">{reveal}</p>}
              {revealZh && <p className="font-han text-2xl md:text-3xl text-bone/85 mt-2">{revealZh}</p>}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
