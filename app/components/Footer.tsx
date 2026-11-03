"use client";

import Link from "next/link";
import { ArrowUp, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { SOCIALS } from "./Socials";

const EMAIL = "info@auroxify.com";
const GMAIL_LINK = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent("Inquiry from Auroxify website")}`;
const LOCATION = "Karachi, Pakistan";

const COLS = [
  {
    title: "Company",
    links: [
      ["About", "/about"],
      ["Portfolio", "/portfolio"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Services",
    links: [
      ["Web Development", "/services#web"],
      ["E-commerce Stores", "/services#ecommerce"],
      ["Maintenance", "/services#maintenance"],
      ["AI Integration", "/services#ai"],
      ["SEO", "/services#seo"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacy Policy", "/privacy"],
      ["Terms of Service", "/terms"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-base">
      <div className="grid-bg" />
      <div className="blob -left-24 bottom-0 h-96 w-96" style={{ background: "var(--blob-blue)" }} />
      <div className="blob -right-24 top-0 h-96 w-96" style={{ background: "var(--blob-violet)" }} />

      <div className="wrap relative z-10 mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 pb-14 pt-16 md:pt-20 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 font-heading text-xl font-bold" aria-label="Auroxify home">
              <span
                className="grid h-9 w-9 place-items-center rounded-xl text-sm text-white"
                style={{ background: "var(--grad-brand)" }}
              >
                A
              </span>
              Auroxify
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[var(--text-dim)]">
              We build websites, online shops and AI tools, and help people find you on Google.
            </p>

            <div className="mt-6 space-y-3 text-sm text-[var(--text-mid)]">
              <a
                href={GMAIL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-bright"
              >
                <Mail size={15} className="shrink-0" />
                <span className="min-w-0 break-all">{EMAIL}</span>
              </a>
              <p className="flex items-center gap-2">
                <MapPin size={15} className="shrink-0" /> {LOCATION}
              </p>
            </div>

            <div className="mt-6 flex gap-2">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-line-hover bg-white/5 text-[var(--text-mid)] transition hover:-translate-y-1 hover:border-brand-line hover:text-bright"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* link columns */}
          {COLS.map((c) => (
            <div key={c.title} className="min-w-0">
              <h3 className="mb-5 font-mono text-[11px] font-medium uppercase tracking-[.25em] text-eyebrow">{c.title}</h3>
              <ul className="space-y-3">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="inline-block py-0.5 text-sm text-[var(--text-dim)] transition hover:translate-x-1 hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* status strip */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-brand-line bg-white/[.03] p-5 sm:flex-row sm:items-center">
          <p className="flex items-center gap-3 text-sm text-[var(--text-mid)]">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>
            Taking on new projects this month.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-bright">
            Get a Free Quote <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* bottom bar */}
        <div
          className="flex flex-col items-center justify-between gap-4 border-t border-line py-7 text-xs text-[var(--text-faint)] sm:flex-row"
          style={{ paddingBottom: "calc(1.75rem + env(safe-area-inset-bottom))" }}
        >
          <p>© 2026 Auroxify. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex min-h-[44px] items-center gap-2 rounded-full border border-line-hover px-4 text-[var(--text-mid)] transition hover:border-brand-line hover:text-bright"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}