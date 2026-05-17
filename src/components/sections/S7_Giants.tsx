"use client";

import { SectionShell } from "../SectionShell";
import { Lede, Note, Aphorism } from "../atoms";
import Reveal from "../Reveal";

interface Co {
  ticker: string;
  name: string;
  zh: string;
  founded: string;
  capex: string;
  arch: string;
  archZh: string;
  influence: string;
  influenceZh: string;
  side: "sz" | "sl";
}

const SZ_COS: Co[] = [
  {
    ticker: "002594",
    name: "BYD",
    zh: "比亚迪",
    founded: "1995",
    capex: "≈$10B/yr",
    arch: "Vertically integrated EV — battery → motor → SoC → vehicle.",
    archZh: "纵向整合的电动车 —— 电池 → 电机 → SoC → 整车。",
    influence: "Reshaped global automotive supply chains; world's largest NEV maker by units (2023).",
    influenceZh: "重塑全球汽车供应链；2023 年成为全球销量最大的新能源车厂。",
    side: "sz",
  },
  {
    ticker: "00700",
    name: "Tencent",
    zh: "腾讯",
    founded: "1998",
    capex: "≈$15B+/yr",
    arch: "Social + gaming + cloud + fintech super-stack on WeChat.",
    archZh: "围绕微信的社交、游戏、云、金融超级栈。",
    influence: "Distributes more entertainment minutes than any single platform on Earth.",
    influenceZh: "分发的娱乐时长，超过地球上任何单一平台。",
    side: "sz",
  },
  {
    ticker: "HUAWEI",
    name: "Huawei",
    zh: "华为",
    founded: "1987",
    capex: "≈$23B/yr R&D",
    arch: "Telecom + smartphone + EV BU + Kirin SoC + HarmonyOS.",
    archZh: "通信 + 手机 + 车 BU + Kirin SoC + 鸿蒙系统。",
    influence: "Operates as a sanction-hardened techno-republic with sovereign tooling.",
    influenceZh: "作为被制裁加固的科技共和国运行，拥有主权级工具链。",
    side: "sz",
  },
  {
    ticker: "DJI",
    name: "DJI",
    zh: "大疆",
    founded: "2006",
    capex: "private",
    arch: "Drone hardware monopoly + gimbal IP + camera ecosystems.",
    archZh: "无人机硬件垄断 + 云台 IP + 摄像机生态。",
    influence: "≈70% of global civil drones; effectively defines the category.",
    influenceZh: "约占全球民用无人机 70%；事实上定义了这一品类。",
    side: "sz",
  },
  {
    ticker: "00763",
    name: "ZTE",
    zh: "中兴",
    founded: "1985",
    capex: "≈$3B/yr",
    arch: "5G + telecom equipment + chipset design.",
    archZh: "5G + 通信设备 + 芯片设计。",
    influence: "Builds half of the world's 5G infrastructure outside Western allies.",
    influenceZh: "在西方阵营之外，构建了世界一半的 5G 基础设施。",
    side: "sz",
  },
];

const SL_COS: Co[] = [
  {
    ticker: "005930",
    name: "Samsung Electronics",
    zh: "三星电子",
    founded: "1969",
    capex: "≈$45B/yr",
    arch: "Memory + Foundry + Display + Mobile + Appliance — one stack.",
    archZh: "存储 + 代工 + 显示 + 移动 + 家电 —— 同一座栈。",
    influence: "Roughly 20% of Korean GDP; the world's largest memory maker.",
    influenceZh: "约占韩国 GDP 20%；全球最大存储厂商。",
    side: "sl",
  },
  {
    ticker: "066570",
    name: "LG Electronics + LG Display",
    zh: "LG 电子 + LG 显示",
    founded: "1947",
    capex: "≈$12B/yr",
    arch: "OLED supremacy + home appliance globalization + automotive components.",
    archZh: "OLED 至尊 + 家电全球化 + 汽车零部件。",
    influence: "Pioneered large-area OLED; dominant in premium TV displays.",
    influenceZh: "开创大尺寸 OLED；统治高端电视面板市场。",
    side: "sl",
  },
  {
    ticker: "000660",
    name: "SK Hynix",
    zh: "SK 海力士",
    founded: "1983",
    capex: "≈$15B/yr",
    arch: "DRAM + NAND + HBM (AI memory) supplier to Nvidia.",
    archZh: "DRAM + NAND + HBM（AI 存储），英伟达核心供应商。",
    influence: "Effectively the gating supplier of the global GPU build-out.",
    influenceZh: "事实上是全球 GPU 扩容的瓶颈供应商。",
    side: "sl",
  },
  {
    ticker: "035420",
    name: "Naver",
    zh: "Naver",
    founded: "1999",
    capex: "≈$1.5B/yr",
    arch: "Korean search + cloud + AI (HyperCLOVA X) + Webtoon.",
    archZh: "韩语搜索 + 云 + AI（HyperCLOVA X）+ Webtoon。",
    influence: "Korea's most-used search; Webtoon set the global comic-streaming format.",
    influenceZh: "韩国使用最广的搜索；Webtoon 定义了全球漫画流媒形态。",
    side: "sl",
  },
  {
    ticker: "035720",
    name: "Kakao",
    zh: "Kakao",
    founded: "2010",
    capex: "≈$1B/yr",
    arch: "Messaging + mobility + bank + entertainment platform.",
    archZh: "通讯 + 出行 + 银行 + 娱乐平台。",
    influence: "KakaoTalk reaches >95% of Korean smartphone users.",
    influenceZh: "KakaoTalk 触达 95% 以上的韩国智能机用户。",
    side: "sl",
  },
];

export default function S7_Giants() {
  return (
    <SectionShell
      id="s7"
      index="VII · 007"
      kicker="Tech giants comparison"
      kickerZh="第七章 · 巨头对照"
      headline="The ten companies that hold most of East Asia's technological mass."
      headlineZh="撑起东亚科技绝大部分质量的十家公司。"
      reveal="Five of these companies could disappear in a week, and the global tech industry would not survive the year."
      revealZh="这十家中任一座五家消失一周，全球科技业撑不过这一年。"
    >
      <Lede
        en="A megacity's silhouette is drawn by skyscrapers. A megacity's gravity is drawn by its champions. Below: the ten flagships that anchor Shenzhen's and Seoul's industrial OSes. They do not compete head-to-head — they hold complementary parts of the same global supply chain."
        zh="一座超大城市的轮廓由摩天楼绘制。它的引力由旗舰企业绘制。下方：锚定深圳与首尔工业操作系统的十家旗舰。它们不是正面对抗 —— 它们各持同一条全球供应链中互补的环节。"
      />

      <Reveal>
        <div className="mt-16 grid md:grid-cols-2 gap-4">
          <div>
            <div className="font-mono text-[10px] tracking-widest text-sz-300 mb-3">SHENZHEN ROSTER · 深圳阵列</div>
            <div className="space-y-3">
              {SZ_COS.map((c) => <CoCard key={c.name} c={c} />)}
            </div>
          </div>
          <div>
            <div className="font-mono text-[10px] tracking-widest text-sl-200 mb-3">SEOUL ROSTER · 首尔阵列</div>
            <div className="space-y-3">
              {SL_COS.map((c) => <CoCard key={c.name} c={c} />)}
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-16 grid md:grid-cols-2 gap-10">
        <Aphorism
          side="sz"
          en="A Chinese tech giant is a state instrument with shareholders."
          zh="一家中国科技巨头是带着股东的国家工具。"
        />
        <Aphorism
          side="sl"
          en="A chaebol is a family-run intergovernmental agency."
          zh="一家财阀是家族经营的政府间机构。"
        />
      </div>

      <Note
        en="If you plotted these ten companies' supplier networks on one map, you would draw most of the Pacific Rim. The two cities do not own the global tech economy. They host the layers no one else has reproduced at scale."
        zh="如果把这十家公司的供应商网络画在同一张图上，你会画出大半个环太平洋。两座城市并不拥有全球科技经济。它们承载着别人没能在规模上复现的那几层。"
      />
    </SectionShell>
  );
}

function CoCard({ c }: { c: Co }) {
  const cls = c.side === "sz" ? "panel-sz corner-sz" : "panel-sl corner-sl";
  const tag = c.side === "sz" ? "text-sz-300" : "text-sl-200";
  return (
    <div className={`relative rounded-lg p-4 md:p-5 ${cls}`}>
      <div className="flex items-baseline justify-between gap-3">
        <div className="flex items-baseline gap-2 flex-wrap">
          <div className="font-display text-xl text-bone">{c.name}</div>
          <div className="font-han text-ash">· {c.zh}</div>
        </div>
        <div className={`text-[10px] font-mono tracking-widest ${tag}`}>{c.ticker}</div>
      </div>
      <div className="mt-1 text-xs text-ash font-mono">FOUNDED {c.founded} · CAPEX {c.capex}</div>
      <p className="mt-3 text-bone/85 text-sm leading-snug">{c.arch}</p>
      <p className="font-han text-ash/85 text-xs md:text-sm leading-snug mt-1">{c.archZh}</p>
      <div className="mt-3 border-t border-line/60 pt-2">
        <p className="text-bone/75 text-sm leading-snug">{c.influence}</p>
        <p className="font-han text-ash/80 text-xs md:text-sm leading-snug mt-0.5">{c.influenceZh}</p>
      </div>
    </div>
  );
}
