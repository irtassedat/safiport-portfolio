"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

const phaseColors = ["#0284c7", "#f97316", "#22c55e", "#8b5cf6", "#ef4444", "#64748b"];

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="py-24 px-4 relative bg-grid">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-orange-400 tracking-wider">
            {t.contact.section}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 tracking-tight">
            {t.contact.titleA}
            <span className="text-gradient">{t.contact.titleB}</span>
          </h2>
          <p className="text-foreground/50 mt-4 max-w-2xl mx-auto text-sm">
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* 6-Phase Roadmap */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {t.contact.phases.map((phase, i) => (
            <motion.div
              key={phase.week}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-xl bg-surface border border-border relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-0.5" style={{ backgroundColor: phaseColors[i] + "40" }} />
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded" style={{ backgroundColor: phaseColors[i] + "15", color: phaseColors[i] }}>
                  {t.contact.stepLabel} {i + 1}
                </span>
                <span className="text-[10px] text-foreground/30 font-mono">{phase.week}</span>
              </div>
              <h4 className="font-semibold text-sm mb-3">{phase.title}</h4>
              <ul className="space-y-1.5">
                {phase.tasks.map((task, j) => (
                  <li key={j} className="flex items-start gap-2 text-[10px] text-foreground/50 leading-relaxed">
                    <span className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: phaseColors[i] }} />
                    {task}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Links */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <motion.a
            href="mailto:sedatirtas.1@gmail.com"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-5 rounded-xl bg-surface border border-border hover:border-sky-500/20 transition-all text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <div className="font-medium text-sm group-hover:text-sky-400 transition-colors">{t.contact.emailLabel}</div>
            <div className="text-xs text-foreground/40 mt-1">sedatirtas.1@gmail.com</div>
          </motion.a>

          <motion.a
            href="https://github.com/irtassedat"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="p-5 rounded-xl bg-surface border border-border hover:border-sky-500/20 transition-all text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </div>
            <div className="font-medium text-sm group-hover:text-sky-400 transition-colors">{t.contact.githubLabel}</div>
            <div className="text-xs text-foreground/40 mt-1">@irtassedat</div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/sedat-irta%C5%9F-04a441137/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-5 rounded-xl bg-surface border border-border hover:border-orange-500/20 transition-all text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-orange-400" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </div>
            <div className="font-medium text-sm group-hover:text-orange-400 transition-colors">{t.contact.linkedinLabel}</div>
            <div className="text-xs text-foreground/40 mt-1">{t.contact.linkedinName}</div>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-8 rounded-2xl bg-gradient-to-br from-sky-500/5 via-orange-500/5 to-slate-500/5 border border-border"
        >
          <p className="text-foreground/60 text-sm max-w-xl mx-auto mb-6">
            {t.contact.ctaText}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/cv"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-600 to-sky-500 text-white rounded-xl text-sm hover:opacity-90 transition-opacity font-medium"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              CV
            </a>
            <a
              href="/case-study"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-xl text-sm hover:opacity-90 transition-opacity font-medium"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Case Study
            </a>
            <a
              href="https://github.com/irtassedat/safiport-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-border rounded-xl text-sm hover:border-sky-500/30 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              {t.contact.viewSource}
            </a>
            <a
              href="#analysis"
              className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-border rounded-xl text-sm hover:border-orange-500/30 transition-colors"
            >
              {t.contact.backToAnalysis}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
