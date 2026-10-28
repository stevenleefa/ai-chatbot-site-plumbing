import "./globals.css";
import type { ReactNode } from "react";
import { Barlow_Condensed, Inter } from "next/font/google";
import { business } from "@/lib/business";

const display = Barlow_Condensed({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-display" });
const bodyFont = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: `${business.name} — ${business.tagline}`,
  description: `${business.name}: ${business.tagline} Open ${business.hours}`,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${bodyFont.variable}`}>{children}</body>
    </html>
  );
}
