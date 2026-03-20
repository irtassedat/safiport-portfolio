"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/lib/i18n";

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.5 }}
      className={`mb-16 ${className}`}
    >
      {children}
    </motion.section>
  );
}

function AnimatedBar({ value, color, delay = 0 }: { value: number; color: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="h-2 bg-background/50 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${value}%` } : {}}
        transition={{ duration: 1, delay, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

export default function CaseStudyContent() {
  const { lang } = useLang();
  const tr = lang === "tr";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-orange-500/5" />
        <div className="max-w-4xl mx-auto px-4 py-20 relative z-10">
          <motion.a
            href="/"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 text-xs text-foreground/40 hover:text-sky-400 transition-colors mb-8"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            {tr ? "Portfolyoya Don" : "Back to Portfolio"}
          </motion.a>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400">CASE STUDY</span>
              <span className="text-[10px] font-mono text-foreground/20">Mart 2026</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight mb-4">
              SafiPort Derince<br />
              <span className="text-gradient">{tr ? "Dijital Donusum Teklifi" : "Digital Transformation Proposal"}</span>
            </h1>
            <p className="text-foreground/50 text-lg max-w-2xl leading-relaxed">
              {tr
                ? "Turkiye'nin en buyuk cok amacli limaninin parcali dijital altyapisini nasil birlestirip, 120 gunde somut deger uretecegime dair detayli teknik teklif."
                : "Detailed technical proposal on how I would unify Turkey's largest multi-purpose port's fragmented digital infrastructure and deliver concrete value in 120 days."
              }
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-xs">
              <div className="w-5 h-5 rounded bg-gradient-to-br from-sky-600 to-orange-500 flex items-center justify-center">
                <span className="text-white text-[7px] font-bold">SI</span>
              </div>
              <span>Sedat Irtas</span>
              <span className="text-foreground/30">&middot;</span>
              <span className="text-foreground/40">{tr ? "Endustri Muhendisi & Full-Stack Developer" : "Industrial Engineer & Full-Stack Developer"}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-24">

        {/* Executive Summary */}
        <Section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 text-sm font-bold">1</span>
            {tr ? "Yonetici Ozeti" : "Executive Summary"}
          </h2>
          <div className="p-6 rounded-xl bg-surface border border-border space-y-4">
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-background/50 border border-border/30 text-center">
                <div className="text-2xl font-bold text-sky-400">6</div>
                <div className="text-xs text-foreground/50 mt-1">{tr ? "Terminal — tek platform yok" : "Terminals — no unified platform"}</div>
              </div>
              <div className="p-4 rounded-lg bg-background/50 border border-border/30 text-center">
                <div className="text-2xl font-bold text-orange-400">3</div>
                <div className="text-xs text-foreground/50 mt-1">{tr ? "Silolu sistem (OPUS, TRASSIR, SmartFleet)" : "Siloed systems (OPUS, TRASSIR, SmartFleet)"}</div>
              </div>
              <div className="p-4 rounded-lg bg-background/50 border border-border/30 text-center">
                <div className="text-2xl font-bold text-red-400">0</div>
                <div className="text-xs text-foreground/50 mt-1">{tr ? "In-house yazilimci" : "In-house developers"}</div>
              </div>
            </div>
            <p className="text-sm text-foreground/60 leading-relaxed">
              {tr
                ? "SafiPort Derince, 1.2 milyon m² alana yayilan 6 farkli terminaliyle Turkiye'nin en buyuk cok amacli limani. Fiziksel altyapi $1B+ yatirimla guclu. Ancak dijital katman parcali: OPUS TOS sadece konteyner terminalini kapsiyor, diger 5 terminal GullsEye ve Excel ile raporlaniyor, 3 ana sistem birbiriyle konusmuyor, 20 kislik IT ekibinde hicbir yazilimci yok. Bu teklif, 120 gun icinde bu parcali yapiyi birlestirip somut, olculebilir deger ureten bir dijital platform insa etme planini icerir."
                : "SafiPort Derince is Turkey's largest multi-purpose port with 6 different terminals across 1.2 million m². Physical infrastructure is strong with $1B+ investment. But the digital layer is fragmented: OPUS TOS only covers the container terminal, other 5 terminals use GullsEye and Excel for reporting, 3 core systems don't communicate, and the 20-person IT team has zero developers. This proposal outlines a plan to unify this fragmented structure and build a digital platform that delivers concrete, measurable value within 120 days."
              }
            </p>
          </div>
        </Section>

        {/* Problem Deep Dive */}
        <Section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 text-sm font-bold">2</span>
            {tr ? "Sorun Analizi — Detayli" : "Problem Analysis — Detailed"}
          </h2>

          <div className="space-y-4">
            {/* Terminal Coverage Gap */}
            <div className="p-5 rounded-xl bg-surface border border-border">
              <h3 className="text-sm font-bold mb-3">{tr ? "Terminal Dijital Kapsam Boşluğu" : "Terminal Digital Coverage Gap"}</h3>
              <p className="text-xs text-foreground/50 mb-4">
                {tr
                  ? "OPUS TOS 2019'da devreye alindi ama sadece konteyner terminalini kapsiyor. Diger 5 terminal operasyonel gorünürlük açısından karanlıkta."
                  : "OPUS TOS went live in 2019 but only covers the container terminal. The other 5 terminals are in darkness for operational visibility."
                }
              </p>
              <div className="space-y-3">
                {[
                  { name: tr ? "Konteyner Terminali" : "Container Terminal", coverage: 95, status: "OPUS TOS", color: "#22c55e" },
                  { name: tr ? "Ro-Ro Terminali (700K arac/yil)" : "Ro-Ro Terminal (700K vehicles/yr)", coverage: 10, status: "GullsEye + Excel", color: "#ef4444" },
                  { name: tr ? "Tank Terminali (65,030 m³)" : "Tank Terminal (65,030 m³)", coverage: 15, status: "SCADA + Excel", color: "#ef4444" },
                  { name: tr ? "Genel Yuk (5 rihtim, 1,500m)" : "General Cargo (5 berths, 1,500m)", coverage: 5, status: "Excel", color: "#ef4444" },
                  { name: tr ? "Intermodal Demiryolu (600K islem)" : "Intermodal Railway (600K trans.)", coverage: 8, status: "Excel", color: "#ef4444" },
                  { name: tr ? "Dok & Bakim" : "Dock & Maintenance", coverage: 3, status: "Excel", color: "#ef4444" },
                ].map((t, i) => (
                  <div key={t.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-foreground/60">{t.name}</span>
                      <span className="text-[10px] font-mono" style={{ color: t.color }}>{t.coverage}% — {t.status}</span>
                    </div>
                    <AnimatedBar value={t.coverage} color={t.color} delay={i * 0.1} />
                  </div>
                ))}
              </div>
            </div>

            {/* System Silo Problem */}
            <div className="p-5 rounded-xl bg-surface border border-border">
              <h3 className="text-sm font-bold mb-3">{tr ? "Sistem Entegrasyon Durumu" : "System Integration Status"}</h3>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { from: "OPUS TOS", to: "TRASSIR VMS", status: tr ? "Baglantiı yok" : "No connection", color: "#ef4444" },
                  { from: "OPUS TOS", to: "SmartFleet", status: tr ? "Baglantiı yok" : "No connection", color: "#ef4444" },
                  { from: "TRASSIR VMS", to: "SmartFleet", status: tr ? "Baglantiı yok" : "No connection", color: "#ef4444" },
                ].map((link) => (
                  <motion.div
                    key={link.from + link.to}
                    whileHover={{ scale: 1.02 }}
                    className="p-3 rounded-lg bg-background/50 border border-red-500/20"
                  >
                    <div className="text-[10px] font-mono text-foreground/40">{link.from}</div>
                    <div className="flex items-center gap-1 my-1.5">
                      <div className="flex-1 h-px bg-red-500/30 border-t border-dashed border-red-500/30" />
                      <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      <div className="flex-1 h-px bg-red-500/30 border-t border-dashed border-red-500/30" />
                    </div>
                    <div className="text-[10px] font-mono text-foreground/40">{link.to}</div>
                    <div className="text-[9px] text-red-400 mt-1">{link.status}</div>
                  </motion.div>
                ))}
              </div>
              <p className="text-xs text-foreground/40 mt-3">
                {tr
                  ? "Ornek: SmartFleet, Vince A3'un 48 saat icinde bakima ihtiyac duyacagini biliyor. Ama OPUS TOS bu bilgiyi planlama verisinde goremediginden, vince bosaltma ortasinda arizalanma riski devam ediyor."
                  : "Example: SmartFleet knows Crane A3 needs maintenance within 48 hours. But since OPUS TOS can't see this in its planning data, the risk of crane failure mid-unloading continues."
                }
              </p>
            </div>

            {/* GullsEye Reporting Problem */}
            <div className="p-5 rounded-xl bg-surface border border-border">
              <h3 className="text-sm font-bold mb-3">{tr ? "GullsEye & Manuel Raporlama Sorunu" : "GullsEye & Manual Reporting Problem"}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-[10px] font-mono text-red-400/80 uppercase tracking-wider mb-2">{tr ? "Mevcut Süreç" : "Current Process"}</div>
                  <div className="space-y-2">
                    {(tr ? [
                      "Vardiya sonu — operasyon sefi GullsEye'a veri girer",
                      "Her terminal kendi formatinda rapor uretir",
                      "Birlestirme icin Excel'de manuel kopyala-yapistir",
                      "Konsolide rapor en erken ertesi gun hazir",
                      "Yonetim karari 24-48 saat gecikmeli",
                    ] : [
                      "End of shift — ops supervisor enters data into GullsEye",
                      "Each terminal produces reports in its own format",
                      "Manual copy-paste in Excel for consolidation",
                      "Consolidated report ready next day at earliest",
                      "Management decisions delayed 24-48 hours",
                    ]).map((step, i) => (
                      <div key={i} className="flex items-start gap-2 text-[10px] text-foreground/50">
                        <span className="w-4 h-4 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 text-[8px] font-bold mt-0.5">{i + 1}</span>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-green-400/80 uppercase tracking-wider mb-2">{tr ? "Onerilen Süreç" : "Proposed Process"}</div>
                  <div className="space-y-2">
                    {(tr ? [
                      "OPUS + TRASSIR + SmartFleet'ten otomatik veri akisi",
                      "6 terminal verisi tek veritabaninda normalize",
                      "Gercek zamanli dashboard — anlik KPI'lar",
                      "Otomatik PDF/Excel rapor — GullsEye formatinda",
                      "Yonetim karari anlik — sifir gecikme",
                    ] : [
                      "Automatic data flow from OPUS + TRASSIR + SmartFleet",
                      "6 terminal data normalized in single database",
                      "Real-time dashboard — instant KPIs",
                      "Auto PDF/Excel reports — GullsEye format-compatible",
                      "Management decisions instant — zero delay",
                    ]).map((step, i) => (
                      <div key={i} className="flex items-start gap-2 text-[10px] text-foreground/50">
                        <span className="w-4 h-4 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center shrink-0 text-[8px] font-bold mt-0.5">{i + 1}</span>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Proposed Solution */}
        <Section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 text-sm font-bold">3</span>
            {tr ? "Onerilen Cozum Mimarisi" : "Proposed Solution Architecture"}
          </h2>

          <div className="p-6 rounded-xl bg-surface border border-border">
            <div className="space-y-6">
              {[
                {
                  layer: tr ? "Veri Toplama Katmani" : "Data Collection Layer",
                  color: "#0284c7",
                  items: tr
                    ? ["OPUS TOS REST API (konteyner verisi)", "TRASSIR VMS SDK (kamera eventleri, AI ciktilari)", "Kalmar SmartFleet API (vince telemetri)", "IoT sensorler (tank seviye, sicaklik, nem)", "SCADA/PLC baglantisi (tank terminali)", "Demiryolu API (vagon takip)"]
                    : ["OPUS TOS REST API (container data)", "TRASSIR VMS SDK (camera events, AI outputs)", "Kalmar SmartFleet API (crane telemetry)", "IoT sensors (tank level, temp, humidity)", "SCADA/PLC connection (tank terminal)", "Railway API (wagon tracking)"],
                },
                {
                  layer: tr ? "Isleme & Entegrasyon Katmani" : "Processing & Integration Layer",
                  color: "#f97316",
                  items: tr
                    ? ["Event-driven middleware (Redis Pub/Sub)", "Veri normalizasyonu & dogrulama", "Cross-system korelasyon (vince ariza + planlama)", "Anomali tespiti (Isolation Forest / z-score)", "Otomatik rapor olusturma motoru", "Bildirim & eskalasyon sistemi"]
                    : ["Event-driven middleware (Redis Pub/Sub)", "Data normalization & validation", "Cross-system correlation (crane fault + planning)", "Anomaly detection (Isolation Forest / z-score)", "Automated report generation engine", "Notification & escalation system"],
                },
                {
                  layer: tr ? "Sunum & Erisim Katmani" : "Presentation & Access Layer",
                  color: "#22c55e",
                  items: tr
                    ? ["Web Dashboard (Next.js + React, responsive)", "Mobil uyumlu saha gorunumu", "Rol tabanli erisim (RBAC — GM, terminal sefi, operasyon)", "PDF/Excel export (GullsEye format uyumlu)", "Email + Telegram bildirim kanallari", "REST API (3. parti entegrasyon icin)"]
                    : ["Web Dashboard (Next.js + React, responsive)", "Mobile-friendly field view", "Role-based access (RBAC — GM, terminal chief, operations)", "PDF/Excel export (GullsEye format compatible)", "Email + Telegram notification channels", "REST API (for 3rd party integration)"],
                },
                {
                  layer: tr ? "AI & Analitik Katmani" : "AI & Analytics Layer",
                  color: "#8b5cf6",
                  items: tr
                    ? ["Konteyner OCR (ISO 6346, TRASSIR kameralarindan)", "Hasar tespiti (bilgisayarli goru modeli)", "PPE uyumluluk izleme (baret, yelek)", "Kestirimci bakim (SmartFleet verisiyle)", "Kapasite tahmin modeli (mevsimsellik + trend)", "Kuyruk optimizasyonu (TIR + gemi bekleme)"]
                    : ["Container OCR (ISO 6346, from TRASSIR cameras)", "Damage detection (computer vision model)", "PPE compliance monitoring (helmet, vest)", "Predictive maintenance (with SmartFleet data)", "Capacity prediction model (seasonality + trend)", "Queue optimization (truck + vessel waiting)"],
                },
              ].map((layer, i) => (
                <motion.div
                  key={layer.layer}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-lg border border-border/50"
                  style={{ borderLeftWidth: 3, borderLeftColor: layer.color }}
                >
                  <h4 className="text-sm font-bold mb-3" style={{ color: layer.color }}>{layer.layer}</h4>
                  <div className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
                    {layer.items.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-[10px] text-foreground/50">
                        <span className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: layer.color }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Tech Stack */}
        <Section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 text-sm font-bold">4</span>
            {tr ? "Teknoloji Secimi & Gerekce" : "Technology Selection & Rationale"}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { tech: "Next.js + React", why: tr ? "Dashboard frontend — server components, ISR, responsive" : "Dashboard frontend — server components, ISR, responsive", exp: "7 portfolyo + 64,900 satirlik platform" },
              { tech: "Node.js (Fastify)", why: tr ? "API gateway — yuksek throughput, dusuk latency" : "API gateway — high throughput, low latency", exp: "164 endpoint + 34,600 satirlik monorepo" },
              { tech: "PostgreSQL + Redis", why: tr ? "Iliskisel veri + gercek zamanli cache" : "Relational data + real-time cache", exp: "100+ model, 46 tablo, Redis AOF" },
              { tech: "Python (FastAPI)", why: tr ? "AI/ML modelleri, bilgisayarli goru" : "AI/ML models, computer vision", exp: "15,000+ satir, Gemini AI, Isolation Forest" },
              { tech: "Docker + Nginx", why: tr ? "Konteynerize deployment, reverse proxy" : "Containerized deployment, reverse proxy", exp: "8 canli container, Cloudflare CDN" },
              { tech: "Claude API / Gemini", why: tr ? "Dogal dil raporlama, anomali aciklama" : "Natural language reporting, anomaly explanation", exp: "MCP Server, Claude SDK, 6 otonom ajan" },
            ].map((item, i) => (
              <motion.div
                key={item.tech}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-4 rounded-lg bg-surface border border-border/50"
              >
                <div className="text-sm font-bold text-sky-400 mb-1">{item.tech}</div>
                <div className="text-[10px] text-foreground/50 mb-2">{item.why}</div>
                <div className="text-[9px] text-orange-400/60 font-mono">{tr ? "Deneyimim" : "My experience"}: {item.exp}</div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ROI Estimate */}
        <Section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-sm font-bold">5</span>
            {tr ? "Beklenen Getiri (ROI Tahmini)" : "Expected Return (ROI Estimate)"}
          </h2>
          <div className="p-6 rounded-xl bg-surface border border-border">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { metric: tr ? "Raporlama suresi" : "Reporting time", before: tr ? "24-48 saat (manuel)" : "24-48 hours (manual)", after: tr ? "Anlik (otomatik)" : "Instant (automated)", improvement: "~99%" },
                { metric: tr ? "Veri tutarliligi" : "Data consistency", before: tr ? "Dusuk (Excel kopyala-yapistir)" : "Low (Excel copy-paste)", after: tr ? "Yuksek (tek kaynak)" : "High (single source)", improvement: "~95%" },
                { metric: tr ? "Dis vendor bagimililigi" : "Vendor dependency", before: tr ? "Her degisiklik icin uluslararasi vendor" : "International vendor for every change", after: tr ? "In-house gelistirme" : "In-house development", improvement: tr ? "Hiz: 10x" : "Speed: 10x" },
                { metric: tr ? "Terminal gorunurlugu" : "Terminal visibility", before: tr ? "1/6 terminal (sadece konteyner)" : "1/6 terminals (container only)", after: tr ? "6/6 terminal (tam kapsam)" : "6/6 terminals (full coverage)", improvement: "6x" },
                { metric: tr ? "Vince bakim tahmini" : "Crane maintenance prediction", before: tr ? "Reaktif (arizalaninca)" : "Reactive (when it breaks)", after: tr ? "Proaktif (48 saat onceden)" : "Proactive (48 hours ahead)", improvement: tr ? "Duruş azalma" : "Downtime reduction" },
                { metric: tr ? "Konteyner hasar tespiti" : "Container damage detection", before: tr ? "Manuel kontrol" : "Manual inspection", after: tr ? "AI otomatik (500 kamera)" : "AI automated (500 cameras)", improvement: tr ? "Hiz: 100x" : "Speed: 100x" },
              ].map((item, i) => (
                <motion.div
                  key={item.metric}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-3 rounded-lg bg-background/50 border border-border/30"
                >
                  <div className="text-xs font-semibold mb-2">{item.metric}</div>
                  <div className="flex items-center gap-2 text-[10px]">
                    <span className="text-red-400 line-through">{item.before}</span>
                    <svg className="w-3 h-3 text-foreground/20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    <span className="text-green-400">{item.after}</span>
                  </div>
                  <div className="text-[9px] text-emerald-400 font-mono mt-1">{item.improvement}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Timeline */}
        <Section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 text-sm font-bold">6</span>
            {tr ? "120 Gunluk Uygulama Takvimi" : "120-Day Implementation Timeline"}
          </h2>
          <div className="space-y-3">
            {[
              { phase: 1, weeks: "1-2", title: tr ? "Sistem Kesfi & Audit" : "System Discovery & Audit", color: "#0284c7", pct: 100, deliverable: tr ? "Cikti: Teknik audit raporu, API erisim dogrulama" : "Deliverable: Technical audit report, API access verification" },
              { phase: 2, weeks: "3-4", title: tr ? "Veri Mimarisi & API Katmani" : "Data Architecture & API Layer", color: "#f97316", pct: 100, deliverable: tr ? "Cikti: Veritabani semasi, calis API entegrasyonlari" : "Deliverable: Database schema, working API integrations" },
              { phase: 3, weeks: "5-8", title: tr ? "Birlesik Dashboard MVP" : "Unified Dashboard MVP", color: "#22c55e", pct: 100, deliverable: tr ? "Cikti: 6 terminal tek ekran, canli KPI, GullsEye rapor ciktisi" : "Deliverable: 6-terminal single screen, live KPIs, GullsEye report output" },
              { phase: 4, weeks: "9-12", title: tr ? "Otomatik Raporlama" : "Automated Reporting", color: "#8b5cf6", pct: 100, deliverable: tr ? "Cikti: GullsEye'i tamamen devre disi birakan otomasyon" : "Deliverable: Automation that fully replaces GullsEye" },
              { phase: 5, weeks: "13-16", title: tr ? "AI Vision Pilot" : "AI Vision Pilot", color: "#ec4899", pct: 75, deliverable: tr ? "Cikti: 10 kamerada OCR + hasar tespiti pilot" : "Deliverable: OCR + damage detection pilot on 10 cameras" },
              { phase: 6, weeks: "17-20", title: tr ? "Holding KPI & Olceklendirme" : "Holding KPI & Scaling", color: "#64748b", pct: 50, deliverable: tr ? "Cikti: Holding konsolide dashboard, dokumantasyon" : "Deliverable: Holding consolidated dashboard, documentation" },
            ].map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-4 rounded-xl bg-surface border border-border/50"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded" style={{ backgroundColor: phase.color + "15", color: phase.color }}>
                    {tr ? "Faz" : "Phase"} {phase.phase}
                  </span>
                  <span className="text-[10px] text-foreground/30 font-mono">{tr ? "Hafta" : "Week"} {phase.weeks}</span>
                  <span className="text-xs font-semibold flex-1">{phase.title}</span>
                </div>
                <div className="text-[10px] text-foreground/40 mb-2">{phase.deliverable}</div>
                <AnimatedBar value={phase.pct} color={phase.color} delay={i * 0.1} />
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Why Me */}
        <Section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 text-sm font-bold">7</span>
            {tr ? "Neden Ben?" : "Why Me?"}
          </h2>
          <div className="p-6 rounded-xl bg-gradient-to-br from-sky-500/5 via-surface to-orange-500/5 border border-border space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-sky-400">{tr ? "Endustri Muhendisligi" : "Industrial Engineering"}</h4>
                {(tr ? [
                  "Surec optimizasyonu & darboğaz analizi",
                  "Kapasite planlama & kuyruk teorisi",
                  "Istatistiksel modelleme & tahmin",
                  "Yalin uretim (Lean) & 6 Sigma",
                  "Operasyonel verimlilik perspektifi",
                ] : [
                  "Process optimization & bottleneck analysis",
                  "Capacity planning & queuing theory",
                  "Statistical modeling & forecasting",
                  "Lean manufacturing & 6 Sigma",
                  "Operational efficiency perspective",
                ]).map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[10px] text-foreground/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-orange-400">{tr ? "Full-Stack Development" : "Full-Stack Development"}</h4>
                {[
                  { label: "Production Code", value: "130,000+" },
                  { label: "API Endpoints", value: "400+" },
                  { label: "Database Models", value: "100+" },
                  { label: tr ? "Otonom Ajan" : "Autonomous Agents", value: "6" },
                  { label: "Docker Containers", value: "8 (live)" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between text-[10px]">
                    <span className="text-foreground/50">{item.label}</span>
                    <span className="text-orange-400 font-mono font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-3 rounded-lg bg-background/30 border border-border/30 mt-4">
              <p className="text-xs text-foreground/50 leading-relaxed">
                {tr
                  ? "Bu kombinasyon nadir: cogu developer liman operasyonlarini anlamaz, cogu endustri muhendisi yazilim gelistiremez. Ben her ikisini yapabilirim — hem sorunu operasyonel perspektiften analiz edip, hem de cozumu sifirdan yazabilirim. Dis vendor veya danismana ihtiyac yok."
                  : "This combination is rare: most developers don't understand port operations, most industrial engineers can't build software. I can do both — analyze the problem from an operational perspective and build the solution from scratch. No external vendor or consultant needed."
                }
              </p>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-8 rounded-2xl bg-gradient-to-r from-sky-500/10 via-orange-500/10 to-sky-500/10 border border-border"
        >
          <h3 className="text-lg font-bold mb-3">{tr ? "Gorusmek Isterim" : "I'd Like to Discuss"}</h3>
          <p className="text-sm text-foreground/50 max-w-lg mx-auto mb-6">
            {tr
              ? "Bu teklif SafiPort Derince'nin gercek verilerine dayanarak hazirlanmistir. Detaylari yuz yuze veya online gorusmede aciklamaktan memnuniyet duyarim."
              : "This proposal is based on real data from SafiPort Derince. I'd be happy to discuss details in person or online."
            }
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="mailto:sedatirtas.1@gmail.com" className="px-6 py-3 bg-gradient-to-r from-sky-600 to-orange-500 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
              sedatirtas.1@gmail.com
            </a>
            <a href="/" className="px-6 py-3 bg-surface border border-border rounded-xl text-sm hover:border-sky-500/30 transition-colors">
              {tr ? "Portfolyoya Don" : "Back to Portfolio"}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
