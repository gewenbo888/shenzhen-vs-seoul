"use client";

import { ReactNode } from "react";
import Reveal from "./Reveal";

export type Bi = { en: string; zh: string };

/** Two-column bilingual lede. */
export function Lede({ en, zh }: { en: ReactNode; zh: ReactNode }) {
  return (
    <Reveal>
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 max-w-6xl">
        <p className="font-display text-2xl md:text-3xl leading-snug text-bone/90">{en}</p>
        <p className="font-han text-xl md:text-2xl leading-relaxed text-ash">{zh}</p>
      </div>
    </Reveal>
  );
}

/** Side-by-side compare card. Left = Shenzhen, Right = Seoul. */
export function Compare({
  leftTitle, rightTitle, leftZh, rightZh,
  left, right,
  leftItems, rightItems,
}: {
  leftTitle: string; leftZh: string;
  rightTitle: string; rightZh: string;
  left: { en: string; zh: string };
  right: { en: string; zh: string };
  leftItems?: { en: string; zh: string }[];
  rightItems?: { en: string; zh: string }[];
}) {
  return (
    <Reveal>
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        <div className="relative panel-sz rounded-lg p-5 md:p-7 corner-sz">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-mono tracking-widest text-sz-300">SHENZHEN · {leftTitle.toUpperCase()}</span>
          </div>
          <h3 className="font-display text-2xl md:text-3xl text-bone">{leftTitle}</h3>
          <h4 className="font-han text-lg md:text-xl text-ash mt-1">{leftZh}</h4>
          <p className="mt-4 text-bone/85 leading-relaxed">{left.en}</p>
          <p className="mt-2 font-han text-ash leading-relaxed">{left.zh}</p>
          {leftItems && (
            <ul className="mt-5 space-y-1.5">
              {leftItems.map((it, i) => (
                <li key={i} className="text-sm">
                  <span className="text-sz-300 font-mono mr-2">▸</span>
                  <span className="text-bone/85">{it.en}</span>
                  <span className="font-han text-ash/85 ml-2">{it.zh}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="relative panel-sl rounded-lg p-5 md:p-7 corner-sl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-mono tracking-widest text-sl-200">SEOUL · {rightTitle.toUpperCase()}</span>
          </div>
          <h3 className="font-display text-2xl md:text-3xl text-bone">{rightTitle}</h3>
          <h4 className="font-han text-lg md:text-xl text-ash mt-1">{rightZh}</h4>
          <p className="mt-4 text-bone/85 leading-relaxed">{right.en}</p>
          <p className="mt-2 font-han text-ash leading-relaxed">{right.zh}</p>
          {rightItems && (
            <ul className="mt-5 space-y-1.5">
              {rightItems.map((it, i) => (
                <li key={i} className="text-sm">
                  <span className="text-sl-200 font-mono mr-2">▸</span>
                  <span className="text-bone/85">{it.en}</span>
                  <span className="font-han text-ash/85 ml-2">{it.zh}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Reveal>
  );
}

/** Bilingual aphorism with side-by-side pull quote. */
export function Aphorism({
  en, zh, cite, side = "neutral",
}: { en: string; zh: string; cite?: string; side?: "sz" | "sl" | "neutral" }) {
  const accent =
    side === "sz" ? "text-sz-glow" : side === "sl" ? "text-sl-glow" : "text-bone";
  return (
    <Reveal>
      <figure className="relative max-w-4xl">
        <span aria-hidden className={`font-display text-[100px] leading-none absolute -top-9 -left-2 select-none opacity-25 ${accent}`}>
          “
        </span>
        <blockquote className={`font-display text-2xl md:text-3xl italic leading-snug ${accent}`}>
          {en}
        </blockquote>
        <p className="font-han text-xl md:text-2xl text-ash mt-2">{zh}</p>
        {cite && <figcaption className="text-[11px] font-mono tracking-widest text-ash/55 mt-3 uppercase">— {cite}</figcaption>}
      </figure>
    </Reveal>
  );
}

/** Stat lozenge. */
export function Stat({
  value, en, zh, hint, side = "sz",
}: { value: string; en: string; zh: string; hint?: string; side?: "sz" | "sl" }) {
  const cls = side === "sz" ? "text-sz-glow border-sz-300/30" : "text-sl-glow border-sl-300/30";
  return (
    <Reveal>
      <div className={`glass rounded-md p-5 border ${cls}`}>
        <div className="num font-display text-4xl md:text-5xl">{value}</div>
        <div className="mt-2 text-bone/85 text-sm">{en}</div>
        <div className="font-han text-ash text-xs md:text-sm">{zh}</div>
        {hint && <div className="mt-2 text-[10px] font-mono tracking-widest text-ash/55">{hint}</div>}
      </div>
    </Reveal>
  );
}

/** Bilingual key-value row with a side accent. */
export function Row({
  label, labelZh, en, zh, side = "sz",
}: { label: string; labelZh: string; en: string; zh: string; side?: "sz" | "sl" }) {
  const accent = side === "sz" ? "text-sz-300" : "text-sl-200";
  return (
    <div className="grid grid-cols-[90px_1fr] md:grid-cols-[140px_1fr] gap-3 items-baseline py-2 border-b border-line/60">
      <dt className={`text-[10px] font-mono tracking-widest uppercase ${accent}`}>
        {label}
        <span className="font-han text-ash/55 ml-1">{labelZh}</span>
      </dt>
      <dd className="text-bone/85 text-sm leading-snug">
        {en}
        <span className="font-han block text-ash/75 mt-0.5">{zh}</span>
      </dd>
    </div>
  );
}

/** Bilingual mono-list. */
export function MonoList({
  items, side = "sz",
}: { items: { en: string; zh: string }[]; side?: "sz" | "sl" }) {
  const accent = side === "sz" ? "text-sz-300" : "text-sl-200";
  return (
    <Reveal>
      <ul className="space-y-3">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3">
            <span className={`font-mono text-[11px] mt-1.5 w-8 shrink-0 ${accent}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <div className="text-bone/90 text-base md:text-lg leading-snug">{it.en}</div>
              <div className="font-han text-ash/85 text-sm md:text-base leading-snug">{it.zh}</div>
            </div>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

/** Flow chain. */
export function FlowRow({
  steps, side = "sz",
}: { steps: { en: string; zh: string }[]; side?: "sz" | "sl" }) {
  const color = side === "sz" ? "text-sz-300 border-sz-300/40" : "text-sl-200 border-sl-300/40";
  return (
    <Reveal>
      <div className="overflow-x-auto -mx-5 md:mx-0 px-5 md:px-0">
        <div className="flex items-stretch gap-3 min-w-max">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`px-4 py-3 rounded border ${color} glass`}>
                <div className="font-display text-base md:text-lg text-bone whitespace-nowrap">{s.en}</div>
                <div className="font-han text-xs md:text-sm text-ash/85 whitespace-nowrap">{s.zh}</div>
              </div>
              {i !== steps.length - 1 && <span className={`font-mono text-lg ${color}`}>→</span>}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

/** Bilingual margin note. */
export function Note({
  en, zh, side = "neutral",
}: { en: string; zh: string; side?: "sz" | "sl" | "neutral" }) {
  const border =
    side === "sz" ? "border-sz-300/50" : side === "sl" ? "border-sl-300/50" : "border-amber-400/50";
  return (
    <Reveal>
      <div className={`border-l-2 ${border} pl-5 my-6 max-w-4xl`}>
        <p className="text-bone/85 italic">{en}</p>
        <p className="font-han text-ash mt-1">{zh}</p>
      </div>
    </Reveal>
  );
}

/** Marquee. */
export function Marquee({ items }: { items: { en: string; zh: string }[] }) {
  const all = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line py-3">
      <div className="flex w-max ticker-track gap-10 text-ash">
        {all.map((it, i) => (
          <div key={i} className="flex items-baseline gap-3 px-3 whitespace-nowrap">
            <span className="font-display text-lg text-bone">{it.en}</span>
            <span className="font-han text-sm text-sz-300">{it.zh}</span>
            <span className="text-sz-warm">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
