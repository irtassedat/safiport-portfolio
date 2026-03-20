"use client";

import { useRef } from "react";

export default function CVContent() {
  const cvRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-gray-100 print:bg-white">
      {/* Print Button — hidden on print */}
      <div className="print:hidden fixed top-4 right-4 z-50 flex gap-3">
        <button
          onClick={() => window.print()}
          className="px-5 py-2.5 bg-sky-600 text-white text-sm font-medium rounded-lg hover:bg-sky-700 transition-colors shadow-lg cursor-pointer"
        >
          PDF Olarak İndir
        </button>
        <a
          href="/"
          className="px-5 py-2.5 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-900 transition-colors shadow-lg"
        >
          Portfolyoya Dön
        </a>
      </div>

      {/* CV Container — A4 optimized */}
      <div
        ref={cvRef}
        className="max-w-[210mm] mx-auto bg-white shadow-2xl print:shadow-none print:m-0 print:max-w-none"
        style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif" }}
      >
        {/* =================== HEADER =================== */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-sky-900 text-white px-8 pt-7 pb-5 print:px-8 print:pt-6 print:pb-4">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight print:text-2xl">
                Ebrar Sedat İrtaş
              </h1>
              <p className="text-sky-300 text-sm font-medium mt-0.5 print:text-xs">
                Endüstri Mühendisi & Full-Stack AI Developer
              </p>
            </div>
            <div className="text-right text-[11px] text-gray-300 space-y-0.5 print:text-[10px]">
              <p>İzmit, Kocaeli</p>
              <p>+90 541 524 96 94</p>
              <p>sedatirtas.1@gmail.com</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4 mt-3 text-[11px] print:text-[10px]">
            <span className="text-gray-400">
              <span className="text-gray-500">LinkedIn:</span>{" "}
              <span className="text-sky-300">linkedin.com/in/sedatirtas</span>
            </span>
            <span className="text-gray-400">
              <span className="text-gray-500">GitHub:</span>{" "}
              <span className="text-sky-300">github.com/irtassedat</span>
            </span>
            <span className="text-gray-400">
              <span className="text-gray-500">Portfolyo:</span>{" "}
              <span className="text-sky-300">safiport-portfolio.vercel.app</span>
            </span>
          </div>
        </div>

        {/* =================== BODY =================== */}
        <div className="px-8 py-5 print:px-8 print:py-4">

          {/* PROFIL */}
          <section className="mb-5 print:mb-4">
            <p className="text-[11.5px] text-gray-700 leading-relaxed print:text-[11px] print:leading-relaxed">
              Endüstri Mühendisliği mezunu. Mezuniyet sonrası 2 yılda bağımsız olarak{" "}
              <strong>130.000+ satır production kod</strong> yazdım — 8 servis 7/24 canlı çalışıyor.
              Otonom ajan sistemleri, gerçek zamanlı dashboard&apos;lar, AI entegrasyonları ve çok modüllü
              platform mimarileri geliştirdim. Endüstri mühendisliği altyapım sayesinde sadece kod
              yazmıyorum; iş süreçlerini analiz edip, darboğazları tespit edip, ölçülebilir çözümler
              üretiyorum.
            </p>
          </section>

          {/* METRICS BAR */}
          <section className="mb-5 print:mb-4">
            <div className="grid grid-cols-5 gap-2">
              {[
                { num: "130K+", label: "Satır Kod" },
                { num: "400+", label: "API Endpoint" },
                { num: "100+", label: "DB Modeli" },
                { num: "8", label: "Canlı Servis" },
                { num: "6", label: "Otonom Ajan" },
              ].map((m) => (
                <div key={m.label} className="text-center py-2 rounded bg-slate-50 border border-slate-100 print:bg-slate-50">
                  <div className="text-base font-bold text-slate-800 print:text-sm">{m.num}</div>
                  <div className="text-[9px] text-slate-500 font-medium">{m.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* TWO COLUMN LAYOUT */}
          <div className="grid grid-cols-[1fr_180px] gap-6 print:grid-cols-[1fr_170px] print:gap-5">

            {/* LEFT COLUMN */}
            <div className="space-y-4 print:space-y-3">

              {/* DENEYIM */}
              <section>
                <SectionTitle>Deneyim</SectionTitle>

                <div className="mb-3 print:mb-2.5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-[12px] font-bold text-gray-900 print:text-[11.5px]">
                        Bağımsız Yazılım Geliştirici
                      </h3>
                      <p className="text-[10px] text-sky-600 font-medium">Full-Stack & AI Otomasyon</p>
                    </div>
                    <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap">
                      2024 – Günümüz
                    </span>
                  </div>
                  <ul className="mt-1.5 space-y-0.5">
                    <BulletItem>Linux VPS üzerinde 8 Docker container ile 7/24 production sistemleri yönetiyorum (PostgreSQL, Redis, Nginx, uygulama servisleri)</BulletItem>
                    <BulletItem>6 otonom ajan sistemi kurdum — ödeme doğrulama, envanter takibi, bildirim, workflow yönetimi, fraud detection</BulletItem>
                    <BulletItem>AI API entegrasyonları (Claude, Gemini) ile akıllı otomasyon ve vision sistemleri geliştirdim</BulletItem>
                    <BulletItem>7 kurumsal ve portfolyo web sitesi geliştirip canlıya aldım</BulletItem>
                    <BulletItem>SEO optimizasyonu ile Yandex&apos;te organik #1 sıralama, B2B gelir üreten platform</BulletItem>
                  </ul>
                </div>

                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-[12px] font-bold text-gray-900 print:text-[11.5px]">
                        Prometeon Tyre Group, Kocaeli
                      </h3>
                      <p className="text-[10px] text-sky-600 font-medium">Stajyer — Endüstri Mühendisi (Ar-Ge)</p>
                    </div>
                    <span className="text-[10px] text-gray-400 font-medium">2021</span>
                  </div>
                  <ul className="mt-1.5 space-y-0.5">
                    <BulletItem>Ar-Ge departmanında finansal rapor hazırlama, makine test verilerinin analizi ve yönetime raporlama</BulletItem>
                  </ul>
                </div>
              </section>

              {/* PROJELER */}
              <section>
                <SectionTitle>Öne Çıkan Projeler</SectionTitle>

                <div className="space-y-2.5 print:space-y-2">
                  <ProjectItem
                    name="Gerçek Zamanlı Topluluk Platformu"
                    lines="64.900 satır"
                    stack="Fastify 5 · Next.js 15 · React 19 · PostgreSQL 16 · Redis 7 · Python"
                    bullets={[
                      "164 API endpoint, 29 veritabanı modeli, JWT + Argon2 kimlik doğrulama",
                      "80+ React bileşeni, Python Telegram bot, Claude AI entegrasyonu",
                      "5 Docker container ile 7/24 çalışıyor, B2B gelir üretiyor, Yandex #1",
                    ]}
                  />

                  <ProjectItem
                    name="Akıllı Lojistik & Ödeme Platformu"
                    lines="34.600 satır"
                    stack="pnpm Monorepo · Fastify · React · Grammy · Prisma · Docker"
                    bullets={[
                      "6 otonom ajan: Payment, Order, Inventory, Notification, Signal, Workflow",
                      "25 Prisma modeli, multi-chain ödeme altyapısı, 7 Docker servisi",
                    ]}
                  />

                  <ProjectItem
                    name="Çok Modüllü Bot & AI Ekosistemi"
                    lines="15.059 satır"
                    stack="Python 3.11 · FastAPI · Gemini AI · Telegram Bot API · SQLite"
                    bullets={[
                      "4 mikro servis, ML güvenlik (Isolation Forest, fraud detection)",
                      "FastAPI admin dashboard, SSE real-time monitoring, 31 tablo, 70+ index",
                    ]}
                  />

                  <ProjectItem
                    name="QR Menü SaaS Platformu"
                    lines="12.685 satır"
                    stack="Node.js · Express · PostgreSQL · JWT · bcrypt"
                    bullets={[
                      "184 API endpoint, 46 tablo, 5 kademeli RBAC, çoklu şube yönetimi",
                      "Sadakat programı, SMS OTP, tema motoru — Canlı: qr.sebastianlogic.com",
                    ]}
                  />
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-4 print:space-y-3">

              {/* EĞİTİM */}
              <section>
                <SectionTitle>Eğitim</SectionTitle>

                <div className="mb-2">
                  <h3 className="text-[11px] font-bold text-gray-900 print:text-[10.5px]">
                    Süleyman Demirel Üni.
                  </h3>
                  <p className="text-[10px] text-sky-600 font-medium">Endüstri Mühendisliği</p>
                  <p className="text-[9px] text-gray-400">2017 – 2024</p>
                  <p className="text-[9px] text-gray-500 mt-0.5 leading-snug">
                    Süreç optimizasyonu, kapasite planlama, kuyruk teorisi, istatistiksel modelleme, yalın üretim
                  </p>
                </div>

                <div>
                  <h3 className="text-[11px] font-bold text-gray-900 print:text-[10.5px]">
                    Workintech
                  </h3>
                  <p className="text-[10px] text-sky-600 font-medium">Full-Stack Web Dev.</p>
                  <p className="text-[9px] text-gray-400">2023 – 2024</p>
                  <p className="text-[9px] text-gray-500 mt-0.5">960 saat · 78 proje</p>
                </div>
              </section>

              {/* TEKNİK BECERİLER */}
              <section>
                <SectionTitle>Teknik Beceriler</SectionTitle>
                <div className="space-y-1.5">
                  <SkillGroup label="Frontend" items="React 19, Next.js 16, TypeScript, Tailwind 4, Framer Motion" />
                  <SkillGroup label="Backend" items="Node.js (Fastify, Express), Python (FastAPI), Java/Spring Boot" />
                  <SkillGroup label="Veritabanı" items="PostgreSQL 16, Redis 7, SQLite, Prisma ORM" />
                  <SkillGroup label="AI" items="Claude API/SDK, Gemini AI, MCP, Vision AI, Otonom Ajanlar" />
                  <SkillGroup label="DevOps" items="Docker, Nginx, Linux, Cloudflare, Vercel, VPS" />
                  <SkillGroup label="Entegrasyon" items="REST API, Telegram Bot, Telethon, Grammy, Webhook" />
                </div>
              </section>

              {/* DİLLER */}
              <section>
                <SectionTitle>Diller</SectionTitle>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-gray-700">Türkçe</span>
                    <span className="text-[9px] text-gray-400">Anadil</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-gray-700">İngilizce</span>
                    <span className="text-[9px] text-gray-400">İleri (B2-C1)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-gray-700">Almanca</span>
                    <span className="text-[9px] text-gray-400">Başlangıç (A1)</span>
                  </div>
                </div>
              </section>

              {/* SERTİFİKALAR */}
              <section>
                <SectionTitle>Sertifikalar</SectionTitle>
                <div className="space-y-1">
                  <div>
                    <p className="text-[10px] text-gray-700 font-medium">Front End Development</p>
                    <p className="text-[9px] text-gray-400">Workintech · 2023</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-700 font-medium">Full Stack Development</p>
                    <p className="text-[9px] text-gray-400">Workintech · 2024</p>
                  </div>
                </div>
              </section>

              {/* IE + DEV */}
              <section>
                <SectionTitle>Neden IE + Dev?</SectionTitle>
                <p className="text-[9.5px] text-gray-600 leading-snug print:text-[9px]">
                  Endüstri mühendisliği bana süreçleri görmekten darboğazları bulmayı,
                  yazılım da bunları çözen sistemleri kurmayı verdi.
                  Bu kombinasyon operasyonel verimliliği
                  yazılımla ölçeklendirebilen çözümler üretmemi sağlıyor.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          html, body {
            width: 210mm;
            height: 297mm;
          }
        }
      `}</style>
    </div>
  );
}

/* ========== SUB-COMPONENTS ========== */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-1 mb-2 print:text-[10px] print:mb-1.5">
      {children}
    </h2>
  );
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-1.5 text-[10.5px] text-gray-600 leading-snug print:text-[10px]">
      <span className="w-1 h-1 rounded-full bg-sky-500 mt-[5px] shrink-0" />
      <span>{children}</span>
    </li>
  );
}

function ProjectItem({
  name,
  lines,
  stack,
  bullets,
}: {
  name: string;
  lines: string;
  stack: string;
  bullets: string[];
}) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <h3 className="text-[11.5px] font-bold text-gray-900 print:text-[11px]">{name}</h3>
        <span className="text-[8px] font-mono text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded print:bg-sky-50">
          {lines}
        </span>
      </div>
      <p className="text-[9px] text-gray-400 font-mono mt-0.5">{stack}</p>
      <ul className="mt-1 space-y-0.5">
        {bullets.map((b, i) => (
          <BulletItem key={i}>{b}</BulletItem>
        ))}
      </ul>
    </div>
  );
}

function SkillGroup({ label, items }: { label: string; items: string }) {
  return (
    <div>
      <span className="text-[9px] font-bold text-slate-700 uppercase tracking-wide">{label}</span>
      <p className="text-[9.5px] text-gray-500 leading-snug print:text-[9px]">{items}</p>
    </div>
  );
}
