import type { Metadata } from "next";
import { ShieldCheck, FileText, Eye, Lock, Cookie, Share2, Clock, UserCheck, Baby, RefreshCw } from "lucide-react";
import LegalLayout, { P, UL, type LegalSection } from "@/app/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Auroxify",
  description: "Learn how Auroxify collects, uses, and protects your personal data.",
};

// Update this date by hand whenever you change the policy.
const UPDATED = "November 2, 2026";

const SECTIONS: LegalSection[] = [
  {
    id: "collect",
    title: "Information we collect",
    icon: FileText,
    body: (
      <>
        <P>When you visit our website or work with us, we may collect:</P>
        <UL>
          <li>
            <strong className="text-white">Contact details:</strong> your name, email address, phone number and company when you fill in our contact form or message us.
          </li>
          <li>
            <strong className="text-white">Usage data:</strong> IP address, browser type, device, pages visited and time spent, so we can improve the site.
          </li>
          <li>
            <strong className="text-white">Project data:</strong> files, text, logins and other material you share so we can build or maintain your website.
          </li>
        </UL>
      </>
    ),
  },
  {
    id: "use",
    title: "How we use your information",
    icon: Eye,
    body: (
      <UL>
        <li>To reply to enquiries and prepare quotes.</li>
        <li>To deliver, maintain and improve our web development, AI, SEO and maintenance services.</li>
        <li>To send project updates, and newsletters or offers only if you agreed (you can opt out at any time).</li>
        <li>To meet legal obligations and protect our rights.</li>
      </UL>
    ),
  },
  {
    id: "sharing",
    title: "Sharing your information",
    icon: Share2,
    body: (
      <>
        <P>We do not sell, trade or rent your personal information.</P>
        <P>
          We only share data with trusted tools that help us run the business, such as hosting, analytics (for example Google Analytics), payment providers (for example Stripe) and e-commerce platforms (for example Shopify), and only as much as they need. These providers have their own privacy policies, and we encourage you to read them.
        </P>
      </>
    ),
  },
  {
    id: "security",
    title: "Data security",
    icon: Lock,
    body: (
      <P>
        We use reasonable technical and organisational measures to protect your information, including encrypted connections and access controls. No method of transfer or storage is 100% secure, so we cannot guarantee absolute security, but we take it seriously and will tell you if something affects your data.
      </P>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and tracking",
    icon: Cookie,
    body: (
      <P>
        We use cookies to make the site work, understand traffic and see where visitors come from. You can turn cookies off in your browser settings, but some parts of the site may not work properly without them.
      </P>
    ),
  },
  {
    id: "retention",
    title: "How long we keep data",
    icon: Clock,
    body: (
      <P>
        We keep your information only as long as needed for the purposes above, or as the law requires. Enquiries that do not lead to a project are deleted after a reasonable period. Project files are kept while we work together and for support after launch, then removed or returned on request.
      </P>
    ),
  },
  {
    id: "rights",
    title: "Your rights",
    icon: UserCheck,
    body: (
      <>
        <P>You can ask us to:</P>
        <UL>
          <li>Show you the personal data we hold about you.</li>
          <li>Correct anything that is wrong.</li>
          <li>Delete your data, or stop us from using it for marketing.</li>
        </UL>
        <P>
          Email <strong className="text-white">privacy@auroxify.com</strong> and we will respond as soon as we can.
        </P>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    icon: Baby,
    body: (
      <P>
        Our services are for businesses and adults. We do not knowingly collect personal data from children. If you think a child has sent us information, contact us and we will delete it.
      </P>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    icon: RefreshCw,
    body: (
      <P>
        We may update this policy from time to time. The latest version is always on this page with the date it was last changed, so please check back now and then.
      </P>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      badge="Legal Document"
      BadgeIcon={ShieldCheck}
      title="Privacy Policy"
      intro="Your privacy matters to us. This page explains what we collect, why we collect it, and the control you have over it."
      updatedLabel="Last updated"
      updated={UPDATED}
      sections={SECTIONS}
      otherDoc={{ href: "/terms", label: "Terms of Service" }}
      accent="primary"
    />
  );
}