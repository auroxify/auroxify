import { pageMeta } from "@/app/lib/site";
import { ShieldCheck, FileText, Eye, Lock, Cookie, Share2, Clock, UserCheck, Baby, RefreshCw } from "lucide-react";
import LegalLayout, { P, UL, type LegalSection } from "@/app/components/LegalLayout";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description: "How Auroxify collects, uses and protects the personal information you share through our website and contact form.",
  path: "/privacy",
});

// Update this date by hand whenever you change the policy.
const UPDATED = "November 2, 2026";
const EMAIL = "info@auroxify.com";
const GMAIL_LINK = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent("Privacy enquiry")}`;

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
            <strong className="text-white">Project information:</strong> details, messages, files and other materials you voluntarily share with us when discussing or working on a project.
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
        <li>To respond to enquiries and discuss potential projects.</li>
        <li>To understand your requirements and prepare project proposals or quotations.</li>
        <li>To provide and improve our web development, e-commerce, SEO and digital services.</li>
        <li>To communicate with you about your project and provide relevant updates.</li>
        <li>To protect our website and comply with applicable legal requirements.</li>
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
          We may share relevant information with service providers that help us operate our website and communicate with visitors, such as website hosting, email and contact form processing services. These providers handle information according to their own privacy policies.
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
      <>
        <P>
          We use Vercel Web Analytics to understand how visitors use our website, such as which pages are viewed and the general region visitors come from. We also use Vercel Speed Insights to measure how fast our pages load for real visitors. Both are designed to be privacy-friendly and do not use cookies to track you across websites.
        </P>
        <P>
          Our contact page includes an embedded Google Map. When you load that page, Google may set cookies or collect technical information according to its own privacy policy. Other than this, we do not use advertising or marketing cookies.
        </P>
        <P>
          You can manage or block cookies at any time through your browser settings. If we add new tracking tools in the future, we will update this policy.
        </P>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep data",
    icon: Clock,
    body: (
      <P>
        We retain personal information only for as long as necessary to respond to enquiries, manage projects, provide agreed services and meet applicable legal obligations. When information is no longer needed, we take reasonable steps to delete or securely dispose of it.
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
          Email{" "}
          <a
            href={GMAIL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white underline decoration-white/30 underline-offset-4 transition hover:text-bright"
          >
            {EMAIL}
          </a>{" "}
          and we will respond as soon as we can.
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