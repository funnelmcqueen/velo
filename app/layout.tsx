import type { Metadata } from "next";
import { Space_Grotesk, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FunnelMcQueen | HVAC Website Design, Ads & Lead Follow-Up",
  description:
    "Websites, ads, and follow-up systems built for HVAC companies. Fast, mobile-first sites and connected marketing that turns missed calls into booked jobs. Book a free call.",
  keywords: [
    "HVAC website design",
    "HVAC marketing",
    "HVAC ads",
    "HVAC lead follow-up",
    "HVAC web design agency",
  ],
  openGraph: {
    title: "FunnelMcQueen | Built for Speed. Wired to Convert.",
    description:
      "Websites, ads, and follow-up systems built for HVAC companies. Book a free call.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${barlowCondensed.variable}`}
    >
      <head>
        {/* Clash Display — headline font served from Fontshare */}
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&display=swap"
        />
      </head>
      <body className="font-grotesk bg-night text-offwhite antialiased">
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
