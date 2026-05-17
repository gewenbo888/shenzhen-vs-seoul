"use client";

import { SectionShell } from "../SectionShell";
import { Lede, Compare, MonoList, Note, Aphorism } from "../atoms";

export default function S10_2050() {
  return (
    <SectionShell
      id="s10"
      index="X · 010"
      kicker="The 2050 simulation"
      kickerZh="第十章 · 2050 模拟"
      headline="What each city looks like when its current trajectory finishes booting."
      headlineZh="如果两座城市当前的轨迹完整启动完毕，它们将长成什么样子。"
      reveal="The competition between cities is ultimately a competition between civilization architectures."
      revealZh="城市之间的竞争，本质上是文明架构之间的竞争。"
    >
      <Lede
        en="Forecasts are fictions held up by trend lines. The fiction below is held up by the trend lines of two specific cities — their patents, their fab orders, their port volumes, their demographics, their political contracts. Treat the year 2050 as the moment both civilization-OSes have finished compiling. The user interface that the rest of the world meets will, by then, be unmistakable."
        zh="预测是被趋势线撑起的虚构。下面的虚构由两座具体城市的趋势线撑起 —— 它们的专利、晶圆订单、港口吞吐、人口结构、政治契约。把 2050 年视为两套文明操作系统完成编译的那一刻。届时世界其它地方触碰到的用户界面，将不会再有歧义。"
      />

      <div className="mt-14">
        <Compare
          leftTitle="Shenzhen 2050"
          leftZh="深圳 2050"
          rightTitle="Seoul 2050"
          rightZh="首尔 2050"
          left={{
            en: "An autonomous coastal megacity of 25M+, fully integrated with Guangzhou, Dongguan, Hong Kong, and Macau. Robot-served streets, drone freight corridors, and a single industrial OS that schedules factories like CPU cores.",
            zh: "一座 2500 万 + 的自主化沿海超大城市，与广州、东莞、香港、澳门完全整合。机器人服务的街道，无人机货运廊道，一套像调度 CPU 核心一样调度工厂的工业操作系统。",
          }}
          right={{
            en: "A demographically thin but technologically luminous capital. Korea's population falls below 40M, but each citizen runs on edge-AI: surgical robots, semi-autonomous mobility, AI-managed apartments, and an entertainment economy outsized to its GDP.",
            zh: "一座人口稀薄但科技夺目的首都。韩国人口跌破 4000 万，但每位国民运行在边缘 AI 之上：外科机器人、半自动出行、AI 管理的公寓，以及相对 GDP 而言过度庞大的娱乐经济。",
          }}
          leftItems={[
            { en: "Autonomous infrastructure (roads, ports, grids).", zh: "自主基础设施（道路、港口、电网）。" },
            { en: "Robot economies — every factory is a swarm.", zh: "机器人经济 —— 每座工厂都是蜂群。" },
            { en: "Climate-adapted seawalls + cooling megastructures.", zh: "适应气候的海堤 + 冷却超级建筑。" },
            { en: "Orbital manufacturing test cells (Hainan launch).", zh: "在轨制造试验单元（海南发射）。" },
            { en: "Fully automated Yantian + Shekou ports.", zh: "全自动盐田 + 蛇口港。" },
          ]}
          rightItems={[
            { en: "AI governance + algorithmic civic services.", zh: "AI 治理 + 算法化公民服务。" },
            { en: "On-device LLMs in every appliance.", zh: "每件家电里都跑端侧 LLM。" },
            { en: "Synthetic culture systems (AI idols, AI dramas).", zh: "合成文化系统（AI 偶像、AI 韩剧）。" },
            { en: "Neural-interface medical devices, exportable.", zh: "可出口的神经接口医疗设备。" },
            { en: "Urban OS sold as a service to other capitals.", zh: "「城市操作系统」作为服务出口给其他首都。" },
          ]}
        />
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="font-display text-2xl md:text-3xl text-sz-glow">Shenzhen risks</h3>
          <p className="font-han text-ash mt-1">深圳的风险</p>
          <div className="mt-5">
            <MonoList side="sz" items={[
              { en: "Demographic deceleration + housing strain.", zh: "人口减速 + 住房压力。" },
              { en: "Geopolitical chokepoint exposure.", zh: "地缘咽喉点暴露。" },
              { en: "Climate flooding (coastal, monsoon).", zh: "气候洪涝（沿海、季风）。" },
              { en: "Innovation tax of state coordination.", zh: "国家协调对创新的税。" },
            ]}/>
          </div>
        </div>
        <div>
          <h3 className="font-display text-2xl md:text-3xl text-sl-glow">Seoul risks</h3>
          <p className="font-han text-ash mt-1">首尔的风险</p>
          <div className="mt-5">
            <MonoList side="sl" items={[
              { en: "World-fastest demographic collapse.", zh: "全球最快的人口塌缩。" },
              { en: "Over-reliance on 4 chaebol families.", zh: "对 4 大财阀家族过度依赖。" },
              { en: "North Korean security shadow.", zh: "朝核安全阴影。" },
              { en: "Export dependence on a fracturing world.", zh: "对一个正在碎裂的世界的出口依赖。" },
            ]}/>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Aphorism
          side="neutral"
          en="By 2050, the question 'which city won?' will read like 'which sense won?' — pointless. They run different modalities of the same civilization, and the world buys both."
          zh="到 2050 年，「哪座城市赢了？」会读起来像「哪种感官赢了？」—— 毫无意义。它们运行同一种文明的不同模态，世界两者都买。"
        />
      </div>

      <Note
        en="If a third 'East Asian city OS' is going to emerge by 2050, it will not be Tokyo (too cautious), nor Taipei (too small), nor Singapore (too policy-shaped). It will be the Greater Bay Area read as a single instrument — and Korea read as a single firm."
        zh="如果到 2050 年要出现「第三种东亚城市操作系统」，它不会是东京（太谨慎）、不是台北（太小）、不是新加坡（太被政策塑造）。它会是把大湾区当作一种乐器来读，把韩国当作一家公司来读。"
      />
    </SectionShell>
  );
}
