import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // Update this to the live domain when the site is deployed — it is used to
  // resolve the social sharing image (Open Graph / Twitter card) URLs.
  metadataBase: new URL("https://smartflowy-solutions.vercel.app"),
  title: "Smartflowy Solutions — Websites, Automation & AI Tools for Small Businesses",
  description:
    "Smartflowy Solutions designs websites, automation, and AI tools for salons, spas, skin clinics, and small businesses. See a free 3-page website sample before you decide.",
  keywords: [
    "website design for salons",
    "salon website",
    "spa website design",
    "skin clinic website",
    "aesthetic clinic website",
    "small business websites",
    "Smartflowy Solutions",
  ],
  authors: [{ name: "Smartflowy Solutions" }],
  icons: {
    icon: "/brand/favicon.png",
  },
  openGraph: {
    title: "Smartflowy Solutions — Smarter Solutions. Seamless Flow.",
    description:
      "Websites, automation, and AI tools for small businesses. Get a free 3-page website sample before you decide.",
    siteName: "Smartflowy Solutions",
    type: "website",
    images: [
      {
        url: "/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Smartflowy Solutions — Websites, automation, and AI tools for small businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smartflowy Solutions — Smarter Solutions. Seamless Flow.",
    description:
      "Websites, automation, and AI tools for small businesses. Get a free 3-page website sample before you decide.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${fraunces.variable} font-sans antialiased bg-paper text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
