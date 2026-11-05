import Link from "next/link";
import { ArrowUpRight, ListTree } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

const EMAIL = "info@auroxify.com";
const GMAIL_LINK = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent("Inquiry from Auroxify website")}`;

export type LegalSection = {
  id: string;
  title: string;
  icon?: LucideIcon;
  body: ReactNode;
};

type Props = {
  badge: string;
  BadgeIcon: LucideIcon;
  title: string;
  intro: string;
  updatedLabel: string;
  updated: string;
  sections: LegalSection[];
  otherDoc: { href: string; label: string };
  accent?: "primary" | "violet";
};

const ACCENTS = {
  primary: {
    badge: "bg-primary/10 border-primary/20 text-primary",
    icon: "text-primary",
    link: "text-primary",
    iconBox: "bg-primary/10 text-primary",
  },
  violet: {
    badge: "bg-violet/10 border-violet/20 text-violet-light",
    icon: "text-violet-light",
    link: "text-violet-light",
    iconBox: "bg-violet/10 text-violet-light",
  },
};

export function UL({ children }: { children: ReactNode }) {
  return <ul className="mt-4 list-disc space-y-2.5 pl-5 marker:text-[var(--text-faint)]">{children}</ul>;
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mt-3 first:mt-0">{children}</p>;
}

export default function LegalLayout({
  badge,
  BadgeIcon,
  title,
  intro,
  updatedLabel,
  updated,
  sections,
  otherDoc,
  accent = "primary",
}: Props) {
  const a = ACCENTS[accent];

  return (
    <main className="relative min-h-screen overflow-x-clip bg-base px-5 pb-24 pt-28 text-white md:px-10 md:pt-36">
      <div className="grid-bg" />
      <div className="blob left-[-10%] top-[2%] h-[360px] w-[360px]" style={{ background: "var(--blob-blue)" }} />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* header */}
        <header className="mb-10 border-b border-line pb-8 md:mb-14">
          <div className={`mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs ${a.badge}`}>
            <BadgeIcon size={14} /> {badge}
          </div>
          <h1 className="font-heading text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed  text-white">{intro}</p>
          <p className="mt-4 text-sm text-[var(--text-dim)]">
            {updatedLabel}: <time>{updated}</time>
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-16">
          {/* table of contents */}
          <aside className="min-w-0">
            {/* mobile: collapsible */}
            <details className="glass rounded-2xl p-4 lg:hidden">
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center gap-2 text-sm font-semibold">
                <ListTree size={16} className={a.icon} /> On this page
              </summary>
              <ol className="mt-3 space-y-1 border-t border-line pt-3">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="block rounded-lg px-2 py-2.5 text-sm text-[var(--text-mid)] hover:text-white">
                      {i + 1}. {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </details>

            {/* desktop: sticky */}
            <nav className="sticky top-28 hidden lg:block" aria-label="On this page">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[.25em] text-eyebrow">On this page</p>
              <ol className="space-y-1 border-l border-line">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-[var(--text-dim)] transition hover:border-primary hover:text-white"
                    >
                      {i + 1}. {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* content */}
          <div className="min-w-0 space-y-12 leading-relaxed text-[var(--text-mid)] [overflow-wrap:anywhere]">
            {sections.map((s, i) => {
              const Icon = s.icon;
              return (
                <section key={s.id} id={s.id} className="scroll-mt-28">
                  <h2 className="flex items-center gap-3 font-heading text-xl font-semibold text-white sm:text-2xl">
                    {Icon ? (
                      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${a.iconBox}`}>
                        <Icon size={20} />
                      </span>
                    ) : null}
                    <span>
                      {i + 1}. {s.title}
                    </span>
                  </h2>
                  <div className="mt-4">{s.body}</div>
                </section>
              );
            })}

            {/* contact card */}
            <section className="rounded-2xl border border-line bg-card p-6 md:p-8">
              <h2 className="font-heading text-xl font-semibold text-white">Questions about this page?</h2>
              <p className="mt-2 text-sm">
                Write to us and a real person will reply. For anything about your data or your project terms, email{" "}
              <a
                href={GMAIL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold ${a.link} hover:underline`}
              >
                {EMAIL}
              </a>
                .
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                <Link href="/contact" className={`inline-flex min-h-[44px] items-center gap-1 ${a.link} hover:underline`}>
                  Contact us <ArrowUpRight size={14} />
                </Link>
                <Link href={otherDoc.href} className={`inline-flex min-h-[44px] items-center gap-1 ${a.link} hover:underline`}>
                  {otherDoc.label} <ArrowUpRight size={14} />
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}