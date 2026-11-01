import { Metadata } from "next";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Auroxify",
  description: "Learn how Auroxify collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-base min-h-screen text-white pt-32 pb-24 px-5 md:px-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 border-b border-line pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-4">
            <ShieldCheck size={14} /> Legal Document
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Privacy Policy</h1>
          <p className="text-[var(--text-dim)]">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-[var(--text-mid)] leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4 flex items-center gap-3">
              <FileText className="text-primary" size={24} /> 1. Information We Collect
            </h2>
            <p className="mb-4">
              At Auroxify, we take your privacy seriously. When you visit our website or use our services, we may collect the following types of information:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary">
              <li><strong>Personal Data:</strong> Name, email address, phone number, and company details when you fill out our contact forms.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and time spent on our site to help us improve user experience.</li>
              <li><strong>Project Data:</strong> Any files, text, or information you share with us for the purpose of building your website or software.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4 flex items-center gap-3">
              <Eye className="text-primary" size={24} /> 2. How We Use Your Information
            </h2>
            <p className="mb-4">We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary">
              <li>To communicate with you regarding your projects, quotes, and inquiries.</li>
              <li>To provide, maintain, and improve our web development and digital services.</li>
              <li>To send you updates, newsletters, or promotional materials (you can opt out anytime).</li>
              <li>To comply with legal obligations and protect our rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4 flex items-center gap-3">
              <Lock className="text-primary" size={24} /> 3. Data Security & Protection
            </h2>
            <p>
              We implement industry-standard security measures to protect your personal information. All sensitive data is encrypted, and we use secure servers for data storage. We do not sell, trade, or rent your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">4. Cookies & Tracking</h2>
            <p>
              Our website uses cookies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can choose to disable cookies through your browser settings, though some features of the site may not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">5. Third-Party Services</h2>
            <p>
              We may use third-party services like Google Analytics, Stripe, or Shopify for specific functionalities. These services have their own privacy policies, and we encourage you to review them. We are not responsible for how they handle your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">6. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information. If you wish to exercise these rights, or if you have any questions about our privacy practices, please contact us at <strong className="text-white">privacy@auroxify.com</strong>.
            </p>
          </section>

          <section className="bg-card border border-line p-6 md:p-8 rounded-2xl mt-12">
            <h2 className="text-xl font-heading font-semibold text-white mb-2">Changes to This Policy</h2>
            <p className="text-sm">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. You are advised to review this page periodically for any changes.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link href="/contact" className="text-primary hover:underline">Contact Support</Link>
              <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}