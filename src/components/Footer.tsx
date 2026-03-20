"use client";

import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-sky-600 to-orange-500 flex items-center justify-center">
            <span className="text-white font-bold text-xs">SI</span>
          </div>
          <span className="text-sm text-foreground/50">
            {t.footer.name} &copy; {new Date().getFullYear()}
          </span>
        </div>
        <div className="text-xs text-foreground/30">
          {t.footer.tagline}
        </div>
        <div className="flex items-center gap-1 text-xs text-foreground/30">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
          {t.footer.sync}
        </div>
      </div>
    </footer>
  );
}
