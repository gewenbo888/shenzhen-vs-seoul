"use client";

import { SectionShell } from "../SectionShell";
import { Lede, Compare, Aphorism, Note } from "../atoms";

export default function S1_Philosophy() {
  return (
    <SectionShell
      id="s1"
      index="I · 001"
      kicker="Philosophy of each city"
      kickerZh="第一章 · 两座城市的运行哲学"
      headline="Open-source evolution vs vertically-integrated enterprise architecture."
      headlineZh="开源式进化，对峙于垂直整合的企业级架构。"
      reveal="Shenzhen iterates. Seoul integrates. Both are the same continent's reply to industrial scarcity."
      revealZh="深圳是迭代，首尔是整合。两者都是同一片大陆对工业稀缺的回应。"
    >
      <Lede
        en="A city is an operating system: a substrate that schedules attention, capital, factories, and ambition. Two East Asian megacities have spent forty years writing two opposite kernels. Shenzhen's kernel is a permissionless package manager — anyone can publish a new factory, a new product, a new SKU. Seoul's kernel is a compiled, signed runtime — a few chaebol-shaped processes own most of the threads, and the system optimizes for predictability at scale."
        zh="一座城市是一种操作系统：一种调度注意力、资本、工厂与野心的衬底。两座东亚超大城市，用四十年写出了两套相反的内核。深圳的内核是无需许可的包管理器 —— 任何人都能发布新工厂、新产品、新 SKU。首尔的内核是被编译、被签名的运行时 —— 几个财阀形态的进程拥有大多数线程，整个系统为可预测的规模化而优化。"
      />

      <div className="mt-14">
        <Compare
          leftTitle="Speed · Iteration"
          leftZh="速度 · 迭代"
          rightTitle="Precision · Hierarchy"
          rightZh="精度 · 层级"
          left={{
            en: "A Shenzhen hardware founder can sketch a board on Monday, source components in Huaqiangbei on Tuesday, and ship a working prototype by Friday. The city is a 50 km² fabrication API.",
            zh: "深圳的硬件创业者周一画板，周二在华强北凑齐元件，周五就能交出能跑的原型。整座城市本身就是一个 50 平方公里的制造 API。",
          }}
          right={{
            en: "Samsung Pyeongtaek Line P3 cost 30 billion USD and operates within 0.000001 mm tolerances. Korea engineered itself into the only nation outside Taiwan that can run leading-edge memory at scale.",
            zh: "三星平泽 P3 线投资 300 亿美元，公差控制在百万分之一毫米。韩国把自己工程化为：除台湾外，唯一能规模化生产顶端存储的国家。",
          }}
          leftItems={[
            { en: "Engineering pragmatism over theory", zh: "工程实用主义压过理论" },
            { en: "Startup Darwinism — survive 90 days", zh: "九十天达尔文式创业生态" },
            { en: "Supply-chain intelligence as moat", zh: "供应链智能即护城河" },
            { en: "Techno-capital evolves the species", zh: "科技-资本演化整个物种" },
          ]}
          rightItems={[
            { en: "Industrial discipline as national religion", zh: "工业纪律即国教" },
            { en: "Vertically integrated keiretsu-style", zh: "纵向整合的财阀谱系" },
            { en: "Perfectionism amortized across decades", zh: "完美主义被分摊到数十年" },
            { en: "Export OS — built for foreign currency", zh: "出口操作系统 —— 为外汇而设计" },
          ]}
        />
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-10 max-w-6xl">
        <Aphorism
          side="sz"
          en="Shenzhen behaves like open-source evolution."
          zh="深圳像开源生态，不断进化。"
        />
        <Aphorism
          side="sl"
          en="Seoul behaves like optimized enterprise architecture."
          zh="首尔像企业级主机系统，被持续优化。"
        />
      </div>

      <Note
        en="The two cities are not rivals so much as two different answers to the same question: how does a 1960s-poor East Asian polity manufacture a high-income future? Shenzhen answered 'as many startups as possible'. Seoul answered 'as few perfect firms as necessary'."
        zh="两座城市与其说是对手，不如说是对同一问题的两种回答：一个 1960 年代贫困的东亚政体，如何制造一个高收入未来？深圳的答案是“尽可能多的创业公司”。首尔的答案是“尽可能少的完美企业”。"
      />
    </SectionShell>
  );
}
