import JsonLd from "@/app/components/JsonLd";
import { pageMeta, breadcrumb, abs, SITE } from "@/app/lib/site";

const TITLE = "Our Portfolio – Websites & E-commerce Projects";
const DESC = "Explore websites, e-commerce stores and AI tools built by Auroxify, a Karachi software house, for real estate, local business and agency clients.";

export const metadata = pageMeta({
  title: TITLE,
  description: DESC,
  path: "/portfolio",
  keywords: ["web development portfolio", "website design projects", "real estate website development", "Auroxify portfolio"],
});

const PROJECTS = [
  ["Wrangler Homes", "https://wranglerhomes.com/"],
  ["Funnel Plane", "https://funnelplane.com/"],
  ["The Flooring Bull", "https://theflooringbull.com/"],
  ["Ember Realtors", "https://emberrealtors.com/"],
  ["Run It Remote", "https://ericcline.runitremote.com/"],
  ["Modern Furniture Store", "https://ui-ux-hackathon--zeta.vercel.app/"],
  ["Image to Prompt", "https://img-to-prompt.netlify.app/"],
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${abs("/portfolio")}#webpage`,
        url: abs("/portfolio"),
        name: TITLE,
        description: DESC,
        isPartOf: { "@id": `${SITE.url}/#website` },
      },
      breadcrumb([{ name: "Portfolio", path: "/portfolio" }]),
      {
        "@type": "ItemList",
        itemListElement: PROJECTS.map(([name, url], i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: { "@type": "CreativeWork", name, url },
        })),
      },
    ],
  };
  return (
    <>
      <JsonLd data={schema} />
      {children}
    </>
  );
}