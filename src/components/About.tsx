"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-sky-400 tracking-wider">
            {t.about.section}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 tracking-tight">
            {t.about.titleA}
            <span className="text-gradient">{t.about.titleB}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-5"
          >
            <p className="text-foreground/60 text-lg leading-relaxed">
              {t.about.bio1}
              <strong className="text-sky-400">{t.about.bio1_s1}</strong>,{" "}
              <strong className="text-orange-400">{t.about.bio1_s2}</strong> ve{" "}
              <strong className="text-slate-400">{t.about.bio1_s3}</strong>
              {t.about.bio1_end}
            </p>
            <p className="text-foreground/60 text-lg leading-relaxed">
              {t.about.bio2}
            </p>

            {/* IE + SafiPort mapping */}
            <div className="p-5 rounded-xl bg-surface border border-border mt-4">
              <h3 className="text-sm font-mono text-orange-400/80 tracking-wider mb-4">{t.about.ieTitle}</h3>
              <div className="space-y-2.5">
                {t.about.ieItems.map((item, i) => (
                  <motion.div
                    key={item.skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 p-2 rounded-lg bg-background/30"
                  >
                    <span className="text-[10px] font-semibold text-sky-400 bg-sky-500/10 px-2 py-1 rounded shrink-0 min-w-[120px]">{item.skill}</span>
                    <span className="text-[10px] text-foreground/50 leading-relaxed">{item.application}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://github.com/irtassedat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-border rounded-lg hover:border-sky-500/40 transition-colors bg-surface/50"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sedat-irta%C5%9F-04a441137/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-border rounded-lg hover:border-orange-500/40 transition-colors bg-surface/50"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a
                href="mailto:sedatirtas.1@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-sky-500/10 text-sky-400 rounded-lg hover:bg-sky-500/15 transition-colors"
              >
                sedatirtas.1@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="p-5 rounded-xl bg-surface border border-border">
              <h3 className="text-sm font-mono text-foreground/40 mb-4 tracking-wider">{t.about.journey}</h3>
              <div className="space-y-4">
                {t.about.timeline.map((item, i) => (
                  <div key={item.year} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-sky-500 mt-2" />
                      {i < t.about.timeline.length - 1 && (
                        <div className="w-px flex-1 bg-border mt-1" />
                      )}
                    </div>
                    <div className="pb-4">
                      <div className="text-xs text-sky-400 font-mono">{item.year}</div>
                      <div className="font-medium text-sm mt-0.5">{item.title}</div>
                      <div className="text-xs text-foreground/40 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.about.highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-xl bg-surface border border-border hover:border-sky-500/20 transition-all group"
            >
              <span className="text-2xl">{item.icon}</span>
              <h3 className="font-semibold mt-3 mb-1.5 text-sm group-hover:text-sky-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-foreground/45 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
