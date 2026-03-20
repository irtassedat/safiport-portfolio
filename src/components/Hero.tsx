"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/i18n";

function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const nodes: { x: number; y: number; vx: number; vy: number; r: number; c: string; p: number }[] = [];
    const colors = ["#0284c7", "#f97316", "#64748b"];
    for (let i = 0; i < 45; i++) {
      nodes.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25, r: Math.random() * 1.5 + 0.5, c: colors[Math.floor(Math.random() * colors.length)], p: Math.random() * Math.PI * 2 });
    }
    let frame: number; let t = 0;
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, w, h); t += 0.008;
      nodes.forEach((n, i) => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.c; ctx.globalAlpha = 0.25 + Math.sin(t + n.p) * 0.15; ctx.fill();
        nodes.slice(i + 1).forEach((n2) => {
          const d = Math.hypot(n.x - n2.x, n.y - n2.y);
          if (d < 160) { ctx.beginPath(); ctx.moveTo(n.x, n.y); ctx.lineTo(n2.x, n2.y); ctx.strokeStyle = n.c; ctx.globalAlpha = (1 - d / 160) * 0.06; ctx.lineWidth = 0.5; ctx.stroke(); }
        });
      });
      ctx.globalAlpha = 1; frame = requestAnimationFrame(draw);
    }
    draw();
    const resize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} className="particle-canvas" />;
}

export default function Hero() {
  const { t, lang } = useLang();
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GridBackground />
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[150px]" />
      <div className="absolute bottom-20 right-10 w-[350px] h-[350px] bg-secondary/4 rounded-full blur-[150px]" />
      <div className="relative z-10 px-4 max-w-6xl mx-auto pt-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-500/15 bg-sky-500/5 mb-6">
              <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75" /><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sky-500" /></span>
              <span className="text-xs text-sky-400/80">{t.hero.badge}</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }} className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-600 to-orange-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">SI</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground/80">Sedat Irtas</div>
                <div className="text-[10px] text-foreground/35 font-mono">{lang === "tr" ? "Endustri Muhendisi x Full-Stack AI Developer" : "Industrial Engineer x Full-Stack AI Developer"}</div>
              </div>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold leading-[1.15] tracking-tight mb-5">
              <span className="text-foreground/90">{t.hero.titleA}</span><br /><span className="text-gradient">{t.hero.titleB}</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-sm text-foreground/45 leading-relaxed mb-6 max-w-lg">{t.hero.desc}</motion.p>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-wrap gap-3 mb-4">
              <a href="#analysis" className="group px-6 py-3 bg-gradient-to-r from-sky-600 to-orange-500 text-white text-sm font-medium rounded-lg transition-all hover:shadow-[0_0_20px_rgba(2,132,199,0.3)]">
                <span className="flex items-center gap-2">{t.hero.cta1}<svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
              </a>
              <a href="#demo" className="px-6 py-3 border border-border/40 bg-surface/20 backdrop-blur-sm text-sm font-medium rounded-lg hover:border-sky-500/20 transition-colors">{t.hero.cta2}</a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-[9px] text-foreground/20 font-mono">{t.hero.source}</motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="space-y-3">
            {/* Port Stats */}
            <div className="p-4 rounded-xl bg-surface/40 backdrop-blur-sm border border-border/30">
              <div className="text-[9px] text-sky-400 uppercase tracking-wider mb-2 font-bold">SAFiPORT DERiNCE</div>
              <div className="grid grid-cols-2 gap-2">
                {t.hero.portStats.map((stat) => (
                  <div key={stat.label} className="p-2 rounded-lg bg-background/40 border border-border/20">
                    <div className="text-lg font-bold text-sky-400">{stat.value}</div>
                    <div className="text-[9px] font-medium text-foreground/60">{stat.label}</div>
                    <div className="text-[8px] text-foreground/30">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* My Stats */}
            <div className="p-4 rounded-xl bg-surface/40 backdrop-blur-sm border border-border/30">
              <div className="text-[9px] text-orange-400 uppercase tracking-wider mb-2 font-bold">{lang === "tr" ? "BENiM TEKNiK ALTYAPiM" : "MY TECHNICAL BACKGROUND"}</div>
              <div className="grid grid-cols-4 gap-2">
                {t.hero.myStats.map((stat) => (
                  <div key={stat.label} className="p-1.5 rounded-md bg-background/30 text-center">
                    <div className="text-sm font-bold text-orange-400">{stat.value}</div>
                    <div className="text-[7px] text-foreground/40 uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* GM Quote */}
            <div className="p-3 rounded-xl bg-gradient-to-br from-sky-500/5 via-surface/40 to-orange-500/5 backdrop-blur-sm border border-border/30">
              <div className="flex items-start gap-2">
                <span className="text-sky-400 text-lg leading-none">&ldquo;</span>
                <div>
                  <p className="text-xs text-foreground/60 italic leading-relaxed">{t.hero.quote}</p>
                  <p className="text-[9px] text-foreground/30 mt-1 font-mono">{t.hero.quoteAuthor}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-5 h-7 rounded-full border border-foreground/10 flex justify-center pt-1.5"><div className="w-0.5 h-1.5 bg-sky-500/40 rounded-full" /></motion.div>
      </motion.div>
    </section>
  );
}
