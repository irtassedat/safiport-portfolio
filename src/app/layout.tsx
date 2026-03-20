import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/ClientProviders";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sedat Irtas | SafiPort Derince — Dijital Donusum Muhendisligi",
  description: "SafiPort Derince icin ozel olarak hazirlanmis portfolyo. 6 terminal, OPUS TOS, TRASSIR VMS, Kalmar SmartFleet entegrasyonu. Endustri Muhendisi & Full-Stack AI Developer.",
  keywords: ["SafiPort", "Derince", "liman", "OPUS TOS", "TRASSIR", "Kalmar SmartFleet", "dijital donusum", "AI", "full-stack developer", "endustri muhendisligi", "smart port"],
  openGraph: {
    title: "Sedat Irtas | SafiPort Derince — Dijital Donusum Muhendisligi",
    description: "SafiPort'un 6 terminalini birlestiren, Gulece raporlamasini otomatize eden, 500 kamera uzerinde AI vision kuran dijital donusum vizyonu.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
