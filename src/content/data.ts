// All figures public / widely-reported ~2023–2024.
// Sources: World Bank, OECD, Statistics Korea, Shenzhen Statistical Bureau,
// company annual reports, IEA, IMF, ITU, SemiAnalysis, BloombergNEF.
// 2050 projections in Section 10 are clearly speculative.

import type { Bi } from "@/components/LanguageProvider";

// HERO baseline — side-by-side stats per city
export type CityStat = { label: Bi; sz: string; sl: string; note: Bi };

export const HERO_STATS: CityStat[] = [
  {
    label: { en: "Population (city)",          zh: "人口(市域)" },
    sz: "17.7 M",    sl: "9.4 M",
    note:  { en: "2024 — Shenzhen city / Seoul Special City", zh: "2024 — 深圳全域 / 首尔特别市" },
  },
  {
    label: { en: "Population (metro)",         zh: "人口(都会区)" },
    sz: "23 M",      sl: "26 M",
    note:  { en: "GBA / SMA",                 zh: "大湾区 / 首都圈" },
  },
  {
    label: { en: "City GDP (nominal)",         zh: "GDP(名义)" },
    sz: "$540 B",    sl: "$480 B",
    note:  { en: "2023 city-level estimates",  zh: "2023 城市级估算" },
  },
  {
    label: { en: "Tech R&D as % of GDP",       zh: "研发占 GDP %" },
    sz: "5.8 %",     sl: "5.0 %",
    note:  { en: "Among the highest globally on both sides", zh: "全球两市均居前列" },
  },
  {
    label: { en: "Container port rank (world)",zh: "集装箱港世界排名" },
    sz: "#4",        sl: "#7 (Busan)",
    note:  { en: "Shenzhen Yantian; Korea = Busan",            zh: "深圳盐田;韩国为釜山" },
  },
  {
    label: { en: "Years from village → megacity", zh: "由村到超级都市的年数" },
    sz: "42",        sl: "70",
    note:  { en: "1980 ≈ fishing town · 1953 ≈ post-war ruin", zh: "1980 渔镇 · 1953 战后废墟" },
  },
];

export const TICKER: Bi[] = [
  { en: "SHENZHEN  深圳",                       zh: "SHENZHEN  深圳" },
  { en: "vs",                                    zh: "对照" },
  { en: "SEOUL  서울 · 首尔",                    zh: "SEOUL  서울 · 首尔" },
  { en: "EVOLUTION SPEED vs INDUSTRIAL PRECISION", zh: "进化速度 对 工业精度" },
  { en: "MOTHERBOARD CIVILIZATION  vs  DISPLAY CIVILIZATION", zh: "主板文明  对  屏幕文明" },
  { en: "OPEN-SOURCE EVOLUTION  vs  ENTERPRISE ARCHITECTURE", zh: "开源演化  对  企业级架构" },
  { en: "PUBLIC DATA · ~2024 · ROUNDED",         zh: "公开数据 · 约 2024 · 已取整" },
];

// SECTION 1 — Philosophy comparison
export type PhilLine = { theme: Bi; sz: Bi; sl: Bi };
export const PHILOSOPHY: PhilLine[] = [
  { theme: { en: "Operating principle",   zh: "运作原则" },
    sz: { en: "Speed",                     zh: "速度" },
    sl: { en: "Precision",                 zh: "精度" } },
  { theme: { en: "Coordination",          zh: "协作方式" },
    sz: { en: "Bazaar — distributed",       zh: "市集——分布式" },
    sl: { en: "Cathedral — hierarchical",   zh: "教堂——层级化" } },
  { theme: { en: "Iteration cycle",        zh: "迭代周期" },
    sz: { en: "Weeks",                      zh: "数周" },
    sl: { en: "Quarters",                   zh: "数季度" } },
  { theme: { en: "Founder DNA",            zh: "创业基因" },
    sz: { en: "Engineer-pragmatist",        zh: "务实工程师" },
    sl: { en: "Conglomerate-lifer",         zh: "财阀终身雇员" } },
  { theme: { en: "Capital",                zh: "资本" },
    sz: { en: "Venture, Darwinian",         zh: "风险投资 · 达尔文式" },
    sl: { en: "Chaebol balance-sheet",      zh: "财阀资产负债表" } },
  { theme: { en: "Failure tolerance",      zh: "对失败的容忍" },
    sz: { en: "High — try again next month", zh: "高——下月再来" },
    sl: { en: "Low — perfect the next quarter", zh: "低——下季度做到完美" } },
  { theme: { en: "Default scale",          zh: "默认尺度" },
    sz: { en: "1 → 1,000 → 1 M units",      zh: "1 → 1,000 → 100 万件" },
    sl: { en: "1 M → 10 M → 100 M units",   zh: "100 万 → 1,000 万 → 1 亿件" } },
  { theme: { en: "Software metaphor",      zh: "软件比喻" },
    sz: { en: "Open-source evolution",      zh: "开源演化" },
    sl: { en: "Enterprise architecture",    zh: "企业级架构" } },
];

// SECTION 2 — Timeline 1980–2035
export type TLPoint = { year: string; sz: Bi; sl: Bi };
export const TIMELINE: TLPoint[] = [
  { year: "1980", sz: { en: "Special Economic Zone declared. Pop ~30,000.", zh: "经济特区设立。人口约 3 万。" },
                  sl: { en: "Chaebol-led heavy industry pivot under Park/Chun.", zh: "朴/全时期的财阀重工业转型。" } },
  { year: "1988", sz: { en: "Huawei founded by Ren Zhengfei. PCB switches.", zh: "任正非创立华为。从程控交换机起步。" },
                  sl: { en: "Seoul Olympics. Korea Inc. enters global view.", zh: "汉城奥运。韩国公司首次进入全球视野。" } },
  { year: "1993", sz: { en: "Huawei wins China telecom contracts at scale.",  zh: "华为大规模拿下中国电信合同。" },
                  sl: { en: "Samsung Chairman Lee Kun-hee: 'change everything but wife and children.'", zh: "李健熙宣告:'除老婆孩子外,一切都要改变。'" } },
  { year: "1998", sz: { en: "Tencent founded. QQ messenger launches a year later.", zh: "腾讯成立。次年 QQ 上线。" },
                  sl: { en: "Asian Financial Crisis. Half the chaebol restructured.", zh: "亚洲金融风暴。半数财阀被重组。" } },
  { year: "2006", sz: { en: "DJI founded by Frank Wang in HKUST dorm; moves to Shenzhen.", zh: "汪滔在港科大宿舍创立大疆,迁深圳。" },
                  sl: { en: "Samsung overtakes Sony in TV global market share.",      zh: "三星电视全球份额首次超越索尼。" } },
  { year: "2011", sz: { en: "WeChat launches. Tencent's super-app era begins.",       zh: "微信上线。腾讯超级应用时代启动。" },
                  sl: { en: "K-pop hits global radar (PSY 'Gangnam Style' a year later).", zh: "K-pop 进入全球雷达(次年《江南 style》)。" } },
  { year: "2018", sz: { en: "First US sanctions on ZTE; Huawei targeted shortly after.", zh: "首批美国对中兴制裁;华为随后被列入实体清单。" },
                  sl: { en: "SK Hynix #2 DRAM; Samsung still #1.",                       zh: "SK 海力士 DRAM 第二;三星仍居首。" } },
  { year: "2020", sz: { en: "Huawei smartphone chip supply cut. BYD pivots all-in on EVs.", zh: "华为手机芯片断供。比亚迪全面押注电动车。" },
                  sl: { en: "BTS at #1 on Billboard Hot 100. Korean culture export $13B.",   zh: "BTS 登顶 Billboard Hot 100。文化出口 130 亿美元。" } },
  { year: "2023", sz: { en: "BYD overtakes Tesla in quarterly EV sales (4Q).",          zh: "比亚迪季度电车销量(Q4)超越特斯拉。" },
                  sl: { en: "Samsung first-ever 3 nm GAA fab volume production.",       zh: "三星首次量产 3nm GAA 工艺。" } },
  { year: "2024", sz: { en: "Huawei Mate 60 — Kirin 9000s on SMIC 7 nm.",               zh: "华为 Mate 60——中芯 7nm 制造的麒麟 9000s。" },
                  sl: { en: "HBM3E ramp. SK Hynix dominates AI memory for NVIDIA.",     zh: "HBM3E 量产。SK 海力士主导英伟达 AI 内存。" } },
  { year: "2030*",sz: { en: "Embodied-AI / humanoid robot supply chain projected to localize 70%+.", zh: "具身 AI / 人形机器人供应链预计本地化 70%+。" },
                  sl: { en: "Samsung Foundry 2 nm; chip export ~$200B forecast.",        zh: "三星代工 2 nm;芯片出口预计约 2,000 亿美元。" } },
  { year: "2035*",sz: { en: "Shenzhen ~25 M, AI-hardware cluster mature.",              zh: "深圳约 2,500 万,AI 硬件集群成熟。" },
                  sl: { en: "Seoul metro flat at ~26 M; AI-entertainment + chip core.", zh: "首尔都会区约 2,600 万;AI 娱乐 + 芯片核心。" } },
];

// SECTION 3 — Supply chain — five products + steps
export type Product = {
  id: string; name: Bi; emoji: string; city: "sz" | "sl";
  steps: Bi[];  // 6 steps for the chain
};

export const PRODUCTS: Product[] = [
  { id: "drone", name: { en: "Consumer drone", zh: "消费级无人机" }, emoji: "▲", city: "sz",
    steps: [
      { en: "Idea sketched in CAD overnight",        zh: "通宵 CAD 草图" },
      { en: "Off-the-shelf motors + Huaqiangbei PCB", zh: "标准电机 + 华强北 PCB" },
      { en: "Mold from Bao'an plastics cluster",      zh: "宝安塑料集群开模" },
      { en: "Assembly at DJI-tier contract OEM",      zh: "大疆同级合同代工组装" },
      { en: "Test flight on Yantian dock yard",       zh: "盐田码头堆场试飞" },
      { en: "Container to LAX / RTM in 18 days",      zh: "18 天集装箱抵洛杉矶 / 鹿特丹" },
    ]
  },
  { id: "ev", name: { en: "Electric vehicle", zh: "电动车" }, emoji: "◆", city: "sz",
    steps: [
      { en: "Platform spec frozen in 5 weeks",        zh: "5 周冻结平台规格" },
      { en: "LFP cells from BYD/CATL plants",         zh: "比亚迪/宁德 LFP 电芯" },
      { en: "Power-electronics from Shenzhen IC fabless", zh: "深圳 IC 设计厂的功率电子" },
      { en: "Stamping + welding at integrated plant", zh: "一体化厂的冲压 + 焊接" },
      { en: "Cabin SoC integration on-site",          zh: "现场座舱 SoC 集成" },
      { en: "Roll-off in 24 months from greenfield",  zh: "新建工厂 24 个月即下线" },
    ]
  },
  { id: "phone", name: { en: "Smartphone", zh: "智能手机" }, emoji: "▢", city: "sz",
    steps: [
      { en: "SoC sourced (Qualcomm / Kirin / Dimensity)", zh: "SoC 采购(高通 / 麒麟 / 天玑)" },
      { en: "Display from BOE / TCL CSOT",             zh: "京东方 / TCL 华星屏" },
      { en: "Camera modules from Sunny / O-Film",      zh: "舜宇 / 欧菲光摄像头模组" },
      { en: "PCBA at Foxconn Shenzhen / Longhua",      zh: "富士康深圳 / 龙华 PCBA" },
      { en: "Final assembly + QC sampling",            zh: "终组装 + QC 抽检" },
      { en: "Air-freight to global carriers",          zh: "空运至全球运营商" },
    ]
  },
  { id: "memory", name: { en: "HBM3E memory stack", zh: "HBM3E 内存堆叠" }, emoji: "■", city: "sl",
    steps: [
      { en: "Wafer in Icheon / Cheongju fab",          zh: "利川 / 清州晶圆厂" },
      { en: "EUV layers (ASML lithography)",           zh: "EUV 层(ASML 光刻)" },
      { en: "TSV through-silicon via etch",            zh: "TSV 硅通孔蚀刻" },
      { en: "12-Hi stack with hybrid bonding",         zh: "12 层堆叠 · 混合键合" },
      { en: "Burn-in + KGD test",                      zh: "Burn-in + KGD 测试" },
      { en: "Air-freight to NVIDIA CoWoS pack lines",  zh: "空运至英伟达 CoWoS 封装线" },
    ]
  },
  { id: "oled", name: { en: "OLED display panel", zh: "OLED 显示面板" }, emoji: "▣", city: "sl",
    steps: [
      { en: "Glass into Paju / Asan fab",              zh: "玻璃送入坡州 / 牙山厂" },
      { en: "Encapsulation + TFT backplane",           zh: "封装 + TFT 背板" },
      { en: "OLED material deposition (Mo · Ir host)", zh: "OLED 材料蒸镀(主体材料)" },
      { en: "Color filter + polariser lamination",     zh: "彩膜 + 偏光片贴合" },
      { en: "Cut + module assembly",                   zh: "切割 + 模组组装" },
      { en: "Shipment to Apple / Samsung Mobile",      zh: "运抵苹果 / 三星移动" },
    ]
  },
];

// SECTION 5 — Cultural ecosystem rows
export type CultureRow = { tag: Bi; sz: Bi; sl: Bi };
export const CULTURE: CultureRow[] = [
  { tag: { en: "Archetype",        zh: "原型" },
    sz: { en: "The engineer-maker", zh: "工程师 / Maker" },
    sl: { en: "The designer-idol",  zh: "设计师 / 偶像" } },
  { tag: { en: "Heroic figure",     zh: "代表人物" },
    sz: { en: "Ren Zhengfei, Wang Tao (Frank Wang)", zh: "任正非、汪滔" },
    sl: { en: "Lee Kun-hee, BTS, Bong Joon-ho",       zh: "李健熙、BTS、奉俊昊" } },
  { tag: { en: "Education focus",   zh: "教育重心" },
    sz: { en: "EE / ME / CS / supply-chain ops", zh: "电子 / 机械 / 计算机 / 供应链运营" },
    sl: { en: "Design, semiconductor physics, content production", zh: "设计、半导体物理、内容制作" } },
  { tag: { en: "Status currency",   zh: "地位货币" },
    sz: { en: "Successful exits, factory ownership",  zh: "成功退出 · 工厂股权" },
    sl: { en: "Tier-1 chaebol seat, idol contract",   zh: "一线财阀职位 · 偶像合约" } },
  { tag: { en: "Tempo",             zh: "节奏" },
    sz: { en: "996 workweek; Huaqiangbei never sleeps", zh: "996 工时;华强北不眠" },
    sl: { en: "Hagwon-trained perfectionism; nightlife after work", zh: "补习班训练的完美主义;下班后的夜生活" } },
  { tag: { en: "Civilizational metaphor", zh: "文明比喻" },
    sz: { en: "Motherboard civilization", zh: "主板文明" },
    sl: { en: "Display civilization",     zh: "屏幕文明" } },
];

// SECTION 7 — Tech giants comparison
export type Giant = {
  id: string; name: string; city: "sz" | "sl"; founded: number;
  focus: Bi; rev: string; rd: string; hq: Bi; signature: Bi;
};
export const GIANTS: Giant[] = [
  // Shenzhen
  { id: "huawei", name: "Huawei",  city: "sz", founded: 1987,
    focus:    { en: "Telecom · cloud · smartphones · automotive",   zh: "通信 · 云 · 手机 · 汽车" },
    rev:      "$100 B", rd: "~$24 B / yr",
    hq:       { en: "Bantian, Longgang",                            zh: "龙岗坂田" },
    signature:{ en: "Survived US sanctions by becoming vertically integrated overnight.", zh: "在美国制裁下,一夜之间垂直整合,得以幸存。" } },
  { id: "tencent", name: "Tencent", city: "sz", founded: 1998,
    focus:    { en: "WeChat · games · cloud · venture",             zh: "微信 · 游戏 · 云 · 投资" },
    rev:      "$86 B", rd: "~$10 B / yr",
    hq:       { en: "Nanshan, Shenzhen",                            zh: "深圳南山" },
    signature:{ en: "The super-app — one rectangle that ate Chinese consumer software.", zh: "超级应用——一个矩形吞下了中国消费软件。" } },
  { id: "dji", name: "DJI",       city: "sz", founded: 2006,
    focus:    { en: "Consumer drones · industrial UAVs",             zh: "消费级无人机 · 工业无人机" },
    rev:      "~$3.5 B", rd: "private",
    hq:       { en: "Nanshan / Hong Kong",                          zh: "南山 / 香港" },
    signature:{ en: "Took ~70% of the world commercial drone market by 2024.", zh: "至 2024 年拿下全球商用无人机约 70%。" } },
  { id: "byd", name: "BYD",        city: "sz", founded: 1995,
    focus:    { en: "EVs · batteries · power electronics",          zh: "电动车 · 电池 · 功率电子" },
    rev:      "$107 B", rd: "~$5.6 B / yr",
    hq:       { en: "Pingshan, Shenzhen",                           zh: "深圳坪山" },
    signature:{ en: "From mobile-phone batteries to passing Tesla on quarterly EV sales (2023 Q4).", zh: "从手机电池起家,2023 Q4 季度电车销量超越特斯拉。" } },
  { id: "zte", name: "ZTE",        city: "sz", founded: 1985,
    focus:    { en: "Telecom equipment · 5G base stations",         zh: "通信设备 · 5G 基站" },
    rev:      "$17 B",  rd: "~$2.5 B / yr",
    hq:       { en: "Nanshan, Shenzhen",                            zh: "深圳南山" },
    signature:{ en: "The first Chinese tech company hit hard by US export controls (2018).", zh: "首家被美国出口管制重击的中国科技公司(2018)。" } },

  // Seoul
  { id: "samsung", name: "Samsung Electronics", city: "sl", founded: 1969,
    focus:    { en: "DRAM · NAND · OLED · smartphones · foundry",   zh: "DRAM · NAND · OLED · 手机 · 代工" },
    rev:      "$200 B", rd: "$24 B / yr",
    hq:       { en: "Suwon, Gyeonggi",                              zh: "京畿水原" },
    signature:{ en: "Largest single private-sector R&D budget in Asia. 23% of South Korea's exports.", zh: "亚洲单家私营研发预算最大;占韩国出口 23%。" } },
  { id: "lg", name: "LG Electronics",         city: "sl", founded: 1958,
    focus:    { en: "OLED TV · home appliances · EV components",     zh: "OLED 电视 · 家电 · 电车零部件" },
    rev:      "$64 B",  rd: "~$3.7 B / yr",
    hq:       { en: "Yeouido, Seoul",                                zh: "首尔汝矣岛" },
    signature:{ en: "The only large-format WOLED panel maker on the planet — until BOE forced the price down.", zh: "全球唯一大尺寸 WOLED 面板厂——直至京东方压价。" } },
  { id: "sk-hynix", name: "SK Hynix",         city: "sl", founded: 1983,
    focus:    { en: "DRAM · HBM · NAND",                             zh: "DRAM · HBM · NAND" },
    rev:      "$48 B",  rd: "~$3.8 B / yr",
    hq:       { en: "Icheon, Gyeonggi",                              zh: "京畿利川" },
    signature:{ en: "The HBM-king feeding NVIDIA. From also-ran in 2020 to dictating AI-memory pricing.", zh: "供英伟达的 HBM 之王。从 2020 年的追赶者,变为 AI 内存定价者。" } },
  { id: "naver", name: "Naver",                city: "sl", founded: 1999,
    focus:    { en: "Search · webtoon · LLM · payments",            zh: "搜索 · 网络漫画 · 大模型 · 支付" },
    rev:      "$7.5 B", rd: "~$1.4 B / yr",
    hq:       { en: "Bundang, Seongnam",                            zh: "城南盆唐" },
    signature:{ en: "The country whose Google is local. Webtoon as a $7B/yr global platform.", zh: "本国 Google 是本土的国家。网络漫画成为年 70 亿美元的全球平台。" } },
  { id: "kakao", name: "Kakao",                city: "sl", founded: 2010,
    focus:    { en: "KakaoTalk · bank · taxi · games",              zh: "KakaoTalk · 银行 · 出行 · 游戏" },
    rev:      "$5.8 B", rd: "~$0.9 B / yr",
    hq:       { en: "Pangyo, Gyeonggi",                             zh: "京畿板桥" },
    signature:{ en: "The chat-app that became the daily OS of the country.",  zh: "成为国民日常 OS 的聊天应用。" } },
];

// SECTION 8 — Geopolitics nodes
export type GeoNode = { id: string; x: number; y: number; label: Bi; sub: Bi; color: string };
export const GEO_NODES: GeoNode[] = [
  { id: "sz",    x: 64, y: 60, label: { en: "Shenzhen",     zh: "深圳" },        sub: { en: "Manufacturing", zh: "制造" }, color: "#00b8e6" },
  { id: "sl",    x: 78, y: 38, label: { en: "Seoul",        zh: "首尔" },        sub: { en: "Memory/Display", zh: "存储/显示" }, color: "#3d6cea" },
  { id: "tw",    x: 70, y: 52, label: { en: "Taiwan",       zh: "台湾" },        sub: { en: "Advanced nodes", zh: "先进制程" }, color: "#ffb13b" },
  { id: "jp",    x: 84, y: 44, label: { en: "Japan",        zh: "日本" },        sub: { en: "Chemicals · gear", zh: "化学 · 设备" }, color: "#dde2f0" },
  { id: "nl",    x: 24, y: 26, label: { en: "Netherlands (ASML)", zh: "荷兰 (ASML)" }, sub: { en: "EUV monopoly", zh: "EUV 独占" }, color: "#ff7a1a" },
  { id: "us",    x: 12, y: 38, label: { en: "USA (NVIDIA · AMD)", zh: "美国 (NVIDIA · AMD)" }, sub: { en: "Design · platforms", zh: "设计 · 平台" }, color: "#ffb13b" },
  { id: "drc",   x: 48, y: 70, label: { en: "DRC (Co)",     zh: "刚果 (钴)" },    sub: { en: "Cathode mineral", zh: "正极矿物" }, color: "#ff4d6a" },
  { id: "au",    x: 86, y: 78, label: { en: "Australia (Li / Fe)", zh: "澳洲 (锂 / 铁)" }, sub: { en: "Battery / steel", zh: "电池 / 钢" }, color: "#ff4d6a" },
  { id: "sg",    x: 60, y: 72, label: { en: "Singapore",    zh: "新加坡" },       sub: { en: "Settlement · law",   zh: "结算 · 法律" }, color: "#dde2f0" },
];
export const GEO_EDGES: [string, string][] = [
  ["nl","tw"], ["nl","sl"], ["jp","sl"], ["jp","tw"],
  ["tw","sz"], ["tw","sl"], ["sl","sz"], ["sl","us"], ["tw","us"], ["sz","us"],
  ["drc","sz"], ["au","sz"], ["au","sl"], ["sg","sz"], ["sg","sl"],
];

// SECTION 9 — philosophical text blocks
export const PHIL_BLOCKS: { lead: Bi; body: Bi }[] = [
  { lead: { en: "Factories are frozen intelligence.",
              zh: "工厂,是被冻结的智能。" },
    body: { en: "A modern fab is the externalized memory of 50 years of process engineering. Every wafer that comes off the line is a recall of that memory — not a fresh idea.",
              zh: "现代晶圆厂,是 50 年工艺工程外显出的记忆。每一片下线的晶圆,都是对那段记忆的回放——而非新念头。" } },
  { lead: { en: "Supply chains are physical neural networks.",
              zh: "供应链,是物理化的神经网络。" },
    body: { en: "Each link weighs and forwards an order to the next; the price signal is the activation. When tariffs hit, the entire network re-trains overnight.",
              zh: "每一节,都对下一节加权并转发订单;价格信号即是激活。关税到来时,整张网络一夜重训。" } },
  { lead: { en: "The city is no longer geography. It is computation.",
              zh: "城市不再是地理。它是计算。" },
    body: { en: "Shenzhen and Seoul are large discrete machines made of people, factories, ports, and signal lights. Their outputs — chips, drones, panels — are the visible side of an invisible computation.",
              zh: "深圳与首尔,是由人、工厂、港口、信号灯构成的大型离散机器。芯片、无人机、面板等输出,是不可见计算可见的一面。" } },
  { lead: { en: "Two cities, two models for what civilization is for.",
              zh: "两座城市,两种关于文明所为何来的模型。" },
    body: { en: "Shenzhen treats civilization as a discovery procedure — try a million combinations, keep the ones that survive. Seoul treats it as an execution problem — lock the spec, ship the spec, defend the spec.",
              zh: "深圳把文明当作一种发现程序——试一百万种组合,保留能存活的。首尔把它当作一种执行问题——锁住规格,出货规格,守住规格。" } },
];

// SECTION 10 — 2050 simulation
export type Sim2050 = { tag: Bi; sz: Bi; sl: Bi };
export const SIM_2050: Sim2050[] = [
  { tag: { en: "Population",        zh: "人口" },
    sz: { en: "~25 M; multi-city GBA = ~90 M", zh: "约 2,500 万;大湾区合计 ~9,000 万" },
    sl: { en: "Seoul SMA flat ~26 M; Korea shrinks to ~46 M", zh: "首都圈持平约 2,600 万;韩国全国收缩至约 4,600 万" } },
  { tag: { en: "Energy use",        zh: "能源使用" },
    sz: { en: "~270 TWh; majority from south-China nuclear + UHV imports", zh: "约 2,700 亿度;主要来自南方核电 + 特高压输入" },
    sl: { en: "~95 TWh; semiconductor districts dominate the load curve",   zh: "约 950 亿度;半导体园区主导负荷曲线" } },
  { tag: { en: "AI compute footprint", zh: "AI 算力规模" },
    sz: { en: "Robotics + edge inference cluster; tens of GW",  zh: "机器人 + 边缘推理集群;数十 GW" },
    sl: { en: "Memory-bandwidth-centric hyperscale; HBM core",  zh: "以内存带宽为核心的超大规模;HBM 为中枢" } },
  { tag: { en: "Robot density",     zh: "机器人密度" },
    sz: { en: "1,200 industrial robots per 10,000 workers",     zh: "每万工人 1,200 台工业机器人" },
    sl: { en: "1,000 (today already #1 globally, will compound)", zh: "1,000(今日已居全球第一,将继续累积)" } },
  { tag: { en: "Cultural export",    zh: "文化出口" },
    sz: { en: "Hardware-IP & autonomous-platform standards",     zh: "硬件 IP 与自主平台标准" },
    sl: { en: "Synthetic-idol platforms, drama OS, gaming engines", zh: "合成偶像平台、剧集 OS、游戏引擎" } },
  { tag: { en: "Hardest constraint", zh: "最硬约束" },
    sz: { en: "Geopolitical: continued chip-equipment access",  zh: "地缘:能否持续接触芯片设备" },
    sl: { en: "Demographic: workforce contraction is locked in", zh: "人口:劳动力收缩已锁定" } },
];

// SOURCES
export const SOURCES: { who: Bi; what: Bi }[] = [
  { who: { en: "World Bank · OECD · IMF",                  zh: "世界银行 · OECD · IMF" },              what: { en: "GDP & macro figures",                zh: "GDP 与宏观数据" } },
  { who: { en: "Shenzhen Statistical Bureau",              zh: "深圳统计局" },                          what: { en: "City-level demographics & GDP",      zh: "城市层级人口与 GDP" } },
  { who: { en: "Statistics Korea (KOSIS)",                 zh: "韩国统计厅 (KOSIS)" },                  what: { en: "Seoul SMA & national figures",       zh: "首尔都会区与全国数据" } },
  { who: { en: "Company annual reports (Samsung / SK Hynix / Huawei / Tencent / BYD / LG)", zh: "公司年报(三星 / SK 海力士 / 华为 / 腾讯 / 比亚迪 / LG)" }, what: { en: "Revenue, R&D, HQ details", zh: "营收、研发、总部信息" } },
  { who: { en: "SemiAnalysis · TrendForce · DigiTimes",    zh: "SemiAnalysis · TrendForce · DigiTimes" }, what: { en: "Semiconductor process & market data", zh: "半导体工艺与市场数据" } },
  { who: { en: "IFR (International Federation of Robotics)", zh: "国际机器人联合会 (IFR)" },              what: { en: "Robot-density figures",              zh: "机器人密度数据" } },
  { who: { en: "BloombergNEF",                             zh: "BloombergNEF" },                        what: { en: "EV & battery market share",          zh: "电车与电池市场份额" } },
  { who: { en: "World Shipping Council",                   zh: "世界航运理事会" },                       what: { en: "Container-port rankings",            zh: "集装箱港排名" } },
];
