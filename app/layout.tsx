import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";

const heading = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--f-heading", display: "swap" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--f-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--f-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Auroxify | Websites, AI & SEO that grow your business",
  description: "We build online shops, custom websites and AI tools, and get you found on Google. Simple, fast and built to last.",
  openGraph: {
    title: "Auroxify | Websites, AI & SEO that grow your business",
    description: "Online shops, custom websites, AI tools and SEO for growing businesses.",
    type: "website",
  },
};
export const viewport: Viewport = { themeColor: "#06080f", viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}