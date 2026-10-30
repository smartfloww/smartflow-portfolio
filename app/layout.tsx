import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmartFlowy Solutions — Thoughtful Digital Experiences",
  description: "We build thoughtful websites, e-commerce experiences, and intelligent automations for growing businesses.",
  icons: {
    icon: "/imgs/logos/website-favicon-circle.png?v=2",
    shortcut: "/imgs/logos/website-favicon-circle.png?v=2",
    apple: "/imgs/logos/apple-touch-icon.png?v=2",
  },
  openGraph: {
    title: "SmartFlowy Solutions",
    description: "Thoughtful websites and digital solutions for growing businesses.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
