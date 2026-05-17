"use client";

import { SectionShell } from "../SectionShell";
import { Lede, Compare, FlowRow, Note, Aphorism } from "../atoms";
import Reveal from "../Reveal";

const PRODUCTS: { id: string; en: string; zh: string; steps: { en: string; zh: string }[] }[] = [
  {
    id: "drone",
    en: "Consumer drone",
    zh: "消费级无人机",
    steps: [
      { en: "Sketch + CAD", zh: "草图 + CAD" },
      { en: "Huaqiangbei components", zh: "华强北元件" },
      { en: "Bao'an PCB house", zh: "宝安 PCB 厂" },
      { en: "Longhua assembly", zh: "龙华组装" },
      { en: "Yantian port", zh: "盐田港" },
      { en: "Amazon shelf", zh: "Amazon 货架" },
    ],
  },
  {
    id: "ev",
    en: "Electric vehicle",
    zh: "电动车",
    steps: [
      { en: "BYD-style battery cell", zh: "比亚迪式电芯" },
      { en: "Pack + BMS", zh: "电池包 + BMS" },
      { en: "Pingshan assembly", zh: "坪山总装" },
      { en: "Roll-on roll-off", zh: "滚装出口" },
      { en: "European port", zh: "欧洲港" },
      { en: "Dealer floor", zh: "经销商店" },
    ],
  },
  {
    id: "ai-glasses",
    en: "AI glasses",
    zh: "AI 眼镜",
    steps: [
      { en: "Reference design", zh: "参考设计" },
      { en: "Display module", zh: "显示模组" },
      { en: "MEMS / sensors", zh: "MEMS / 传感器" },
      { en: "Camera supply", zh: "摄像供应" },
      { en: "Assembly + tuning", zh: "组装 + 调校" },
      { en: "DTC launch", zh: "DTC 上线" },
    ],
  },
  {
    id: "robot",
    en: "Humanoid robot",
    zh: "人形机器人",
    steps: [
      { en: "Actuator design", zh: "执行器设计" },
      { en: "Harmonic drives", zh: "谐波减速器" },
      { en: "Locomotion stack", zh: "运动栈" },
      { en: "AI controller chip", zh: "AI 控制芯片" },
      { en: "Skin + sensors", zh: "外壳 + 传感器" },
      { en: "Pilot customer", zh: "试点客户" },
    ],
  },
  {
    id: "phone",
    en: "Smartphone",
    zh: "智能手机",
    steps: [
      { en: "SoC sourced", zh: "SoC 采购" },
      { en: "OLED panel", zh: "OLED 面板" },
      { en: "Camera module", zh: "摄像模组" },
      { en: "PCB / SMT", zh: "PCB / 贴片" },
      { en: "FATP assembly", zh: "FATP 总装" },
      { en: "Global launch", zh: "全球首发" },
    ],
  },
];

export default function S3_Supply() {
  return (
    <SectionShell
      id="s3"
      index="III · 003"
      kicker="The supply-chain machine"
      kickerZh="第三章 · 供应链机器"
      headline="How Shenzhen manufactures the future — and what Seoul does instead."
      headlineZh="深圳如何制造未来 —— 以及首尔的另一种解法。"
      reveal="One city is a distributed marketplace of factories. The other is a vertically signed binary."
      revealZh="一座城市是分布式的工厂市场。另一座是被垂直签名的二进制文件。"
    >
      <Lede
        en="The most consequential infrastructure of the 21st century is not a highway, not a fiber-optic cable, not a data center. It is the supply chain — the choreography of metal, silicon, plastic, and labor that turns an idea into a product before its competitor can. Shenzhen is the world's densest such choreography. Seoul has authored its own, in a completely different idiom."
        zh="二十一世纪最重要的基础设施，不是高速公路、不是光纤、不是数据中心，而是供应链 —— 把金属、硅、塑料与劳动力编排成产品的能力，并要赶在对手之前。深圳是世界上密度最高的这种编排。首尔以完全不同的语态，写出了自己的版本。"
      />

      <div className="mt-14">
        <Compare
          leftTitle="The 50 km² fabrication API"
          leftZh="50 平方公里的制造 API"
          rightTitle="The vertically integrated runtime"
          rightZh="纵向整合的运行时"
          left={{
            en: "From Huaqiangbei (raw parts) to Bao'an (PCB), Longhua (assembly), Pingshan (EV), Yantian (port), the city is one continuous fabrication pipeline. A founder talks to twelve suppliers in a single subway day.",
            zh: "从华强北（元件）到宝安（PCB）、龙华（组装）、坪山（电动车）、盐田（港口），整座城市是一条连续的制造流水线。一位创业者可以在一天地铁里见齐十二家供应商。",
          }}
          right={{
            en: "Samsung, SK, LG, and their thousands of tier-1/tier-2 vendors form a tightly coupled enterprise stack: fab → packaging → display → module → device, mostly inside the same conglomerate.",
            zh: "三星、SK、LG 与它们数千家一级、二级供应商构成一组紧耦合的企业堆栈：晶圆 → 封装 → 面板 → 模组 → 整机，大部分发生在同一财阀内部。",
          }}
          leftItems={[
            { en: "Huaqiangbei — 30+ floors of components", zh: "华强北 · 30 余层电子市场" },
            { en: "PCB ecosystem in 24 hours", zh: "24 小时 PCB 生态" },
            { en: "Chip sourcing networks", zh: "芯片采购网络" },
            { en: "Maker culture + factory APIs", zh: "Maker 文化 + 工厂 API" },
            { en: "Logistics compression to Yantian", zh: "压缩到盐田港的物流" },
          ]}
          rightItems={[
            { en: "Pyeongtaek campus — world's largest memory fab", zh: "平泽园区 · 世界最大存储厂" },
            { en: "OLED chain — Samsung Display + LG Display", zh: "OLED 链 —— 三星显示 + LG 显示" },
            { en: "Tier-1 vendor concentration", zh: "一级供应商高度集中" },
            { en: "Precision metrology imported from Japan", zh: "从日本进口的精密计量" },
            { en: "Incheon as the export gateway", zh: "仁川港作为出口门户" },
          ]}
        />
      </div>

      <Reveal>
        <div className="mt-16">
          <h3 className="font-display text-2xl md:text-3xl text-bone">Pick a product · 选一件产品</h3>
          <p className="font-han text-ash mt-1">从一个想法到货架，深圳路径只需要几天。</p>

          <div className="mt-6 space-y-8">
            {PRODUCTS.map((p) => (
              <div key={p.id} className="space-y-3">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="font-mono text-[11px] tracking-widest text-sz-300">PIPELINE</span>
                  <span className="font-display text-xl text-bone">{p.en}</span>
                  <span className="font-han text-ash">· {p.zh}</span>
                </div>
                <FlowRow steps={p.steps} />
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-20 grid md:grid-cols-2 gap-10">
        <Aphorism
          side="sz"
          en="Shenzhen prices an idea in days. Most economies price it in years."
          zh="深圳用几天给一个想法定价。多数经济体要用几年。"
        />
        <Aphorism
          side="sl"
          en="A Samsung fab is a city of 50,000 engineers running one program."
          zh="一座三星工厂是五万名工程师跑同一个程序的城市。"
        />
      </div>

      <Note
        en="The deep insight: Shenzhen's edge is not cheap labor (it is no longer cheap). It is the unmatched cost-to-coordinate. Seoul's edge is not government subsidy. It is the unmatched cost-to-tolerance."
        zh="深层洞察：深圳的优势不是廉价劳动力（已不再便宜），而是无可比拟的协调成本之低。首尔的优势不是政府补贴，而是无可比拟的公差成本之低。"
      />
    </SectionShell>
  );
}
