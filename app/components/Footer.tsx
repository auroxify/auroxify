"use client";

import Link from "next/link";
import { ArrowUp, ArrowUpRight, Mail, MapPin } from "lucide-react";

const COLS = [
  { title: "Company", links: [["About", "/about"], ["Portfolio", "/portfolio"], ["Contact", "/contact"]] },
  { title: "Services", links: [["Web Development", "/services#web"], ["E-commerce Stores", "/services#ecommerce"], ["Maintenance", "/services#maintenance"], ["AI Integration", "/services#ai"], ["SEO", "/services#seo"]] },
  { title: "Legal", links: [["Privacy Policy", "/legal#privacy"], ["Terms of Service", "/legal#terms"]] },
];
const SOCIALS = ["in", "X", "ig", "fb"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-base">
      <div className="grid-bg" />
      <div className="blob -left-24 bottom-0 h-96 w-96" style={{ background: "var(--blob-blue)" }} />
      <div className="blob -right-24 top-0 h-96 w-96" style={{ background: "var(--blob-violet)" }} />

      <div className="wrap px-5 md:px-10">
        {/* CTA band */}
        <div className="relative my-16 overflow-hidden rounded-[28px] border border-brand-line p-8 md:my-24 md:p-14" style={{ background: "linear-gradient(135deg, rgba(71,142,206,.16), rgba(8,14,28,.9) 60%)" }}>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <h2 className="h-lg max-w-2xl">Ready to grow your business online?</h2>
            <Link href="/contact" className="btn btn-primary w-full md:w-auto">
              Get a Free Quote <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 pb-14 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 font-heading text-xl font-bold">
              <span className="grid h-9 w-9 place-items-center rounded-xl text-sm text-white" style={{ background: "var(--grad-brand)" }}>C</span>
              Auroxify
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[var(--text-dim)]">
              We build websites, online shops and AI tools, and help people find you on Google.
            </p>
            <div className="mt-6 space-y-2 text-sm text-[var(--text-mid)]">
              <a href="mailto:hello@yourcompany.com" className="flex items-center gap-2 hover:text-bright"><Mail size={15} /> hello@yourcompany.com</a>
              <p className="flex items-center gap-2"><MapPin size={15} /> Karachi, Pakistan</p>
            </div>
            <div className="mt-6 flex gap-2">
              {SOCIALS.map((s) => (
                <a key={s} href="#" aria-label={s} className="grid h-11 w-11 place-items-center rounded-full border border-line-hover bg-white/5 font-mono text-xs uppercase text-[var(--text-mid)] transition hover:-translate-y-1 hover:border-brand-line hover:text-bright">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {COLS.map((c) => (
            <div key={c.title}>
              <h3 className="mb-5 font-mono text-[11px] font-medium uppercase tracking-[.25em] text-eyebrow">{c.title}</h3>
              <ul className="space-y-3">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-sm text-[var(--text-dim)] transition hover:translate-x-1 hover:text-white inline-block">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="safe-bottom flex flex-col items-center justify-between gap-4 border-t border-line py-7 text-xs text-[var(--text-faint)] sm:flex-row">
          <p>© 2026 Auroxify. All rights reserved.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex min-h-[44px] items-center gap-2 rounded-full border border-line-hover px-4 text-[var(--text-mid)] transition hover:border-brand-line hover:text-bright">
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}