"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight, ArrowRight, Code2, Smartphone, ShoppingCart,
  Globe, Zap, LayoutTemplate, Search, TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

/* ═══════ DATA ═══════ */
const FILTERS = ["All", "E-Commerce", "Web Apps", "AI", "SEO"] as const;
type Filter = (typeof FILTERS)[number];

const PROJECTS = [
  {
    title: "Wrangler Homes",
    category: "Real Estate + Lead Gen",
    tag: "SEO",
    desc: "Cash home-buyer website with a multi-step offer form, interactive US coverage map and fully SEO-optimized pages.",
    url: "https://wranglerhomes.com/",
    img: "https://plus.unsplash.com/premium_photo-1661902934269-17eaf4b04f9f?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    color: "from-amber-500/25 to-orange-500/5",
    size: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
    icon: Search,
  },
  {
    title: "Funnel Plane",
    category: "Agency Website",
    tag: "Web Apps",
    desc: "A bold, high-converting site for a digital growth agency, with 10+ service pages for ads, SEO and AI automation.",
    url: "https://funnelplane.com/",
    img: "https://media.istockphoto.com/id/1269263971/photo/close-up-on-the-hands-of-the-male-specialist-works-on-a-laptop-computer-screen-shows-various.webp?a=1&b=1&s=612x612&w=0&k=20&c=dxP0azI9RH5JSf9m1Cs3NNiYg5kEZ49v8wQEij0bEu8=",
    color: "from-blue-500/25 to-cyan-500/5",
    size: "",
    icon: Code2,
  },
  {
    title: "The Flooring Bull",
    category: "Local Business + SEO",
    tag: "SEO",
    desc: "Flooring installation site with a step-by-step estimate funnel, before/after slider and local Georgia SEO.",
    url: "https://theflooringbull.com/",
    img: "https://plus.unsplash.com/premium_photo-1661962688308-2b00b88b9765?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    color: "from-orange-500/25 to-amber-500/5",
    size: "",
    icon: LayoutTemplate,
  },
  {
    title: "Ember Realtors",
    category: "Luxury Real Estate",
    tag: "Web Apps",
    desc: "Premium luxury property platform with property search, signature listings and agent profiles.",
    url: "https://emberrealtors.com/",
    img: "https://plus.unsplash.com/premium_photo-1661872962374-ada0cdf0bd88?q=80&w=919&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    color: "from-rose-500/25 to-red-500/5",
    size: "",
    icon: Globe,
  },
  {
    title: "Run It Remote",
    category: "Lead Gen Agency",
    tag: "Web Apps",
    desc: "Multi-page cold-calling and lead generation site with industry pages, live stats and a strategy-call form.",
    url: "https://ericcline.runitremote.com/",
    img: "https://images.unsplash.com/photo-1758691736548-073bc97cdff4?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    color: "from-emerald-500/25 to-green-500/5",
    size: "",
    icon: Zap,
  },
  {
    title: "Modern Furniture Store",
    category: "E-Commerce",
    tag: "E-Commerce",
    desc: "A complete 12+ page sofa and furniture store with product listings, cart and checkout, built in 24 hours for a hackathon.",
    url: "https://ui-ux-hackathon--zeta.vercel.app/",
    img: "https://plus.unsplash.com/premium_photo-1733864827286-d43afe9a1ae7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    color: "from-pink-500/25 to-rose-500/5",
    size: "sm:col-span-2",
    icon: ShoppingCart,
  },
  {
    title: "Image to Prompt",
    category: "AI Tool",
    tag: "AI",
    desc: "An AI-powered tool that turns any image into a detailed, ready-to-use prompt.",
    url: "https://img-to-prompt.netlify.app/",
    img: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    color: "from-violet-500/25 to-purple-500/5",
    size: "",
    icon: Smartphone,
  },
  {
    title: "Whitman Book",   // <-- iska asli naam bata do
    category: "Custom Website",
    tag: "Web Apps",
    desc: "A complete website built from scratch as a software house interview task, fully custom-coded.",
    url: "https://stately-monstera-50259a.netlify.app/",
    img: "https://images.unsplash.com/photo-1622704015099-3ace02eab2c2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    color: "from-slate-500/25 to-gray-500/5",
    size: "",
    icon: Code2,
  },
];

const STATS = [
  { v: "10+", l: "Projects delivered" },
  { v: "1+", l: "Year of experience" },
  { v: "5+", l: "Industries served" },
  { v: "24h", l: "Hackathon build time" },
];

/* ═══════ LAPTOP MOCKUP ═══════ */
function LaptopMockup() {
  const slides = PROJECTS.slice(0, 5);
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 3200);
    return () => clearInterval(t);
  }, [slides.length]);

  const current = slides[i];

  return (
    <div className="relative mx-auto w-full max-w-[560px] px-3 py-6 sm:px-6 [perspective:1400px]">
      {/* glow */}
      <div className="absolute inset-x-8 bottom-4 top-12 rounded-full bg-gradient-to-tr from-primary/30 to-violet/25 blur-3xl" />

      <motion.div
        animate={{ y: [0, -10, 0], rotateX: [2, 0, 2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* screen / lid */}
        <div
          className="rounded-t-[18px] border border-white/15 bg-[#0c1220] p-2 sm:rounded-t-[22px] sm:p-3"
          style={{ boxShadow: "0 0 60px rgba(71,142,206,.22), inset 0 0 18px rgba(0,0,0,.7)" }}
        >
          <div className="relative mx-auto mb-1.5 hidden h-1 w-1 rounded-full bg-white/30 sm:block" aria-hidden="true" />
          <div className="overflow-hidden rounded-lg border border-line bg-base">
            {/* browser chrome */}
            <div className="flex items-center gap-2 border-b border-line bg-white/[.03] px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-red-500/80" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
              <span className="h-2 w-2 rounded-full bg-green-500/80" />
              <div className="ml-2 min-w-0 flex-1 truncate rounded-md bg-white/5 px-3 py-1 font-mono text-[10px] text-[var(--text-dim)]">
                {current.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </div>
            </div>

            {/* screenshots */}
            <div className="relative aspect-[16/10] overflow-hidden bg-card">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={current.title}
                  src={current.img}
                  alt={current.title}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-base/90 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-3 sm:p-4">
                <div className="min-w-0">
                  <p className="truncate font-mono text-[10px] uppercase tracking-widest text-primary">{current.category}</p>
                  <p className="truncate font-heading text-sm font-bold text-white sm:text-lg">{current.title}</p>
                </div>
                <div className="flex shrink-0 gap-1">
                  {slides.map((s, idx) => (
                    <span
                      key={s.title}
                      className={`h-1 rounded-full transition-all duration-500 ${idx === i ? "w-5 bg-primary" : "w-1.5 bg-white/30"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* base */}
        <div className="relative -mx-2 h-3 rounded-b-2xl bg-gradient-to-b from-[#2a3347] to-[#0f141e] sm:-mx-4 sm:h-4">
          <div className="absolute left-1/2 top-0 h-1.5 w-20 -translate-x-1/2 rounded-b-md bg-black/50 sm:w-28" />
        </div>
        <div className="mx-auto h-3 w-[80%] rounded-b-[50%] bg-black/40 blur-md" />
      </motion.div>

      {/* floating card: top right */}
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="glass absolute right-0 top-0 z-20 flex items-center gap-3 rounded-xl border-brand-line bg-card/90 p-3 shadow-xl backdrop-blur-md sm:right-0 sm:p-4"
      >
        <span className="rounded-lg bg-green-500/20 p-2 text-green-400">
          <TrendingUp size={18} />
        </span>
        <div>
          <p className="text-[11px] text-[var(--text-dim)]">Traffic boost</p>
          <p className="font-heading text-base font-bold sm:text-lg">+240%</p>
        </div>
      </motion.div>

      {/* floating card: bottom left */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="glass absolute bottom-10 left-0 z-20 flex items-center gap-3 rounded-xl border-violet/30 bg-card/90 p-3 shadow-xl backdrop-blur-md sm:bottom-12 sm:p-4"
      >
        <span className="rounded-lg bg-violet-500/20 p-2 text-violet-400">
          <Code2 size={18} />
        </span>
        <div>
          <p className="text-[11px] text-[var(--text-dim)]">Projects done</p>
          <p className="font-heading text-white font-bold sm:text-lg">10+</p>
        </div>
      </motion.div>
    </div>
  );
}

/* ═══════ PAGE ═══════ */
export default function PortfolioPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.tag === filter);

  return (
    <main className="min-h-screen overflow-x-clip bg-base text-white">

      {/* ── 1. HERO ── */}
      <section className="relative overflow-hidden px-5 pb-16 pt-32 md:px-10 md:pb-24">
        <div className="grid-bg" />
        <div className="blob left-[-10%] top-[10%] h-[400px] w-[400px]" style={{ background: "var(--blob-blue)" }} />
        <div className="blob bottom-[-10%] right-[-10%] h-[400px] w-[400px]" style={{ background: "var(--blob-violet)" }} />

        <div className="wrap relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <motion.span
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
              className="eyebrow"
            >
              Our Work
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="h-xl mt-6"
            >
              Real projects. <br className="hidden sm:block" /> <span className="grad-text">Real results.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.2 }}
              className="lead mt-6"
            >
              We don't just build websites. We build digital experiences that drive growth, sales, and engagement for businesses worldwide.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.3 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a href="#work" className="btn btn-primary">
                Browse Projects <ArrowRight size={16} />
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-line-hover bg-white/5 px-6 text-sm font-semibold text-white transition hover:border-brand-line hover:text-bright"
              >
                Start Your Project
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease, delay: 0.3 }}
            className="min-w-0"
          >
            <LaptopMockup />
          </motion.div>
        </div>
      </section>

      {/* ── 2. STATS STRIP ── */}
      <section className="border-y border-line bg-raised px-5 py-10 md:px-10">
        <div className="wrap mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.l} className="text-center">
              <p className="font-heading text-3xl font-bold text-primary md:text-4xl">{s.v}</p>
              <p className="mt-1 text-sm text-[var(--text-dim)]">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. PROJECTS ── */}
      <section id="work" className="relative scroll-mt-20 px-5 py-20 md:px-10 md:py-24">
        <div className="wrap mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">Selected Work</span>
              <h2 className="h-lg mt-4">Projects we're proud of.</h2>
            </div>

            {/* filters: scroll inside their own row so the page never scrolls sideways */}
            <div className="-mx-5 overflow-x-auto px-5 [scrollbar-width:none] md:mx-0 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden">
              <div className="flex w-max gap-2 md:w-auto">
                {FILTERS.map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    aria-pressed={filter === f}
                    className={`min-h-[44px] whitespace-nowrap rounded-full border px-5 text-sm font-medium transition-colors ${
                      filter === f
                        ? "border-primary bg-primary text-white"
                        : "border-line-hover bg-white/5 text-[var(--text-mid)] hover:border-brand-line hover:text-white"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            layout
            className="grid auto-rows-[290px] grid-flow-dense grid-cols-1 gap-5 sm:grid-cols-2 sm:auto-rows-[300px] lg:grid-cols-3 lg:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {visible.map((proj) => (
            <motion.a
              layout
              key={proj.title}
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${proj.title} in a new tab`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease }}
              className={`group relative block overflow-hidden rounded-3xl border border-white/10 bg-card ${filter === "All" ? proj.size : ""}`}
            >
                  <img
                    src={proj.img}
                    alt={proj.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-all duration-700 md:grayscale-[50%] md:group-hover:scale-110 md:group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base via-base/50 to-transparent opacity-90 transition-opacity duration-500 md:opacity-80 md:group-hover:opacity-60" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${proj.color} opacity-60 mix-blend-overlay transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100`} />

                  <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 md:p-7">
                    <div className="transition-transform duration-500 md:translate-y-4 md:group-hover:translate-y-0">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span className="rounded-lg border border-white/10 bg-white/10 p-2 text-white backdrop-blur-md">
                          <proj.icon size={16} />
                        </span>
                  <span className="rounded-md border border-white/20 bg-black/60 px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                    {proj.category}
                  </span>
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">{proj.title}</h3>
                      <p className="mt-2 line-clamp-2 max-w-md text-sm text-[var(--text-mid)] transition-opacity duration-500 md:opacity-0 md:delay-100 md:group-hover:opacity-100">
                        {proj.desc}
                      </p>
                    </div>

                    <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/10 p-3 backdrop-blur-md transition-all duration-500 md:right-6 md:top-6 md:translate-x-4 md:-translate-y-4 md:opacity-0 md:group-hover:translate-x-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                      <ArrowUpRight size={20} className="text-white" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── 4. CTA ── */}
      <section className="relative overflow-hidden border-t border-line bg-raised px-5 py-28 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(71,142,206,.12),transparent_70%)]" />
        <div className="wrap relative z-10 mx-auto max-w-3xl">
          <h2 className="h-lg">Want to be our next success story?</h2>
          <p className="lead mx-auto mb-8 mt-4">Let's build something amazing together. Get a free quote today.</p>
          <Link href="/contact" className="btn btn-primary">
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}