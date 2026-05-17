import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void:   "#03050b",
        carbon: "#070912",
        steel:  "#0c111e",
        wire:   "#162033",
        line:   "#1f2945",
        ash:    "#bdc4d8",
        bone:   "#eaedf5",
        // Shenzhen — cyan + industrial orange
        sz: {
          50:  "#d1f7ff",
          100: "#8fe8ff",
          200: "#43d2ff",
          300: "#00b8e6",
          400: "#0090c4",
          warm: "#ff7a1a",       // industrial orange
          ember:"#ff4d00",
        },
        // Seoul — neon blue + silver
        sl: {
          50:  "#dfe9ff",
          100: "#a8c2ff",
          200: "#6c97ff",
          300: "#3d6cea",
          400: "#1c4ac0",
          silver:"#dde2f0",
          steel:"#94a0b8",
        },
        amber:  { 400: "#ffb13b" },
        red:    { 400: "#ff4d6a" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Fraunces", "serif"],
        body:    ["var(--font-body)",    "Inter", "system-ui", "sans-serif"],
        mono:    ["var(--font-mono)",    "JetBrains Mono", "monospace"],
        han:     ["var(--font-han)",     "Noto Serif SC", "serif"],
        kr:      ["var(--font-kr)",      "Noto Sans KR", "sans-serif"],
      },
      letterSpacing: {
        widerer:   "0.18em",
        widestest: "0.32em",
      },
    },
  },
  plugins: [],
};
export default config;
