import { LanguageProvider } from "@/components/LanguageProvider";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import S1 from "@/components/sections/S1_Philosophy";
import S2 from "@/components/sections/S2_Timeline";
import S3 from "@/components/sections/S3_Supply";
import S4 from "@/components/sections/S4_AI";
import S5 from "@/components/sections/S5_Culture";
import S6 from "@/components/sections/S6_Urban";
import S7 from "@/components/sections/S7_Giants";
import S8 from "@/components/sections/S8_Geopolitics";
import S9 from "@/components/sections/S9_Civilization";
import S10 from "@/components/sections/S10_2050";
import Final from "@/components/Final";

export default function Page() {
  return (
    <LanguageProvider>
      <Nav />
      <main className="relative bg-void text-bone overflow-x-hidden">
        <Hero />
        <S1 />
        <S2 />
        <S3 />
        <S4 />
        <S5 />
        <S6 />
        <S7 />
        <S8 />
        <S9 />
        <S10 />
        <Final />
      </main>
    </LanguageProvider>
  );
}
