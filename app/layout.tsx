import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FireGuard Pro - Fire Extinguishers & Safety Solutions",
  description:
    "FireGuard Pro provides high-quality fire extinguishers, fire safety equipment, and professional services to keep your home, office, and business safe.",
  generator: "Next.js",
  keywords: [
    "fire extinguisher",
    "fire safety",
    "fire protection",
    "fire equipment",
    "fire prevention",
    "fire safety company",
  ],
  authors: [{ name: "FireGuard Pro" }],
  openGraph: {
    title: "FireGuard Pro - Fire Extinguishers & Safety Solutions",
    description:
      "Trusted fire extinguishers and safety solutions for homes, offices, and businesses.",
    url: "https://www.fireguardpro.com", // 👈 replace with your real domain
    siteName: "FireGuard Pro",
    images: [
      {
        url: "/images/fire-extinguisher-og.jpg", // 👈 put your OG image in /public/images/
        width: 1200,
        height: 630,
        alt: "FireGuard Pro - Fire Safety Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FireGuard Pro - Fire Extinguishers & Safety Solutions",
    description:
      "FireGuard Pro provides fire extinguishers, safety equipment, and expert fire protection services.",
    images: ["/images/fire-extinguisher-og.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
