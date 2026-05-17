"use client";

import { SectionShell } from "../SectionShell";
import { Lede, Aphorism, MonoList, Note, FlowRow } from "../atoms";

export default function S9_Civilization() {
  return (
    <SectionShell
      id="s9"
      index="IX · 009"
      kicker="The civilization layer"
      kickerZh="第九章 · 文明层"
      headline="Two cities as civilization computation engines."
      headlineZh="把两座城市当作「文明计算引擎」来读。"
      reveal="A modern city is no longer geography. It is a computation. Shenzhen and Seoul are two different programs running on the same continent."
      revealZh="一座现代城市不再是地理。它是一段计算。深圳与首尔，是同一片大陆上跑的两段不同程序。"
    >
      <Lede
        en="Lift the camera high enough and a megacity stops looking like a place. It starts looking like a process. Containers arrive on a tide; workers thread through subway capillaries; cycle times settle into oscillations that economists call quarters. Shenzhen and Seoul are not 'cities that have factories'. They are factories that have grown civic skins. To understand them, you have to read them as computation."
        zh="把镜头抬得足够高，超大城市就不再像一个地点，而开始像一段过程。集装箱跟着潮汐到岸；工人沿着地铁毛细血管穿行；周期时间稳定在一种被经济学家称作「季度」的振荡里。深圳与首尔不是「有工厂的城市」。它们是长出了公民皮肤的工厂。要理解它们，必须把它们读作计算。"
      />

      <div className="mt-14 grid md:grid-cols-3 gap-4">
        <Aphorism side="sz"     en="Factories are frozen intelligence."                zh="工厂是被冻结的智能。" />
        <Aphorism side="sl"     en="Supply chains are physical neural networks."       zh="供应链是物理化的神经网络。" />
        <Aphorism side="neutral" en="A port is the civilization's input/output bus."   zh="港口是文明的输入/输出总线。" />
      </div>

      <div className="mt-16">
        <h3 className="font-display text-2xl md:text-3xl text-bone">The civilization stack · 文明栈</h3>
        <p className="font-han text-ash mt-1">每一层都把上一层「现实」编译成下一层「现实」。</p>

        <div className="mt-8">
          <FlowRow
            steps={[
              { en: "Geography",   zh: "地理" },
              { en: "Energy",      zh: "能源" },
              { en: "Materials",   zh: "材料" },
              { en: "Factories",   zh: "工厂" },
              { en: "Supply chain", zh: "供应链" },
              { en: "Information", zh: "信息" },
              { en: "AI",          zh: "人工智能" },
              { en: "Civilization", zh: "文明" },
            ]}
          />
        </div>
      </div>

      <div className="mt-20 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="font-display text-2xl md:text-3xl text-sz-glow">Why megacities become organisms</h3>
          <p className="font-han text-ash mt-1">超大城市为什么变成「有机体」</p>
          <div className="mt-5">
            <MonoList
              side="sz"
              items={[
                { en: "Density crosses a threshold where coordination cost collapses.", zh: "密度跨过某个阈值后，协调成本崩塌。" },
                { en: "Cross-firm tacit knowledge starts to outpace formal documentation.", zh: "跨公司隐性知识开始超越正式文档。" },
                { en: "Suppliers compress evolutionary cycles to weeks.", zh: "供应商把演化周期压缩到「周」的尺度。" },
                { en: "The city becomes a self-modifying instruction set.", zh: "城市本身成为可自我修改的指令集。" },
              ]}
            />
          </div>
        </div>
        <div>
          <h3 className="font-display text-2xl md:text-3xl text-sl-glow">Why integrated firms become sovereigns</h3>
          <p className="font-han text-ash mt-1">为什么纵向整合公司会变成「主权体」</p>
          <div className="mt-5">
            <MonoList
              side="sl"
              items={[
                { en: "Capex outruns most national budgets.", zh: "资本支出超过多数国家预算。" },
                { en: "Process technology becomes a national-security object.", zh: "工艺技术成为国家安全对象。" },
                { en: "Diplomats negotiate on the firm's behalf.", zh: "外交官代替公司谈判。" },
                { en: "The firm's roadmap becomes the country's roadmap.", zh: "公司路线图成为国家路线图。" },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="mt-20 grid md:grid-cols-3 gap-4">
        <Aphorism side="sz"     en="Ports are civilization's interfaces."             zh="港口是文明的接口。" />
        <Aphorism side="sl"     en="Semiconductors are industrial DNA."                zh="半导体是工业的 DNA。" />
        <Aphorism side="neutral" en="AI is recursive civilization acceleration."     zh="AI 是递归式的文明加速。" />
      </div>

      <Note
        en="If you accept that the city is a computation, then a great deal of 20th-century debate dissolves. 'Is Shenzhen capitalist?' 'Is Seoul state-led?' Both questions assume the city is a place. It isn't. It is a program that has been instantiated, in a specific climate, on a specific labor force, under a specific set of constitutional constraints, to maximize a specific objective function."
        zh="如果你接受「城市是一段计算」，二十世纪的许多争论就会消解。「深圳是资本主义吗？」「首尔是国家主导吗？」这两个问题都假设城市是一处地点。它不是。它是一段程序，在特定气候、特定劳动力、特定宪政约束之下被实例化，以最大化一个特定的目标函数。"
      />
    </SectionShell>
  );
}
