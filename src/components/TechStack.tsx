"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const techWords = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Fastify",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Nginx",
  "Prisma",
  "REST API",
  "WebSocket",
  "Claude AI",
  "Gemini AI",
  "MCP Servers",
  "Computer Vision",
  "IoT",
  "OPUS TOS",
  "TRASSIR VMS",
  "SmartFleet",
  "Kubernetes",
  "CI/CD",
  "Git",
  "Linux",
  "Cloudflare",
  "Tailscale",
  "Vercel",
  "Telegram Bot",
  "Isolation Forest",
];

function seededValue(seed: number, offset: number): number {
  const x = Math.sin(seed * 9301 + offset * 49297 + 233) * 10000;
  return x - Math.floor(x);
}

interface WordItem {
  text: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
}

export default function TechStack() {
  const words: WordItem[] = useMemo(() => {
    return techWords.map((text, i) => ({
      text,
      x: seededValue(i, 1) * 90 + 5,
      y: seededValue(i, 2) * 90 + 2,
      size: seededValue(i, 3) * 0.6 + 0.6,
      opacity: seededValue(i, 4) * 0.06 + 0.06,
      duration: seededValue(i, 5) * 14 + 16,
      delay: seededValue(i, 6) * -24,
      driftX: (seededValue(i, 7) - 0.5) * 36,
      driftY: (seededValue(i, 8) - 0.5) * 28,
    }));
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      {words.map((w) => (
        <motion.span
          key={w.text}
          className="absolute font-mono font-medium text-foreground whitespace-nowrap"
          style={{
            left: `${w.x}%`,
            top: `${w.y}%`,
            fontSize: `${w.size}rem`,
            opacity: w.opacity,
          }}
          animate={{
            x: [0, w.driftX, 0, -w.driftX * 0.5, 0],
            y: [0, w.driftY, -w.driftY * 0.6, w.driftY * 0.3, 0],
          }}
          transition={{
            duration: w.duration,
            delay: w.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {w.text}
        </motion.span>
      ))}
    </div>
  );
}
