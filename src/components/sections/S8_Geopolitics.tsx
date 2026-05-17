"use client";

import { SectionShell } from "../SectionShell";
import { Lede, MonoList, Aphorism, Note } from "../atoms";
import Reveal from "../Reveal";

export default function S8_Geopolitics() {
  return (
    <SectionShell
      id="s8"
      index="VIII · 008"
      kicker="The geopolitics of technology"
      kickerZh="第八章 · 科技地缘政治"
      headline="Two cities, three superpowers, one supply chain that no one controls and everyone needs."
      headlineZh="两座城市，三个超级大国，一条无人完全掌控、却人人需要的供应链。"
      reveal="The 21st century's most dangerous chokepoint is not Hormuz. It is a 110-mile strait of water and 7 nm of silicon."
      revealZh="二十一世纪最危险的咽喉点不是霍尔木兹。是一条 110 英里的海峡，加上 7 纳米的硅。"
    >
      <Lede
        en="Shenzhen and Seoul sit inside a four-corner geopolitical board: Washington imposes export controls, Beijing pursues self-sufficiency, Tokyo controls upstream materials and tools, Taipei prints most of the world's leading-edge logic. Every product made in either city today is, at the chip level, a negotiation among those four capitals."
        zh="深圳与首尔身处一张四角地缘棋盘：华盛顿施加出口管制，北京追求自给自足，东京掌控上游材料与设备，台北制造全球大多数顶端逻辑芯片。当今两座城市生产的每一件产品，在芯片层面，都是这四个首都之间的一次谈判。"
      />

      {/* Pacific rim ASCII-style map */}
      <Reveal>
        <div className="mt-14 glass rounded-lg p-6 md:p-10">
          <div className="text-[11px] font-mono tracking-widest text-ash mb-3">PACIFIC RIM · CHIP-FLOW ATLAS</div>
          <div className="aspect-[2/1] w-full relative rounded-md overflow-hidden border border-line bg-void">
            <svg viewBox="0 0 100 50" className="absolute inset-0 w-full h-full">
              {/* land silhouettes */}
              <g fill="rgba(189,196,216,0.08)" stroke="rgba(189,196,216,0.18)" strokeWidth="0.15">
                <path d="M 4 26 Q 18 18, 30 22 L 28 38 Q 18 42, 8 36 Z" />
                <path d="M 30 18 Q 50 12, 72 18 L 76 32 Q 60 40, 42 36 L 32 30 Z" />
                <path d="M 80 8 Q 96 6, 99 14 L 98 30 Q 90 36, 78 28 Z" />
                <path d="M 76 36 Q 86 34, 94 42 L 88 48 Q 80 50, 74 46 Z" />
              </g>

              {/* nodes */}
              <NodeMark cx={62} cy={28} label="深圳·Shenzhen" color="#00b8e6" />
              <NodeMark cx={74} cy={20} label="首尔·Seoul"   color="#3d6cea" />
              <NodeMark cx={73} cy={30} label="台北·Taipei"  color="#ffb13b" />
              <NodeMark cx={84} cy={20} label="东京·Tokyo"   color="#dde2f0" />
              <NodeMark cx={14} cy={28} label="湾区·Bay"     color="#ff4d6a" />

              {/* arcs */}
              <ArcLink x1={62} y1={28} x2={73} y2={30} color="#00b8e6" />
              <ArcLink x1={73} y1={30} x2={74} y2={20} color="#ffb13b" />
              <ArcLink x1={74} y1={20} x2={84} y2={20} color="#3d6cea" />
              <ArcLink x1={84} y1={20} x2={14} y2={28} color="#dde2f0" />
              <ArcLink x1={14} y1={28} x2={62} y2={28} color="#ff4d6a" />
            </svg>
          </div>
          <div className="mt-3 grid md:grid-cols-2 text-sm text-ash gap-1">
            <div className="font-mono text-[11px] tracking-widest text-sz-300">Shenzhen pulls SoCs + memory in, ships product out.</div>
            <div className="font-han text-[11px] tracking-widest text-sl-200 md:text-right">首尔出存储与显示，进先进设备。</div>
          </div>
        </div>
      </Reveal>

      <div className="mt-16 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="font-display text-2xl md:text-3xl text-sz-glow">Shenzhen's exposure</h3>
          <p className="font-han text-ash mt-1">深圳的暴露面</p>
          <div className="mt-5">
            <MonoList
              side="sz"
              items={[
                { en: "EUV lithography access denied (ASML).", zh: "EUV 光刻被禁（ASML）。" },
                { en: "Advanced-node SoC dependency on Taiwan.", zh: "先进节点 SoC 高度依赖台湾。" },
                { en: "Memory dependency on Korea + US.", zh: "存储依赖韩国与美国。" },
                { en: "Container export dependence on US-allied seas.", zh: "集装箱出口依赖美方盟友的海上线。" },
                { en: "Software dependencies (EDA, frameworks).", zh: "软件依赖（EDA、框架）。" },
                { en: "Compensating: domestic toolchain investment.", zh: "对冲：国产工具链投资。" },
              ]}
            />
          </div>
        </div>
        <div>
          <h3 className="font-display text-2xl md:text-3xl text-sl-glow">Seoul's exposure</h3>
          <p className="font-han text-ash mt-1">首尔的暴露面</p>
          <div className="mt-5">
            <MonoList
              side="sl"
              items={[
                { en: "Largest fab market: still China.", zh: "最大晶圆市场：仍是中国。" },
                { en: "US allied — but must keep Beijing as customer.", zh: "美方盟友 —— 但必须留北京作客户。" },
                { en: "Materials dependence on Japan (e.g. photoresist).", zh: "材料依赖日本（如光刻胶）。" },
                { en: "North Korean missile risk over the fabs.", zh: "晶圆厂上空的朝鲜导弹风险。" },
                { en: "Demographic collapse — fewer engineers ahead.", zh: "人口塌缩 —— 未来工程师减少。" },
                { en: "Compensating: HBM monopoly leverage.", zh: "对冲：HBM 垄断带来的谈判筹码。" },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-10">
        <Aphorism
          side="sz"
          en="A semiconductor is a treaty written in 14 different languages, in a font no human can read."
          zh="一颗半导体，是用十四种语言、用没有人能直接看清的字体写下的条约。"
        />
        <Aphorism
          side="sl"
          en="HBM is to Korea what oil was to Saudi Arabia — except harder to replace."
          zh="HBM 之于韩国，正如石油之于沙特 —— 只是更难替代。"
        />
      </div>

      <Note
        en="The honest geopolitical fact: neither Washington nor Beijing wants to fully decouple, because the cost is borne mostly by their own consumers and their own industrial base. Shenzhen and Seoul thrive in the interstitial space between escalations."
        zh="诚实的地缘事实：华盛顿与北京都不希望真正脱钩，因为成本主要由自己的消费者与产业承担。深圳与首尔，正生活在升级之间的缝隙地带。"
      />
    </SectionShell>
  );
}

function NodeMark({ cx, cy, label, color }: { cx: number; cy: number; label: string; color: string }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="1.6" fill={color} opacity="0.95" />
      <circle cx={cx} cy={cy} r="3.5" fill="none" stroke={color} strokeWidth="0.15" opacity="0.55">
        <animate attributeName="r" values="3.5;7;3.5" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.55;0;0.55" dur="4s" repeatCount="indefinite" />
      </circle>
      <text x={cx} y={cy - 3} textAnchor="middle" fill="#eaedf5" fontSize="1.6" fontFamily="JetBrains Mono">
        {label}
      </text>
    </g>
  );
}

function ArcLink({ x1, y1, x2, y2, color }: { x1: number; y1: number; x2: number; y2: number; color: string }) {
  const mx = (x1 + x2) / 2;
  const my = Math.min(y1, y2) - 5;
  return (
    <path
      d={`M ${x1} ${y1} Q ${mx} ${my}, ${x2} ${y2}`}
      stroke={color}
      strokeWidth="0.25"
      fill="none"
      opacity="0.5"
      strokeDasharray="0.6 0.4"
    >
      <animate attributeName="stroke-dashoffset" values="0;-2" dur="3s" repeatCount="indefinite" />
    </path>
  );
}
