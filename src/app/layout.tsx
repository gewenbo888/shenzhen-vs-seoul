import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shenzhen-vs-seoul.psyverse.fun"),
  title: "Shenzhen vs Seoul | 深圳 vs 首尔 — Two Operating Systems",
  description:
    "A bilingual cinematic systems analysis of Shenzhen and Seoul as two competing operating systems of Asian technological civilization — speed vs precision, motherboard vs display, supply-chain Darwinism vs vertically integrated industrial OS.",
  keywords: [
    "Shenzhen", "Seoul", "深圳", "首尔", "Asian tech civilization",
    "semiconductors", "supply chain", "BYD", "Tencent", "Samsung",
    "SK Hynix", "OLED", "K-pop", "industrial policy", "Huawei", "DJI",
    "geopolitics", "psyverse",
  ],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-CN": "/", "x-default": "/" },
  },
  openGraph: {
    title: "Shenzhen vs Seoul — Two Operating Systems of Asian Tech Civilization",
    description:
      "Two cities, two civilizational architectures. Speed vs precision. Motherboard vs display. A 10-chapter atlas.",
    url: "https://shenzhen-vs-seoul.psyverse.fun/",
    siteName: "Psyverse",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shenzhen vs Seoul · 深圳 vs 首尔",
    description:
      "Speed vs precision. Open-source evolution vs enterprise architecture. Motherboard vs display.",
  },
  robots: { index: true, follow: true },
  other: { "theme-color": "#03050b" },
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,700;1,9..144,300;1,9..144,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&family=Noto+Serif+SC:wght@400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;600&family=Noto+Sans+KR:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org", "@type": "WebSite",
              name: "Shenzhen vs Seoul — Two Operating Systems",
              alternateName: "深圳 vs 首尔 · 两种操作系统",
              description: "A bilingual cinematic systems analysis of Shenzhen and Seoul as two competing operating systems of Asian technological civilization.",
              url: "https://shenzhen-vs-seoul.psyverse.fun/",
              inLanguage: ["en", "zh-CN"],
              author:    { "@type": "Person",       name: "Gewenbo",  url: "https://psyverse.fun/" },
              publisher: { "@type": "Organization", name: "Psyverse", url: "https://psyverse.fun/" },
            }),
          }}
        />
      </head>
      <body className="scanline bg-void text-ash">
        {children}
        <Script
          src="https://analytics-dashboard-two-blue.vercel.app/tracker.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
