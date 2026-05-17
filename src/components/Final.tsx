"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";

const Skylines = dynamic(() => import("./Skylines"), { ssr: false });

export default function Final() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const titleOpacity = useTransform(scrollYProgress, [0, 0.45, 0.85, 1], [0, 1, 1, 0.65]);

  return (
    <section id="end" ref={ref} className="relative border-t border-line overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Skylines />
        <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-transparent to-void" />
      </div>

      <div className="max-w-[1480px] mx-auto px-4 md:px-10 py-44 md:py-56">
        <Reveal>
          <div className="flex items-baseline gap-6 mb-10 md:mb-16">
            <span className="font-mono text-[12px] tracking-[0.3em] text-sz-warm">XI · 011 · CODA</span>
            <div className="flex-1 hairline-h" />
            <div className="text-right">
              <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-ash">Final transmission</div>
              <div className="font-han text-[10px] tracking-[0.3em] text-sl-200 mt-1">最终传输</div>
            </div>
          </div>
        </Reveal>

        <div className="space-y-14 md:space-y-20 max-w-5xl">
          <Reveal>
            <p className="font-display text-3xl md:text-5xl text-bone leading-tight">
              The competition between cities
            </p>
            <p className="font-han text-2xl md:text-3xl text-ash mt-3 leading-snug">
              城市之间的竞争，
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="font-display text-3xl md:text-5xl text-bone/85 leading-tight">
              is ultimately a competition between
            </p>
            <p className="font-han text-2xl md:text-3xl text-ash mt-3 leading-snug">
              本质上是
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-3xl md:text-5xl text-sz-glow leading-tight">
              civilization architectures.
            </p>
            <p className="font-han text-2xl md:text-3xl text-sl-glow mt-3 leading-snug">
              文明架构之间的竞争。
            </p>
          </Reveal>
        </div>

        <motion.div
          style={{ opacity: titleOpacity }}
          className="mt-44 md:mt-60 text-center"
        >
          <h2 className="font-display text-[13vw] md:text-[8.5vw] leading-[0.95] tracking-tight">
            <span className="text-sz-glow">深圳</span>
            <span className="text-ash/70 mx-3"> · </span>
            <span className="text-sl-glow">首尔</span>
          </h2>
          <p className="mt-4 font-mono text-[11px] tracking-[0.4em] text-ash uppercase">
            two operating systems · one continent
          </p>
        </motion.div>

        <div className="mt-32 md:mt-44 grid md:grid-cols-2 gap-10 max-w-5xl">
          <Reveal>
            <p className="text-ash leading-relaxed">
              This atlas is part of the Psyverse — a portfolio of small,
              cinematic, bilingual sites that try to take seriously what
              is happening to civilization while it is happening. There
              are more at psyverse.fun.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-han text-ash leading-relaxed">
              本图谱是 Psyverse 的一部分 —— 一系列小型、电影感、双语网站，试图在文明正在发生时，认真对待它。更多内容在 psyverse.fun。
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex items-center gap-4 flex-wrap">
            <a
              href="https://psyverse.fun"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-sz-300/40 text-bone/85 hover:text-sz-glow hover:border-sz-300/70 transition-colors"
            >
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase">Enter the Psyverse</span>
              <span className="font-han text-[11px] tracking-[0.3em] text-sl-200">进入 Psyverse</span>
              <span>→</span>
            </a>
            <a
              href="#open"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-line text-ash hover:text-bone hover:border-ash/40 transition-colors"
            >
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase">Reboot the OS</span>
              <span className="font-han text-[11px] tracking-[0.3em] text-sl-200">重启系统</span>
              <span>↑</span>
            </a>
          </div>
        </Reveal>

        <div className="mt-24 text-center font-mono text-[10px] tracking-[0.4em] text-ash/55">
          END · OF · TRANSMISSION · 信号终止
        </div>
      </div>
    </section>
  );
}
