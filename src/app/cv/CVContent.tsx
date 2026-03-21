"use client";

export default function CVContent() {
  return (
    <div className="min-h-screen bg-gray-100 print:bg-white">
      {/* Print Button */}
      <div className="print:hidden fixed top-4 right-4 z-50 flex gap-3">
        <button
          onClick={() => window.print()}
          className="px-5 py-2.5 bg-sky-600 text-white text-sm font-medium rounded-lg hover:bg-sky-700 transition-colors shadow-lg cursor-pointer"
        >
          PDF Olarak İndir
        </button>
        <a href="/" className="px-5 py-2.5 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-900 transition-colors shadow-lg">
          Portfolyoya Dön
        </a>
      </div>

      {/* A4 Container */}
      <div
        className="max-w-[210mm] mx-auto bg-white shadow-2xl print:shadow-none print:m-0 print:max-w-none"
        style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif" }}
      >
        {/* ══════════ HEADER ══════════ */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-sky-900 text-white px-7 pt-5 pb-3.5 print:px-7 print:pt-4 print:pb-3">
          <div className="flex items-center gap-4">
            <div className="shrink-0 relative">
              <img
                src="https://github.com/irtassedat.png"
                alt="Sedat İrtaş"
                className="w-[68px] h-[68px] rounded-full border-[3px] border-sky-400/60 object-cover print:w-[62px] print:h-[62px]"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-4.5 h-4.5 bg-emerald-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-[21px] font-bold tracking-tight leading-tight">Ebrar Sedat İrtaş</h1>
              <p className="text-sky-300 text-[12px] font-semibold mt-0.5">Endüstri Mühendisi & Full-Stack AI Developer</p>
              <div className="flex flex-wrap gap-x-3 mt-1.5 text-[9px] text-gray-300">
                <span className="flex items-center gap-1">
                  <svg className="w-2.5 h-2.5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  İzmit, Kocaeli
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-2.5 h-2.5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  +90 541 524 96 94
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-2.5 h-2.5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  sedatirtas.1@gmail.com
                </span>
              </div>
            </div>
          </div>
          {/* Link Buttons */}
          <div className="flex flex-wrap gap-1.5 mt-2.5">
            <LinkButton href="https://linkedin.com/in/sedatirtas" color="sky" icon="linkedin" label="LinkedIn" />
            <LinkButton href="https://github.com/irtassedat" color="gray" icon="github" label="GitHub · 54 Repo" />
            <LinkButton href="https://safiport-portfolio.vercel.app" color="orange" icon="globe" label="Portfolyo" />
            <LinkButton href="https://safiport-portfolio.vercel.app/case-study" color="emerald" icon="doc" label="Case Study" />
          </div>
        </div>

        {/* ══════════ METRICS ══════════ */}
        <div className="px-7 pt-2.5 pb-0 print:pt-2">
          <div className="grid grid-cols-6 gap-1.5">
            {[
              { num: "150K+", label: "Satır Kod" },
              { num: "400+", label: "API Endpoint" },
              { num: "100+", label: "DB Modeli" },
              { num: "11", label: "Docker Container" },
              { num: "7+", label: "Otonom Ajan" },
              { num: "7", label: "Teslim Edilen Site" },
            ].map((m) => (
              <div key={m.label} className="text-center py-1.5 rounded-lg bg-gradient-to-b from-slate-50 to-white border border-slate-100">
                <div className="text-[13px] font-bold text-sky-700">{m.num}</div>
                <div className="text-[7px] text-slate-400 font-medium uppercase tracking-wide leading-tight">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════ BODY ══════════ */}
        <div className="px-7 pt-2.5 pb-4 print:pt-2 print:pb-3">
          <div className="grid grid-cols-[1fr_168px] gap-5 print:grid-cols-[1fr_162px] print:gap-4">

            {/* ▌LEFT COLUMN */}
            <div className="space-y-2 print:space-y-1.5">

              {/* PROFIL */}
              <section>
                <SectionTitle icon="user">Profil</SectionTitle>
                <p className="text-[9.5px] text-gray-600 leading-relaxed print:text-[9px]">
                  Endüstri Mühendisliği mezunu. Son 2 yılda bağımsız olarak enterprise seviye production sistemler geliştirdim —
                  Linux VPS üzerinde 11 Docker container 7/24 çalışıyor. Otonom ajan mimarileri, AI vision pipeline&apos;ları,
                  çok modüllü bot ekosistemleri ve SaaS platformları kurup işletiyorum.
                  IE altyapımla süreç optimizasyonu ve darboğaz analizini yazılım çözümlerine dönüştürüyorum.
                </p>
              </section>

              {/* DENEYİM */}
              <section>
                <SectionTitle icon="briefcase">Profesyonel Deneyim</SectionTitle>
                <div className="mb-1.5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-[10.5px] font-bold text-gray-900">Bağımsız Yazılım Mühendisi</h3>
                      <p className="text-[8.5px] text-sky-600 font-semibold">Full-Stack · AI Otomasyon · DevOps · Otonom Sistemler</p>
                    </div>
                    <DateBadge>2024 – Günümüz</DateBadge>
                  </div>
                  <ul className="mt-1 space-y-[2px]">
                    <BulletItem>Fastify 5, Next.js 16, FastAPI, Spring Boot ile production API mimarileri; PostgreSQL 16, Redis 7, Prisma ORM ile 100+ model, 70+ index</BulletItem>
                    <BulletItem>Claude Haiku Vision AI ile görüntü tanıma pipeline&apos;ı, Gemini 2.0 Flash ile doğal dil üretimi, MCP Server entegrasyonları</BulletItem>
                    <BulletItem>7 otonom ajan sistemi: ödeme doğrulama, envanter takibi, bildirim yönetimi, workflow orkestrasyon, DLQ retry, Signal senkronizasyon</BulletItem>
                    <BulletItem>Docker Compose ile 11 container, Nginx reverse proxy, Cloudflare CDN, Tailscale VPN — Ubuntu VPS üzerinde 7/24 production yönetimi</BulletItem>
                    <BulletItem>Isolation Forest anomali tespiti, adaptive intelligence scoring, fraud detection pipeline, multi-brand veri izolasyonu</BulletItem>
                    <BulletItem>Otonom SEO monitoring: canonical/meta tag validasyon, broken link tespiti, dinamik sitemap, IndexNow entegrasyonu, Yandex/Google sıralama takibi</BulletItem>
                  </ul>
                </div>
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-[10.5px] font-bold text-gray-900">Prometeon Tyre Group, Kocaeli</h3>
                      <p className="text-[8.5px] text-sky-600 font-semibold">Stajyer — Endüstri Mühendisi · Ar-Ge</p>
                    </div>
                    <DateBadge>2021</DateBadge>
                  </div>
                  <ul className="mt-1 space-y-[2px]">
                    <BulletItem>Ar-Ge finansal raporlama, makine test verisi analizi, üst yönetime sunum hazırlama</BulletItem>
                  </ul>
                </div>
              </section>

              {/* PROJELER */}
              <section>
                <SectionTitle icon="folder">Projeler</SectionTitle>
                <div className="space-y-1.5 print:space-y-1">

                  <ProjectItem
                    name="Gerçek Zamanlı Topluluk Platformu"
                    lines="64.900"
                    stack="Fastify 5 · Next.js 15 · React 19 · PostgreSQL 16 · Redis 7 · Python · Docker"
                    bullets={[
                      "164 REST endpoint, 29 Prisma modeli, JWT + Argon2, gamifikasyon motoru (puan/ödül/çekiliş/ticket event/referral)",
                      "Python Telegram bot (12 handler), Claude AI chatbot, otonom monitoring agent (13 görev: uptime, SEO audit, trafik analiz)",
                      "5 Docker container, SSE bildirim, IndexNow SEO, B2B gelir üreten canlı platform, Yandex #1 organik sıralama",
                    ]}
                  />

                  <ProjectItem
                    name="Akıllı Lojistik & Ödeme Platformu"
                    lines="34.600"
                    stack="pnpm Monorepo · Fastify · React · Grammy · Prisma · Signal API · Docker (7 servis)"
                    bullets={[
                      "7 otonom ajan: Payment (blockchain izleme), Order (yaşam döngüsü), Inventory (stok tahmin), Notification, Signal, Workflow, DLQ Retry",
                      "HD Wallet (BIP32/39/44) — 6 blockchain: Bitcoin, Ethereum, BSC, Polygon, Tron, Litecoin; 72 saat anlaşmazlık sistemi",
                      "Grammy Telegram bot (11 komut), React MiniApp (WebApp), 25 Prisma modeli, coğrafi sorgulama, çoklu marka izolasyonu",
                    ]}
                  />

                  <ProjectItem
                    name="Çok Modüllü Bot & AI Ekosistemi"
                    lines="26.469"
                    stack="Python 3.11 · FastAPI · Gemini 2.0 Flash · Telethon · python-telegram-bot · SQLite"
                    bullets={[
                      "4 mikro servis: Admin Dashboard (FastAPI + 39 Jinja2 template + SSE), Verification Bot, Autopost Bot, Member Bot",
                      "Gemini AI canlı sohbet üretimi (API key rotation, rate limiting), akıllı kupon generator, mesaj harvesting, grup keşfi",
                      "ML güvenlik: Isolation Forest, adaptive scoring, fraud detection (IP/username/clientID dedup), 31 tablo, 70+ index, multi-brand izolasyon",
                    ]}
                  />

                  <ProjectItem
                    name="Otonom Veri Toplama & AI Vision Sistemi"
                    lines="5.000+"
                    stack="FastAPI · Playwright · Claude Haiku Vision · PostgreSQL · Docker"
                    bullets={[
                      "7/24 otonom scraping pipeline (35dk döngü), Claude Haiku ile görüntü tanıma ($0.05/gün), sonuç doğrulama, sıralama sistemi",
                      "86 kaynak takibi, 428+ veri noktası, otomatik başlatma, Playwright headless tarayıcı, SOCKS5 proxy rotasyonu",
                    ]}
                  />

                  <ProjectItem
                    name="QR Menü SaaS Platformu"
                    lines="12.685"
                    stack="Node.js · Express · PostgreSQL · JWT · bcrypt · NETGSM"
                    github="github.com/irtassedat/qrmenu"
                    live="qr.sebastianlogic.com"
                    bullets={[
                      "184 endpoint, 46 tablo, 5 kademeli RBAC, JSONB tema motoru, 4 tier sadakat programı, SMS OTP (NETGSM), çoklu şube",
                    ]}
                  />

                  <ProjectItem
                    name="E-Ticaret Platformu (Full-Stack)"
                    lines="—"
                    stack="React · Redux · Java Spring Boot · Spring Security · JPA · PostgreSQL"
                    github="github.com/irtassedat/ecommerce"
                    bullets={[
                      "Ürün katalog, sepet, ödeme frontend + RESTful backend API, Spring Data JPA, stok/sipariş yönetimi",
                    ]}
                  />
                </div>
              </section>
            </div>

            {/* ▌RIGHT COLUMN */}
            <div className="space-y-2 print:space-y-1.5">

              {/* EĞİTİM */}
              <section>
                <SectionTitle icon="graduation">Eğitim</SectionTitle>
                <div className="space-y-1.5">
                  <div className="pl-2 border-l-2 border-sky-300">
                    <h3 className="text-[10px] font-bold text-gray-900">Süleyman Demirel Üni.</h3>
                    <p className="text-[8.5px] text-sky-600 font-semibold">Endüstri Mühendisliği</p>
                    <p className="text-[7.5px] text-gray-400">2017 – 2024</p>
                    <p className="text-[7.5px] text-gray-500 mt-0.5 leading-snug">
                      Süreç optimizasyonu, kapasite planlama, kuyruk teorisi, yalın üretim, istatistiksel modelleme
                    </p>
                  </div>
                  <div className="pl-2 border-l-2 border-sky-300">
                    <h3 className="text-[10px] font-bold text-gray-900">Workintech</h3>
                    <p className="text-[8.5px] text-sky-600 font-semibold">Full-Stack Web Dev.</p>
                    <p className="text-[7.5px] text-gray-400">2023 – 2024 · 960 saat · 78 proje</p>
                  </div>
                </div>
              </section>

              {/* TEKNİK BECERİLER */}
              <section>
                <SectionTitle icon="chip">Teknik Yetkinlikler</SectionTitle>
                <div className="space-y-1">
                  <SkillGroup label="Frontend" items={["React 19", "Next.js 16", "TypeScript", "Tailwind 4", "Framer Motion"]} />
                  <SkillGroup label="Backend" items={["Fastify 5", "Express", "FastAPI", "Spring Boot", "Prisma"]} />
                  <SkillGroup label="Veritabanı" items={["PostgreSQL 16", "Redis 7", "SQLite"]} />
                  <SkillGroup label="AI & ML" items={["Claude API", "Gemini AI", "Vision AI", "MCP", "Isolation Forest"]} />
                  <SkillGroup label="DevOps" items={["Docker", "Nginx", "Linux", "Cloudflare", "Vercel", "Tailscale"]} />
                  <SkillGroup label="Bot & Scraping" items={["Telegram Bot", "Telethon", "Grammy", "Playwright"]} />
                </div>
              </section>

              {/* ALTYAPI */}
              <section>
                <SectionTitle icon="server">Canlı Altyapı</SectionTitle>
                <div className="rounded-lg bg-gradient-to-b from-slate-50 to-white border border-slate-100 p-2">
                  <div className="grid grid-cols-2 gap-1.5 text-center">
                    <div>
                      <div className="text-[12px] font-bold text-sky-700">11</div>
                      <div className="text-[7px] text-slate-400 uppercase">Docker Container</div>
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-sky-700">3</div>
                      <div className="text-[7px] text-slate-400 uppercase">PostgreSQL DB</div>
                    </div>
                  </div>
                  <p className="text-[7.5px] text-gray-500 mt-1.5 leading-snug">
                    Ubuntu 24.04 VPS, Tailscale VPN, 7/24 uptime monitoring, health check, otomatik yeniden başlatma
                  </p>
                </div>
              </section>

              {/* DİLLER */}
              <section>
                <SectionTitle icon="globe">Diller</SectionTitle>
                <div className="space-y-1">
                  <LangItem lang="Türkçe" level="Anadil" pct={100} />
                  <LangItem lang="İngilizce" level="İleri (B2-C1)" pct={75} />
                  <LangItem lang="Almanca" level="Başlangıç (A1)" pct={15} />
                </div>
              </section>

              {/* SERTİFİKALAR */}
              <section>
                <SectionTitle icon="award">Sertifikalar</SectionTitle>
                <div className="space-y-0.5">
                  <CertItem name="Front End Development" org="Workintech · 2023" />
                  <CertItem name="Full Stack Development" org="Workintech · 2024" />
                </div>
              </section>

              {/* IE + DEV */}
              <section>
                <SectionTitle icon="puzzle">IE + Developer</SectionTitle>
                <p className="text-[8px] text-gray-600 leading-snug">
                  Endüstri mühendisliği süreçleri analiz etmeyi, yazılım ise bunları ölçeklenebilir sistemlere dönüştürmeyi sağlıyor.
                  Bu nadir kombinasyon operasyonel verimliliği teknolojiyle buluşturan çözümler üretmemi mümkün kılıyor.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          @page { size: A4; margin: 0; }
          body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          html, body { width: 210mm; height: 297mm; }
        }
      `}</style>
    </div>
  );
}

/* ════════════ SUB-COMPONENTS ════════════ */

function LinkButton({ href, color, icon, label }: { href: string; color: string; icon: string; label: string }) {
  const colors: Record<string, string> = {
    sky: "bg-sky-500/20 text-sky-200 border-sky-400/30 hover:bg-sky-500/30",
    gray: "bg-white/10 text-gray-200 border-white/20 hover:bg-white/20",
    orange: "bg-orange-500/20 text-orange-200 border-orange-400/30 hover:bg-orange-500/30",
    emerald: "bg-emerald-500/20 text-emerald-200 border-emerald-400/30 hover:bg-emerald-500/30",
  };
  const icons: Record<string, React.ReactNode> = {
    linkedin: <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
    github: <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>,
    globe: <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
    doc: <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
  };
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[8.5px] font-semibold border transition-colors ${colors[color]}`}>
      {icons[icon]}
      {label}
      <svg className="w-2 h-2 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
    </a>
  );
}

function SectionTitle({ children, icon }: { children: React.ReactNode; icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    user: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
    briefcase: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.193 23.193 0 0112 15c-3.183 0-6.22-.64-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    folder: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />,
    graduation: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />,
    chip: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />,
    globe: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />,
    award: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />,
    puzzle: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />,
    server: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />,
  };
  return (
    <h2 className="flex items-center gap-1 text-[9px] font-bold text-slate-700 uppercase tracking-wider border-b border-slate-200 pb-0.5 mb-1 print:text-[8.5px]">
      <svg className="w-2.5 h-2.5 text-sky-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">{icons[icon]}</svg>
      {children}
    </h2>
  );
}

function DateBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[7.5px] text-sky-600 font-semibold bg-sky-50 px-1.5 py-0.5 rounded-full whitespace-nowrap border border-sky-100">
      {children}
    </span>
  );
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-1 text-[9px] text-gray-600 leading-snug print:text-[8.5px]">
      <span className="w-1 h-1 rounded-full bg-sky-400 mt-[4px] shrink-0" />
      <span>{children}</span>
    </li>
  );
}

function ProjectItem({
  name, lines, stack, bullets, github, live,
}: {
  name: string; lines: string; stack: string; bullets: string[]; github?: string; live?: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-1 flex-wrap">
        <h3 className="text-[10px] font-bold text-gray-900 print:text-[9.5px]">{name}</h3>
        {lines !== "—" && (
          <span className="text-[7px] font-mono text-sky-600 bg-sky-50 px-1 py-[1px] rounded border border-sky-100">
            {lines} satır
          </span>
        )}
        {github && (
          <a href={`https://${github}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 text-[7px] font-semibold text-white bg-gray-800 hover:bg-gray-700 px-1.5 py-[1px] rounded print:text-gray-800 print:bg-gray-100">
            <svg className="w-2 h-2" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
        )}
        {live && (
          <a href={`https://${live}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 text-[7px] font-semibold text-white bg-emerald-600 hover:bg-emerald-500 px-1.5 py-[1px] rounded print:text-emerald-700 print:bg-emerald-50">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
            Canlı
          </a>
        )}
      </div>
      <p className="text-[7.5px] text-gray-400 font-mono mt-0.5">{stack}</p>
      <ul className="mt-0.5 space-y-[1px]">
        {bullets.map((b, i) => (
          <BulletItem key={i}>{b}</BulletItem>
        ))}
      </ul>
    </div>
  );
}

function SkillGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <span className="text-[7.5px] font-bold text-slate-600 uppercase tracking-wide">{label}</span>
      <div className="flex flex-wrap gap-0.5 mt-0.5">
        {items.map((item) => (
          <span key={item} className="text-[7px] px-1 py-[1px] rounded bg-slate-50 text-slate-600 border border-slate-100">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function LangItem({ lang, level, pct }: { lang: string; level: string; pct: number }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-0.5">
        <span className="text-[8.5px] text-gray-700 font-medium">{lang}</span>
        <span className="text-[7px] text-gray-400">{level}</span>
      </div>
      <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-sky-400 to-sky-500 rounded-full" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function CertItem({ name, org }: { name: string; org: string }) {
  return (
    <div className="flex items-center gap-1">
      <div className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
      <div>
        <p className="text-[8.5px] text-gray-700 font-medium">{name}</p>
        <p className="text-[7px] text-gray-400">{org}</p>
      </div>
    </div>
  );
}
