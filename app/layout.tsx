import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.novoindustries.in"),
  title: {
    default: "Novo Industries — India's Premium Smoker & Grill Manufacturer",
    template: "%s | Novo Industries",
  },
  description:
    "Novo Industries crafts premium handmade offset smokers, BBQ grills, and custom outdoor cooking systems in India. Built for fire. Engineered for performance.",
  keywords: [
    "offset smoker India",
    "BBQ grill manufacturer India",
    "custom smoker India",
    "outdoor cooking equipment",
    "Novo Industries",
    "handcrafted smoker",
    "commercial smoker India",
    "Santa Maria grill India",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.novoindustries.in",
    siteName: "Novo Industries",
    title: "Novo Industries — India's Premium Smoker & Grill Manufacturer",
    description: "Premium handcrafted smokers, grills, and outdoor cooking systems made in India.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Novo Industries — India's Premium Smoker & Grill Manufacturer",
    description: "Premium handcrafted smokers, grills, and outdoor cooking systems made in India.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#fafafa] text-[#0a0a0a] font-[var(--font-sans)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
