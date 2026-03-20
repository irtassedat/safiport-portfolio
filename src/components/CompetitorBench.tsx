"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

export default function CompetitorBench() {
  const { t, lang } = useLang();

  return (
    <section id="competition" className="py-24 px-4 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-mono text-sky-400 tracking-wider">
            {t.competition.section}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 tracking-tight">
            {t.competition.titleA}
            <span className="text-gradient">{t.competition.titleB}</span>
          </h2>
          <p className="text-foreground/40 mt-3 text-sm max-w-2xl mx-auto">
            {t.competition.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl bg-surface border border-border overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-4 gap-0 border-b border-border">
            <div className="p-4 bg-surface-light/30">
              <span className="text-[10px] font-mono text-foreground/30 uppercase tracking-wider">
                {lang === "tr" ? "Kategori" : "Category"}
              </span>
            </div>
            <div className="p-4 bg-red-500/5 border-l border-border">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-gradient-to-br from-sky-600 to-orange-500 flex items-center justify-center">
                  <span className="text-white text-[7px] font-bold">SP</span>
                </div>
                <div>
                  <div className="text-[10px] font-semibold">{t.competition.safiLabel}</div>
                  <div className="text-[8px] text-foreground/30">1.5M TEU</div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-green-500/5 border-l border-border">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-emerald-600 flex items-center justify-center">
                  <span className="text-white text-[7px] font-bold">DW</span>
                </div>
                <div>
                  <div className="text-[10px] font-semibold">{t.competition.evyapLabel}</div>
                  <div className="text-[8px] text-foreground/30">2M TEU</div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-blue-500/5 border-l border-border">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center">
                  <span className="text-white text-[7px] font-bold">YP</span>
                </div>
                <div>
                  <div className="text-[10px] font-semibold">{t.competition.yilportLabel}</div>
                  <div className="text-[8px] text-foreground/30">Global Top 15</div>
                </div>
              </div>
            </div>
          </div>

          {/* Rows */}
          {t.competition.categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid grid-cols-4 gap-0 border-b border-border/50 last:border-b-0"
            >
              <div className="p-3 flex items-center">
                <span className="text-xs text-foreground/60 font-medium">{cat.name}</span>
              </div>
              <div className="p-3 border-l border-border/50 flex items-center bg-red-500/3">
                <div className="flex items-center gap-1.5">
                  {cat.safi.includes("Yok") || cat.safi === "None" || cat.safi === "0 yazilimci" || cat.safi === "0 developers" ? (
                    <span className="w-4 h-4 rounded-full bg-red-500/15 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                    </span>
                  ) : (
                    <span className="w-4 h-4 rounded-full bg-yellow-500/15 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    </span>
                  )}
                  <span className="text-[10px] text-foreground/50">{cat.safi}</span>
                </div>
              </div>
              <div className="p-3 border-l border-border/50 flex items-center bg-green-500/3">
                <div className="flex items-center gap-1.5">
                  {cat.evyap === "Evet" || cat.evyap === "Yes" || cat.evyap.includes("Cisco") || cat.evyap.includes("SAP") ? (
                    <span className="w-4 h-4 rounded-full bg-green-500/15 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </span>
                  ) : (
                    <span className="w-4 h-4 rounded-full bg-yellow-500/15 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    </span>
                  )}
                  <span className="text-[10px] text-foreground/50">{cat.evyap}</span>
                </div>
              </div>
              <div className="p-3 border-l border-border/50 flex items-center bg-blue-500/3">
                <div className="flex items-center gap-1.5">
                  {cat.yilport.includes("SAP") || cat.yilport === "Evet" || cat.yilport === "Yes" ? (
                    <span className="w-4 h-4 rounded-full bg-green-500/15 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </span>
                  ) : (
                    <span className="w-4 h-4 rounded-full bg-yellow-500/15 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    </span>
                  )}
                  <span className="text-[10px] text-foreground/50">{cat.yilport}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Verdict */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 p-5 rounded-xl bg-gradient-to-br from-sky-500/5 via-surface/60 to-orange-500/5 border border-border"
        >
          <p className="text-xs text-foreground/50 leading-relaxed mb-3">{t.competition.verdict}</p>
          <p className="text-xs text-sky-400 font-medium">{t.competition.myRole}</p>
        </motion.div>
      </div>
    </section>
  );
}
