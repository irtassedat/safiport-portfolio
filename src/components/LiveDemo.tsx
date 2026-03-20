"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/i18n";

function useAnimatedNumber(target: number, duration: number = 2000) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target, duration]);

  return { value, start: () => setStarted(true) };
}

const terminalsTr = [
  { name: "Konteyner Terminali", type: "OPUS TOS", cap: "1.5M TEU", status: "online" as const, eff: 96, color: "#0284c7", detail: "4 STS + 4 MHC + 16 RTG vince" },
  { name: "Ro-Ro Terminali", type: "Arac Operasyonu", cap: "700K arac/yil", status: "online" as const, eff: 89, color: "#f97316", detail: "4 rihtim, 15K park alani" },
  { name: "Genel Yuk & Proje", type: "Cok Amacli", cap: "5 rihtim, 1,500m", status: "online" as const, eff: 84, color: "#64748b", detail: "25,000 m\u00B2 kapali depo" },
  { name: "Tank Terminali", type: "Sivi Yuk", cap: "65,030 m\u00B3", status: "online" as const, eff: 91, color: "#22c55e", detail: "34 tank, 8 es zamanli dolum" },
  { name: "Intermodal Demiryolu", type: "Demiryolu", cap: "600K islem/yil", status: "online" as const, eff: 72, color: "#8b5cf6", detail: "8 hat, rihtimlara kadar uzaniyor" },
  { name: "Dok & Bakim", type: "Gemi Bakim", cap: "Onarim & Bakiim", status: "maintenance" as const, eff: 45, color: "#eab308", detail: "Planlanan kapasite artisi" },
];

const terminalsEn = [
  { name: "Container Terminal", type: "OPUS TOS", cap: "1.5M TEU", status: "online" as const, eff: 96, color: "#0284c7", detail: "4 STS + 4 MHC + 16 RTG cranes" },
  { name: "Ro-Ro Terminal", type: "Vehicle Operations", cap: "700K vehicles/yr", status: "online" as const, eff: 89, color: "#f97316", detail: "4 berths, 15K parking slots" },
  { name: "General Cargo & Project", type: "Multi-Purpose", cap: "5 berths, 1,500m", status: "online" as const, eff: 84, color: "#64748b", detail: "25,000 m\u00B2 covered warehouse" },
  { name: "Tank Terminal", type: "Liquid Cargo", cap: "65,030 m\u00B3", status: "online" as const, eff: 91, color: "#22c55e", detail: "34 tanks, 8 simultaneous filling" },
  { name: "Intermodal Railway", type: "Railway", cap: "600K transactions/yr", status: "online" as const, eff: 72, color: "#8b5cf6", detail: "8 lines extending to berths" },
  { name: "Dock & Maintenance", type: "Ship Repair", cap: "Repair & Maint.", status: "maintenance" as const, eff: 45, color: "#eab308", detail: "Planned capacity increase" },
];

const alertsTr = [
  { time: "14:32", type: "warning", msg: "Vince A3 — SmartFleet verileri 48 saat icinde bakim gerektirdigini gosteriyor. OPUS TOS'a otomatik planlama onerisi gonderildi. [OPUS \u2194 SmartFleet Entegrasyon]" },
  { time: "14:28", type: "info", msg: "TRASSIR Kamera #247 — Konteyner MSCU7142589 uzerinde hasar tespit edildi. ISO 6346 OCR ile otomatik kayit olusturuldu. [AI Vision Modulu]" },
  { time: "14:15", type: "success", msg: "MSC Luna yanaslma tamamladi (Rihtim 2). 2,847 TEU manifesto eslesmesi %100. Gulece raporu otomatik olusturuldu. [Otomatik Raporlama]" },
  { time: "14:02", type: "info", msg: "Ro-Ro Terminal — Son 1 saatte 84 arac yuklemesi. Park alani dolulugu %67. Tahmini bos alan: 4,950 slot. [Kapasite Tahmin Modeli]" },
  { time: "13:48", type: "warning", msg: "Tank T-12 seviye sensoru — %92 doluluk. Otomatik bosaltma emri olusturuldu. API 650 uyumluluk kontrolu tamamlandi. [Tank IoT Entegrasyon]" },
  { time: "13:35", type: "success", msg: "Intermodal — 47 vagon Ankara hattina sevk edildi. Transit suresi tahmini: 14 saat. Demiryolu kapasite kullanimi: %72. [Intermodal Planlama]" },
  { time: "13:22", type: "info", msg: "PPE Izleme — Saha calisan uyumlulugu: %98.4 (baret), %97.1 (yelek). 3 uyari olusturuldu, saha amirine bildirildi. [AI PPE Modulu]" },
  { time: "13:10", type: "success", msg: "Vardiya Raporu (06:00-14:00) — 847 konteyner hareketi, 12 gemi operasyonu, 0 is guvenligi olayii. PDF ve email otomatik gonderildi. [Gulece Degisimi]" },
];

const alertsEn = [
  { time: "14:32", type: "warning", msg: "Crane A3 \u2014 SmartFleet data shows maintenance needed within 48 hours. Auto planning suggestion sent to OPUS TOS. [OPUS \u2194 SmartFleet Integration]" },
  { time: "14:28", type: "info", msg: "TRASSIR Camera #247 \u2014 Damage detected on container MSCU7142589. Auto record created via ISO 6346 OCR. [AI Vision Module]" },
  { time: "14:15", type: "success", msg: "MSC Luna berthing complete (Berth 2). 2,847 TEU manifest match 100%. G\u00FCle\u00E7e report auto-generated. [Automated Reporting]" },
  { time: "14:02", type: "info", msg: "Ro-Ro Terminal \u2014 84 vehicle loadings in last hour. Parking occupancy 67%. Estimated free slots: 4,950. [Capacity Prediction Model]" },
  { time: "13:48", type: "warning", msg: "Tank T-12 level sensor \u2014 92% full. Auto discharge order created. API 650 compliance check passed. [Tank IoT Integration]" },
  { time: "13:35", type: "success", msg: "Intermodal \u2014 47 wagons dispatched to Ankara line. Est. transit: 14 hours. Railway capacity usage: 72%. [Intermodal Planning]" },
  { time: "13:22", type: "info", msg: "PPE Monitoring \u2014 Field worker compliance: 98.4% (helmet), 97.1% (vest). 3 warnings issued, notified shift supervisor. [AI PPE Module]" },
  { time: "13:10", type: "success", msg: "Shift Report (06:00-14:00) \u2014 847 container movements, 12 vessel ops, 0 safety incidents. PDF & email auto-sent. [G\u00FCle\u00E7e Replacement]" },
];

const integrationsTr = [
  { system: "OPUS TOS", status: "Entegre", color: "#22c55e", desc: "Konteyner planlama & yard yonetimi" },
  { system: "TRASSIR VMS", status: "Entegre", color: "#22c55e", desc: "500 kamera AI vision + guvenlik" },
  { system: "Kalmar SmartFleet", status: "Entegre", color: "#22c55e", desc: "16 RTG vince izleme & bakim" },
  { system: "Gulece", status: "Devre Disi", color: "#ef4444", desc: "Otomatik raporlama ile degistirildi" },
];

const integrationsEn = [
  { system: "OPUS TOS", status: "Integrated", color: "#22c55e", desc: "Container planning & yard management" },
  { system: "TRASSIR VMS", status: "Integrated", color: "#22c55e", desc: "500 camera AI vision + security" },
  { system: "Kalmar SmartFleet", status: "Integrated", color: "#22c55e", desc: "16 RTG crane monitoring & maint." },
  { system: "G\u00FCle\u00E7e", status: "Replaced", color: "#ef4444", desc: "Replaced by automated reporting" },
];

const kpiColors = ["#0284c7", "#f97316", "#64748b", "#22c55e"];

export default function LiveDemo() {
  const { lang, t } = useLang();

  const containers = useAnimatedNumber(1500000);
  const vehicles = useAnimatedNumber(700000);
  const tankVol = useAnimatedNumber(65030);
  const uptime = useAnimatedNumber(9997);

  const terminals = lang === "tr" ? terminalsTr : terminalsEn;
  const alerts = lang === "tr" ? alertsTr : alertsEn;
  const integrations = lang === "tr" ? integrationsTr : integrationsEn;

  const kpiValues = [
    `${(containers.value / 1000000).toFixed(1)}M`,
    `${(vehicles.value / 1000).toFixed(0)}K`,
    `${(tankVol.value / 1000).toFixed(1)}K m\u00B3`,
    `${(uptime.value / 100).toFixed(2)}%`,
  ];

  return (
    <section id="demo" className="py-24 px-4 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-mono text-orange-400 tracking-wider">
            {t.demo.section}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 tracking-tight">
            {t.demo.titleA}
            <span className="text-gradient">{t.demo.titleB}</span>
          </h2>
          <p className="text-foreground/50 mt-3 text-sm max-w-3xl mx-auto">
            {t.demo.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => {
            containers.start();
            vehicles.start();
            tankVol.start();
            uptime.start();
          }}
          viewport={{ once: true }}
          className="rounded-2xl bg-surface border border-border overflow-hidden"
        >
          <div className="flex items-center justify-between px-6 py-3 border-b border-border bg-surface-light/30">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-600 to-orange-500 flex items-center justify-center">
                <span className="text-white text-[9px] font-bold">SP</span>
              </div>
              <span className="text-sm font-semibold">SafiPort Unified Operations Center</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400">v2.0 Enterprise</span>
            </div>
            <div className="flex items-center gap-4 text-[10px] text-foreground/30">
              <span>21 Mar 2026 14:35</span>
              <span className="flex items-center gap-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sky-500" />
                </span>
                {t.demo.live}
              </span>
            </div>
          </div>

          <div className="p-5">
            {/* KPIs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
              {t.demo.kpis.map((kpi, i) => (
                <div key={kpi.label} className="p-3 rounded-lg bg-background/50 border border-border/30">
                  <div className="text-[9px] text-foreground/25 uppercase tracking-wider">{kpi.label}</div>
                  <div className="text-lg font-bold mt-1" style={{ color: kpiColors[i] }}>{kpiValues[i]}</div>
                  <div className="text-[9px] text-foreground/20 mt-0.5">{kpi.sub}</div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-12 gap-4">
              {/* 6 Terminals */}
              <div className="lg:col-span-5">
                <div className="text-[10px] font-mono text-foreground/25 mb-2 tracking-wider">
                  {t.demo.terminalStatus}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {terminals.map((p, i) => {
                    const statusCfg = {
                      online: { dot: "bg-green-400", label: t.demo.statusLabels.online },
                      maintenance: { dot: "bg-yellow-400", label: t.demo.statusLabels.maintenance },
                      warning: { dot: "bg-red-400", label: t.demo.statusLabels.warning },
                    };
                    const s = statusCfg[p.status];
                    return (
                      <motion.div
                        key={p.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04 }}
                        className="p-2.5 rounded-lg bg-background/50 border border-border/30"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-medium truncate">{p.name}</span>
                          <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                        </div>
                        <div className="text-[9px] text-foreground/20 mb-0.5">
                          {p.type} &middot; {p.cap}
                        </div>
                        <div className="text-[8px] text-foreground/15 mb-1.5">{p.detail}</div>
                        <div className="h-1 bg-surface-light rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${p.eff}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.05 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: p.color }}
                          />
                        </div>
                        <div className="text-[8px] text-foreground/15 mt-0.5">{p.eff > 0 ? `${p.eff}%` : s.label}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* AI Alerts */}
              <div className="lg:col-span-4">
                <div className="text-[10px] font-mono text-foreground/25 mb-2 tracking-wider">
                  {t.demo.aiAlerts}
                </div>
                <div className="space-y-1.5 max-h-[420px] overflow-y-auto pr-1">
                  {alerts.map((a, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.06 }}
                      className="p-2.5 rounded-lg bg-background/50 border border-border/30"
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-[9px] text-foreground/15 font-mono">{a.time}</span>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          a.type === "warning" ? "bg-yellow-400" : a.type === "success" ? "bg-green-400" : "bg-blue-400"
                        }`} />
                      </div>
                      <div className="text-[10px] text-foreground/45 leading-relaxed">{a.msg}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Integration Status */}
              <div className="lg:col-span-3">
                <div className="text-[10px] font-mono text-foreground/25 mb-2 tracking-wider">
                  {t.demo.integrationStatus}
                </div>
                <div className="space-y-2">
                  {integrations.map((m, i) => (
                    <motion.div
                      key={m.system}
                      initial={{ opacity: 0, x: 5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className="p-2.5 rounded-lg bg-background/50 border border-border/30"
                    >
                      <div className="flex items-center justify-between mb-0.5">
                        <div className="text-[10px] font-medium">{m.system}</div>
                        <span className="text-[8px] px-1.5 py-0.5 rounded-full" style={{ backgroundColor: m.color + "15", color: m.color }}>{m.status}</span>
                      </div>
                      <div className="text-[9px] text-foreground/25">{m.desc}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Port Analytics */}
                <div className="mt-3">
                  <div className="text-[10px] font-mono text-foreground/25 mb-2 tracking-wider">
                    {t.demo.portAnalytics}
                  </div>
                  {[
                    { name: lang === "tr" ? "Liman Alani" : "Port Area", value: "1.2M m\u00B2", color: "#0284c7" },
                    { name: lang === "tr" ? "Rihtim Uzunlugu" : "Berth Length", value: "2,272m", color: "#f97316" },
                    { name: lang === "tr" ? "Su Derinligi" : "Water Depth", value: "18m", color: "#64748b" },
                    { name: lang === "tr" ? "Calisan" : "Employees", value: "250+", color: "#22c55e" },
                  ].map((p) => (
                    <div key={p.name} className="flex items-center justify-between p-1.5 rounded-md mb-1">
                      <span className="text-[9px] text-foreground/30">{p.name}</span>
                      <span className="text-[10px] font-bold" style={{ color: p.color }}>{p.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[10px] text-foreground/15 mt-4"
        >
          {t.demo.disclaimer}
        </motion.p>
      </div>
    </section>
  );
}
