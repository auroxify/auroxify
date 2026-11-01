import type { Metadata } from "next";
import { Scale, FileCheck, Briefcase, Banknote, Users, LifeBuoy, Copyright, EyeOff, AlertTriangle, DoorOpen, Gavel, RefreshCw } from "lucide-react";
import LegalLayout, { P, UL, type LegalSection } from "@/app/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service | Auroxify",
  description: "Read the terms and conditions for using Auroxify's web development services.",
};

// Update this date by hand whenever you change the terms.
const UPDATED = "November 2, 2026";

const SECTIONS: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of terms",
    icon: FileCheck,
    body: (
      <P>
        By using the Auroxify website or hiring us for a project, you agree to these Terms of Service. If you do not agree with any part of them, please do not use our services.
      </P>
    ),
  },
  {
    id: "services",
    title: "Services we provide",
    icon: Briefcase,
    body: (
      <>
        <P>Auroxify provides digital services, including but not limited to:</P>
        <UL>
          <li>Website design and development (custom, WordPress, Shopify).</li>
          <li>E-commerce store setup and optimisation.</li>
          <li>AI integration and automation.</li>
          <li>Search Engine Optimisation (SEO) and digital marketing.</li>
          <li>Website maintenance and security care plans.</li>
        </UL>
        <P>The exact scope, deliverables and timeline of each project are written in the quote you approve.</P>
      </>
    ),
  },
  {
    id: "payment",
    title: "Payment terms",
    icon: Banknote,
    body: (
      <>
        <P>Unless we agree something different in writing:</P>
        <UL>
          <li>
            <strong className="text-white">Upfront payment:</strong> 50% of the total project cost is due before work begins.
          </li>
          <li>
            <strong className="text-white">Final payment:</strong> the remaining 50% is due when the project is complete, before final file handover or website launch.
          </li>
          <li>Payments are non-refundable once the project has started, except where we fail to deliver what was agreed.</li>
        </UL>
      </>
    ),
  },
  {
    id: "client",
    title: "Client responsibilities",
    icon: Users,
    body: (
      <P>
        To deliver on time, we need your content, images, logos, access details and feedback promptly. Delays in sending materials or approvals may move the project timeline.
      </P>
    ),
  },
  {
    id: "support",
    title: "Support after launch",
    icon: LifeBuoy,
    body: (
      <P>
        Every project includes 30 days of free bug-fixing after launch. After that, you can choose one of our monthly maintenance plans or ask for one-off work, which we will quote separately.
      </P>
    ),
  },
  {
    id: "ip",
    title: "Intellectual property",
    icon: Copyright,
    body: (
      <P>
        Once you have paid in full, you own the final website design, content and code we made for you. Auroxify may show the finished project in its portfolio and marketing, unless we have signed a Non-Disclosure Agreement (NDA) that says otherwise. Third-party tools, fonts, plugins and stock assets stay under their own licences.
      </P>
    ),
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    icon: EyeOff,
    body: (
      <P>
        We keep your business information private and are happy to sign an NDA before you share details. We ask that you also keep our quotes and working methods private.
      </P>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    icon: AlertTriangle,
    body: (
      <P>
        Auroxify is not liable for indirect, incidental or consequential damages arising from the use of our services, including loss of profits, data or business opportunities. We do not guarantee 100% uptime or that a website will be error-free at all times, and we are not responsible for outages or changes at third-party providers.
      </P>
    ),
  },
  {
    id: "termination",
    title: "Ending a project",
    icon: DoorOpen,
    body: (
      <P>
        Either side may end a project in writing. You will pay for the work completed up to that date, and we will hand over the finished parts once payment for them is received.
      </P>
    ),
  },
  {
    id: "law",
    title: "Governing law",
    icon: Gavel,
    body: (
      <P>
        These Terms are governed by the laws of Pakistan, without regard to conflict-of-law rules. Any dispute will be handled by the courts of Lahore, Pakistan.
      </P>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    icon: RefreshCw,
    body: (
      <P>
        We may update these Terms from time to time. The version on this page, with its date, is the one that applies. Work already agreed in a signed quote continues under the terms in force when it was approved.
      </P>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      badge="Legal Document"
      BadgeIcon={Scale}
      title="Terms of Service"
      intro="The simple ground rules for working with Auroxify: what we do, how payment works, and who owns what."
      updatedLabel="Effective date"
      updated={UPDATED}
      sections={SECTIONS}
      otherDoc={{ href: "/privacy", label: "Privacy Policy" }}
      accent="violet"
    />
  );
}