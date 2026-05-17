"use client";

import { SectionShell } from "../SectionShell";
import { Lede, Compare, Aphorism, Marquee, Note } from "../atoms";

export default function S5_Culture() {
  return (
    <SectionShell
      id="s5"
      index="V · 005"
      kicker="Culture and technology"
      kickerZh="第五章 · 文化与技术"
      headline="Motherboard civilization vs display civilization."
      headlineZh="主板文明，对峙屏幕文明。"
      reveal="Shenzhen ships components. Seoul ships moods."
      revealZh="深圳出货元件，首尔出货情绪。"
    >
      <Lede
        en="Every technological civilization grows a culture of its own competence. Shenzhen's culture worships the bill of materials: who can compress more functionality into fewer dollars, faster. Seoul's culture worships the surface: who can make a pixel, a song, or a face more emotionally legible to a billion humans at the same time."
        zh="每一种科技文明都会长出关于自身能力的文化。深圳的文化崇拜物料清单：谁能把更多功能、用更少美元、更快地压进去。首尔的文化崇拜表面：谁能把一个像素、一首歌、一张脸，做得更同时地、对十亿人来说情绪可读。"
      />

      <div className="mt-14">
        <Compare
          leftTitle="Engineers · makers · hackers"
          leftZh="工程师 · Maker · 黑客"
          rightTitle="Designers · idols · audiences"
          rightZh="设计师 · 偶像 · 观众"
          left={{
            en: "Shenzhen's social hierarchy is dominated by hardware founders, factory bosses, and engineers fluent in BOM negotiation. Status is signaled by how short your time-to-market is.",
            zh: "深圳的社会等级由硬件创始人、厂长以及精通 BOM 谈判的工程师主导。地位由「上市时间有多短」来标识。",
          }}
          right={{
            en: "Seoul's status flows through entertainment companies, design studios, and consumer brands. The K-wave is not soft power as a side effect — it is the GDP-grade export of carefully engineered aesthetic.",
            zh: "首尔的地位流经娱乐公司、设计工作室与消费品牌。K-wave 并非软实力的副产物 —— 它是被精心工程化美学、达到 GDP 量级的出口品。",
          }}
          leftItems={[
            { en: "Hardware founders", zh: "硬件创始人" },
            { en: "Factory entrepreneurs", zh: "工厂创业者" },
            { en: "Tinkerers, hackers, modders", zh: "改装者、黑客" },
            { en: "Techno-utilitarian default", zh: "技术功利主义为底色" },
          ]}
          rightItems={[
            { en: "Industrial designers", zh: "工业设计师" },
            { en: "Esports + idol economy", zh: "电竞 + 偶像经济" },
            { en: "Display, fashion, beauty tech", zh: "显示、时尚、美妆科技" },
            { en: "Hyper-consumer electronics", zh: "超消费电子" },
          ]}
        />
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-10">
        <Aphorism
          side="sz"
          en="Shenzhen is motherboard civilization. Performance is the only language it speaks."
          zh="深圳是主板文明。性能是它唯一会说的语言。"
        />
        <Aphorism
          side="sl"
          en="Seoul is display civilization. The screen is the new public square."
          zh="首尔是屏幕文明。屏幕是新的公共广场。"
        />
      </div>

      <div className="mt-12">
        <Marquee
          items={[
            { en: "BOM > BRAND", zh: "物料清单大于品牌" },
            { en: "PIXEL > PRODUCT", zh: "像素大于产品" },
            { en: "FACTORY = OS", zh: "工厂即操作系统" },
            { en: "IDOL = INTERFACE", zh: "偶像即接口" },
            { en: "PRAGMA OVER POETRY", zh: "实用先于诗" },
            { en: "POETRY OVER PRAGMA", zh: "诗先于实用" },
          ]}
        />
      </div>

      <Note
        side="neutral"
        en="The two cultures are interlocking, not opposed. A Korean OLED panel sits inside a Shenzhen-assembled phone, branded by an American company, sold in a German city, played by a TikTok video shot in Seoul, edited on a Mac assembled near Shenzhen. The motherboard and the display are the same machine."
        zh="两种文化是互锁而非对立的。一块韩国 OLED 面板，被装进深圳总装的手机，挂着美国品牌，卖到德国城市，里面播放一段在首尔拍摄、在深圳附近组装的 Mac 上剪辑的 TikTok 视频。主板与屏幕，是同一台机器。"
      />
    </SectionShell>
  );
}
