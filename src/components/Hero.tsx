"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Skylines = dynamic(() => import("./Skylines"), { ssr: false });

const SZ_TAGS = [
  { en: "Drone highways",    zh: "无人机高速公路" },
  { en: "Huaqiangbei",       zh: "华强北" },
  { en: "BYD",               zh: "比亚迪" },
  { en: "Tencent",           zh: "腾讯" },
  { en: "DJI",               zh: "大疆" },
  { en: "Robotics lines",    zh: "机器人产线" },
  { en: "Container port",    zh: "盐田 / 蛇口" },
];
const SL_TAGS = [
  { en: "Samsung Pyeongtaek fab", zh: "三星平泽厂" },
  { en: "Gangnam digital",        zh: "江南数字带" },
  { en: "SK Hynix HBM",           zh: "SK 海力士 HBM" },
  { en: "OLED supply chain",      zh: "OLED 供应链" },
  { en: "Esports arenas",         zh: "电竞馆" },
  { en: "K-pop infrastructure",   zh: "K-pop 基础设施" },
  { en: "Incheon port",           zh: "仁川港" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section id="open" ref={ref} className="relative min-h-screen w-full overflow-hidden">
      <Skylines />

      {/* readability gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-transparent to-void pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,_transparent_0%,_rgba(3,5,11,0.6)_75%)] pointer-events-none" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 min-h-screen flex flex-col justify-center px-4 md:px-10 max-w-[1480px] mx-auto"
      >
        {/* top status row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="flex items-center gap-3 mb-10 md:mb-14"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-sz-warm shadow-[0_0_12px_rgba(255,122,26,0.7)] blip" />
          <span className="font-mono text-[11px] tracking-[0.32em] uppercase text-ash/85">
            Psyverse · A bilingual atlas in 10 chapters
          </span>
          <span className="font-han text-[10px] tracking-[0.3em] text-sl-200">
            十章的双语图谱
          </span>
        </motion.div>

        {/* triple-fade lede */}
        <div className="space-y-6 md:space-y-9 mb-10 md:mb-14 max-w-5xl">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1.4 }}
            className="font-display text-2xl md:text-3xl italic text-bone/55"
          >
            Two cities.
            <span className="font-han block not-italic text-xl md:text-2xl text-ash/65 mt-1">
              两座城市。
            </span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1.4 }}
            className="font-display text-2xl md:text-3xl italic text-bone/75"
          >
            Two tech civilizations.
            <span className="font-han block not-italic text-xl md:text-2xl text-ash mt-1">
              两种科技文明。
            </span>
          </motion.p>
        </div>

        <motion.h1
          initial={{ opacity: 0, letterSpacing: "0.2em", filter: "blur(10px)" }}
          animate={{ opacity: 1, letterSpacing: "-0.03em", filter: "blur(0px)" }}
          transition={{ delay: 2.6, duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[13vw] md:text-[8.5vw] lg:text-[7vw] leading-[0.95] tracking-tight"
        >
          <span className="text-sz-glow">Shenzhen</span>
          <span className="text-bone/70 mx-3 md:mx-5">vs</span>
          <span className="text-sl-glow">Seoul</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.3, duration: 1.4 }}
          className="font-han text-3xl md:text-5xl lg:text-6xl mt-2 md:mt-4 text-bone/90"
        >
          <span className="text-sz-300">深圳</span>
          <span className="text-ash/70 mx-3"> vs </span>
          <span className="text-sl-200">首尔</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 3.9, duration: 1.4 }}
          className="mt-9 md:mt-12 max-w-3xl text-base md:text-xl text-bone/80 leading-relaxed"
        >
          One optimizes for <span className="text-sz-300">evolution speed</span>.
          The other optimizes for <span className="text-sl-200">industrial perfection</span>.
          <span className="font-han block mt-3 text-base md:text-lg text-ash">
            一个追求<span className="text-sz-300">进化速度</span>，
            一个追求<span className="text-sl-200">工业精度</span>。
          </span>
        </motion.p>

        {/* dual tag rows */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 4.4, duration: 1.4 }}
          className="mt-10 md:mt-14 grid md:grid-cols-2 gap-4 max-w-5xl"
        >
          <div>
            <div className="font-mono text-[10px] tracking-widest text-sz-300 mb-2">SHENZHEN · 深圳</div>
            <div className="flex flex-wrap gap-2">
              {SZ_TAGS.map((s, i) => (
                <span key={i} className="px-2.5 py-1 rounded-full glass glass-sz text-[12px]">
                  <span className="text-bone">{s.en}</span>
                  <span className="font-han text-sz-300 ml-1.5 text-[11px]">{s.zh}</span>
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="font-mono text-[10px] tracking-widest text-sl-200 mb-2">SEOUL · 首尔</div>
            <div className="flex flex-wrap gap-2">
              {SL_TAGS.map((s, i) => (
                <span key={i} className="px-2.5 py-1 rounded-full glass glass-sl text-[12px]">
                  <span className="text-bone">{s.en}</span>
                  <span className="font-han text-sl-200 ml-1.5 text-[11px]">{s.zh}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 5.0, duration: 1.4 }}
          className="mt-12 md:mt-16 flex items-center gap-6"
        >
          <a href="#s1" className="group inline-flex items-center gap-3 text-bone/80 hover:text-sz-glow">
            <span className="w-9 h-9 rounded-full border border-ash/30 group-hover:border-sz-300/60 grid place-items-center">
              <span className="block w-0 h-0 border-t-4 border-x-[5px] border-x-transparent border-t-bone/70 group-hover:border-t-sz-300 translate-y-0.5" />
            </span>
            <div>
              <div className="font-mono text-[11px] tracking-[0.3em] uppercase">Boot the OS</div>
              <div className="font-han text-[10px] tracking-[0.3em] text-sl-200">启动系统</div>
            </div>
          </a>
          <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-sz-300/40 via-sz-warm/30 to-sl-300/40" />
          <div className="hidden md:block font-mono text-[10px] tracking-widest text-ash/55">010 / CHAPTERS</div>
        </motion.div>
      </motion.div>

      <div className="absolute top-24 left-4 md:left-10 z-10 font-mono text-[10px] tracking-[0.25em] text-sz-300/80 leading-relaxed">
        <div>SYS · SHENZHEN_OS</div>
        <div>UPTIME · 1979 →</div>
        <div>MODE · ITERATE</div>
      </div>
      <div className="absolute top-24 right-4 md:right-10 z-10 text-right font-mono text-[10px] tracking-[0.25em] text-sl-200/85 leading-relaxed">
        <div>SYS · SEOUL_OS</div>
        <div>UPTIME · 1961 →</div>
        <div>MODE · OPTIMIZE</div>
      </div>
    </section>
  );
}
