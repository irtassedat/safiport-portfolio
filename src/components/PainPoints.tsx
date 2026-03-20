"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useLang } from "@/lib/i18n";

const icons = [
  <svg key="report" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
  <svg key="terminal" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
  <svg key="disconnect" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
  <svg key="team" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  <svg key="camera" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
  <svg key="chart" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
];

const severityColors: Record<string, string> = {
  "Kritik": "#ef4444",
  "Critical": "#ef4444",
  "Yuksek": "#f97316",
  "High": "#f97316",
  "Orta-Yuksek": "#eab308",
  "Medium-High": "#eab308",
  "Stratejik": "#0284c7",
  "Strategic": "#0284c7",
};

export default function PainPoints() {
  const { t, lang } = useLang();
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="analysis" className="py-24 px-4 relative bg-grid">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <span className="text-sm font-mono text-red-400/80 tracking-wider">
            {t.painPoints.section}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 tracking-tight">
            {t.painPoints.titleA}
            <span className="text-gradient">{t.painPoints.titleB}</span>
          </h2>
          <p className="text-foreground/40 mt-3 text-sm max-w-2xl mx-auto">
            {t.painPoints.subtitle}
          </p>
        </motion.div>

        {/* Animated severity summary */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mt-8 mb-8"
        >
          {[
            { label: lang === "tr" ? "Kritik" : "Critical", count: 2, color: "#ef4444" },
            { label: lang === "tr" ? "Yuksek" : "High", count: 2, color: "#f97316" },
            { label: lang === "tr" ? "Orta-Yuksek" : "Medium-High", count: 1, color: "#eab308" },
            { label: lang === "tr" ? "Stratejik" : "Strategic", count: 1, color: "#0284c7" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border/50"
            >
              <motion.span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: s.color }}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              />
              <span className="text-[10px] font-medium" style={{ color: s.color }}>{s.count}x {s.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.painPoints.items.map((item, i) => {
            const isExpanded = expanded === i;
            const color = severityColors[item.severity] || "#64748b";
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setExpanded(isExpanded ? null : i)}
                className="p-5 rounded-xl bg-surface border border-border hover:border-opacity-60 transition-all cursor-pointer group"
                style={{ borderColor: isExpanded ? color + "60" : undefined }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: color + "15", color }}>
                      {icons[i]}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm leading-tight">{item.title}</h3>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-full mt-0.5 inline-block" style={{ backgroundColor: color + "15", color }}>
                        {item.severity}
                      </span>
                    </div>
                  </div>
                  <svg className={`w-4 h-4 text-foreground/20 transition-transform ${isExpanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>

                <p className="text-xs text-foreground/50 leading-relaxed mb-3">{item.desc}</p>

                <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2 border-t border-border/50 pt-3 overflow-hidden"
                  >
                    <div className="p-2 rounded-lg bg-red-500/5">
                      <div className="text-[9px] text-red-400 font-mono uppercase tracking-wider mb-0.5">{lang === "tr" ? "Mevcut Durum" : "Current State"}</div>
                      <div className="text-[10px] text-foreground/50">{item.current}</div>
                    </div>
                    <div className="p-2 rounded-lg bg-yellow-500/5">
                      <div className="text-[9px] text-yellow-400 font-mono uppercase tracking-wider mb-0.5">{lang === "tr" ? "Etki" : "Impact"}</div>
                      <div className="text-[10px] text-foreground/50">{item.impact}</div>
                    </div>
                    <div className="p-2 rounded-lg bg-green-500/5">
                      <div className="text-[9px] text-green-400 font-mono uppercase tracking-wider mb-0.5">{lang === "tr" ? "Benim Cozumum" : "My Solution"}</div>
                      <div className="text-[10px] text-foreground/50">{item.solution}</div>
                    </div>
                  </motion.div>
                )}
                </AnimatePresence>

                {!isExpanded && (
                  <div className="text-[9px] text-foreground/20 font-mono text-center pt-1">
                    {lang === "tr" ? "Detay icin tikla" : "Click for details"}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
