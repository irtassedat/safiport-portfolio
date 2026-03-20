"use client";

import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { getLanguageColor, type GitHubRepo, type GitHubProfile } from "@/lib/github";
import { useLang } from "@/lib/i18n";

function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  useEffect(() => {
    if (!inView || done) return;
    let i = 0;
    setDisplayed("");
    const id = setInterval(() => {
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, 15);
    return () => clearInterval(id);
  }, [inView, text, done]);

  return (
    <span ref={ref}>
      {done ? text : displayed}
      {!done && inView && (
        <span className="inline-block w-px h-3 bg-foreground/40 ml-0.5 animate-pulse" />
      )}
    </span>
  );
}

interface Props {
  repos: GitHubRepo[];
  profile: GitHubProfile;
}

const projectExtras: Record<string, { liveUrl?: string }> = {
  "qrmenu-backend": {
    liveUrl: "https://qr.sebastianlogic.com",
  },
};

const achievementTags = [
  ["Fastify", "WebSocket", "Redis", "PostgreSQL"],
  ["Node.js", "Prisma", "Docker", "Geo-Query"],
  ["Python", "Gemini AI", "ML", "FastAPI"],
  ["Express", "RBAC", "SaaS", "PostgreSQL"],
];

export default function GitHubProjects({ repos, profile }: Props) {
  const { lang, t } = useLang();

  const featuredNames = Object.keys(t.github.projectMeta);
  const featured = repos.filter((r) => featuredNames.includes(r.name));

  return (
    <section id="projects" className="py-24 px-4 relative bg-grid">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-orange-400 tracking-wider">
            {t.github.section}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 tracking-tight">
            {t.github.titleA}
            <span className="text-gradient">{t.github.titleB}</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-surface border border-border">
            <img
              src={profile.avatar_url}
              alt={profile.login}
              className="w-10 h-10 rounded-full ring-2 ring-sky-500/20"
            />
            <div>
              <div className="font-semibold text-sm">@{profile.login}</div>
              <div className="text-xs text-foreground/40">
                {profile.public_repos} repo &middot; {t.github.syncLabel}
              </div>
            </div>
            <span className="relative flex h-2 w-2 ml-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
            </span>
          </div>
          <a
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 text-sm border border-border rounded-xl hover:border-sky-500/30 transition-colors"
          >
            {t.github.viewAll} &rarr;
          </a>
        </motion.div>

        <div className="flex items-center gap-2 mb-3">
          <svg className="w-4 h-4 text-foreground/30" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          <span className="text-xs font-medium text-foreground/40">{t.github.openSource}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-12">
          {featured.map((repo) => {
            const meta = t.github.projectMeta[repo.name as keyof typeof t.github.projectMeta];
            const extras = projectExtras[repo.name];
            return (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border/50 hover:border-sky-500/30 transition-all text-xs group"
              >
                {repo.language && (
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: getLanguageColor(repo.language) }} />
                )}
                <span className="text-foreground/60 group-hover:text-sky-400 transition-colors font-medium">{meta?.title || repo.name}</span>
                {extras?.liveUrl && (
                  <span
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(extras.liveUrl, "_blank"); }}
                    className="text-[9px] px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-400 cursor-pointer"
                  >
                    {lang === "tr" ? "canli" : "live"}
                  </span>
                )}
              </a>
            );
          })}
        </div>

        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-gradient-to-br from-sky-600 to-orange-500 flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">S</span>
          </div>
          {t.github.dataAnalysis}
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {t.github.achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-xl bg-surface border border-border hover:border-orange-500/20 transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-sm">{item.title}</h4>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 shrink-0 ml-2">
                  {item.metric}
                </span>
              </div>
              <p className="text-xs text-foreground/40 leading-relaxed mb-3">
                <TypewriterText text={item.desc} />
              </p>
              <div className="flex items-center gap-1.5 mb-2">
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 font-medium">
                  SafiPort: {item.safiRelevance}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {achievementTags[i]?.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-sky-500/5 text-foreground/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
