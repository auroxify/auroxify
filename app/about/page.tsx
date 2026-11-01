"use client";

import { AnimatePresence, animate, motion, useInView } from "framer-motion";
import {
  ArrowRight, CheckCircle2, Target, Zap, Award, Globe, Rocket,
  Heart, Shield, Quote, Plus, Minus,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LinkedInIcon } from "@/app/components/Socials";

const ease = [0.16, 1, 0.3, 1] as const;

const GHOST_BTN =
  "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-line-hover bg-white/5 px-6 text-sm font-semibold text-white transition hover:border-brand-line hover:text-bright";

/* ═══════ DATA ═══════ */
const FOUNDERS = [
  {
    name: "Muhammad Qasim",
    role: "Co-Founder & CEO",
    desc: "Sets the vision and keeps every project tied to real business results, from the first call to the final launch.",
    img: "/founder2.png",
    linkedin: "#",
  },
  {
    name: "Hafiz Hamza",
    role: "Co-Founder & CTO",
    desc: "Leads engineering and makes sure every line of code is fast, secure and scalable, built to grow with your business.",
    img: "/founder1.jpeg",
    linkedin: "#",
  },
];

const STATS = [
  { to: 120, s: "+", l: "Projects Delivered" },
  { to: 98, s: "%", l: "Client Satisfaction" },
  { to: 6, s: "+", l: "Years Experience" },
  { to: 45, s: "+", l: "Team Members" },
];

const TIMELINE = [
  { year: "2020", title: "The Beginning", desc: "Auroxify started in a small room with 2 founders and one big dream: to build websites that actually work." },
  { year: "2021", title: "First 50 Clients", desc: "Word spread fast. We delivered 50+ projects and built a reputation for speed, quality, and honest pricing." },
  { year: "2022", title: "Going Global", desc: "We expanded beyond borders, serving clients from the US, UK, UAE, and Pakistan." },
  { year: "2023", title: "AI Integration", desc: "We added AI-powered solutions (chatbots, automation, and smart analytics) to our toolkit." },
  { year: "2024", title: "Team of 45+", desc: "What started as 2 people is now a full team of designers, developers, and marketers." },
  { year: "2025", title: "The Future", desc: "We're building the next generation of digital experiences. And we're just getting started." },
];

const VALUES = [
  { icon: Target, title: "Results First", desc: "We measure our success by your growth. Every decision is made with your ROI in mind." },
  { icon: Zap, title: "Lightning Fast", desc: "No delays, no excuses. We deliver on time, every time, because your time is money." },
  { icon: Shield, title: "Total Transparency", desc: "Clear pricing, honest timelines, and real communication. No hidden surprises." },
  { icon: Heart, title: "Client Obsession", desc: "Your goals become our goals. We treat your business like it's our own." },
  { icon: Award, title: "Premium Quality", desc: "We don't cut corners. Every pixel, every line of code is crafted with care." },
  { icon: Globe, title: "Global Mindset", desc: "Serving clients worldwide with world-class standards and local understanding." },
];

const TEAM_CULTURE = [
  "Remote-first, flexible work environment",
  "Continuous learning and skill development",
  "Open communication at every level",
  "Celebrating wins, big and small",
];

const TOOLS = [
  "Next.js", "React", "Tailwind CSS", "TypeScript", "Node.js", "Shopify",
  "WooCommerce", "WordPress", "OpenAI API", "Figma", "Vercel", "Stripe",
];

const TESTIMONIALS = [
  { name: "Sarah Johnson", role: "CEO, Bloom Boutique", text: "Auroxify transformed our online store. Sales jumped 3x in the first month. Absolute pros.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" },
  { name: "Michael Chen", role: "Founder, TechFlow", text: "The team delivered our website ahead of schedule. Communication was flawless. Highly recommended.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
  { name: "Ayesha Malik", role: "Owner, Cafe Aroma", text: "Our Google ranking went from page 5 to page 1. We now get walk-ins daily. Thank you Auroxify!", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" },
];

const FAQ = [
  ["What makes Auroxify different?", "We combine premium quality with honest pricing. No hidden fees, no jargon, just real results delivered on time."],
  ["Do you work with small businesses?", "Absolutely. From solo founders to enterprises, we tailor solutions to fit your budget and goals."],
  ["How long does a typical project take?", "Most websites take 2-4 weeks. Complex projects like e-commerce or AI tools may take 6-8 weeks."],
  ["Do you offer ongoing support?", "Yes. Our care plans cover updates, backups, security, and fixes so your site stays fast and safe."],
  ["Which countries do you serve?", "We serve clients globally: US, UK, UAE, Canada, Australia, Pakistan, and beyond."],
];

/* ═══════ COMPONENTS ═══════ */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 2, ease, onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════ PAGE ═══════ */
export default function About() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
            About Auroxify
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="h-xl mt-6"
          >
            We turn ideas into <br className="hidden sm:block" /> <span className="grad-text">digital reality.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="lead mx-auto mt-6"
          >
            Founded in 2020, Auroxify started with a simple goal: to build websites and digital tools that actually help businesses grow. No jargon, just results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
          >
            <Link href="/contact" className="btn btn-primary">
              Start a Project <ArrowRight size={16} />
            </Link>
            <Link href="/portfolio" className={GHOST_BTN}>
              See Our Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.4 }}
            className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            {STATS.map((s) => (
              <div key={s.l} className="flex flex-col items-center gap-1">
                <span className="font-heading text-4xl font-bold text-primary md:text-5xl">
                  <Counter to={s.to} suffix={s.s} />
                </span>
                <span className="text-sm text-[var(--text-dim)]">{s.l}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 2. FOUNDERS ── */}
      <section className="relative overflow-hidden border-t border-line px-5 py-24 md:px-10">
        <div className="blob right-[-10%] top-[20%] h-[360px] w-[360px]" style={{ background: "var(--blob-violet)" }} />
        <div className="wrap relative z-10 mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <span className="eyebrow justify-center">The Minds Behind It</span>
            <h2 className="h-lg mt-4">Meet our founders</h2>
            <p className="lead mx-auto mt-4 max-w-xl">
              Two people, one promise: build it properly, deliver it on time, and stay around after launch.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {FOUNDERS.map((f, i) => (
              <motion.article
                key={f.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease, delay: i * 0.15 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-card transition-colors duration-500 hover:border-primary/60"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={f.img}
                    alt={f.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-all duration-700 md:grayscale md:contrast-110 md:group-hover:scale-105 md:group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                  {/* name + role, always visible (works on touch too) */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-7">
                    <span className="inline-block rounded-full border border-white/20 bg-black/40 px-3 py-1 font-mono text-[11px] tracking-wider text-white/90 backdrop-blur-md">
                      {f.role}
                    </span>
                    <h3 className="mt-3 font-heading text-3xl font-bold leading-tight text-white">{f.name}</h3>
                  </div>

                  {/* double inner borders */}
                  <div className="pointer-events-none absolute inset-3 z-20 rounded-2xl border border-white/20 transition-colors duration-500 group-hover:border-primary/60" />
                  <div className="pointer-events-none absolute inset-[14px] z-20 rounded-xl border border-white/10 transition-colors duration-500 group-hover:border-primary/30" />
                </div>

                <div className="flex flex-1 flex-col justify-between gap-5 p-6 sm:p-7">
                  <p className="text-sm leading-relaxed text-[var(--text-mid)]">{f.desc}</p>
                  <a
                    href={f.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${f.name} on LinkedIn`}
                    className="inline-flex min-h-[44px] w-fit items-center gap-2 rounded-full border border-line-hover bg-white/5 px-4 text-xs font-semibold text-[var(--text-mid)] transition hover:border-brand-line hover:text-bright"
                  >
                    <LinkedInIcon size={15} /> Connect on LinkedIn
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. TIMELINE ── */}
      <section className="relative border-y border-line bg-raised px-5 py-24 md:px-10">
        <div className="wrap mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <span className="eyebrow justify-center">Our Journey</span>
            <h2 className="h-lg mt-4">From 2 people to a global team.</h2>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
            <div className="space-y-10">
              {TIMELINE.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.04}>
                  <div className="relative pl-12 md:grid md:grid-cols-2 md:gap-12 md:pl-0">
                    <div className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_16px_rgba(71,142,206,.8)] md:left-1/2" />
                    <div className={i % 2 === 0 ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}>
                      <span className="font-mono text-sm text-eyebrow">{item.year}</span>
                      <h3 className="mt-1 font-heading text-xl font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm text-[var(--text-dim)]">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. MISSION & VISION ── */}
      <section className="relative px-5 py-24 md:px-10">
        <div className="wrap mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="glass h-full p-8 md:p-12">
                <span className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-bright">
                  <Target size={24} />
                </span>
                <h3 className="font-heading text-2xl font-bold">Our Mission</h3>
                <p className="mt-4 leading-relaxed text-[var(--text-mid)]">
                  To empower businesses of every size with digital tools that are simple, powerful, and built to grow. We believe every business deserves a world-class online presence, without the world-class price tag.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="glass h-full p-8 md:p-12">
                <span className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-violet/10 text-violet-light">
                  <Rocket size={24} />
                </span>
                <h3 className="font-heading text-2xl font-bold">Our Vision</h3>
                <p className="mt-4 leading-relaxed text-[var(--text-mid)]">
                  To become the go-to digital partner for businesses worldwide, known not just for what we build, but for how we build it: with honesty, speed, and a relentless focus on results.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5. VALUES ── */}
      <section className="relative overflow-hidden border-y border-line bg-raised px-5 py-24 md:px-10">
        <div className="blob right-0 top-0 h-[400px] w-[400px]" style={{ background: "var(--blob-blue)" }} />
        <div className="wrap relative z-10 mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="eyebrow justify-center">Our Values</span>
            <h2 className="h-lg mt-4">What drives us every day.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((val, i) => (
              <Reveal key={val.title} delay={(i % 3) * 0.08}>
                <div className="glass h-full p-6 transition-colors hover:border-brand-line">
                  <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-bright">
                    <val.icon size={20} />
                  </span>
                  <h3 className="font-heading text-lg font-semibold">{val.title}</h3>
                  <p className="mt-2 text-sm text-[var(--text-dim)]">{val.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CULTURE ── */}
      <section className="relative px-5 py-24 md:px-10">
        <div className="wrap mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-line">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="Our team"
                loading="lazy"
                className="h-full w-full object-cover transition-all duration-700 md:grayscale md:hover:grayscale-0"
              />
            </div>
          </Reveal>
          <div className="min-w-0">
            <span className="eyebrow">Our Culture</span>
            <h2 className="h-lg mt-4">A team that loves what it does.</h2>
            <p className="lead mt-4">
              We're a remote-first team of designers, developers, and marketers who genuinely care about the work we do.
            </p>
            <ul className="mt-8 space-y-4">
              {TEAM_CULTURE.map((item, i) => (
                <Reveal key={item} delay={i * 0.08}>
                  <li className="flex items-start gap-3 text-[var(--text-mid)]">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 7. TOOLS ── */}
      <section className="border-y border-line bg-raised px-5 py-24 md:px-10">
        <div className="wrap mx-auto max-w-4xl text-center">
          <span className="eyebrow justify-center">Our Toolbox</span>
          <h2 className="h-lg mt-4">Built with tools we trust.</h2>
          <p className="lead mx-auto mt-4">Modern, proven technology, chosen for speed, security and easy growth.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {TOOLS.map((t, i) => (
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

      {/* ── 8. TESTIMONIALS ── */}
      <section className="relative px-5 py-24 md:px-10">
        <div className="wrap mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <span className="eyebrow justify-center">What Clients Say</span>
            <h2 className="h-lg mt-4">Trusted by businesses worldwide.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className="glass flex h-full flex-col p-7">
                  <Quote size={28} className="mb-4 text-primary/40" />
                  <p className="flex-1 text-sm leading-relaxed text-[var(--text-mid)]">"{t.text}"</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                    <img src={t.img} alt={t.name} loading="lazy" className="h-11 w-11 rounded-full object-cover" />
                    <div className="min-w-0">
                      <p className="font-heading text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-[var(--text-dim)]">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ── */}
      <section className="border-t border-line bg-raised px-5 py-24 md:px-10">
        <div className="wrap mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <span className="eyebrow justify-center">Quick Answers</span>
            <h2 className="h-lg mt-4">Good to know before we start.</h2>
          </div>
          <div className="space-y-3">
            {FAQ.map(([q, a], i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={q}
                  className={`glass overflow-hidden rounded-2xl border transition-colors duration-300 ${isOpen ? "border-brand-line" : "border-line"}`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex min-h-[64px] w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                  >
                    <span className="font-heading text-base font-semibold sm:text-lg">{q}</span>
                    <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${isOpen ? "bg-primary text-white" : "bg-white/5 text-[var(--text-dim)]"}`}>
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-6 text-sm leading-relaxed text-[var(--text-mid)] sm:px-6">{a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 10. CTA ── */}
      <section className="relative overflow-hidden px-5 py-28 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(71,142,206,.12),transparent_70%)]" />
        <div className="wrap relative z-10 mx-auto max-w-3xl">
          <Reveal>
            <h2 className="h-xl">Ready to work with us?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead mx-auto mb-8 mt-5">Let's discuss your project and build something amazing together.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link href="/contact" className="btn btn-primary">
              Get in Touch <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}