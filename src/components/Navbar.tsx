"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang, Lang } from "@/lib/i18n";
import { useTheme } from "@/components/ClientProviders";

const langs: { key: Lang; label: string }[] = [
  { key: "tr", label: "TR" },
  { key: "en", label: "EN" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-600 to-orange-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">SI</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:block">
              {t.footer.name}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {t.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-foreground/70 hover:text-sky-400 transition-colors rounded-lg hover:bg-sky-500/5"
              >
                {link.label}
              </a>
            ))}
            <div className="w-px h-5 bg-border mx-2" />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-surface-light transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg className="w-4 h-4 text-foreground/60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-4 h-4 text-foreground/60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
            <div className="w-px h-5 bg-border mx-2" />
            <div className="flex items-center rounded-lg overflow-hidden border border-border/50">
              {langs.map((l) => (
                <button
                  key={l.key}
                  onClick={() => setLang(l.key)}
                  className={`px-2.5 py-1.5 text-[10px] font-mono transition-all ${
                    lang === l.key
                      ? "bg-sky-600 text-white"
                      : "text-foreground/40 hover:text-foreground hover:bg-surface-light"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg hover:bg-surface-light transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg className="w-3.5 h-3.5 text-foreground/60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-3.5 h-3.5 text-foreground/60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
            <div className="flex items-center rounded-lg overflow-hidden border border-border/50">
              {langs.map((l) => (
                <button
                  key={l.key}
                  onClick={() => setLang(l.key)}
                  className={`px-1.5 py-1 text-[9px] font-mono transition-all ${
                    lang === l.key ? "bg-sky-600 text-white" : "text-foreground/40"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg hover:bg-surface-light transition-colors"
            >
              <div className="w-5 h-5 flex flex-col justify-center gap-1">
                <span className={`block h-0.5 w-5 bg-foreground transition-transform ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`block h-0.5 w-5 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-5 bg-foreground transition-transform ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-4 py-3 space-y-1">
              {t.nav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm text-foreground/70 hover:text-sky-400 rounded-lg hover:bg-sky-500/5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
