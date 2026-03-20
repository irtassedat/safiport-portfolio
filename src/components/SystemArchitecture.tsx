"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/lib/i18n";

const currentSystemTr = [
  { name: "OPUS TOS", desc: "Konteyner terminali", color: "#0284c7", connected: false },
  { name: "TRASSIR VMS", desc: "500 kamera guvenligi", color: "#f97316", connected: false },
  { name: "SmartFleet", desc: "Vince izleme", color: "#22c55e", connected: false },
  { name: "GullsEye", desc: "Manuel raporlama", color: "#ef4444", connected: false },
  { name: "Excel", desc: "5 terminal verisi", color: "#eab308", connected: false },
];

const currentSystemEn = [
  { name: "OPUS TOS", desc: "Container terminal", color: "#0284c7", connected: false },
  { name: "TRASSIR VMS", desc: "500 camera security", color: "#f97316", connected: false },
  { name: "SmartFleet", desc: "Crane monitoring", color: "#22c55e", connected: false },
  { name: "GullsEye", desc: "Manual reporting", color: "#ef4444", connected: false },
  { name: "Excel", desc: "5 terminal data", color: "#eab308", connected: false },
];

const proposedModulesTr = [
  { name: "Birlesik Dashboard", desc: "6 terminal tek ekran", color: "#0284c7", icon: "M4 6h16M4 10h16M4 14h16M4 18h16" },
  { name: "AI Vision", desc: "OCR, hasar, PPE", color: "#f97316", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
  { name: "Otomasyon", desc: "Rapor & bildirim", color: "#22c55e", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { name: "Entegrasyon", desc: "OPUS + TRASSIR + SF", color: "#8b5cf6", icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" },
  { name: "Holding KPI", desc: "Konsolide analitik", color: "#64748b", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
];

const proposedModulesEn = [
  { name: "Unified Dashboard", desc: "6 terminals, 1 screen", color: "#0284c7", icon: "M4 6h16M4 10h16M4 14h16M4 18h16" },
  { name: "AI Vision", desc: "OCR, damage, PPE", color: "#f97316", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
  { name: "Automation", desc: "Reports & alerts", color: "#22c55e", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { name: "Integration", desc: "OPUS + TRASSIR + SF", color: "#8b5cf6", icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" },
  { name: "Holding KPI", desc: "Consolidated analytics", color: "#64748b", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
];

export default function SystemArchitecture() {
  const { lang } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  const currentSystem = lang === "tr" ? currentSystemTr : currentSystemEn;
  const proposed = lang === "tr" ? proposedModulesTr : proposedModulesEn;

  return (
    <section className="py-24 px-4 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-sky-400 tracking-wider">
            {lang === "tr" ? "SiSTEM MiMARiSi" : "SYSTEM ARCHITECTURE"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 tracking-tight">
            {lang === "tr" ? "Mevcut Durum " : "Current State "}
            <span className="text-gradient">{lang === "tr" ? "vs Onerilen Cozum" : "vs Proposed Solution"}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* BEFORE - Current State */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-surface border border-red-500/20 relative"
          >
            <div className="absolute top-4 right-4 text-[9px] font-mono px-2 py-0.5 rounded-full bg-red-500/10 text-red-400">
              {lang === "tr" ? "MEVCUT" : "CURRENT"}
            </div>
            <h3 className="text-sm font-bold mb-1 text-red-400/80">
              {lang === "tr" ? "Parcali & Silolu Sistemler" : "Fragmented & Siloed Systems"}
            </h3>
            <p className="text-[10px] text-foreground/30 mb-5">
              {lang === "tr" ? "Her sistem kendi basina calisiyor, veri akisi yok" : "Each system works independently, no data flow"}
            </p>

            <div className="space-y-3">
              {currentSystem.map((sys, i) => (
                <motion.div
                  key={sys.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/30"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: sys.color + "15" }}>
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: sys.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold">{sys.name}</div>
                    <div className="text-[9px] text-foreground/30">{sys.desc}</div>
                  </div>
                  {/* Disconnected icon */}
                  <svg className="w-4 h-4 text-red-400/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </motion.div>
              ))}
            </div>

            {/* Animated disconnected lines */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="mt-4 p-3 rounded-lg bg-red-500/5 border border-red-500/10"
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
                <span className="text-[10px] text-red-400/70">{lang === "tr" ? "0 entegrasyon, 0 otomasyon, 0 gercek zamanli veri" : "0 integration, 0 automation, 0 real-time data"}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* AFTER - Proposed Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-2xl bg-surface border border-green-500/20 relative"
          >
            <div className="absolute top-4 right-4 text-[9px] font-mono px-2 py-0.5 rounded-full bg-green-500/10 text-green-400">
              {lang === "tr" ? "ONERiLEN" : "PROPOSED"}
            </div>
            <h3 className="text-sm font-bold mb-1 text-green-400/80">
              {lang === "tr" ? "Birlesik & Akilli Platform" : "Unified & Intelligent Platform"}
            </h3>
            <p className="text-[10px] text-foreground/30 mb-5">
              {lang === "tr" ? "Tum sistemler birbirine bagli, gercek zamanli veri akisi" : "All systems connected, real-time data flow"}
            </p>

            {/* Central hub */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              className="p-3 rounded-xl bg-gradient-to-r from-sky-500/10 via-orange-500/10 to-green-500/10 border border-sky-500/20 mb-4"
            >
              <div className="flex items-center justify-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 rounded-full border-2 border-dashed border-sky-400/40"
                />
                <div className="text-center">
                  <div className="text-xs font-bold text-sky-400">SafiPort Unified Platform</div>
                  <div className="text-[8px] text-foreground/30">{lang === "tr" ? "Merkezi Entegrasyon Katmani" : "Central Integration Layer"}</div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              {proposed.map((mod, i) => (
                <motion.div
                  key={mod.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + i * 0.12, type: "spring", stiffness: 200 }}
                  className="p-2.5 rounded-lg bg-background/50 border border-border/30 hover:border-green-500/30 transition-all group"
                >
                  <div className="w-6 h-6 rounded-md mb-1.5 flex items-center justify-center" style={{ backgroundColor: mod.color + "15" }}>
                    <svg className="w-3.5 h-3.5" style={{ color: mod.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={mod.icon} />
                    </svg>
                  </div>
                  <div className="text-[10px] font-semibold group-hover:text-green-400 transition-colors">{mod.name}</div>
                  <div className="text-[8px] text-foreground/30">{mod.desc}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.8 }}
              className="mt-4 p-3 rounded-lg bg-green-500/5 border border-green-500/10"
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-[10px] text-green-400/70">{lang === "tr" ? "Tam entegrasyon, otomasyon, gercek zamanli dashboard" : "Full integration, automation, real-time dashboard"}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated arrow between */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex items-center justify-center my-8"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-surface border border-border">
            <span className="text-xs text-foreground/40">{lang === "tr" ? "120 gunde donusum" : "Transformation in 120 days"}</span>
            <motion.svg
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
