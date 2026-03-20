"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "tr" | "en";

const dict = {
  tr: {
    nav: [
      { href: "#hero", label: "Ana Sayfa" },
      { href: "#analysis", label: "Mevcut Durum" },
      { href: "#demo", label: "Cozum Demo" },
      { href: "#competition", label: "Rekabet" },
      { href: "#projects", label: "Projelerim" },
      { href: "#about", label: "Hakkimda" },
      { href: "#contact", label: "Aksiyon Plani" },
    ],
    hero: {
      badge: "SafiPort Derince — 1.2 Milyon m\u00B2 Liman Alani",
      titleA: "Endustri Muhendisi + Full-Stack Developer = ",
      titleB: "SafiPort'un Ihtiyaci",
      desc: "SafiPort Derince, Turkiye'nin en buyuk cok amacli limani: 6 terminal, 1.2M m\u00B2, 500+ kamera, 2,272m rihtim. Ama dijital altyapi parcali — OPUS TOS sadece konteyner terminalini kaplyor, diger 5 terminal Excel ve Gulece ile raporlaniyor, 3 ana sistem (OPUS, TRASSIR, SmartFleet) birbiriyle konusmuyor. 20 kislik IT ekibinde sifir yazilimci var. Ben bu boslugu doldurmak icin buradayim.",
      cta1: "Sorunlari Gor",
      cta2: "Cozum Demo",
      portStats: [
        { label: "Terminal", value: "6", sub: "Konteyner, Ro-Ro, Genel Yuk, Tank, Demiryolu, Dok" },
        { label: "Alan", value: "1.2M m\u00B2", sub: "450K'dan genisletildi" },
        { label: "Kamera", value: "500+", sub: "TRASSIR AI VMS" },
        { label: "Rihtim", value: "2,272m", sub: "18m su derinligi" },
      ],
      myStats: [
        { label: "Satir Kod", value: "130K+" },
        { label: "API Endpoint", value: "400+" },
        { label: "DB Modeli", value: "100+" },
        { label: "Canli Docker", value: "8" },
      ],
      quote: "Avrupa'da bir numara olmak istiyoruz.",
      quoteAuthor: "Seyda Gure — SafiPort Derince Genel Muduru",
      source: "Kaynak: SafiPort Kurumsal, CyberLogitec, Kalmar, TRASSIR, Forbes Turkey 2025",
    },
    painPoints: {
      section: "MEVCUT DURUM ANALiZi",
      titleA: "SafiPort'un ",
      titleB: "6 Kritik Dijital Boslugu",
      subtitle: "40+ saat arastirma, kurumsal kaynaklar, sektorel raporlar ve teknik dokumantasyondan derlenmistir. Her sorun somut veriyle desteklenmektedir.",
      items: [
        {
          title: "Gulece & Manuel Raporlama",
          severity: "Kritik",
          desc: "Operasyonel raporlar Gulece sistemi ve Excel tablolariyla hazirlaniyor. Her terminal kendi raporlama yapisina sahip — birlestirme manuel, gecikme kacinilamaz. Vardiyadaki toplam konteyner hareketi, vince verimliligi, rihtim dolulugu gibi KPI'lar anlik degil, geri donusumsuz.",
          current: "Gulece + Excel + manuel birlestirme",
          impact: "Karar gecikmesi, veri tutarsizligi, yonetim koru gorme",
          solution: "Gercek zamanli otomatik raporlama dashboard'u — tum terminalleri tek ekranda birlestiren, PDF/Excel export destekli, rol tabanli erisimli platform",
        },
        {
          title: "OPUS TOS: 6 Terminalin Sadece 1'i",
          severity: "Kritik",
          desc: "CyberLogitec OPUS TOS 2019'da devreye alindi ama sadece konteyner terminalini kapsiyor. Ro-Ro (700K arac/yil), tank terminali (65,030 m\u00B3), genel yuk (5 rihtim), intermodal demiryolu (600K islem/yil) ve dok terminali dijital karanlikta. Bu terminallerin verileri OPUS'a akmyor.",
          current: "OPUS TOS sadece konteyner terminali",
          impact: "Liman geneli gorunurluk yok, 5 terminal izlenemiyor",
          solution: "6 terminali kapsayan birlesik platform — OPUS API'si uzerinden konteyner + ozel modullerle diger 5 terminal",
        },
        {
          title: "3 Silolu Sistem: OPUS \u2260 TRASSIR \u2260 SmartFleet",
          severity: "Yuksek",
          desc: "OPUS TOS (konteyner operasyonu), TRASSIR VMS (500 kamera guvenligi), Kalmar SmartFleet (vince izleme) — uc farkli vendor, uc farkli sistem, sifir entegrasyon. Vince A3'un bakima ihtiyaci oldugunu SmartFleet biliyor ama OPUS bunu planlama verisine yansitamiyor. Kameradaki kuyruk TRASSIR'da gorunuyor ama rihtim planlamasini etkilemiyor.",
          current: "3 bagimsiz sistem, API entegrasyonu yok",
          impact: "Operasyonel kor noktalar, reaktif karar alma",
          solution: "Event-driven middleware katmani — 3 sistemi birlestiren, anomali ve olaylari cross-reference eden entegrasyon platformu",
        },
        {
          title: "20 Kislik IT Ekibi, 0 Yazilimci",
          severity: "Yuksek",
          desc: "Teknik Direktorluk altindaki 20 kislik IT departmani altyapi ve sistem yonetimine odakli. Hicbir yazilim gelistirici yok. Ozel bir dashboard, API entegrasyonu veya otomasyon gerektigi zaman CyberLogitec (Guney Kore), TRASSIR (Rusya) veya Kalmar (Finlandiya) ile uluslararasi tedarikciye gidilmek zorunda kaliniyor.",
          current: "IT = altyapi yonetimi, yazilim gelistirme kapasitesi yok",
          impact: "Her ozellestirme talebi dis vendor'a bagli, yavas ve pahali",
          solution: "In-house gelistirme kapasitesi — API entegrasyonlari, dashboard'lar, otomasyonlar dis vendor olmadan hizli sekilde uretilir",
        },
        {
          title: "500 Kamera = Sadece Guvenlik",
          severity: "Orta-Yuksek",
          desc: "TRASSIR VMS 500 kamera ile devasa bir goruntu altyapisi kurulmus ama kullanim alani sadece guvenlik: cevre guvenligi, plaka tanima (AutoTRASSIR), yuz tanima. Konteyner kodu okuma (OCR), yuk hasar tespiti, vince operasyon analitigi, PPE uyumluluk izleme gibi operasyonel AI uygulamalari yok. Altyapi hazir, yazilim eksik.",
          current: "TRASSIR VMS = guvenlik kamerasi sistemi",
          impact: "1.2M m\u00B2'lik alanda operasyonel goru zekasi yok",
          solution: "AI vision katmani — mevcut 500 kamera uzerinde konteyner OCR, hasar tespiti, PPE izleme, kuyruk analizi modelleri",
        },
        {
          title: "Rekabette Dijital Gerileme",
          severity: "Stratejik",
          desc: "DP World Evyap ayni bolgede Cisco destekli smart port insa etti. Yilport, itelligence Turkiye ile SAP 'Atlas' projesini tamamladi. Asyaport 2024'te 2M TEU'ya ulasti (+%19.5). SafiPort akademik veya sektorel kaynaklarda 'akilli liman' olarak anilmiyor. Fiziksel altyapi guclu ama dijital olgunluk rakiplerin gerisinde.",
          current: "Rakipler Cisco smart port ve SAP ERP kullaniyor",
          impact: "Pazar konumu riski, musteri kaybi potansiyeli",
          solution: "Hizli dijital yetkinlik kazanimi — 120 gunde MVP, 6 ayda tam platform",
        },
      ],
    },
    demo: {
      section: "COZUM DEMO",
      titleA: "SafiPort ",
      titleB: "Birlesik Operasyon Merkezi",
      subtitle: "6 terminali tek ekranda birlestiren enterprise dashboard prototipi. Gercek verilerle nasil calisacagini gosteren interaktif demo.",
      kpis: [
        { label: "Konteyner/Yil", sub: "1.5M TEU kapasite" },
        { label: "Arac/Yil", sub: "700K Ro-Ro kapasitesi" },
        { label: "Tank Hacmi", sub: "65,030 m\u00B3 depolama" },
        { label: "Sistem Uptime", sub: "7/24 operasyon" },
      ],
      terminalStatus: "6 TERMiNAL DURUMU",
      aiAlerts: "AI & OTOMASYON UYARILARI",
      portAnalytics: "LiMAN ANALiTiGi",
      integrationStatus: "SiSTEM ENTEGRASYONU",
      live: "Canli",
      statusLabels: { online: "Aktif", maintenance: "Bakimda", warning: "Uyari", offline: "Cevrimdisi" },
      disclaimer: "* Simule edilmis verilerle prototip gosterimi. Gercek uygulamada OPUS TOS API, TRASSIR VMS SDK, Kalmar SmartFleet API ve IoT sensorlerinden canli veri akar.",
    },
    competition: {
      section: "REKABET ANALiZi",
      titleA: "SafiPort vs ",
      titleB: "Dijital Liderler",
      subtitle: "Ayni bolgede faaliyet gosteren rakiplerle dijital olgunluk karsilastirmasi. Veriler kurumsal kaynaklar, basin bultenleri ve sektorel raporlardan derlenmistir.",
      safiLabel: "SafiPort Derince",
      evyapLabel: "DP World Evyap",
      yilportLabel: "Yilport Holding",
      categories: [
        { name: "Birlesik Dijital Platform", safi: "Yok", evyap: "Cisco Smart Port", yilport: "SAP Atlas" },
        { name: "AI / Makine Ogrenmesi", safi: "Yok", evyap: "Cisco AI Analytics", yilport: "Kismi" },
        { name: "Gercek Zamanli Dashboard", safi: "Yok (Gulece/Excel)", evyap: "Evet", yilport: "SAP Fiori" },
        { name: "ERP Entegrasyonu", safi: "Yok", evyap: "Evet", yilport: "SAP S/4HANA" },
        { name: "In-House Gelistirme", safi: "0 yazilimci", evyap: "Evet", yilport: "Evet" },
        { name: "IoT Entegrasyonu", safi: "SmartFleet (silolu)", evyap: "Cisco IoT Gateway", yilport: "Kismi" },
      ],
      verdict: "SafiPort fiziksel altyapida guclu (1.2M m\u00B2, 6 terminal, $1B yatirim) ama dijital olgunlukta 2-3 yil geride. Iyi haber: temel sistemler (OPUS, TRASSIR, SmartFleet) mevcut — eksik olan birlestirici yazilim katmani.",
      myRole: "Benim Rolum: Bu birlestirici katmani insa etmek — 130K+ satir production kodu, 400+ API endpoint ve 6 otonom ajan sistemi deneyimimle.",
    },
    github: {
      section: "PROJELER & DENEYiM",
      titleA: "SafiPort'a ",
      titleB: "Transfer Edilebilir Deneyim",
      syncLabel: "GitHub ile senkronize",
      viewAll: "Tum Projeleri Gor",
      openSource: "Acik Kaynak Projeler",
      dataAnalysis: "SafiPort Icin Ilgili Sistemler",
      projectMeta: {
        latestv2: { title: "Full-Stack Web App", desc: "React + REST API. Component tabanli mimari, responsive tasarim." },
        "qrmenu-backend": { title: "QR Menu SaaS", desc: "184 endpoint, 46 tablo, 5 kademeli RBAC, multi-tenant. SafiPort musteri portali icin referans." },
        ecommerce: { title: "E-Ticaret Platform", desc: "React + Redux. Urun katalog, sepet, odeme entegrasyonu." },
        "ecommerce-backendAPI": { title: "Enterprise API", desc: "Java Spring Boot. Stok takibi, siparis islemleri — liman envanter yonetimine uyarlanabilir." },
        "web-sayfam": { title: "Kisisel Website", desc: "React + Tailwind. Modern UI/UX." },
        "safi-portfolio": { title: "Safi Holding Portfolyo", desc: "Next.js + TypeScript + Framer Motion. Bu projenin kendisi teknik yetkinlik kaniti." },
      },
      achievements: [
        {
          title: "Gercek Zamanli Platform (64,900 Satir)",
          desc: "Fastify 5 backend (164 endpoint, 29 Prisma modeli), Next.js 15 frontend (80+ component), Python otonom monitoring ajani. 5 Docker, Nginx, Cloudflare, Tailscale VPN. SafiPort uyumu: Gercek zamanli dashboard, coklu veri kaynagi entegrasyonu, 7/24 izleme.",
          metric: "64,900 Satir",
          safiRelevance: "Dashboard + monitoring + multi-source integration",
        },
        {
          title: "Lojistik & Odeme Platformu (34,600 Satir)",
          desc: "pnpm monorepo (5 paket). 25 Prisma modeli, 6 otonom ajan (odeme dogrulama, envanter takibi, workflow orkestrasyon), cografi sorgulama, kapasite takibi. 7 Docker servisi. SafiPort uyumu: Lojistik operasyon, otonom ajan, kapasite planlama.",
          metric: "34,600 Satir",
          safiRelevance: "Lojistik otomasyon + kapasite yonetimi",
        },
        {
          title: "AI & Bot Ekosistemi (15,000+ Satir)",
          desc: "Python 74 modul, Gemini AI, ML guvenlik (Isolation Forest), adaptive scoring, SSE real-time monitoring. SafiPort uyumu: AI model entegrasyonu, anomali tespiti, gercek zamanli alert sistemi.",
          metric: "15,000+ Satir",
          safiRelevance: "AI + anomali tespiti + real-time alert",
        },
        {
          title: "QR Menu SaaS (184 Endpoint, 46 Tablo)",
          desc: "Multi-tenant SaaS, 5 kademeli RBAC, sadakat programi (4 tier), tema motoru (JSONB), SMS OTP. SafiPort uyumu: Multi-terminal erisim yonetimi, rol tabanli yetkilendirme, SaaS mimari.",
          metric: "184 Endpoint",
          safiRelevance: "Multi-tenant + RBAC + SaaS mimari",
        },
      ],
    },
    about: {
      section: "HAKKIMDA",
      titleA: "Endustri Muhendisi + ",
      titleB: "Full-Stack Developer",
      bio1: "Neden bu kombinasyon SafiPort icin kritik? Cogu developer liman operasyonlarini anlamaz — kodu yazar ama sureci bilmez. Cogu endustri muhendisi ise yazilim gelistiremez — sureci analiz eder ama araci uretmez. Ben her ikisini yapabilirim: ",
      bio1_s1: "surec optimizasyonu & kapasite planlama",
      bio1_s2: "full-stack platform gelistirme",
      bio1_s3: "AI otomasyon & sistem entegrasyonu",
      bio1_end: " yetkinliklerimi SafiPort'un operasyonel verimliligini artirmak icin birlestirebilirim.",
      bio2: "2+ yilda 130K+ satir production kodu yazdim, 400+ API endpoint tasarladim, 100+ veritabani modeli olusturdum. 15+ otonom bot ve 6 otonom ajan sistemi gelistirdim. VPS uzerinde 8 canli Docker container yonetiyorum. Bu portfolyo de dahil — Next.js 16, TypeScript, Tailwind CSS 4, Framer Motion ile sifirdan yazildi.",
      journey: "YOLCULUK",
      timeline: [
        { year: "2024", title: "Endustri Muhendisligi Mezuniyeti", desc: "Surec optimizasyonu, istatistiksel modelleme, kapasite planlama, yalin uretim" },
        { year: "2023-24", title: "Workintech Full-Stack Bootcamp", desc: "JavaScript, React, Node.js, Java/Spring Boot, PostgreSQL, REST API" },
        { year: "2024-25", title: "SaaS & Platform Gelistirme", desc: "184 endpoint SaaS, 64,900 satirlik platform, 34,600 satirlik lojistik monorepo" },
        { year: "2025-26", title: "AI Otomasyon & Production", desc: "6 otonom ajan, ML anomali tespiti, 8 canli Docker, Gemini AI, Claude API/MCP" },
      ],
      ieTitle: "ENDUSTRi MUHENDiSLiGi + SAFiPORT",
      ieItems: [
        { skill: "Surec Optimizasyonu", application: "6 terminal operasyon akisini analiz edip darbogazlari tespit etme" },
        { skill: "Kapasite Planlama", application: "Rihtim, vince, park alani kapasite modellemesi ve tahmin" },
        { skill: "Istatistiksel Modelleme", application: "Konteyner throughput tahmini, mevsimsellik analizi" },
        { skill: "Yalin Uretim (Lean)", application: "Terminal operasyonlarindaki israf ve beklemeleri azaltma" },
        { skill: "Kuyruk Teorisi", application: "Gemi bekleme suresi, TIR kuyrugu, vince atama optimizasyonu" },
        { skill: "Veri Analitigi", application: "KPI dashboard tasarimi, trend analizi, anomali tespiti" },
      ],
      highlights: [
        { icon: "\u2693", title: "Liman Operasyonlari", desc: "34,600 satirlik lojistik platform deneyimi. Kapasite takibi, cografi sorgulama, otonom ajan workflow. SafiPort'un 6 terminal operasyonuna dogrudan uyarlanabilir." },
        { icon: "\uD83E\uDD16", title: "AI & Otomasyon", desc: "6 otonom ajan sistemi, ML anomali tespiti (Isolation Forest), adaptive scoring. TRASSIR 500 kamera altyapisinda AI vision modelleri icin hazir deneyim." },
        { icon: "\uD83D\uDCCA", title: "Enterprise Dashboard", desc: "64,900 satirlik gercek zamanli platform. 164 endpoint, 29 model, 80+ component. SafiPort Birlesik Operasyon Merkezi icin birebir referans." },
        { icon: "\uD83D\uDD27", title: "Sistem Entegrasyonu", desc: "20+ kaynaktan API tuketimi, event-driven mimari, webhook/SSE. OPUS + TRASSIR + SmartFleet entegrasyonu icin teknik altyapi." },
      ],
    },
    contact: {
      section: "AKSiYON PLANI",
      titleA: "Ilk 120 ",
      titleB: "Gunum — Faz Faz Yol Haritasi",
      subtitle: "SafiPort'a katildigimda somut, olculebilir deger uretecek 6 fazlik aksiyon planim:",
      phases: [
        {
          week: "Hafta 1-2",
          title: "Sistem Kesfi & Audit",
          tasks: [
            "Gulece raporlama sistemini derinlemesine inceleme",
            "OPUS TOS API dokumantasyonu ve veri semasininin haritalanmasi",
            "TRASSIR VMS SDK erisimi ve kamera yerlesiim planinin cikarilmasi",
            "Kalmar SmartFleet data feed'lerinin analizi",
            "6 terminalin mevcut veri akislarinin dokumantasyonu",
            "IT ekibiyle teknik gereksinim toplantilari",
          ],
        },
        {
          week: "Hafta 3-4",
          title: "Veri Mimarisi & API Tasarimi",
          tasks: [
            "Birlesik veri modelinin tasarlanmasi (PostgreSQL + Redis)",
            "OPUS TOS \u2194 Dashboard API entegrasyon katmaninin yazilmasi",
            "TRASSIR VMS webhook/event yakalama modulunun gelistirilmesi",
            "SmartFleet veri normalizasyonu ve cache katmani",
            "Rol tabanli erisim kontrolu (RBAC) mimarisinin kurulumu",
          ],
        },
        {
          week: "Hafta 5-8",
          title: "Birlesik Dashboard MVP",
          tasks: [
            "6 terminal tek ekran dashboard'unun gelistirilmesi",
            "Gercek zamanli KPI paneli (konteyner throughput, vince verimliiligi, rihtim dolulugu)",
            "AI alert sistemi — OPUS + TRASSIR + SmartFleet cross-reference",
            "Otomatik vardiya raporu olusturma (Gulece'yi devre disi birakan)",
            "Mobil responsive tasarim (saha ekipleri icin)",
          ],
        },
        {
          week: "Hafta 9-12",
          title: "Otomatik Raporlama & Gulece Degisimi",
          tasks: [
            "Gunluk/haftalik/aylik otomatik rapor olusturma modulu",
            "PDF ve Excel export (mevcut formatlara uyumlu)",
            "Email ve Telegram bildirim entegrasyonu",
            "Terminal bazli ve holding bazli konsolide raporlar",
            "Gulece sisteminden tamamen bagimsiz calisan raporlama altyapisi",
          ],
        },
        {
          week: "Hafta 13-16",
          title: "AI Vision Pilot",
          tasks: [
            "Konteyner kodu OCR modeli (ISO 6346 standardinda)",
            "Yuk hasar tespiti pilot uygulamasi (en yogun 10 kamera)",
            "PPE uyumluluk izleme (baret, yelek tespiti)",
            "TIR kuyruk analizi ve bekleme suresi tahmini",
            "AI model sonuclarinin dashboard'a entegrasyonu",
          ],
        },
        {
          week: "Hafta 17-20",
          title: "Holding KPI Portal & Olceklendirme",
          tasks: [
            "SafiPort + Bilecik Cimento + Corum Seker konsolide KPI portali",
            "Holding yonetimine ozel executive dashboard",
            "Kestirimci bakim modeli (vince ve ekipman icin)",
            "Musteri self-service portali (konteyner takip)",
            "Dokumantasyon, egitim ve devir teslim",
          ],
        },
      ],
      stepLabel: "Faz",
      emailLabel: "E-posta",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      linkedinName: "Sedat Irtas",
      ctaText: "Bu portfolyo SafiPort Derince'ye ozel olarak, 40+ saatlik arastirma sonucu hazirlanmistir. Icerideki tum veriler (terminal kapasiteleri, sistem isimleri, organizasyon yapisi, rekabet analizi) gercek kaynaklardan derlenmistir. Kaynak kodu aciktir.",
      viewSource: "Kaynak Kodunu Incele",
      backToAnalysis: "Analize Don",
    },
    footer: {
      name: "Sedat Irtas",
      tagline: "SafiPort Derince icin ozel olarak gelistirilmistir — Next.js 16 + TypeScript + AI",
      sync: "GitHub ile senkronize",
    },
  },

  en: {
    nav: [
      { href: "#hero", label: "Home" },
      { href: "#analysis", label: "Current State" },
      { href: "#demo", label: "Solution Demo" },
      { href: "#competition", label: "Competition" },
      { href: "#projects", label: "My Projects" },
      { href: "#about", label: "About Me" },
      { href: "#contact", label: "Action Plan" },
    ],
    hero: {
      badge: "SafiPort Derince \u2014 1.2 Million m\u00B2 Port Area",
      titleA: "Industrial Engineer + Full-Stack Developer = ",
      titleB: "What SafiPort Needs",
      desc: "SafiPort Derince is Turkey's largest multi-purpose port: 6 terminals, 1.2M m\u00B2, 500+ cameras, 2,272m berth. But the digital infrastructure is fragmented \u2014 OPUS TOS covers only the container terminal, the other 5 terminals rely on Excel and G\u00FCle\u00E7e for reporting, 3 core systems (OPUS, TRASSIR, SmartFleet) don't communicate. The 20-person IT team has zero software developers. I'm here to fill this gap.",
      cta1: "See the Problems",
      cta2: "Solution Demo",
      portStats: [
        { label: "Terminals", value: "6", sub: "Container, Ro-Ro, General Cargo, Tank, Railway, Dock" },
        { label: "Area", value: "1.2M m\u00B2", sub: "Expanded from 450K" },
        { label: "Cameras", value: "500+", sub: "TRASSIR AI VMS" },
        { label: "Berth", value: "2,272m", sub: "18m water depth" },
      ],
      myStats: [
        { label: "Lines of Code", value: "130K+" },
        { label: "API Endpoints", value: "400+" },
        { label: "DB Models", value: "100+" },
        { label: "Live Docker", value: "8" },
      ],
      quote: "We want to be number one in Europe.",
      quoteAuthor: "Seyda Gure \u2014 SafiPort Derince General Manager",
      source: "Sources: SafiPort Corporate, CyberLogitec, Kalmar, TRASSIR, Forbes Turkey 2025",
    },
    painPoints: {
      section: "CURRENT STATE ANALYSIS",
      titleA: "SafiPort's ",
      titleB: "6 Critical Digital Gaps",
      subtitle: "Compiled from 40+ hours of research, corporate sources, industry reports, and technical documentation. Each issue is backed by concrete data.",
      items: [
        {
          title: "G\u00FCle\u00E7e & Manual Reporting",
          severity: "Critical",
          desc: "Operational reports are prepared using the G\u00FCle\u00E7e system and Excel spreadsheets. Each terminal has its own reporting structure \u2014 consolidation is manual, delays are inevitable. KPIs like shift container movements, crane efficiency, and berth occupancy are not real-time.",
          current: "G\u00FCle\u00E7e + Excel + manual consolidation",
          impact: "Decision delays, data inconsistency, management blind spots",
          solution: "Real-time automated reporting dashboard \u2014 unifying all terminals on one screen with PDF/Excel export and role-based access",
        },
        {
          title: "OPUS TOS: Only 1 of 6 Terminals",
          severity: "Critical",
          desc: "CyberLogitec OPUS TOS went live in 2019 but only covers the container terminal. Ro-Ro (700K vehicles/yr), tank terminal (65,030 m\u00B3), general cargo (5 berths), intermodal railway (600K transactions/yr), and dock terminal are in digital darkness. Their data doesn't flow into OPUS.",
          current: "OPUS TOS covers container terminal only",
          impact: "No port-wide visibility, 5 terminals unmonitored",
          solution: "Unified platform covering all 6 terminals \u2014 OPUS API for containers + custom modules for the other 5",
        },
        {
          title: "3 Siloed Systems: OPUS \u2260 TRASSIR \u2260 SmartFleet",
          severity: "High",
          desc: "OPUS TOS (container ops), TRASSIR VMS (500-camera security), Kalmar SmartFleet (crane monitoring) \u2014 three different vendors, three separate systems, zero integration. SmartFleet knows crane A3 needs maintenance but OPUS can't factor it into planning. Camera queues show in TRASSIR but don't affect berth scheduling.",
          current: "3 independent systems, no API integration",
          impact: "Operational blind spots, reactive decision-making",
          solution: "Event-driven middleware layer \u2014 connecting all 3 systems, cross-referencing anomalies and events",
        },
        {
          title: "20-Person IT Team, 0 Developers",
          severity: "High",
          desc: "The 20-person IT department under the Technical Director focuses on infrastructure and system administration. No software developers. When custom dashboards, API integrations, or automation is needed, they must go to CyberLogitec (South Korea), TRASSIR (Russia), or Kalmar (Finland).",
          current: "IT = infrastructure management, zero dev capacity",
          impact: "Every customization depends on external vendors \u2014 slow and expensive",
          solution: "In-house development capability \u2014 API integrations, dashboards, automations built without vendor dependency",
        },
        {
          title: "500 Cameras = Security Only",
          severity: "Medium-High",
          desc: "TRASSIR VMS installed 500 cameras across 1.2M m\u00B2 but usage is limited to security: perimeter monitoring, license plate recognition (AutoTRASSIR), face detection. No container code OCR, cargo damage detection, crane operation analytics, or PPE compliance monitoring. Infrastructure is ready, software is missing.",
          current: "TRASSIR VMS = security camera system",
          impact: "No operational vision intelligence across 1.2M m\u00B2",
          solution: "AI vision layer \u2014 container OCR, damage detection, PPE monitoring, queue analysis on existing 500 cameras",
        },
        {
          title: "Falling Behind in Competition",
          severity: "Strategic",
          desc: "DP World Evyap built a Cisco-powered smart port in the same region. Yilport completed the SAP 'Atlas' digital transformation with itelligence Turkey. Asyaport reached 2M TEU in 2024 (+19.5%). SafiPort is not mentioned as a 'smart port' in any academic or industry source. Physical infrastructure is strong but digital maturity lags competitors by 2-3 years.",
          current: "Competitors use Cisco smart port and SAP ERP",
          impact: "Market position risk, customer loss potential",
          solution: "Rapid digital capability building \u2014 MVP in 120 days, full platform in 6 months",
        },
      ],
    },
    demo: {
      section: "SOLUTION DEMO",
      titleA: "SafiPort ",
      titleB: "Unified Operations Center",
      subtitle: "Enterprise dashboard prototype unifying all 6 terminals on one screen. Interactive demo showing how it would work with real data.",
      kpis: [
        { label: "Containers/Year", sub: "1.5M TEU capacity" },
        { label: "Vehicles/Year", sub: "700K Ro-Ro capacity" },
        { label: "Tank Volume", sub: "65,030 m\u00B3 storage" },
        { label: "System Uptime", sub: "24/7 operations" },
      ],
      terminalStatus: "6 TERMINAL STATUS",
      aiAlerts: "AI & AUTOMATION ALERTS",
      portAnalytics: "PORT ANALYTICS",
      integrationStatus: "SYSTEM INTEGRATION",
      live: "Live",
      statusLabels: { online: "Active", maintenance: "Maintenance", warning: "Warning", offline: "Offline" },
      disclaimer: "* Prototype with simulated data. In production, live data flows via OPUS TOS API, TRASSIR VMS SDK, Kalmar SmartFleet API, and IoT sensors.",
    },
    competition: {
      section: "COMPETITIVE ANALYSIS",
      titleA: "SafiPort vs ",
      titleB: "Digital Leaders",
      subtitle: "Digital maturity comparison with competitors in the same region. Data compiled from corporate sources, press releases, and industry reports.",
      safiLabel: "SafiPort Derince",
      evyapLabel: "DP World Evyap",
      yilportLabel: "Yilport Holding",
      categories: [
        { name: "Unified Digital Platform", safi: "None", evyap: "Cisco Smart Port", yilport: "SAP Atlas" },
        { name: "AI / Machine Learning", safi: "None", evyap: "Cisco AI Analytics", yilport: "Partial" },
        { name: "Real-Time Dashboard", safi: "None (G\u00FCle\u00E7e/Excel)", evyap: "Yes", yilport: "SAP Fiori" },
        { name: "ERP Integration", safi: "None", evyap: "Yes", yilport: "SAP S/4HANA" },
        { name: "In-House Development", safi: "0 developers", evyap: "Yes", yilport: "Yes" },
        { name: "IoT Integration", safi: "SmartFleet (siloed)", evyap: "Cisco IoT Gateway", yilport: "Partial" },
      ],
      verdict: "SafiPort is strong in physical infrastructure (1.2M m\u00B2, 6 terminals, $1B investment) but 2-3 years behind in digital maturity. Good news: core systems (OPUS, TRASSIR, SmartFleet) are in place \u2014 what's missing is the unifying software layer.",
      myRole: "My Role: Building this unifying layer \u2014 with 130K+ lines of production code, 400+ API endpoints, and 6 autonomous agent systems experience.",
    },
    github: {
      section: "PROJECTS & EXPERIENCE",
      titleA: "Transferable Experience ",
      titleB: "for SafiPort",
      syncLabel: "Synced with GitHub",
      viewAll: "View All Projects",
      openSource: "Open Source Projects",
      dataAnalysis: "Relevant Systems for SafiPort",
      projectMeta: {
        latestv2: { title: "Full-Stack Web App", desc: "React + REST API. Component-based architecture, responsive design." },
        "qrmenu-backend": { title: "QR Menu SaaS", desc: "184 endpoints, 46 tables, 5-tier RBAC, multi-tenant. Reference for SafiPort customer portal." },
        ecommerce: { title: "E-Commerce Platform", desc: "React + Redux. Product catalog, cart, payment integration." },
        "ecommerce-backendAPI": { title: "Enterprise API", desc: "Java Spring Boot. Inventory tracking, order processing \u2014 adaptable to port inventory." },
        "web-sayfam": { title: "Personal Website", desc: "React + Tailwind. Modern UI/UX." },
        "safi-portfolio": { title: "Safi Holding Portfolio", desc: "Next.js + TypeScript + Framer Motion. This project itself is proof of technical competence." },
      },
      achievements: [
        {
          title: "Real-Time Platform (64,900 Lines)",
          desc: "Fastify 5 backend (164 endpoints, 29 Prisma models), Next.js 15 frontend (80+ components), Python autonomous monitoring agent. 5 Docker, Nginx, Cloudflare, Tailscale VPN. SafiPort fit: Real-time dashboard, multi-source data integration, 24/7 monitoring.",
          metric: "64,900 Lines",
          safiRelevance: "Dashboard + monitoring + multi-source integration",
        },
        {
          title: "Logistics & Payment Platform (34,600 Lines)",
          desc: "pnpm monorepo (5 packages). 25 Prisma models, 6 autonomous agents (payment verification, inventory, workflow orchestration), geo-queries, capacity tracking. 7 Docker services. SafiPort fit: Logistics operations, autonomous agents, capacity planning.",
          metric: "34,600 Lines",
          safiRelevance: "Logistics automation + capacity management",
        },
        {
          title: "AI & Bot Ecosystem (15,000+ Lines)",
          desc: "Python 74 modules, Gemini AI, ML security (Isolation Forest), adaptive scoring, SSE real-time monitoring. SafiPort fit: AI model integration, anomaly detection, real-time alert system.",
          metric: "15,000+ Lines",
          safiRelevance: "AI + anomaly detection + real-time alerts",
        },
        {
          title: "QR Menu SaaS (184 Endpoints, 46 Tables)",
          desc: "Multi-tenant SaaS, 5-tier RBAC, loyalty program (4 tiers), theme engine (JSONB), SMS OTP. SafiPort fit: Multi-terminal access management, role-based authorization, SaaS architecture.",
          metric: "184 Endpoints",
          safiRelevance: "Multi-tenant + RBAC + SaaS architecture",
        },
      ],
    },
    about: {
      section: "ABOUT ME",
      titleA: "Industrial Engineer + ",
      titleB: "Full-Stack Developer",
      bio1: "Why is this combination critical for SafiPort? Most developers don't understand port operations \u2014 they write code but don't know the process. Most industrial engineers can't build software \u2014 they analyze processes but can't create the tools. I can do both: ",
      bio1_s1: "process optimization & capacity planning",
      bio1_s2: "full-stack platform development",
      bio1_s3: "AI automation & system integration",
      bio1_end: " \u2014 I can combine these capabilities to improve SafiPort's operational efficiency.",
      bio2: "In 2+ years, I wrote 130K+ lines of production code, designed 400+ API endpoints, created 100+ database models, built 15+ autonomous bots and 6 autonomous agent systems. I manage 8 live Docker containers on VPS. This portfolio included \u2014 built from scratch with Next.js 16, TypeScript, Tailwind CSS 4, and Framer Motion.",
      journey: "JOURNEY",
      timeline: [
        { year: "2024", title: "Industrial Engineering Degree", desc: "Process optimization, statistical modeling, capacity planning, lean manufacturing" },
        { year: "2023-24", title: "Workintech Full-Stack Bootcamp", desc: "JavaScript, React, Node.js, Java/Spring Boot, PostgreSQL, REST API" },
        { year: "2024-25", title: "SaaS & Platform Development", desc: "184-endpoint SaaS, 64,900-line platform, 34,600-line logistics monorepo" },
        { year: "2025-26", title: "AI Automation & Production", desc: "6 autonomous agents, ML anomaly detection, 8 live Docker, Gemini AI, Claude API/MCP" },
      ],
      ieTitle: "INDUSTRIAL ENGINEERING + SAFIPORT",
      ieItems: [
        { skill: "Process Optimization", application: "Analyzing 6-terminal operation flows, identifying bottlenecks" },
        { skill: "Capacity Planning", application: "Berth, crane, parking area capacity modeling and forecasting" },
        { skill: "Statistical Modeling", application: "Container throughput prediction, seasonality analysis" },
        { skill: "Lean Manufacturing", application: "Reducing waste and idle time in terminal operations" },
        { skill: "Queuing Theory", application: "Vessel waiting time, truck queue, crane assignment optimization" },
        { skill: "Data Analytics", application: "KPI dashboard design, trend analysis, anomaly detection" },
      ],
      highlights: [
        { icon: "\u2693", title: "Port Operations", desc: "34,600-line logistics platform experience. Capacity tracking, geo-queries, autonomous agent workflow. Directly adaptable to SafiPort's 6-terminal operations." },
        { icon: "\uD83E\uDD16", title: "AI & Automation", desc: "6 autonomous agent systems, ML anomaly detection (Isolation Forest), adaptive scoring. Ready experience for AI vision models on TRASSIR 500-camera infrastructure." },
        { icon: "\uD83D\uDCCA", title: "Enterprise Dashboard", desc: "64,900-line real-time platform. 164 endpoints, 29 models, 80+ components. Direct reference for SafiPort Unified Operations Center." },
        { icon: "\uD83D\uDD27", title: "System Integration", desc: "API consumption from 20+ sources, event-driven architecture, webhook/SSE. Technical foundation for OPUS + TRASSIR + SmartFleet integration." },
      ],
    },
    contact: {
      section: "ACTION PLAN",
      titleA: "My First 120 ",
      titleB: "Days \u2014 Phase by Phase Roadmap",
      subtitle: "When I join SafiPort, here's my 6-phase action plan to deliver concrete, measurable value:",
      phases: [
        {
          week: "Week 1-2",
          title: "System Discovery & Audit",
          tasks: [
            "Deep-dive into G\u00FCle\u00E7e reporting system",
            "OPUS TOS API documentation and data schema mapping",
            "TRASSIR VMS SDK access and camera layout mapping",
            "Kalmar SmartFleet data feed analysis",
            "Documenting data flows across all 6 terminals",
            "Technical requirements meetings with IT team",
          ],
        },
        {
          week: "Week 3-4",
          title: "Data Architecture & API Design",
          tasks: [
            "Designing unified data model (PostgreSQL + Redis)",
            "Writing OPUS TOS \u2194 Dashboard API integration layer",
            "Developing TRASSIR VMS webhook/event capture module",
            "SmartFleet data normalization and cache layer",
            "Setting up role-based access control (RBAC) architecture",
          ],
        },
        {
          week: "Week 5-8",
          title: "Unified Dashboard MVP",
          tasks: [
            "Building 6-terminal single-screen dashboard",
            "Real-time KPI panel (container throughput, crane efficiency, berth occupancy)",
            "AI alert system \u2014 OPUS + TRASSIR + SmartFleet cross-reference",
            "Automated shift report generation (replacing G\u00FCle\u00E7e)",
            "Mobile responsive design (for field teams)",
          ],
        },
        {
          week: "Week 9-12",
          title: "Automated Reporting & G\u00FCle\u00E7e Replacement",
          tasks: [
            "Daily/weekly/monthly automatic report generation module",
            "PDF and Excel export (compatible with existing formats)",
            "Email and Telegram notification integration",
            "Terminal-level and holding-level consolidated reports",
            "Reporting infrastructure fully independent of G\u00FCle\u00E7e",
          ],
        },
        {
          week: "Week 13-16",
          title: "AI Vision Pilot",
          tasks: [
            "Container code OCR model (ISO 6346 standard)",
            "Cargo damage detection pilot (top 10 busiest cameras)",
            "PPE compliance monitoring (helmet, vest detection)",
            "Truck queue analysis and waiting time prediction",
            "AI model results integration into dashboard",
          ],
        },
        {
          week: "Week 17-20",
          title: "Holding KPI Portal & Scaling",
          tasks: [
            "SafiPort + Bilecik Cement + Corum Sugar consolidated KPI portal",
            "Executive dashboard for holding management",
            "Predictive maintenance model (for cranes and equipment)",
            "Customer self-service portal (container tracking)",
            "Documentation, training, and handover",
          ],
        },
      ],
      stepLabel: "Phase",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      linkedinName: "Sedat Irtas",
      ctaText: "This portfolio was built specifically for SafiPort Derince, based on 40+ hours of research. All data (terminal capacities, system names, org structure, competitive analysis) is compiled from real sources. Source code is open.",
      viewSource: "View Source Code",
      backToAnalysis: "Back to Analysis",
    },
    footer: {
      name: "Sedat Irtas",
      tagline: "Built specifically for SafiPort Derince \u2014 Next.js 16 + TypeScript + AI",
      sync: "Synced with GitHub",
    },
  },
};

type Dict = typeof dict;
type Translations = Dict[Lang];

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
  t: dict.en,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("safiport-lang") as Lang | null;
    if (saved && dict[saved]) setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("safiport-lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
