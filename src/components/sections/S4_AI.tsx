"use client";

import { SectionShell } from "../SectionShell";
import { Lede, Compare, Stat, Note, Aphorism, MonoList } from "../atoms";

export default function S4_AI() {
  return (
    <SectionShell
      id="s4"
      index="IV · 004"
      kicker="The AI · robotics future"
      kickerZh="第四章 · AI 与机器人未来"
      headline="Embodied intelligence vs entertainment intelligence."
      headlineZh="具身智能，对峙娱乐智能。"
      reveal="Shenzhen will manufacture the bodies of AI. Seoul will manufacture the screens, the memory, and the songs."
      revealZh="深圳制造 AI 的身体。首尔制造 AI 的屏幕、存储与歌声。"
    >
      <Lede
        en="If the 2010s belonged to apps, the 2030s belong to things — autonomous vehicles, humanoid robots, on-device AI inference, smart factories that schedule themselves. The next decade asks which city has the substrate to manufacture those things at civilization scale. Shenzhen's answer is mechatronic; Seoul's answer is monolithic."
        zh="如果说 2010 年代属于 App，那么 2030 年代属于「物」—— 自动驾驶、人形机器人、端侧 AI 推理、自我调度的智能工厂。下一个十年的问题是：哪一座城市拥有能在文明规模上制造这些「物」的衬底？深圳的回答是机电的；首尔的回答是单芯的。"
      />

      <div className="mt-12 grid md:grid-cols-3 gap-4">
        <Stat side="sz" value="≈70%" en="Global drone supply chain located within 100 km of Shenzhen." zh="全球无人机供应链落于深圳 100 公里半径内的占比。" />
        <Stat side="sz" value="1.4M" en="Industrial robots installed in Greater Bay Area factories (est. 2025)." zh="大湾区工厂工业机器人保有量（2025 估算）。" />
        <Stat side="sl" value="60%+" en="World's HBM (AI-grade) memory shipped from Korean fabs by 2026." zh="2026 年前后，AI 级 HBM 由韩国晶圆厂出货的占比。" />
      </div>

      <div className="mt-14">
        <Compare
          leftTitle="Shenzhen · Embodied AI factory"
          leftZh="深圳 · 具身 AI 工厂"
          rightTitle="Seoul · AI-on-device + entertainment"
          rightZh="首尔 · 端侧 AI 与娱乐"
          left={{
            en: "Autonomous warehouses, drone-served streets, humanoid robots produced like phones, AI hardware clusters around the Pearl River Delta. The metropolis is being re-skinned as a robot operating environment.",
            zh: "自主仓储、无人机服务街道、像手机一样被量产的人形机器人、围绕珠三角的 AI 硬件集群。整座城市正被重新蒙皮为机器人运行环境。",
          }}
          right={{
            en: "AI runs on the device, not in a stadium-scale GPU farm. Korean ecosystems specialize in low-power, high-throughput edge inference, AI-generated entertainment, and emotion-tech for consumer devices.",
            zh: "AI 跑在设备上，而非体育场级 GPU 农场。韩国生态专注于低功耗、高吞吐的边缘推理、AI 生成的娱乐内容，以及面向消费设备的情绪科技。",
          }}
          leftItems={[
            { en: "Autonomous factories", zh: "自主工厂" },
            { en: "Drone megacities", zh: "无人机超大城市" },
            { en: "Humanoid robot supply chains", zh: "人形机器人供应链" },
            { en: "AI hardware clusters", zh: "AI 硬件集群" },
            { en: "Embodied intelligence manufacturing", zh: "具身智能制造" },
          ]}
          rightItems={[
            { en: "AI entertainment civilization", zh: "AI 娱乐文明" },
            { en: "AI-generated K-pop idols", zh: "AI 生成的偶像" },
            { en: "Smart urban orchestration", zh: "智慧城市编排" },
            { en: "Semiconductor AI infrastructure", zh: "AI 半导体基础设施" },
            { en: "Emotion-tech ecosystems", zh: "情绪科技生态" },
          ]}
        />
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="font-display text-2xl md:text-3xl text-sz-glow">Shenzhen 2030 — the bodies</h3>
          <p className="font-han text-ash mt-1">深圳 2030 · 身体</p>
          <div className="mt-5">
            <MonoList
              side="sz"
              items={[
                { en: "Humanoid bill of materials cheaper than a small car.", zh: "人形机器人 BOM 低于一辆小车。" },
                { en: "Factories scheduled by reinforcement-learning controllers.", zh: "工厂被强化学习控制器调度。" },
                { en: "Embodied SDKs sold as APIs (motion-as-a-service).", zh: "具身 SDK 以 API 形式售卖（运动即服务）。" },
                { en: "Drone freight at urban scale within South China.", zh: "华南范围内的城市级无人机货运。" },
                { en: "Surgery-grade haptics produced at consumer cost.", zh: "外科级触觉以消费品成本量产。" },
              ]}
            />
          </div>
        </div>
        <div>
          <h3 className="font-display text-2xl md:text-3xl text-sl-glow">Seoul 2030 — the screens</h3>
          <p className="font-han text-ash mt-1">首尔 2030 · 屏幕</p>
          <div className="mt-5">
            <MonoList
              side="sl"
              items={[
                { en: "HBM3E / HBM4 stacks shipping by the trainload to Nvidia & rivals.", zh: "HBM3E/HBM4 堆栈整车地发往英伟达与对手。" },
                { en: "On-device LLM inference standard in flagship phones.", zh: "端侧 LLM 推理成为旗舰机标配。" },
                { en: "Virtual idols outperform live performers in revenue.", zh: "虚拟偶像收入超过真人。" },
                { en: "OLED extended to 30\"+ TVs, AR glasses, automotive cockpits.", zh: "OLED 延伸到 30 寸电视、AR 眼镜、座舱。" },
                { en: "Smart-city orchestration as exportable software.", zh: "智慧城市编排成为可出口软件。" },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="mt-14 grid md:grid-cols-2 gap-10">
        <Aphorism
          side="sz"
          en="A drone is a smartphone with intent. A robot is a drone with thumbs."
          zh="无人机是带意图的智能手机。机器人是长出拇指的无人机。"
        />
        <Aphorism
          side="sl"
          en="On-device AI is a quiet, profitable revolution. It just has no clip on TikTok."
          zh="端侧 AI 是一场安静而赚钱的革命。它只是在 TikTok 上没有片段。"
        />
      </div>

      <Note
        en="Both cities converge on one point: the next AI dollar pays for hardware, not for chat. Shenzhen builds the body, Seoul builds the chip and the screen, Taiwan builds the brain, and the West builds the model. East Asia owns most of the supply chain that runs the West's frontier models."
        zh="两座城市殊途同归到一点：下一块 AI 美元是给硬件的，不是给对话的。深圳造身体，首尔造芯片与屏幕，台湾造大脑，西方造模型。东亚拥有运行西方前沿模型所必需的供应链中的大部分。"
      />
    </SectionShell>
  );
}
