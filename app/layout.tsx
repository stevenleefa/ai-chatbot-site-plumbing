import "./globals.css";
import type { ReactNode } from "react";
import { business } from "@/lib/business";

export const metadata = {
  title: `${business.name} — ${business.tagline}`,
  description: `${business.name}: ${business.tagline} Open ${business.hours}`,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
