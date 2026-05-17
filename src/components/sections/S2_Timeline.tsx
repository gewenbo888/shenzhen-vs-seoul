"use client";

import { SectionShell } from "../SectionShell";
import { Lede, Aphorism, Note } from "../atoms";
import Reveal from "../Reveal";

interface Beat {
  year: string;
  sz?: { en: string; zh: string };
  sl?: { en: string; zh: string };
}

const TIMELINE: Beat[] = [
  { year: "1961", sl: { en: "Park Chung-hee era begins — state-led export industrialization.", zh: "朴正熙时代开启 —— 国家主导的出口工业化。" } },
  { year: "1965", sl: { en: "Samsung-Sanyo TV — Korea's first electronics export contract.", zh: "三星-三洋电视 —— 韩国第一份电子出口合同。" } },
  { year: "1973", sl: { en: "Heavy-chemical industrial drive: steel, ships, refineries.", zh: "重化工产业政策：钢铁、船舶、炼油。" } },
  { year: "1979", sz: { en: "Shenzhen designated China's first Special Economic Zone — a fishing village of 30,000.", zh: "深圳被指定为中国第一个经济特区 —— 3 万人的渔村。" } },
  { year: "1980s", sz: { en: "Hong Kong factories migrate north — Shenzhen becomes the world's contract floor.", zh: "香港工厂北迁 —— 深圳成为世界代工车间。" }, sl: { en: "Hyundai exports cars to North America; SK + LG enter semiconductors.", zh: "现代向北美出口汽车；SK 与 LG 进入半导体。" } },
  { year: "1992", sl: { en: "Samsung surpasses Japan in DRAM market share.", zh: "三星在 DRAM 市场份额上超越日本。" } },
  { year: "1993", sz: { en: "Huaqiangbei electronics market opens — the supply-chain singularity begins.", zh: "华强北电子市场开市 —— 供应链奇点开启。" } },
  { year: "1998", sz: { en: "Tencent founded.", zh: "腾讯成立。" }, sl: { en: "IMF crisis reshapes chaebol governance.", zh: "IMF 危机重塑财阀治理。" } },
  { year: "2000s", sz: { en: "Huawei goes global; BYD enters batteries; Foxconn scales.", zh: "华为全球化；比亚迪进入电池；富士康规模化。" }, sl: { en: "Korean Wave (Hallyu) becomes export category; broadband leadership.", zh: "韩流成为出口品类；宽带领先。" } },
  { year: "2006", sz: { en: "DJI founded in Shenzhen.", zh: "大疆在深圳成立。" } },
  { year: "2010s", sz: { en: "Tencent dominates Chinese internet; Shenzhen makes the smartphone supply chain.", zh: "腾讯主导中国互联网；深圳铸造智能机供应链。" }, sl: { en: "Samsung Galaxy era; SK Hynix challenges Samsung in DRAM/NAND.", zh: "三星 Galaxy 时代；SK 海力士在 DRAM/NAND 上对抗三星。" } },
  { year: "2018", sz: { en: "BYD reaches 1M new-energy vehicles produced.", zh: "比亚迪累计产能突破 100 万辆新能源车。" }, sl: { en: "Samsung opens Pyeongtaek campus; OLED dominance consolidates.", zh: "三星平泽园区投产；OLED 地位稳固。" } },
  { year: "2019", sz: { en: "Huawei sanctioned by the US — Shenzhen's foundry compromise becomes a national question.", zh: "华为被美国制裁 —— 深圳的代工妥协成为国家问题。" } },
  { year: "2022", sl: { en: "Korean semiconductor exports cross $130B; HBM emerges.", zh: "韩国半导体出口突破 1300 亿美元；HBM 出现。" } },
  { year: "2023", sz: { en: "BYD overtakes Tesla in EV unit sales.", zh: "比亚迪在新能源车销量上超越特斯拉。" } },
  { year: "2024", sz: { en: "Shenzhen unicorn count exceeds Tokyo + Seoul combined.", zh: "深圳独角兽数量超过东京 + 首尔之和。" }, sl: { en: "SK Hynix becomes the world's #1 HBM supplier for Nvidia.", zh: "SK 海力士成为英伟达 HBM 第一供应商。" } },
  { year: "2025", sz: { en: "Shenzhen humanoid-robot supply chain commercializes.", zh: "深圳人形机器人供应链商业化。" }, sl: { en: "Samsung Foundry pushes 2 nm; AI-on-device era for Korean OEMs.", zh: "三星代工冲击 2 纳米；韩国 OEM 进入端侧 AI 时代。" } },
  { year: "2030", sz: { en: "Projected: Shenzhen becomes the global hub for embodied-AI hardware.", zh: "预测：深圳成为具身智能硬件全球枢纽。" }, sl: { en: "Projected: Korea hosts 60% of global HBM + advanced packaging.", zh: "预测：韩国承载全球 60% 的 HBM 与先进封装。" } },
  { year: "2035", sz: { en: "Projected: Greater Bay Area becomes a single industrial OS.", zh: "预测：粤港澳大湾区融合为单一工业操作系统。" }, sl: { en: "Projected: Korea-Japan-Taiwan semiconductor sphere as joint AI factory.", zh: "预测：韩-日-台半导体圈成为联合 AI 工厂。" } },
];

export default function S2_Timeline() {
  return (
    <SectionShell
      id="s2"
      index="II · 002"
      kicker="Industrial evolution timeline"
      kickerZh="第二章 · 工业演化年表"
      headline="1961 → 2035. A bilingual chronology of two industrial OSes booting at different speeds."
      headlineZh="一九六一到二零三五。两套工业操作系统在不同速度下启动的双语编年史。"
      reveal="Shenzhen sprinted from village to GBA in 45 years. Seoul drilled from agrarian to memory-superpower in 60. Same continent. Different clocks."
      revealZh="深圳用 45 年从渔村冲到大湾区。首尔用 60 年从农业国凿到存储超级大国。同一片大陆，两个不同的钟。"
    >
      <Lede
        en="The two timelines below run in parallel, not in competition. Shenzhen booted later but accelerated harder; Seoul booted earlier and compounded more deeply. Together they show every East Asian industrial pattern of the last seventy years."
        zh="下方的两条时间线并行，而非对抗。深圳起步更晚，但加速更猛；首尔起步更早，复利更深。两者合起来，呈现了过去七十年东亚所有工业模式。"
      />

      <Reveal>
        <div className="mt-16 grid grid-cols-[64px_1fr_1fr] md:grid-cols-[90px_1fr_1fr] gap-x-3 md:gap-x-8">
          {/* column headers */}
          <div />
          <div className="pb-3 border-b border-sz-300/30">
            <div className="text-[10px] font-mono tracking-widest text-sz-300">SHENZHEN · 深圳</div>
            <div className="font-display text-lg text-bone">Iterate</div>
          </div>
          <div className="pb-3 border-b border-sl-300/30">
            <div className="text-[10px] font-mono tracking-widest text-sl-200">SEOUL · 首尔</div>
            <div className="font-display text-lg text-bone">Optimize</div>
          </div>

          {TIMELINE.map((beat, i) => (
            <BeatRow key={i} beat={beat} />
          ))}
        </div>
      </Reveal>

      <div className="mt-16 grid md:grid-cols-2 gap-10">
        <Aphorism
          side="sz"
          en="A SEZ is not an experiment. It is a fork of the country."
          zh="经济特区不是实验。它是国家的一个分叉。"
        />
        <Aphorism
          side="sl"
          en="A chaebol is not a company. It is a sovereign-grade subroutine of GDP."
          zh="财阀不是公司。它是 GDP 的主权级子程序。"
        />
      </div>

      <Note
        en="What changes after 2022 is that both timelines stop being purely industrial — they become geopolitical objects whose next 10 lines will be written by Washington, Beijing, Taipei, and Tokyo simultaneously."
        zh="2022 年之后两条时间线都不再是单纯的工业线 —— 它们成为地缘政治对象，接下来的十行将由华盛顿、北京、台北和东京同步写下。"
      />
    </SectionShell>
  );
}

function BeatRow({ beat }: { beat: Beat }) {
  return (
    <>
      <div className="pt-5 pr-2 font-mono text-[12px] tracking-widest text-ash">
        {beat.year}
      </div>
      <div className="pt-5 border-t border-line/60">
        {beat.sz ? (
          <>
            <div className="text-bone/90 text-sm md:text-base leading-snug">{beat.sz.en}</div>
            <div className="font-han text-ash/80 text-xs md:text-sm leading-snug mt-1">{beat.sz.zh}</div>
          </>
        ) : (
          <div className="text-ash/30 text-xs">·</div>
        )}
      </div>
      <div className="pt-5 border-t border-line/60">
        {beat.sl ? (
          <>
            <div className="text-bone/90 text-sm md:text-base leading-snug">{beat.sl.en}</div>
            <div className="font-han text-ash/80 text-xs md:text-sm leading-snug mt-1">{beat.sl.zh}</div>
          </>
        ) : (
          <div className="text-ash/30 text-xs">·</div>
        )}
      </div>
    </>
  );
}
