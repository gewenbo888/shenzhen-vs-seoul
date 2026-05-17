"use client";

import { useEffect, useRef } from "react";

/**
 * Two procedurally-drawn city skylines side-by-side on a single canvas.
 * Left = Shenzhen (cyan + industrial orange highlights, dense towers, factory
 * silhouettes, drones flying overhead).
 * Right = Seoul (neon blue + silver, ordered cluster of tall slabs, satellites).
 */
export default function Skylines({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext("2d")!;
    let raf = 0;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const resize = () => {
      c.width = c.clientWidth * dpr;
      c.height = c.clientHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(c);

    // Seeded RNG so the skyline is stable across frames
    const rng = (seed: number) => {
      let s = seed;
      return () => {
        s = (s * 1664525 + 1013904223) >>> 0;
        return s / 0x100000000;
      };
    };

    type Tower = {
      x: number; w: number; h: number;
      windowsPerRow: number; rows: number;
      glow: string; isFactory?: boolean; antenna?: boolean;
    };

    function generate(seed: number, palette: { base: string; glow: string; accent: string; factory?: boolean }): Tower[] {
      const r = rng(seed);
      const out: Tower[] = [];
      let x = 0;
      while (x < 800) {
        const w = 18 + r() * 36;
        const h = palette.factory
          ? 70 + r() * 180
          : 110 + Math.pow(r(), 1.7) * 240;
        out.push({
          x, w, h,
          windowsPerRow: Math.max(2, Math.floor(w / 8)),
          rows: Math.max(6, Math.floor(h / 12)),
          glow: r() < 0.18 ? palette.accent : palette.glow,
          isFactory: palette.factory && r() < 0.18,
          antenna: r() < 0.34,
        });
        x += w + (1 + r() * 4);
      }
      return out;
    }

    // Static-ish skyline pre-generated once
    const SZ = generate(2025, {
      base: "#0a141e",
      glow: "#00e0ff",
      accent: "#ff7a1a",
      factory: true,
    });
    const SL = generate(0x517171, {
      base: "#0c121f",
      glow: "#5e7dff",
      accent: "#dde2f0",
    });

    // Moving overlay particles (drones / satellites)
    type P = { x: number; y: number; vx: number; vy: number; r: number; color: string; pulse: number };
    const driftRng = rng(7);
    const overlays: P[] = Array.from({ length: 26 }, (_, i) => ({
      x: driftRng() * 800,
      y: driftRng() * 320 + 20,
      vx: (driftRng() - 0.5) * 0.4,
      vy: (driftRng() - 0.5) * 0.05,
      r: 0.6 + driftRng() * 1.4,
      color: i % 2 ? "#00e0ff" : "#5e7dff",
      pulse: driftRng() * Math.PI * 2,
    }));

    function drawSide(
      towers: Tower[],
      x0: number, w: number, h: number,
      palette: { sky: string; horizon: string; glow: string; accent: string; lit: string; tint: string },
      label: { title: string; han: string }
    ) {
      // sky
      const sky = ctx.createLinearGradient(x0, 0, x0, h);
      sky.addColorStop(0, palette.sky);
      sky.addColorStop(0.55, palette.horizon);
      sky.addColorStop(1, "#04060c");
      ctx.fillStyle = sky;
      ctx.fillRect(x0, 0, w, h);

      // halo
      const halo = ctx.createRadialGradient(x0 + w * 0.5, h * 0.55, 5, x0 + w * 0.5, h * 0.55, w * 0.6);
      halo.addColorStop(0, palette.tint + "60");
      halo.addColorStop(1, "transparent");
      ctx.fillStyle = halo;
      ctx.fillRect(x0, 0, w, h);

      // far-row mountains/skyline silhouette
      ctx.fillStyle = "rgba(10,15,30,0.85)";
      ctx.beginPath();
      ctx.moveTo(x0, h * 0.78);
      for (let i = 0; i < 20; i++) {
        const px = x0 + (i / 19) * w;
        const py = h * (0.62 + Math.sin(i * 1.3 + (label.title === "Seoul" ? 1.7 : 0.3)) * 0.06);
        ctx.lineTo(px, py);
      }
      ctx.lineTo(x0 + w, h);
      ctx.lineTo(x0, h);
      ctx.closePath();
      ctx.fill();

      // Map tower x (in 0..800) into x0..x0+w
      const scaleX = w / 800;

      // sweep scanline for SZ
      if (label.title === "Shenzhen") {
        const sweep = (performance.now() % 5000) / 5000;
        const sy = h * 0.35 + sweep * h * 0.55;
        const g = ctx.createLinearGradient(0, sy - 18, 0, sy + 18);
        g.addColorStop(0, "rgba(0,224,255,0)");
        g.addColorStop(0.5, "rgba(0,224,255,0.10)");
        g.addColorStop(1, "rgba(0,224,255,0)");
        ctx.fillStyle = g;
        ctx.fillRect(x0, sy - 18, w, 36);
      }

      // towers
      const baseLine = h * 0.95;
      for (const t of towers) {
        const tx = x0 + t.x * scaleX;
        const tw = t.w * scaleX;
        const th = t.h * 0.88;
        ctx.fillStyle = palette.tint + "30";
        ctx.fillRect(tx, baseLine - th, tw, th);

        // tower edge highlight
        ctx.fillStyle = palette.lit + "20";
        ctx.fillRect(tx, baseLine - th, 1.1, th);
        ctx.fillRect(tx + tw - 1.1, baseLine - th, 1.1, th);

        // windows
        const winW = Math.max(0.9, tw / (t.windowsPerRow * 1.6));
        const winH = 1.6;
        for (let row = 0; row < t.rows; row++) {
          for (let col = 0; col < t.windowsPerRow; col++) {
            const wx = tx + 2 + col * (winW * 1.5);
            const wy = baseLine - th + 4 + row * 5;
            if (wx > tx + tw - 2) continue;
            const r = (Math.sin(row * 17 + col * 11 + t.x) + 1) / 2;
            if (r < 0.45) continue;
            ctx.fillStyle = r > 0.92 ? palette.accent : palette.lit;
            ctx.globalAlpha = 0.55 + r * 0.45;
            ctx.fillRect(wx, wy, winW, winH);
          }
        }
        ctx.globalAlpha = 1;

        // antenna / rooftop blip
        if (t.antenna) {
          ctx.fillStyle = palette.accent;
          ctx.fillRect(tx + tw / 2, baseLine - th - 6, 0.8, 6);
          const blip = (Math.sin(performance.now() / 600 + t.x) + 1) / 2;
          ctx.globalAlpha = 0.4 + blip * 0.6;
          ctx.fillRect(tx + tw / 2 - 1, baseLine - th - 8, 2.5, 2.5);
          ctx.globalAlpha = 1;
        }

        // factory smokestack
        if (t.isFactory) {
          ctx.fillStyle = "rgba(255,122,26,0.5)";
          ctx.fillRect(tx + tw / 2 - 1.5, baseLine - th - 14, 3, 14);
          const puff = (performance.now() / 700) % 60;
          ctx.beginPath();
          ctx.arc(tx + tw / 2 + 1.5, baseLine - th - 18 - puff, 4, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255,122,26,0.18)";
          ctx.fill();
        }
      }

      // foreground horizon line
      ctx.strokeStyle = palette.glow;
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      ctx.moveTo(x0, baseLine + 0.5);
      ctx.lineTo(x0 + w, baseLine + 0.5);
      ctx.stroke();

      // side label
      ctx.fillStyle = palette.glow;
      ctx.font = "11px JetBrains Mono, ui-monospace, monospace";
      ctx.textAlign = "left";
      ctx.fillText(label.title.toUpperCase(), x0 + 18, 30);
      ctx.fillStyle = palette.lit;
      ctx.font = "12px 'Noto Serif SC', serif";
      ctx.fillText(label.han, x0 + 18, 47);
    }

    const tick = () => {
      const w = c.clientWidth;
      const h = c.clientHeight;
      ctx.clearRect(0, 0, w, h);

      // left = Shenzhen, right = Seoul
      const half = w / 2;
      drawSide(
        SZ, 0, half, h,
        { sky: "#04101a", horizon: "#08465a", glow: "#00e0ff", accent: "#ff7a1a", lit: "#b6ecff", tint: "#0090c4" },
        { title: "Shenzhen", han: "深圳" }
      );
      drawSide(
        SL, half, half, h,
        { sky: "#070b22", horizon: "#1b2566", glow: "#5e7dff", accent: "#dde2f0", lit: "#b8caff", tint: "#3d6cea" },
        { title: "Seoul",  han: "首尔" }
      );

      // central divider — orange-tinted plasma
      const seam = ctx.createLinearGradient(half - 2, 0, half + 2, 0);
      seam.addColorStop(0, "rgba(0,224,255,0)");
      seam.addColorStop(0.5, "rgba(255,122,26,0.5)");
      seam.addColorStop(1, "rgba(94,125,255,0)");
      ctx.fillStyle = seam;
      ctx.fillRect(half - 2, 0, 4, h);

      // overlay particles (drones + satellites)
      for (const p of overlays) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x > 800) p.x = 0;
        if (p.x < 0)   p.x = 800;
        if (p.y < 10 || p.y > 320) p.vy *= -1;
        p.pulse += 0.08;

        const screenX = (p.x / 800) * w;
        const screenY = p.y * (h / 360);
        const a = (Math.sin(p.pulse) + 1) / 2;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.45 + a * 0.55;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(screenX, screenY, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }

      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden
    />
  );
}
