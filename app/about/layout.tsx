import JsonLd from "@/app/components/JsonLd";
import { pageMeta, breadcrumb, abs, SITE } from "@/app/lib/site";

const TITLE = "About Us – Software Company in Karachi";
const DESC = "Meet Auroxify, a Karachi software company founded in 2026. Learn about our founders, values and how we build websites, online stores and AI tools.";

export const metadata = pageMeta({
  title: TITLE,
  description: DESC,
  path: "/about",
  keywords: ["about Auroxify", "software company in Karachi", "web development team Karachi", "Auroxify founders"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${abs("/about")}#webpage`,
        url: abs("/about"),
        name: "About Auroxify",
        description: DESC,
        isPartOf: { "@id": `${SITE.url}/#website` },
        about: { "@id": `${SITE.url}/#organization` },
      },
      breadcrumb([{ name: "About", path: "/about" }]),
    ],
  };
  return (
    <>
      <JsonLd data={schema} />
      {children}
    </>
  );
}