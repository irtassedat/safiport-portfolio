"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLang } from "@/lib/i18n";

interface QA {
  question: string;
  answer: string;
}

const qaTr: QA[] = [
  {
    question: "SafiPort'a Somut Neler Katabilirim?",
    answer: "1) Birlesik Operasyon Merkezi — 6 terminali tek ekranda izleyen gercek zamanli dashboard. OPUS TOS, TRASSIR VMS, Kalmar SmartFleet entegrasyonu.\n2) GullsEye Degisimi — Manuel raporlamayi tamamen otomatik hale getiren sistem. PDF/Excel export, email/Telegram bildirim.\n3) AI Vision Sistemi — 500 kamera uzerinde konteyner OCR, hasar tespiti, PPE uyumluluk izleme.\n4) Holding KPI Portali — SafiPort + Bilecik Cimento + Corum Seker verilerini birlestiren konsolide dashboard.\n5) Endustri Muhendisligi — Vince verimliligi analizi, rihtim kapasite optimizasyonu, kuyruk modelleme.",
  },
  {
    question: "GullsEye Raporlama Sistemini Nasil Degistiririm?",
    answer: "Adim 1: GullsEye'nin urettigi tum rapor formatlarini analiz etme (hafta 1-2).\nAdim 2: OPUS TOS API'sinden konteyner verilerini, SmartFleet'ten vince verilerini, TRASSIR'dan kamera event'lerini cekecek veri katmani (hafta 3-4).\nAdim 3: Otomatik rapor olusturma modulu — gunluk vardiya raporu, haftalik ozet, aylik performans. GullsEye formatina birebir uyumlu PDF/Excel cikti (hafta 5-8).\nAdim 4: Email + Telegram + dashboard uzerinden gercek zamanli erisim. Yonetim, GullsEye acmadan tum verileri anlik gorur (hafta 9-12).\nSonuc: GullsEye'ye bagimlilik sifira iner, veri gecikmesi ortadan kalkar.",
  },
  {
    question: "6 Terminali Nasil Birlestiririm?",
    answer: "Konteyner terminali icin OPUS TOS API mevcut — direkt entegrasyon. Diger 5 terminal icin:\n* Ro-Ro: Arac giris/cikis, park dolulugu, yukleme kuyrugu — IoT sensorler + kamera feed\n* Tank: Seviye sensorleri, dolum/bosaltma loglar, API 650 uyumluluk — SCADA/PLC entegrasyon\n* Genel Yuk: Rihtim dolulugu, vince atamalari, depo envanter — operasyon formlari dijitallestirme\n* Intermodal: Vagon takibi, hat kapasitesi, transit sureleri — demiryolu API entegrasyon\n* Dok: Bakim takvimi, gemi durumu — is emri sistemi\nTum veriler PostgreSQL + Redis'te normalize edilir, tek dashboard'dan izlenir.",
  },
  {
    question: "500 Kameradan AI Nasil Calisir?",
    answer: "Mevcut TRASSIR VMS altyapisi zaten goruntu akisi sagliyor. Uzerine eklenecek AI katmani:\n1) Konteyner OCR — ISO 6346 kodlarini otomatik okuma, manifesto eslestirme\n2) Hasar Tespiti — Konteyner yuzeyindeki ezik, yirtik, korozyon tespiti\n3) PPE Izleme — Baret, yelek, eldiven takip. Uyumsuzlukta anlik uyari\n4) Kuyruk Analizi — TIR bekleme suresi tahmini, kapi trafik optimizasyonu\n5) Vince Operasyon Analitigi — Siklus suresi, bos hamle orani, verimlilik\nHer model oncelikle en yogun 10-20 kamerada pilot yapilir, basarili olunca olceklendirilir. Tahmini maliyet: ~$0.05/gun (bulut AI API) veya on-premise GPU ile $0.",
  },
  {
    question: "Neden Bir Endustri Muhendisi + Developer?",
    answer: "Cogu developer liman operasyonlarini anlamaz — kodu yazar ama konteyner throughput, rihtim kapasite planlama, vince siklus suresi gibi kavramlar yabanci. Cogu endustri muhendisi ise API yazamaz, dashboard gelistiremez, AI modeli entegre edemez.\n\nBen:\n* IE: Surec optimizasyonu, kapasite planlama, kuyruk teorisi, yalin uretim, istatistiksel modelleme\n* Dev: 130K+ satir kod, 400+ endpoint, PostgreSQL/Redis, Docker, AI entegrasyon\n* Kombinasyon: Hem sorunu operasyonel perspektiften analiz edebilir, hem de cozumu sifirdan yazabilirim. Danismana veya dis vendor'a ihtiyac yok.",
  },
  {
    question: "Rakiplere Karsi Nasil One Geceriz?",
    answer: "DP World Evyap'in Cisco smart port'u var, Yilport'un SAP Atlas'i var. SafiPort ise dijital olgunlukta 2-3 yil geride. Ama avantaj var:\n1) Temel altyapi hazir — OPUS TOS, TRASSIR 500 kamera, Kalmar SmartFleet zaten kurulu. Sifirdan baslama yok.\n2) Cok amacli terminal avantaji — 6-in-1 yapisi, birlestirici platform kuruldugunda rakiplerden daha zengin veri seti olusturur.\n3) Hiz — Buyuk vendor (Cisco, SAP) 18-24 ay surer. Ben 120 gunde MVP teslim edebilirim.\n4) Maliyet — SAP S/4HANA lisansi yillik $500K+. Ozel gelistirilmis platform 10x daha ucuz.\n5) Esneklik — Vendor lock-in yok, SafiPort'a ozel, dilediginiz zaman degistirilebilir.",
  },
];

const qaEn: QA[] = [
  {
    question: "What Can I Concretely Bring to SafiPort?",
    answer: "1) Unified Operations Center \u2014 Real-time dashboard monitoring all 6 terminals. OPUS TOS, TRASSIR VMS, Kalmar SmartFleet integration.\n2) GullsEye Replacement \u2014 System that fully automates manual reporting. PDF/Excel export, email/Telegram notifications.\n3) AI Vision System \u2014 Container OCR, damage detection, PPE compliance monitoring on 500 cameras.\n4) Holding KPI Portal \u2014 Consolidated dashboard unifying SafiPort + Bilecik Cement + Corum Sugar data.\n5) Industrial Engineering \u2014 Crane efficiency analysis, berth capacity optimization, queue modeling.",
  },
  {
    question: "How Would I Replace the GullsEye Reporting System?",
    answer: "Step 1: Analyze all report formats GullsEye currently produces (week 1-2).\nStep 2: Build data layer pulling container data from OPUS TOS API, crane data from SmartFleet, camera events from TRASSIR (week 3-4).\nStep 3: Automated report generation module \u2014 daily shift report, weekly summary, monthly performance. PDF/Excel output format-compatible with GullsEye (week 5-8).\nStep 4: Real-time access via email + Telegram + dashboard. Management sees all data instantly without opening GullsEye (week 9-12).\nResult: GullsEye dependency drops to zero, data delay eliminated.",
  },
  {
    question: "How Would I Unify All 6 Terminals?",
    answer: "Container terminal has OPUS TOS API \u2014 direct integration. For the other 5:\n* Ro-Ro: Vehicle entry/exit, parking occupancy, loading queue \u2014 IoT sensors + camera feed\n* Tank: Level sensors, fill/discharge logs, API 650 compliance \u2014 SCADA/PLC integration\n* General Cargo: Berth occupancy, crane assignments, warehouse inventory \u2014 digitizing operation forms\n* Intermodal: Wagon tracking, line capacity, transit times \u2014 railway API integration\n* Dock: Maintenance calendar, ship status \u2014 work order system\nAll data normalized in PostgreSQL + Redis, monitored from a single dashboard.",
  },
  {
    question: "How Would AI Work on 500 Cameras?",
    answer: "The existing TRASSIR VMS infrastructure already provides video streams. The AI layer on top:\n1) Container OCR \u2014 Auto-read ISO 6346 codes, manifest matching\n2) Damage Detection \u2014 Dents, tears, corrosion on container surfaces\n3) PPE Monitoring \u2014 Helmet, vest, glove tracking. Instant alerts on non-compliance\n4) Queue Analysis \u2014 Truck wait time prediction, gate traffic optimization\n5) Crane Operation Analytics \u2014 Cycle time, empty moves ratio, efficiency\nEach model piloted on 10-20 busiest cameras first, then scaled. Estimated cost: ~$0.05/day (cloud AI API) or $0 with on-premise GPU.",
  },
  {
    question: "Why an Industrial Engineer + Developer?",
    answer: "Most developers don't understand port operations \u2014 they write code but container throughput, berth capacity planning, crane cycle time are foreign concepts. Most industrial engineers can't write APIs, build dashboards, or integrate AI models.\n\nI can:\n* IE: Process optimization, capacity planning, queuing theory, lean manufacturing, statistical modeling\n* Dev: 130K+ lines of code, 400+ endpoints, PostgreSQL/Redis, Docker, AI integration\n* Combination: I can analyze the problem from an operational perspective AND build the solution from scratch. No consultant or external vendor needed.",
  },
  {
    question: "How Can We Get Ahead of Competitors?",
    answer: "DP World Evyap has Cisco smart port, Yilport has SAP Atlas. SafiPort is 2-3 years behind in digital maturity. But there are advantages:\n1) Foundation is ready \u2014 OPUS TOS, TRASSIR 500 cameras, Kalmar SmartFleet already installed. No starting from zero.\n2) Multi-purpose terminal advantage \u2014 6-in-1 structure creates richer dataset than competitors once unified.\n3) Speed \u2014 Big vendors (Cisco, SAP) take 18-24 months. I can deliver MVP in 120 days.\n4) Cost \u2014 SAP S/4HANA license is $500K+/year. Custom-built platform is 10x cheaper.\n5) Flexibility \u2014 No vendor lock-in, built specifically for SafiPort, modifiable anytime.",
  },
];

export default function AiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAnswer, setActiveAnswer] = useState<string | null>(null);
  const { lang } = useLang();
  const qa = lang === "tr" ? qaTr : qaEn;

  return (
    <>
      <motion.button
        onClick={() => { setIsOpen(!isOpen); setActiveAnswer(null); }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-sky-600 to-orange-500 shadow-lg shadow-sky-500/20 flex items-center justify-center hover:scale-105 transition-transform"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-h-[560px] rounded-2xl bg-surface border border-border shadow-2xl shadow-black/20 overflow-hidden flex flex-col"
          >
            <div className="px-4 py-3 border-b border-border bg-gradient-to-r from-sky-500/10 to-orange-500/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-600 to-orange-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">SI</span>
                </div>
                <div>
                  <div className="text-sm font-semibold">Sedat Irtas</div>
                  <div className="text-[10px] text-foreground/40">
                    {lang === "tr" ? "SafiPort Icin Detayli Bilgi" : "Detailed Info for SafiPort"}
                  </div>
                </div>
                <span className="ml-auto relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {activeAnswer ? (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <button
                    onClick={() => setActiveAnswer(null)}
                    className="text-[10px] text-sky-400 mb-3 flex items-center gap-1 hover:underline"
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    {lang === "tr" ? "Sorulara Don" : "Back to Questions"}
                  </button>
                  <div className="p-3 rounded-xl bg-background/50 border border-border/50">
                    <p className="text-xs text-foreground/70 leading-relaxed whitespace-pre-line">{activeAnswer}</p>
                  </div>
                </motion.div>
              ) : (
                <div className="space-y-2">
                  <p className="text-xs text-foreground/40 mb-3">
                    {lang === "tr" ? "SafiPort hakkinda detayli bilgi almak icin bir soru secin:" : "Select a question for detailed SafiPort information:"}
                  </p>
                  {qa.map((item, i) => (
                    <motion.button
                      key={item.question}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      onClick={() => setActiveAnswer(item.answer)}
                      className="w-full text-left p-3 rounded-xl border border-border/50 hover:border-sky-500/30 hover:bg-sky-500/5 transition-all text-xs text-foreground/70 flex items-center gap-2"
                    >
                      <span className="text-sky-400">&rarr;</span>
                      {item.question}
                    </motion.button>
                  ))}
                </div>
              )}
            </div>

            <div className="px-4 py-2 border-t border-border bg-surface/50 text-center">
              <span className="text-[9px] text-foreground/20">
                {lang === "tr" ? "SafiPort Derince basvurusu icin hazirlanmistir" : "Prepared for SafiPort Derince application"}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
