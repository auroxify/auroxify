import type { Metadata } from "next";

export const SITE = {
  name: "Auroxify",
  url: "https://www.auroxify.com",
  email: "info@auroxify.com",
  phone: "+923193936892",
  description:
    "Auroxify is a software house in Karachi building custom websites, Shopify and WooCommerce stores, AI automation and SEO for businesses in Pakistan and worldwide.",
  address: {
    streetAddress: "DHA", // TODO: poora address likhein
    addressLocality: "Karachi",
    addressRegion: "Sindh",
    addressCountry: "PK",
  },
  // Sirf wo links rakhein jo asli bane hon, baaqi hata dein
  sameAs: [
    "https://facebook.com/auroxify",
    "https://instagram.com/auroxify",
    "https://linkedin.com/company/auroxify",
  ],
};

export const abs = (path = "/") => new URL(path, SITE.url).toString();

/* Har page ki metadata ek hi function se banti hai */
export function pageMeta(o: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const og = `/og?title=${encodeURIComponent(o.title)}`;
  return {
    title: o.title, // layout ka template "| Auroxify" khud laga dega
    description: o.description,
    keywords: o.keywords,
    alternates: { canonical: o.path },
    openGraph: {
      type: "website",
      url: o.path,
      siteName: SITE.name,
      locale: "en_US",
      title: `${o.title} | ${SITE.name}`,
      description: o.description,
      images: [{ url: og, width: 1200, height: 630, alt: o.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${o.title} | ${SITE.name}`,
      description: o.description,
      images: [og],
    },
  };
}

/* Breadcrumb schema */
export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}