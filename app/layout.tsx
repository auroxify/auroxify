import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import JsonLd from "@/app/components/JsonLd";
import { SITE, abs } from "@/app/lib/site";

const heading = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--f-heading", display: "swap" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--f-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--f-mono", display: "swap" });

const TITLE = "Auroxify | Software House in Karachi, Pakistan";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: TITLE, template: "%s | Auroxify" },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    // Brand + spelling variations
    "Auroxify", "Auroxify Karachi", "Auroxify Pakistan", "Auroxify software house",
    "Auorixy", "Auroxfy", "Aurexify", "Auroxify.com", "Auroxify agency",

    // Software house / company (Karachi)
    "software house in Karachi", "software company in Karachi",
    "best software house in Karachi", "top software house in Karachi",
    "software house near me", "software company near me",
    "software house in DHA Karachi", "software company in DHA Karachi",
    "IT company in Karachi", "IT services Karachi", "software development company Karachi",

    // Software house (Pakistan)
    "software house in Pakistan", "software company in Pakistan",
    "best software house in Pakistan", "software development company Pakistan",

    // Web development
    "web development company in Karachi", "web development agency Karachi",
    "web development agency Pakistan", "website development company Karachi",
    "website design company Karachi", "web design agency Karachi",
    "custom website development Pakistan", "web developers in Karachi",
    "hire web developers Karachi", "freelance web developer Karachi alternative",
    "Next.js development company", "Next.js developers Pakistan",
    "React development company Pakistan", "business website development Pakistan",

    // E-commerce
    "e-commerce website development Karachi", "ecommerce development company Pakistan",
    "Shopify development Pakistan", "Shopify store setup Karachi",
    "WooCommerce development Karachi", "WordPress development company Karachi",
    "online store development Pakistan",

    // AI
    "AI automation Pakistan", "AI automation Karachi", "AI chatbot development Pakistan",
    "AI integration services", "OpenAI API integration", "business automation Pakistan",

    // SEO
    "SEO services Karachi", "SEO company in Karachi", "SEO agency Pakistan",
    "technical SEO services", "website maintenance services Karachi",

    // International
    "web development agency for small business", "affordable web development agency",
    "Pakistan software house for US clients", "offshore web development Pakistan",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_US",
    url: "/",
    title: TITLE,
    description: SITE.description,
    images: [{ url: "/og", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: SITE.description, images: ["/og"] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
    icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = { themeColor: "#06080f", viewportFit: "cover" };

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      alternateName: ["Auroxify Software House", "Auorixy"],
      url: SITE.url,
      logo: { "@type": "ImageObject", url: abs("/logo.png"), width: 358, height: 385 },
      image: abs("/og"),
      description: SITE.description,
      email: SITE.email,
      telephone: SITE.phone,
      foundingDate: "2026",
      address: { "@type": "PostalAddress", addressLocality: "Karachi", addressRegion: "Sindh", addressCountry: "PK" },
      areaServed: [
        { "@type": "City", name: "Karachi" },
        { "@type": "Country", name: "Pakistan" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: SITE.phone,
        email: SITE.email,
        availableLanguage: ["English", "Urdu"],
      },
      sameAs: SITE.sameAs,
      founder: [
        { "@type": "Person", name: "Muhammad Qasim", jobTitle: "Co-Founder & CEO" },
        { "@type": "Person", name: "Hafiz Hamza", jobTitle: "Co-Founder & CTO" },
      ],
      knowsAbout: ["Web development", "E-commerce development", "Next.js", "Shopify", "WooCommerce", "AI automation", "SEO"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      inLanguage: "en",
      publisher: { "@id": `${SITE.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <JsonLd data={schema} />
        <Navbar />
        <div>{children}</div>
        <Footer />
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}