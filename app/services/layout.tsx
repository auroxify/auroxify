import JsonLd from "@/app/components/JsonLd";
import { pageMeta, breadcrumb, abs, SITE } from "@/app/lib/site";

const TITLE = "Web Development & SEO Services in Karachi";
const DESC = "Custom web development, Shopify and WooCommerce stores, AI automation, SEO and website maintenance from Auroxify, a software house in Karachi.";

export const metadata = pageMeta({
  title: TITLE,
  description: DESC,
  path: "/services",
  keywords: [
    "web development services Karachi", "custom website development Pakistan",
    "Shopify store development Pakistan", "WooCommerce development Karachi",
    "SEO services Karachi", "AI chatbot development Pakistan", "website maintenance services",
  ],
});

const SERVICES = [
  ["ecommerce", "E-Commerce Store Development", "WooCommerce and Shopify online stores with payment gateway integration and inventory management."],
  ["web", "Custom Web Development", "Custom Next.js and React websites with tailored UI/UX, API integrations and database design."],
  ["ai", "AI Integration & Automation", "Custom AI chatbots, automated workflows and OpenAI API integrations."],
  ["maintenance", "Website Maintenance & Care", "Backups, security scans, speed optimization and bug fixes."],
  ["seo", "SEO Services", "Keyword research, on-page optimization, technical SEO and monthly reporting."],
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${abs("/services")}#webpage`,
        url: abs("/services"),
        name: TITLE,
        description: DESC,
        isPartOf: { "@id": `${SITE.url}/#website` },
      },
      breadcrumb([{ name: "Services", path: "/services" }]),
      ...SERVICES.map(([id, name, description]) => ({
        "@type": "Service",
        "@id": `${abs("/services")}#${id}`,
        name,
        description,
        url: abs(`/services#${id}`),
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }],
      })),
    ],
  };
  return (
    <>
      <JsonLd data={schema} />
      {children}
    </>
  );
}