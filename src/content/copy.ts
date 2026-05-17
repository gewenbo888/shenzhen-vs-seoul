import type { Bi } from "@/components/LanguageProvider";

export const COPY = {
  brand:    { en: "SHENZHEN  vs  SEOUL", zh: "深圳  对  首尔" },
  brandSub: { en: "two operating systems",  zh: "两种操作系统" },

  navLinks: [
    { id: "hero",       label: { en: "00 / OPEN",      zh: "00 / 开场" } },
    { id: "philosophy", label: { en: "01 / OS",        zh: "01 / OS" } },
    { id: "timeline",   label: { en: "02 / TIMELINE",  zh: "02 / 历程" } },
    { id: "supply",     label: { en: "03 / CHAIN",     zh: "03 / 供应链" } },
    { id: "ai",         label: { en: "04 / AI",        zh: "04 / AI" } },
    { id: "culture",    label: { en: "05 / CULTURE",   zh: "05 / 文化" } },
    { id: "urban",      label: { en: "06 / URBAN",     zh: "06 / 城市" } },
    { id: "giants",     label: { en: "07 / GIANTS",    zh: "07 / 巨头" } },
    { id: "geo",        label: { en: "08 / GEO",       zh: "08 / 地缘" } },
    { id: "civ",        label: { en: "09 / CIV",       zh: "09 / 文明" } },
    { id: "future",     label: { en: "10 / 2050",      zh: "10 / 2050" } },
  ] as { id: string; label: Bi }[],

  hero: {
    eyebrow: { en: "00 / TWO CITIES · TWO TECH CIVILIZATIONS", zh: "00 / 两座城市 · 两种科技文明" },
    titleA:  { en: "Two cities.",              zh: "两座城市," },
    titleB:  { en: "Two tech civilizations.",  zh: "两种科技文明。" },
    subA:    { en: "One optimizes for evolution speed.",  zh: "一座追求进化速度," },
    subB:    { en: "The other for industrial precision.",  zh: "另一座追求工业精度。" },
    leadSz:  { en: "Shenzhen", zh: "深圳" },
    leadSl:  { en: "Seoul",    zh: "首尔" },
    leadSzNote: { en: "Open-source evolution",     zh: "开源演化" },
    leadSlNote: { en: "Enterprise architecture",   zh: "企业级架构" },
    baselineTag: { en: "BASELINE · SIDE BY SIDE", zh: "基线 · 并列对照" },
    scrollCue: { en: "READ THE TWO CITIES IN PARALLEL", zh: "并列阅读两座城市" },
  },

  // Section 1
  phil: {
    eyebrow: { en: "01 / THE OPERATING SYSTEMS", zh: "01 / 各自的操作系统" },
    titleA:  { en: "One bazaar. ", zh: "一边是集市," },
    titleB:  { en: "One cathedral.", zh: "另一边是教堂。" },
    sub: {
      en: "The fastest way to feel the difference is to put eight design choices side by side. The split below is not 'better vs worse' — it is two answers to the same question.",
      zh: "感受差异最快的方式,是把八个设计抉择并列。下表并非优劣之分——而是对同一问题的两种回答。",
    },
    cols: { dim: { en: "DIMENSION", zh: "维度" }, sz: { en: "SHENZHEN · 深圳", zh: "深圳 · SHENZHEN" }, sl: { en: "SEOUL · 首尔", zh: "首尔 · SEOUL" } },
  },

  // Section 2
  timeline: {
    eyebrow: { en: "02 / INDUSTRIAL EVOLUTION · 1980 → 2035", zh: "02 / 工业演化 · 1980 → 2035" },
    titleA:  { en: "Twelve moments that ", zh: "十二个决定" },
    titleAcc:{ en: "set the trajectory",    zh: "轨迹的瞬间" },
    titleB:  { en: ".",                     zh: "。" },
    sub: {
      en: "Same five decades, two completely different industrial paths. 2030+ rows are projections.",
      zh: "同样五十年,两条完全不同的工业路径。2030 之后的行为预测。",
    },
    futureNote: { en: "* projection",        zh: "* 预测" },
  },

  // Section 3
  supply: {
    eyebrow: { en: "03 / THE SUPPLY-CHAIN MACHINES", zh: "03 / 两台供应链机器" },
    titleA:  { en: "How Shenzhen ", zh: "深圳如何" },
    titleAcc1:{ en: "manufactures a drone",  zh: "造一架无人机" },
    titleB:  { en: ". How Seoul ", zh: "。首尔如何" },
    titleAcc2:{ en: "manufactures an HBM stack",  zh: "造一片 HBM" },
    titleC:  { en: ".",          zh: "。" },
    sub: {
      en: "Click any product to walk through six steps end-to-end. Shenzhen wins on horizontal density; Seoul wins on vertical depth. They are not playing the same game.",
      zh: "点击任一产品,逐 6 步走完。深圳赢在横向密度,首尔赢在垂直深度。两者本不在同一个游戏里。",
    },
    pickProduct: { en: "PICK A PRODUCT", zh: "选一个产品" },
    stepHead:    { en: "SIX-STEP PIPELINE",  zh: "六步流水线" },
  },

  // Section 4
  ai: {
    eyebrow: { en: "04 / THE AI + ROBOTICS FUTURE", zh: "04 / AI 与机器人之未来" },
    titleA:  { en: "Embodied intelligence on one side. ", zh: "一边是具身智能。" },
    titleB:  { en: "Memory-bandwidth empire on the other.", zh: "另一边是以内存带宽为帝国的版图。" },
    sub: {
      en: "Both cities are betting heavily on AI — but on entirely different layers of the AI stack. Shenzhen is building bodies. Seoul is building substrate.",
      zh: "两市皆在重仓 AI——但押注于完全不同的层级。深圳建造身体。首尔建造底层。",
    },
  },

  // Section 5
  culture: {
    eyebrow: { en: "05 / CULTURE",   zh: "05 / 文化" },
    titleA:  { en: "Motherboard ",   zh: "主板" },
    titleAcc:{ en: "civilization",    zh: "文明" },
    titleB:  { en: " · ",            zh: " · " },
    titleC:  { en: "display ",        zh: "屏幕" },
    titleAcc2:{ en: "civilization",   zh: "文明" },
    titleD:  { en: ".",              zh: "。" },
    sub: {
      en: "Same continent, opposite cultural OS. Shenzhen's archetype is the engineer-maker; Seoul's is the designer-idol. Both produce world-shaping technology, but on different status games.",
      zh: "同一片大陆,文化操作系统正相反。深圳的原型是工程师/Maker,首尔的原型是设计师/偶像。两者皆产出影响世界的技术,但运行在不同的地位游戏上。",
    },
    cols: { dim: { en: "DIMENSION", zh: "维度" }, sz: { en: "SHENZHEN", zh: "深圳" }, sl: { en: "SEOUL", zh: "首尔" } },
  },

  // Section 6
  urban: {
    eyebrow: { en: "06 / URBAN FORM", zh: "06 / 城市形态" },
    titleA:  { en: "A delta of factories. ", zh: "一片工厂的三角洲。" },
    titleB:  { en: "A bowl of mountains, towers, and neon.", zh: "一只山、塔与霓虹的碗。" },
    sub: {
      en: "Shenzhen is laid flat across the Pearl River Delta — every plot is a building, every building a factory or apartment tower. Seoul is folded into a basin between mountain ridges; verticality wins because horizontality lost.",
      zh: "深圳铺平于珠江三角洲——每一块地都有一栋楼,每一栋楼都是工厂或公寓塔。首尔则蜷缩在山脊之间的盆地;垂直胜出,因为水平已输。",
    },
    facts: [
      { label: { en: "Area",                  zh: "面积" },         sz: "1,997 km²", sl: "605 km²" },
      { label: { en: "Density",               zh: "密度" },         sz: "8,800 /km²", sl: "15,500 /km²" },
      { label: { en: "Metro lines (city)",    zh: "地铁线路(市)" },  sz: "17",         sl: "23" },
      { label: { en: "Subway daily ridership",zh: "地铁日客流" },    sz: "~9 M",       sl: "~7 M" },
      { label: { en: "Avg. building height", zh: "平均楼高" },      sz: "Rising fast", sl: "Mountain-capped" },
      { label: { en: "Mountains in city",     zh: "城内山体" },      sz: "Few",         sl: "Defining feature" },
    ] as { label: Bi; sz: string; sl: string }[],
  },

  // Section 7
  giants: {
    eyebrow: { en: "07 / TECH GIANTS",   zh: "07 / 科技巨头" },
    titleA:  { en: "Ten companies, ",    zh: "十家公司," },
    titleAcc:{ en: "two playbooks",      zh: "两套打法" },
    titleB:  { en: ".",                  zh: "。" },
    sub: {
      en: "Five Shenzhen names — engineering pragmatists that survived by adapting. Five Seoul names — chaebol & post-chaebol firms that survived by integrating.",
      zh: "五家深圳——靠适应活下来的务实工程派。五家首尔——靠整合活下来的财阀与后财阀。",
    },
    fields: {
      founded: { en: "FOUNDED",   zh: "成立" },
      focus:   { en: "FOCUS",     zh: "主营" },
      rev:     { en: "REVENUE",   zh: "营收" },
      rd:      { en: "R&D",        zh: "研发" },
      hq:      { en: "HQ",        zh: "总部" },
    },
  },

  // Section 8
  geo: {
    eyebrow: { en: "08 / THE GEOPOLITICS OF TECH", zh: "08 / 技术地缘" },
    titleA:  { en: "Nine nodes drawn ",                 zh: "九个节点," },
    titleAcc:{ en: "between two cities and the world",  zh: "把两座城市与世界连起来" },
    titleB:  { en: ".",                                 zh: "。" },
    sub: {
      en: "Neither city is on the map alone. Both depend on ASML (NL), TSMC (TW), Japanese chemicals, US designs, African and Australian minerals — and on each other. Below: the connections that, if cut, cut everything.",
      zh: "两座城市都不孤立于地图。皆依赖荷兰 ASML、台湾台积电、日本化学品、美国设计、非洲与澳洲矿产——以及彼此。下图:一旦被切断,便切断一切的那些连接。",
    },
    legend: { en: "LEGEND · CHIP / EQUIPMENT / MINERAL", zh: "图例 · 芯片 / 设备 / 矿物" },
  },

  // Section 9
  civ: {
    eyebrow: { en: "09 / THE CIVILIZATION LAYER", zh: "09 / 文明层" },
    titleA:  { en: "A city is no longer ",        zh: "城市," },
    titleAcc:{ en: "geography",                    zh: "已不再是地理" },
    titleB:  { en: ". It is ",                     zh: ";城市,是" },
    titleAcc2:{ en: "computation",                 zh: "计算" },
    titleC:  { en: ".",                            zh: "。" },
    sub: {
      en: "If you zoom out far enough, Shenzhen and Seoul are not places. They are two large discrete machines made of people, ports, and signal lights — running different programs.",
      zh: "若拉远到足够距离,深圳与首尔不是地点。它们是两台由人、港口与信号灯构成的大型离散机器——运行着不同的程序。",
    },
  },

  // Section 10
  future: {
    eyebrow: { en: "10 / 2050 SIMULATION", zh: "10 / 2050 推演" },
    titleA:  { en: "What does ",          zh: "二十五年后," },
    titleAcc:{ en: "twenty-five years",    zh: "两条架构" },
    titleB:  { en: " do to two architectures?", zh: "各会变成什么?" },
    sub: {
      en: "Speculative — order-of-magnitude only. Both cities walk into the same headwinds (energy cost, AI compute, demographic compression, US-China decoupling). The questions are which side of which curve they end up on.",
      zh: "皆为推演——仅取数量级。两市同时迎来一组逆风(能源成本、AI 算力、人口压缩、中美脱钩)。问题在于,各自落在哪条曲线的哪一侧。",
    },
    closeTag:  { en: "THE THESIS",         zh: "总论" },
    closeA:    { en: "The competition between cities is ultimately a competition between ", zh: "城市之间的竞争,本质上是" },
    closeAcc:  { en: "civilization architectures",                                          zh: "文明架构之间的竞争" },
    closeB:    { en: ".",                                                                   zh: "。" },
  },

  // Sources
  sourcesEyebrow: { en: "SOURCES & FURTHER READING", zh: "来源与延伸阅读" },
  sourcesSub: {
    en: "Every number on this page comes from these public datasets and corporate filings.",
    zh: "本页所有数字均出自下列公开数据集与公司公告。",
  },

  // Closing
  close: {
    eyebrow: { en: "11 / CODA",            zh: "11 / 终章" },
    quoteEn: "The competition between cities is ultimately a competition between civilization architectures.",
    quoteZh: "城市之间的竞争,本质上是文明架构之间的竞争。",
    foot: { en: "Public sources · World Bank · OECD · Shenzhen / Korea statistics · company filings", zh: "公开来源 · 世界银行 · OECD · 深圳/韩国统计 · 公司公告" },
  },
};
