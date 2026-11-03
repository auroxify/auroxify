"use client";

import { motion } from "framer-motion";
import {
  ShoppingCart, Code2, Bot, ShieldCheck, Search, ArrowRight,
  CheckCircle2, Zap, Globe, LineChart, MessageSquareText, Rocket, PenTool, Compass,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

/* ═══════ SMALL VISUALS (pure CSS, no images) ═══════ */
function Chrome({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-base/60 p-3">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-red-500/70" />
        <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
        <span className="h-2 w-2 rounded-full bg-green-500/70" />
        <span className="ml-2 min-w-0 flex-1 truncate rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-[var(--text-dim)]">{label}</span>
      </div>
      {children}
    </div>
  );
}

function StoreVisual() {
  return (
    <Chrome label="yourstore.com">
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg bg-white/5 p-2">
            <div className="aspect-square rounded-md bg-gradient-to-br from-cyan-400/30 to-blue-500/10" />
            <div className="mt-2 h-2 w-3/4 rounded bg-white/15" />
            <div className="mt-1.5 h-2 w-1/3 rounded bg-cyan-400/40" />
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between rounded-lg bg-primary/20 px-3 py-2 text-xs">
        <span>Cart · 3 items</span>
        <span className="font-semibold">Checkout</span>
      </div>
    </Chrome>
  );
}

function CodeVisual() {
  const rows = ["w-1/2 bg-violet-400/50", "w-3/4 bg-white/15 ml-4", "w-2/3 bg-white/15 ml-4", "w-1/3 bg-fuchsia-400/40 ml-8", "w-1/2 bg-white/15 ml-4", "w-1/4 bg-violet-400/50"];
  return (
    <Chrome label="app/page.tsx">
      <div className="space-y-2">
        {rows.map((r, i) => (
          <div key={i} className={`h-2 rounded ${r}`} />
        ))}
      </div>
    </Chrome>
  );
}

function ChatVisual() {
  return (
    <div className="space-y-2 rounded-2xl border border-white/10 bg-base/60 p-3 text-xs">
      <div className="max-w-[85%] rounded-xl rounded-bl-sm bg-white/10 px-3 py-2 text-[var(--text-mid)]">Where is my order?</div>
      <div className="ml-auto max-w-[85%] rounded-xl rounded-br-sm bg-purple-500/30 px-3 py-2 text-white">It shipped today and arrives Friday.</div>
      <div className="flex items-center gap-1.5 pl-1 text-[10px] text-[var(--text-dim)]">
        <MessageSquareText size={12} /> Answered in 2 seconds
      </div>
    </div>
  );
}

function MaintVisual() {
  const rows = [["Daily backup", "02:00"], ["Security scan", "03:30"], ["Uptime check", "Live"]];
  return (
    <div className="space-y-2 rounded-2xl border border-white/10 bg-base/60 p-3 text-xs">
      {rows.map(([a, b]) => (
        <div key={a} className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
          <span className="flex items-center gap-2 text-[var(--text-mid)]">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> {a}
          </span>
          <span className="font-mono text-[var(--text-dim)]">{b}</span>
        </div>
      ))}
    </div>
  );
}

function RankVisual() {
  return (
    <div className="rounded-2xl border border-white/10 bg-base/60 p-3">
      <div className="mb-3 flex items-center justify-between text-xs">
        <span className="text-[var(--text-dim)]">Organic traffic</span>
        <span className="rounded-md bg-orange-500/20 px-2 py-0.5 font-semibold text-orange-300">Page 1</span>
      </div>
      <div className="flex h-20 items-end gap-2">
        {[18, 26, 34, 46, 58, 74, 92].map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-orange-500/30 to-amber-400/70" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

/* ═══════ DATA ═══════ */
const SERVICES = [
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-Commerce Stores",
    desc: "Complete online store setup that is easy to manage, fast, and built to sell. We handle everything from product uploads to payment gateways.",
    features: ["WordPress / WooCommerce", "Shopify Setup", "Payment Gateway Integration", "Inventory Management"],
    color: "from-blue-500/20 to-cyan-500/5",
    iconColor: "text-cyan-400",
    span: "md:col-span-2 lg:col-span-4",
    wide: true,
    visual: <StoreVisual />,
  },
  {
    id: "web",
    icon: Code2,
    title: "Custom Web Development",
    desc: "No templates. We code your website exactly how you want it: fast, secure, and matching your brand.",
    features: ["Next.js & React", "Custom UI/UX", "API Integrations", "Database Design"],
    color: "from-violet-500/20 to-fuchsia-500/5",
    iconColor: "text-violet-400",
    span: "lg:col-span-2",
    visual: <CodeVisual />,
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI Integration",
    desc: "Let AI do the heavy lifting. Smart chatbots, automated emails and AI workflows that save you hours every day.",
    features: ["Custom AI Chatbots", "Automated Workflows", "OpenAI API Setup", "Smart Analytics"],
    color: "from-purple-500/20 to-indigo-500/5",
    iconColor: "text-purple-400",
    span: "lg:col-span-2",
    visual: <ChatVisual />,
  },
  {
    id: "maintenance",
    icon: ShieldCheck,
    title: "Maintenance & Care",
    desc: "Keep your website running at 100%. We handle the technical headaches so you can focus on your business.",
    features: ["Daily Backups", "Security Scans", "Speed Optimization", "Bug Fixes"],
    color: "from-green-500/20 to-emerald-500/5",
    iconColor: "text-green-400",
    span: "lg:col-span-2",
    visual: <MaintVisual />,
  },
  {
    id: "seo",
    icon: Search,
    title: "End-to-End SEO",
    desc: "Be the first name people see on Google, with full on-page, off-page and technical SEO.",
    features: ["Keyword Research", "On-Page Optimization", "Technical SEO", "Monthly Reports"],
    color: "from-orange-500/20 to-amber-500/5",
    iconColor: "text-orange-400",
    span: "md:col-span-2 lg:col-span-2",
    visual: <RankVisual />,
  },
];

const PROCESS = [
  { icon: Compass, title: "Discover", desc: "We learn your business, your customers and your goals in a free call." },
  { icon: PenTool, title: "Design", desc: "You see the look and flow before we write the final code." },
  { icon: Code2, title: "Build", desc: "We develop, test on real devices and share progress along the way." },
  { icon: Rocket, title: "Launch & grow", desc: "We go live, then support you with fixes, care plans and SEO." },
];

const STACK = ["Next.js", "React", "Tailwind CSS", "TypeScript", "Node.js", "Shopify", "WooCommerce", "WordPress", "OpenAI API", "Stripe"];

const WHY = [
  { icon: Zap, title: "Fast Delivery" },
  { icon: ShieldCheck, title: "100% Secure" },
  { icon: Globe, title: "Global Standard" },
  { icon: LineChart, title: "Result Driven" },
];

/* ═══════ PAGE ═══════ */
export default function Services() {
  return (
    <main className="min-h-screen overflow-x-clip bg-base text-white">

      {/* ── 1. HERO ── */}
      <section className="relative overflow-hidden px-5 pb-20 pt-32 md:px-10">
        <div className="grid-bg" />
        <div className="blob left-[-10%] top-[10%] h-[400px] w-[400px]" style={{ background: "var(--blob-blue)" }} />
        <div className="blob right-[-10%] top-[30%] h-[400px] w-[400px]" style={{ background: "var(--blob-violet)" }} />

        <div className="wrap relative z-10 mx-auto max-w-5xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
            className="eyebrow justify-center"
          >
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="h-xl mt-6"
          >
            Everything you need <br className="hidden sm:block" /> to <span className="grad-text">grow online</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="lead mx-auto mt-6"
          >
            From building your first online store to automating your business with AI, we provide end-to-end digital solutions.
          </motion.p>

          {/* quick jump chips */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-2"
          >
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-line-hover bg-white/5 px-4 text-sm text-[var(--text-mid)] transition hover:border-brand-line hover:text-white"
              >
                <s.icon size={15} className={s.iconColor} /> {s.title.replace("Custom ", "").replace("End-to-End ", "")}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 2. SERVICES BENTO ── */}
      <section className="relative px-5 pb-24 md:px-10">
        <div className="wrap mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
            {SERVICES.map((srv, i) => (
              <motion.div
                key={srv.id}
                id={srv.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, ease, delay: (i % 3) * 0.08 }}
                className={`glass group relative flex scroll-mt-28 flex-col overflow-hidden p-6 transition-colors duration-500 hover:border-primary/40 sm:p-8 ${srv.span}`}
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${srv.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                <div className={`relative z-10 flex h-full flex-col ${srv.wide ? "lg:grid lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-10" : ""}`}>
                  <div className="flex min-w-0 flex-col">
                    <div className="mb-6 flex items-center gap-4">
                      <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 ${srv.iconColor} transition-transform duration-500 group-hover:scale-110`}>
                        <srv.icon size={26} />
                      </span>
                      <h2 className="font-heading text-xl font-bold sm:text-2xl">{srv.title}</h2>
                    </div>

                    <p className="mb-6 text-sm leading-relaxed text-[var(--text-mid)]">{srv.desc}</p>

                    <ul className="mb-6 space-y-3">
                      {srv.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm text-[var(--text-dim)]">
                          <CheckCircle2 size={16} className={`shrink-0 ${srv.iconColor}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/contact?service=${srv.id}`}
                      className="mt-auto inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-primary"
                    >
                      Get Started <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  <div className={`min-w-0 ${srv.wide ? "mt-6 lg:mt-0" : "mt-6"}`}>{srv.visual}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. PROCESS ── */}
      <section className="border-y border-line bg-raised px-5 py-24 md:px-10">
        <div className="wrap mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <span className="eyebrow justify-center">How We Work</span>
            <h2 className="h-lg mt-4">A simple process, no surprises.</h2>
          </div>

          <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />
            {PROCESS.map((p, i) => (
              <motion.li
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease, delay: i * 0.1 }}
                className="glass relative p-6 text-center"
              >
                <span className="relative mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-bright">
                  <p.icon size={24} />
                  <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-primary font-mono text-[11px] font-bold text-white">
                    {i + 1}
                  </span>
                </span>
                <h3 className="font-heading text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-dim)]">{p.desc}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 4. TECH STACK ── */}
      <section className="px-5 py-20 md:px-10">
        <div className="wrap mx-auto max-w-4xl text-center">
          <span className="eyebrow justify-center">Our Stack</span>
          <h2 className="h-lg mt-4">Modern tools, proven results.</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {STACK.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.4 }}
                className="rounded-full border border-line-hover bg-white/5 px-4 py-2 text-sm text-[var(--text-mid)] transition hover:-translate-y-0.5 hover:border-brand-line hover:text-bright"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHY CHOOSE US ── */}
      <section className="border-y border-line bg-raised px-5 py-16 md:px-10">
        <div className="wrap mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
          {WHY.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="flex flex-col items-center gap-3 text-center"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
                <item.icon size={22} />
              </span>
              <span className="font-heading text-sm font-semibold">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 6. CTA ── */}
      <section className="relative overflow-hidden px-5 py-28 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(71,142,206,.12),transparent_70%)]" />
        <div className="wrap relative z-10 mx-auto max-w-3xl">
          <h2 className="h-lg">Not sure what you need?</h2>
          <p className="lead mx-auto mb-8 mt-4">
            Tell us about your business and we will suggest the perfect digital plan for you. Free consultation, no pressure.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Book a Free Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}