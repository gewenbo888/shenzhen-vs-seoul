"use client";

import { SectionShell } from "../SectionShell";
import { Lede, Compare, Stat, Aphorism, Note } from "../atoms";
import Reveal from "../Reveal";

export default function S6_Urban() {
  return (
    <SectionShell
      id="s6"
      index="VI · 006"
      kicker="The urban form"
      kickerZh="第六章 · 城市形态"
      headline="The fastest city in the world vs the most-organized one."
      headlineZh="世界上最快的城市，对峙最被组织化的城市。"
      reveal="Form follows production. Shenzhen's grid was drawn by factories. Seoul's grid was redrawn by exporters."
      revealZh="形式服从生产。深圳的格子是工厂画的，首尔的格子是出口商重画的。"
    >
      <Lede
        en="Every megacity is a frozen industrial policy. Shenzhen's urban tissue records 40 years of just-in-time manufacturing — wide arterial roads, vast industrial superblocks, dormitory megastructures, and a container port that swallows trade like a black hole. Seoul's urban tissue records 60 years of export-led industrialization — mountain-hugging density, hyper-organized verticality, neon commercial floors, and a transit system so accurate that subway clocks are correct to the second."
        zh="每一座超大城市都是一份被冻结的产业政策。深圳的城市组织，记录着四十年的准时制制造 —— 宽阔的主干路、巨大的工业超大街区、宿舍超级建筑，以及像黑洞一样吞下贸易的集装箱港。首尔的城市组织，记录着六十年的出口导向工业化 —— 倚山的密度、被高度组织化的纵向性、霓虹的商业楼层，以及精确到秒的地铁。"
      />

      <div className="mt-12 grid md:grid-cols-2 gap-4">
        <Stat side="sz" value="≈17.6M" en="Shenzhen metro population (2024)." zh="深圳都市区人口（2024）。" />
        <Stat side="sl" value="≈25.6M" en="Seoul Capital Area (Sudogwon) population." zh="首尔都市圈（首都圈）人口。" />
        <Stat side="sz" value="567" en="Skyscrapers above 150 m — most of any city on Earth." zh="超过 150 米的摩天楼数量 —— 全球第一。" />
        <Stat side="sl" value="100%" en="Subway car LTE coverage — including tunnels." zh="地铁车厢 LTE 覆盖（含隧道）。" />
      </div>

      <div className="mt-14">
        <Compare
          leftTitle="Velocity urbanism"
          leftZh="速度型城市主义"
          rightTitle="Compression urbanism"
          rightZh="压缩型城市主义"
          left={{
            en: "Shenzhen built 13 metro lines in 20 years, doubled its container-port throughput in a decade, and rezones industrial blocks as fast as a frontend framework deprecates. The city is forever a beta.",
            zh: "深圳在二十年间建出 13 条地铁，十年间港口吞吐翻倍，工业街区被重新分区的速度，堪比一个前端框架被淘汰的速度。整座城市永远处于 beta 阶段。",
          }}
          right={{
            en: "Seoul folded a population larger than Australia into a basin between mountains. The result is hyper-organized density: 30-storey apartment blocks arranged in disciplined grids, neon commerce stacked vertically, transit threading every layer.",
            zh: "首尔把一个比澳大利亚还多的人口，折进群山之间的盆地。结果是被超度组织化的密度：三十层公寓楼以纪律网格排列，霓虹商业纵向堆叠，交通穿过每一层。",
          }}
          leftItems={[
            { en: "Industrial megablocks (Bao'an, Longhua, Pingshan).", zh: "工业超大街区（宝安、龙华、坪山）。" },
            { en: "Container-port civilization (Yantian, Shekou).", zh: "集装箱港文明（盐田、蛇口）。" },
            { en: "Startup density bordering on a hive.", zh: "接近蜂群的创业密度。" },
            { en: "Construction never stops; the city is a daemon.", zh: "永不停工；城市本身是一个常驻进程。" },
          ]}
          rightItems={[
            { en: "Mountain-city integration (Bukhansan, Gwanaksan).", zh: "山城一体（北汉山、冠岳山）。" },
            { en: "Luxury verticality in Gangnam.", zh: "江南的奢华纵向性。" },
            { en: "Neon commercial systems (Myeongdong, Hongdae).", zh: "霓虹商业系统（明洞、弘大）。" },
            { en: "Ultra-efficient transit (KTX + 24 subway lines).", zh: "极致高效的交通（KTX + 24 条地铁）。" },
          ]}
        />
      </div>

      <Reveal>
        <div className="mt-16 grid md:grid-cols-2 gap-4">
          <div className="panel-sz rounded-lg p-6 corner-sz">
            <div className="text-[10px] font-mono tracking-widest text-sz-300 mb-3">SHENZHEN · 街道节奏</div>
            <div className="h-32 grid grid-cols-12 gap-1 items-end">
              {[60, 80, 55, 95, 70, 110, 75, 100, 65, 90, 50, 85].map((h, i) => (
                <div
                  key={i}
                  className="bg-sz-300/70 rounded-sm"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="mt-3 flex justify-between text-[10px] font-mono text-ash">
              <span>06:00</span><span>14:00</span><span>22:00</span>
            </div>
            <div className="mt-2 text-bone/85 text-sm">Two morning peaks: workers + couriers + EV deliveries.</div>
            <div className="font-han text-ash text-xs mt-0.5">两个早高峰：工人、骑手、电车配送。</div>
          </div>
          <div className="panel-sl rounded-lg p-6 corner-sl">
            <div className="text-[10px] font-mono tracking-widest text-sl-200 mb-3">SEOUL · 街道节奏</div>
            <div className="h-32 grid grid-cols-12 gap-1 items-end">
              {[40, 55, 50, 60, 70, 90, 85, 75, 95, 100, 80, 65].map((h, i) => (
                <div
                  key={i}
                  className="bg-sl-300/70 rounded-sm"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="mt-3 flex justify-between text-[10px] font-mono text-ash">
              <span>06:00</span><span>14:00</span><span>22:00</span>
            </div>
            <div className="mt-2 text-bone/85 text-sm">Late-night peak: hagwons, esports, drinking after work.</div>
            <div className="font-han text-ash text-xs mt-0.5">深夜高峰：补习班、电竞、下班后聚会。</div>
          </div>
        </div>
      </Reveal>

      <div className="mt-16 grid md:grid-cols-2 gap-10">
        <Aphorism
          side="sz"
          en="A city under construction is a city that has not yet decided what to be."
          zh="一座永远在施工的城市，是一座尚未决定要成为什么的城市。"
        />
        <Aphorism
          side="sl"
          en="Seoul's density is not a problem to be solved. It is a feature to be optimized."
          zh="首尔的密度不是要解决的问题，而是要被优化的特性。"
        />
      </div>

      <Note
        en="The deepest difference is in how each city treats its night. Shenzhen at 2 a.m. is loading docks, freight forwarders, and an unfinished product on someone's CAD screen. Seoul at 2 a.m. is karaoke, hagwon vans, and a freshly edited K-drama uploading to a CDN."
        zh="两座城市最深的差别，在于它们如何处理自己的夜晚。深圳凌晨两点是装卸台、货代、以及某人 CAD 屏幕上未完成的产品。首尔凌晨两点是 KTV、补习班接送车、以及一部刚剪辑完、正在上传 CDN 的韩剧。"
      />
    </SectionShell>
  );
}
