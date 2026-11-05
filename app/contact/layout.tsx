import JsonLd from "@/app/components/JsonLd";
import { pageMeta, breadcrumb, abs, SITE } from "@/app/lib/site";

const TITLE = "Contact Us – Software House in Karachi";
const DESC = "Get a free quote from Auroxify, a software house in DHA, Karachi. Call, WhatsApp or send your project details and we will reply within a day.";

export const metadata = pageMeta({
  title: TITLE,
  description: DESC,
  path: "/contact",
  keywords: ["contact Auroxify", "software house in Karachi contact", "get a website quote Karachi", "hire web developers Karachi"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${abs("/contact")}#webpage`,
        url: abs("/contact"),
        name: "Contact Auroxify",
        description: DESC,
        isPartOf: { "@id": `${SITE.url}/#website` },
        about: { "@id": `${SITE.url}/#organization` },
      },
      breadcrumb([{ name: "Contact", path: "/contact" }]),
    ],
  };
  return (
    <>
      <JsonLd data={schema} />
      {children}
    </>
  );
}