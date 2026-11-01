import { Metadata } from "next";
import { Scale, FileCheck, HelpCircle, AlertTriangle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Auroxify",
  description: "Read the terms and conditions for using Auroxify's web development services.",
};

export default function TermsPage() {
  return (
    <main className="bg-base min-h-screen text-white pt-32 pb-24 px-5 md:px-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 border-b border-line pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet/10 border border-violet/20 text-violet-light text-xs font-mono mb-4">
            <Scale size={14} /> Legal Document
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Terms of Service</h1>
          <p className="text-[var(--text-dim)]">Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-[var(--text-mid)] leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4 flex items-center gap-3">
              <FileCheck className="text-violet-light" size={24} /> 1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Auroxify website and services, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you must not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4 flex items-center gap-3">
              <HelpCircle className="text-violet-light" size={24} /> 2. Services Provided
            </h2>
            <p className="mb-4">
              Auroxify provides digital services including but not limited to:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-violet-light">
              <li>Website design and development (Custom, WordPress, Shopify).</li>
              <li>E-commerce store setup and optimization.</li>
              <li>AI integration and automation solutions.</li>
              <li>Search Engine Optimization (SEO) and digital marketing.</li>
              <li>Website maintenance and security care plans.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">3. Payment Terms</h2>
            <p className="mb-4">
              Our standard payment structure is as follows unless otherwise agreed in writing:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-violet-light">
              <li><strong>Upfront Payment:</strong> 50% of the total project cost is required before work begins.</li>
              <li><strong>Final Payment:</strong> The remaining 50% is due upon project completion, before final file handover or website launch.</li>
              <li>Payments are non-refundable once the project has commenced, except in cases where we fail to deliver.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">4. Client Responsibilities</h2>
            <p>
              To ensure timely delivery, clients must provide all necessary content, images, logos, and feedback in a timely manner. Delays in providing materials may result in project timeline adjustments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4 flex items-center gap-3">
              <AlertTriangle className="text-violet-light" size={24} /> 5. Intellectual Property
            </h2>
            <p>
              Upon full payment, the client owns the final website design, content, and code. However, Auroxify retains the right to use the completed project in our portfolio and marketing materials unless a Non-Disclosure Agreement (NDA) is signed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-white mb-4">6. Limitation of Liability</h2>
            <p>
              Auroxify will not be held liable for any indirect, incidental, or consequential damages arising from the use of our services. This includes, but is not limited to, loss of profits, data, or business opportunities. We do not guarantee 100% uptime or that the website will be error-free at all times.
            </p>
          </section>

          <section className="bg-card border border-line p-6 md:p-8 rounded-2xl mt-12">
            <h2 className="text-xl font-heading font-semibold text-white mb-2">Governing Law</h2>
            <p className="text-sm">
              These Terms shall be governed and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Lahore, Pakistan.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link href="/contact" className="text-violet-light hover:underline">Contact Legal Team</Link>
              <Link href="/privacy" className="text-violet-light hover:underline">Privacy Policy</Link>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}