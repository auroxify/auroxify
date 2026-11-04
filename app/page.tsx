"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  AnimatePresence, animate, motion, useInView, useMotionValue, useScroll,
  useSpring, useTransform, type MotionValue,
} from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Bot, Check, ChevronLeft, ChevronRight, Code2, Headphones, Lock,
  MessageCircle, Plus, Rocket, Search, ShieldCheck, ShoppingCart, Smartphone,
  Sparkles, Store, Tag, TrendingUp, Zap,
} from "lucide-react";

/* ═══════════════ EDIT YOUR CONTENT HERE ═══════════════ */
const COMPANY = "Auroxify";
const WHATSAPP = "https://wa.me/923193936892";
const HERO_STATS = [
  ["2026", "Founded"],
  ["5+", "Digital services"],
  ["100%", "Commitment"]
]
const TECH = ["WordPress", "Shopify", "Next.js", "React", "WooCommerce", "Node.js", "Google", "OpenAI", "Tailwind", "Stripe"];
const COUNTERS = [{ to: 10, s: "+", l: "Projects delivered" }, { to: 98, s: "%", l: "Happy clients" },  { to: 100, s: "%", l: "Focus on quality" }, { to: 1, s: "+", l: "Years of experience" }];
const SERVICES = [
  {
    id: "ecommerce",
    icon: ShoppingCart,
    t: "E-commerce Development",
    d: "Build an online store with WordPress, WooCommerce or Shopify to showcase and sell your products."
  },
  {
    id: "web",
    icon: Code2,
    t: "Web Development",
    d: "Modern, responsive websites designed around your business goals and audience."
  },
  {
    id: "maintenance",
    icon: ShieldCheck,
    t: "Website Maintenance",
    d: "Keep your website updated with ongoing improvements, troubleshooting and technical assistance."
  },
  {
    id: "ai",
    icon: Bot,
    t: "AI & Automation",
    d: "Explore practical AI tools and workflow automation to simplify repetitive business tasks."
  },
  {
    id: "seo",
    icon: Search,
    t: "SEO Optimization",
    d: "Improve your website's search visibility with technical SEO, on-page optimization and content improvements."
  }
];
const STEPS = [
  {
    i: MessageCircle,
    t: "Understand Your Needs",
    d: "We discuss your business, goals and project requirements before getting started."
  },
  {
    i: Sparkles,
    t: "Plan & Design",
    d: "We create a design direction and project plan based on your requirements."
  },
  {
    i: Code2,
    t: "Develop & Test",
    d: "We build your solution and test its functionality across different devices."
  },
  {
    i: Rocket,
    t: "Launch Your Project",
    d: "After final approval, we help make your project live and provide agreed support."
  }
];
const WHY = [
  { i: Tag, t: "Transparent Pricing", d: "Clear project estimates based on your requirements and scope." },
  { i: Zap, t: "Modern Development", d: "We use modern technologies to build responsive and reliable digital solutions." },
  { i: Headphones, t: "Client-Focused Approach", d: "We value your ideas and keep your requirements at the center of every project." },
  { i: TrendingUp, t: "SEO-Friendly Foundations", d: "We follow SEO best practices to help improve your website's search visibility." },
  { i: Lock, t: "Quality-Focused Work", d: "We focus on clean implementation, functionality and a smooth user experience." },
  { i: MessageCircle, t: "Clear Communication", d: "We keep you informed throughout the project with straightforward communication." },
];
const PROJECTS = [
  ["Wrangler Homes", "Real estate website", "#d97706", "#ef4444", "https://wranglerhomes.com/", "https://plus.unsplash.com/premium_photo-1661902934269-17eaf4b04f9f?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"],
  ["Run It Remote", "Lead generation website", "#7c3aed", "#a855f7", "https://ericcline.runitremote.com/", "https://images.unsplash.com/photo-1758691736548-073bc97cdff4?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"],
  ["Ember Realtors", "Luxury real estate", "#2B6DAE", "#06b6d4", "https://emberrealtors.com/", "https://plus.unsplash.com/premium_photo-1661872962374-ada0cdf0bd88?q=80&w=919&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"],
  ["The Flooring Bull", "Website + SEO", "#0ea5e9", "#478ECE", "https://theflooringbull.com/", "https://plus.unsplash.com/premium_photo-1661962688308-2b00b88b9765?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"],
  ["Ember Capital Group", "Real Estate Website", "#06b6d4", "#7c3aed", "https://www.embercapitalgroup.com", "https://images.unsplash.com/photo-1748063578185-3d68121b11ff?q=80&w=1046&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"],
];
const FAQ = [
  ["How long does a website take?", "Project timelines depend on the website's size, features and complexity. We'll discuss the estimated timeline with you before development begins."],
  ["Can you improve my existing website?", "Yes. We can help redesign your website, improve its functionality, fix issues and create a better user experience."],
  ["Do I need technical knowledge?", "No technical knowledge is required. Just share your ideas and business requirements, and we'll guide you through the development process."],
  ["How much does a website cost?", "Pricing depends on your project requirements and complexity. Contact us to discuss your idea and receive a project estimate."],
  ["Do you provide support after launch?", "Post-launch support and website maintenance can be discussed based on your project requirements and the services included in your agreement."]
];

/* ═══════════════ SHARED HELPERS ═══════════════ */
const ease = [0.16, 1, 0.3, 1] as const;

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.9, ease, delay }}>
      {children}
    </motion.div>
  );
}
function Head({ eyebrow, title, sub, center = false }: { eyebrow: string; title: ReactNode; sub?: string; center?: boolean }) {
  return (
    <Reveal className={`flex flex-col gap-5 ${center ? "items-center text-center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="h-lg max-w-3xl">{title}</h2>
      {sub && <p className="lead">{sub}</p>}
    </Reveal>
  );
}
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
function spot(e: React.MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}
function Magnetic({ children }: { children: ReactNode }) {
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 }), sy = useSpring(y, { stiffness: 200, damping: 15 });
  return (
    <motion.div style={{ x: sx, y: sy }}
      onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left - r.width / 2) * 0.25); y.set((e.clientY - r.top - r.height / 2) * 0.35); }}
      onMouseLeave={() => { x.set(0); y.set(0); }}>
      {children}
    </motion.div>
  );
}
function Float({ children, d = 4, a = 10, delay = 0, className = "" }: { children: ReactNode; d?: number; a?: number; delay?: number; className?: string }) {
  return <motion.div className={className} animate={{ y: [0, -a, 0] }} transition={{ duration: d, repeat: Infinity, ease: "easeInOut", delay }}>{children}</motion.div>;
}

/* ═══════════════ MOCKUP PARTS (pure code, no images) ═══════════════ */
function Browser({ url = "yourshop.com", children, className = "" }: { url?: string; children: ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-line-hover bg-hero shadow-[var(--shadow-card)] ${className}`}>
      <div className="flex items-center gap-2 border-b border-line bg-card px-4 py-3">
        {["#ef4444", "#f59e0b", "#22c55e"].map((c) => <span key={c} className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />)}
        <span className="ml-3 flex-1 truncate rounded-full bg-white/5 px-3 py-1 font-mono text-[10px] text-[var(--text-dim)]">{url}</span>
      </div>
      {children}
    </div>
  );
}
function StoreUI() {
  return (
    <div className="p-4">
      <div className="h-24 rounded-xl p-4 sm:h-28" style={{ background: "linear-gradient(120deg,#13203a,#2B6DAE 70%,#7c3aed)" }}>
        <div className="h-3 w-32 rounded-full bg-white/90" /><div className="mt-2 h-2 w-44 rounded-full bg-white/40" />
        <div className="mt-4 h-6 w-20 rounded-full bg-white/90" />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {["#1d4e89", "#4c3fe6", "#0e7490"].map((c, i) => (
          <div key={i} className="rounded-xl border border-line-hover bg-card p-2">
            <div className="aspect-square rounded-lg" style={{ background: c }} />
            <div className="mt-2 h-2 w-3/4 rounded-full bg-white/60" /><div className="mt-1.5 h-2 w-1/3 rounded-full bg-gold" />
          </div>
        ))}
      </div>
    </div>
  );
}
function Phone({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-[2rem] border-[5px] border-[#1a2338] bg-hero p-2.5 shadow-[var(--shadow-card)] ${className}`}>
      <div className="mx-auto mb-2 h-1.5 w-12 rounded-full bg-white/15" />
      <div className="h-24 rounded-2xl" style={{ background: "linear-gradient(135deg,#478ECE,#7c3aed)" }} />
      <div className="mt-2 grid grid-cols-2 gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="rounded-xl bg-card p-1.5"><div className="aspect-square rounded-lg" style={{ background: i % 2 ? "#1d4e89" : "#2a3b66" }} /><div className="mt-1.5 h-1.5 w-2/3 rounded-full bg-white/50" /><div className="mt-1 h-1.5 w-1/3 rounded-full bg-gold" /></div>
        ))}
      </div>
    </div>
  );
}
function Chart({ className = "" }: { className?: string }) {
  const hs = [40, 62, 50, 85, 72, 110, 98, 140];
  return (
    <div className={`rounded-2xl border border-line-hover bg-card/95 p-4 shadow-[var(--shadow-card)] backdrop-blur ${className}`}>
      <div className="flex items-center justify-between"><span className="text-[11px] text-[var(--text-dim)]">Sales this month</span><span className="rounded-full bg-green-500/15 px-2 py-0.5 font-mono text-[10px] text-green-400">+38%</span></div>
      <p className="font-heading text-2xl font-bold">$12,480</p>
      <div className="mt-2 flex h-20 items-end gap-1.5">
        {hs.map((h, i) => <motion.span key={i} initial={{ height: 0 }} animate={{ height: h * 0.55 }} transition={{ delay: 0.6 + i * 0.07, duration: 0.8, ease }} className="flex-1 rounded-t" style={{ background: i === 7 ? "var(--primary-bright)" : "#1d3a63" }} />)}
      </div>
    </div>
  );
}
const CODE: [string, string][] = [
  ["#7c3aed", "const shop = createStore({"], ["#cbd5e1", "  name: 'Your Shop',"], ["#06b6d4", "  payments: ['card', 'cod'],"],
  ["#cbd5e1", "  languages: ['en', 'ur'],"], ["#f59e0b", "  speed: 'blazing',"], ["#7c3aed", "});"], ["#22c55e", "await shop.launch();"],
];
function Editor({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-line-hover bg-hero font-mono shadow-[var(--shadow-card)] ${className}`}>
      <div className="flex items-center gap-2 border-b border-line bg-card px-4 py-2.5">
        {["#ef4444", "#f59e0b", "#22c55e"].map((c) => <span key={c} className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />)}
        <span className="ml-2 text-[10px] text-[var(--text-dim)]">shop.config.ts</span>
      </div>
      <div className="space-y-1.5 p-4 text-[11px] sm:text-xs">
        {CODE.map(([c, t], i) => (
          <motion.div key={i} initial={{ clipPath: "inset(0 100% 0 0)" }} animate={{ clipPath: "inset(0 0% 0 0)" }} transition={{ delay: 0.3 + i * 0.35, duration: 0.6, ease: "easeOut" }} style={{ color: c }} className="whitespace-pre">{t}</motion.div>
        ))}
      </div>
    </div>
  );
}
const CHAT: [("u" | "ai"), string][] = [["u", "Do you deliver to Dubai?"], ["ai", "Yes! Delivery takes 3 to 5 days. Want me to track an order?"], ["u", "Yes, order 1042 please."], ["ai", "Order 1042 is on its way and arrives tomorrow."]];
function ChatDemo({ className = "" }: { className?: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setN((x) => (x >= CHAT.length + 2 ? 0 : x + 1)), n >= CHAT.length ? 2600 : 1700);
    return () => clearTimeout(t);
  }, [n]);
  const typing = n < CHAT.length && CHAT[n][0] === "ai";
  return (
    <div className={`w-full max-w-full sm:max-w-[340px] rounded-3xl border border-line-hover bg-base/85 p-4 shadow-[var(--shadow-card)] backdrop-blur-xl ${className}`} aria-label="Example AI chatbot conversation">
      <div className="mb-3 flex items-center gap-3 border-b border-line pb-3">
        <span className="grid h-9 w-9 place-items-center rounded-full" style={{ background: "var(--grad-infra)" }}><Bot size={18} /></span>
        <div><p className="text-sm font-semibold">Shop Assistant</p><p className="flex items-center gap-1.5 text-[11px] text-[var(--text-dim)]"><span className="h-1.5 w-1.5 rounded-full bg-green-400" /> Online</p></div>
      </div>
<div className="flex min-h-[140px] sm:min-h-[200px] flex-col gap-1.5 sm:gap-2">
        {CHAT.slice(0, n).map(([w, t], i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm ${w === "u" ? "self-end bg-primary text-white" : "self-start border border-line-hover bg-card text-[var(--text-mid)]"}`}>{t}</motion.div>
        ))}
        {typing && <div className="flex gap-1 self-start rounded-2xl border border-line-hover bg-card px-4 py-3">{[0, 1, 2].map((d) => <motion.span key={d} className="h-1.5 w-1.5 rounded-full bg-violet-light" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: d * 0.15 }} />)}</div>}
      </div>
    </div>
  );
}
function Orb({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-square ${className}`} aria-hidden="true">
      {[100, 76, 52].map((s, i) => (
        <div key={s} className="absolute left-1/2 top-1/2 rounded-full border border-violet/40" style={{ width: `${s}%`, height: `${s}%`, marginLeft: `-${s / 2}%`, marginTop: `-${s / 2}%`, borderStyle: i === 0 ? "dashed" : "solid", animation: `spin ${22 - i * 6}s linear infinite ${i % 2 ? "reverse" : ""}` }}>
          <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-violet-light shadow-[0_0_16px_5px_rgba(168,85,247,.7)]" />
          <span className="absolute -bottom-1 left-[20%] h-2 w-2 rounded-full bg-cyan shadow-[0_0_12px_4px_rgba(6,182,212,.6)]" />
        </div>
      ))}
      <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle at 35% 30%, #e9d5ff, #7c3aed 55%, #1e1b4b)", boxShadow: "0 0 80px 20px rgba(124,58,237,.45)" }} />
    </div>
  );
}

/* ═══════════════ 1. HERO ═══════════════ */
function TechBg() {
  const tokens: [string, string, string, number][] = [["</>", "7%", "20%", 0], ["{ }", "90%", "24%", 1.2], ["AI", "12%", "72%", 2], ["SEO", "84%", "66%", 0.6], ["fn()", "48%", "9%", 1.8], ["#1", "94%", "86%", 2.4]];
  const paths = ["M0 180 H260 L320 240 H640 L700 300 H1100", "M1440 120 H1180 L1120 180 H900 L840 120 H620", "M0 700 H340 L400 640 H760 L820 700 H1200 L1260 640 H1440", "M300 900 V760 L360 700 H520"];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="dot-bg" /><div className="grid-bg" />
      <motion.div className="blob left-[-10%] top-[10%] h-[420px] w-[420px]" style={{ background: "rgba(71,142,206,.22)" }} animate={{ x: [0, 80, 0], y: [0, 50, 0] }} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="blob right-[-8%] top-[30%] h-[460px] w-[460px]" style={{ background: "rgba(124,58,237,.18)" }} animate={{ x: [0, -70, 0], y: [0, -40, 0] }} transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="blob bottom-[-10%] left-[35%] h-[360px] w-[360px]" style={{ background: "rgba(6,182,212,.14)" }} animate={{ x: [0, 60, -40, 0] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }} />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none">
        {paths.map((d, i) => (
          <g key={i}>
            <path d={d} stroke="rgba(71,142,206,.16)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            <path d={d} className="pulse" stroke="#4a9eff" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" style={{ animationDelay: `${i * 1.6}s` }} />
          </g>
        ))}
      </svg>
      {tokens.map(([t, l, tp, d]) => (
        <motion.span key={t} className="absolute hidden rounded-lg border border-brand-line bg-primary/10 px-2.5 py-1 font-mono text-xs text-bright backdrop-blur sm:block" style={{ left: l, top: tp }}
          animate={{ y: [0, -14, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 5, repeat: Infinity, delay: d }}>{t}</motion.span>
      ))}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-base to-transparent" />
    </div>
  );
}
function Layer({ children, depth, mx, my, className = "" }: { children: ReactNode; depth: number; mx: MotionValue<number>; my: MotionValue<number>; className?: string }) {
  const x = useTransform(mx, [-1, 1], [-depth, depth]), y = useTransform(my, [-1, 1], [-depth, depth]);
  return <motion.div style={{ x, y }} className={className}>{children}</motion.div>;
}
function HeroMockups({ mx, my }: { mx: MotionValue<number>; my: MotionValue<number> }) {
  const sx = useSpring(mx, { stiffness: 60, damping: 18 }), sy = useSpring(my, { stiffness: 60, damping: 18 });
  return (
    <div className="relative mx-auto h-[360px] w-full sm:h-[450px] lg:h-[560px]">
      <div className="absolute left-1/2 top-0 h-[540px] w-[560px] origin-top -translate-x-1/2 scale-[.6] sm:scale-[.8] lg:scale-100">
        <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease, delay: 0.3 }} className="absolute inset-0">
          <Layer depth={10} mx={sx} my={sy} className="absolute left-0 top-16 w-[400px]">
            <Float d={6} a={8}><Browser><StoreUI /></Browser></Float>
          </Layer>
          <Layer depth={26} mx={sx} my={sy} className="absolute bottom-6 right-0 w-[170px]">
            <Float d={4.5} a={14} delay={0.5}><Phone /></Float>
          </Layer>
          <Layer depth={18} mx={sx} my={sy} className="absolute right-2 top-0 w-[230px]">
            <Float d={5} a={12} delay={1}><Chart /></Float>
          </Layer>
          <Layer depth={34} mx={sx} my={sy} className="absolute bottom-24 left-[-10px] w-[230px]">
            <Float d={5.5} a={10} delay={0.3}><Editor className="!bg-hero/95 backdrop-blur" /></Float>
          </Layer>
          <Layer depth={40} mx={sx} my={sy} className="absolute left-[310px] top-[230px]">
            <Float d={3.6} a={8} delay={1.4}>
              <div className="flex items-center gap-2 rounded-2xl border border-brand-line bg-base/90 px-3.5 py-2.5 text-xs shadow-xl backdrop-blur"><span className="dot-pulse" /> New order <b className="text-gold">$84</b></div>
            </Float>
          </Layer>
        </motion.div>
      </div>
    </div>
  );
}
function Hero() {
  const mx = useMotionValue(0), my = useMotionValue(0);
  return (
    <section className="hero-bg relative flex min-h-svh items-center overflow-hidden px-5 pb-16 pt-28 md:px-10" aria-labelledby="hero-h"
      onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); mx.set(((e.clientX - r.left) / r.width) * 2 - 1); my.set(((e.clientY - r.top) / r.height) * 2 - 1); }}>
      <TechBg />
      <div className="scanline" />
      <div className="wrap grid items-center gap-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}
            className="inline-flex items-center gap-3 rounded-full border border-brand-line bg-primary/10 px-4 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[.22em] text-primary">
            <span className="dot-pulse" /> Websites · AI · SEO
          </motion.div>
          <motion.h1 id="hero-h" className="h-xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: 0.1 }}>
            We build websites that bring you <span className="grad-text">customers</span>
          </motion.h1>
          <motion.p className="lead" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: 0.25 }}>
            From online shops to smart AI tools, we help your business grow online. Simple, fast, and built to last.
          </motion.p>
          <motion.div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: 0.4 }}>
            <Link href="/contact" className="btn btn-primary">Get a Free Quote <ArrowUpRight size={16} /></Link>
            <Link href="/portfolio" className="btn btn-ghost">See Our Work</Link>
          </motion.div>
          <motion.div className="flex flex-wrap justify-center gap-2 lg:justify-start" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 1 }}>
            {HERO_STATS.map(([v, l]) => (
              <div key={l} className="flex items-center gap-2.5 rounded-full border border-line-hover bg-white/5 px-4 py-2 backdrop-blur">
                <span className="font-heading text-lg font-bold text-primary">{v}</span><span className="text-xs text-[var(--text-dim)]">{l}</span>
              </div>
            ))}
          </motion.div>
        </div>
        <HeroMockups mx={mx} my={my} />
      </div>
    </section>
  );
}

/* ═══════════════ 2. TRUST STRIP ═══════════════ */
function Trust() {
  return (
    <section className="relative border-y border-line bg-raised py-14" aria-label="Tools we use and our numbers">
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="marquee">
          {[...TECH, ...TECH].map((t, i) => (
            <span key={i} className="mx-8 font-heading text-2xl font-semibold tracking-tight text-[var(--text-faint)] transition-colors hover:text-white md:mx-12 md:text-3xl">{t}</span>
          ))}
        </div>
      </div>
      <div className="wrap mt-14 grid grid-cols-2 gap-y-10 px-5 md:grid-cols-4 md:px-10">
        {COUNTERS.map((c) => (
          <div key={c.l} className="flex flex-col items-center gap-1 text-center">
            <span className="font-heading text-5xl font-bold tracking-tight md:text-6xl"><Counter to={c.to} suffix={c.s} /></span>
            <span className="text-sm text-[var(--text-dim)]">{c.l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════ 3. SERVICES SHOWCASE ═══════════════ */
function Ring({ pct, label }: { pct: number; label: string }) {
  return (
    <div className="relative h-24 w-24">
      <svg viewBox="0 0 80 80" className="-rotate-90"><circle cx="40" cy="40" r="34" stroke="rgba(255,255,255,.08)" strokeWidth="6" fill="none" />
        <motion.circle cx="40" cy="40" r="34" stroke="#22c55e" strokeWidth="6" fill="none" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: pct }} transition={{ duration: 1.6, ease }} /></svg>
      <div className="absolute inset-0 grid place-items-center text-center"><div><p className="font-heading text-lg font-bold">{label}</p></div></div>
    </div>
  );
}
function Stage({ i }: { i: number }) {
  if (i === 0) return (
    <div className="relative w-full max-w-[460px]">
      <Browser><StoreUI /></Browser>
      <Float d={3.5} a={8} className="absolute -right-2 -top-5"><div className="flex items-center gap-2 rounded-2xl border border-brand-line bg-base/90 px-3 py-2 text-xs backdrop-blur"><ShoppingCart size={14} className="text-bright" /> 3 items in cart</div></Float>
      <Float d={4} a={10} delay={1} className="absolute -bottom-5 left-4"><div className="flex items-center gap-2 rounded-2xl border border-brand-line bg-base/90 px-3 py-2 text-xs backdrop-blur"><span className="dot-pulse" /> New order <b className="text-gold">$84</b></div></Float>
    </div>
  );
  if (i === 1) return (
    <div className="relative w-full max-w-[440px]">
      <Editor />
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 3, type: "spring" }}
        className="absolute -bottom-5 right-3 flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/15 px-4 py-2 text-xs text-green-300 backdrop-blur"><Check size={14} /> Live in 2 weeks</motion.div>
    </div>
  );
  if (i === 2) return (
    <div className="w-full max-w-[400px] rounded-3xl border border-line-hover bg-base/80 p-5 backdrop-blur-xl">
      <div className="flex items-center justify-between"><p className="font-heading text-lg font-semibold">Website health</p><span className="rounded-full bg-green-500/15 px-3 py-1 font-mono text-[10px] text-green-400">All good</span></div>
      <div className="mt-4 flex items-center gap-5">
        <Ring pct={0.999} label="99.9%" />
        <div className="flex-1 space-y-2.5">
          {["Daily backup done", "Security scan clean", "All updates installed", "Speed: fast"].map((t, k) => (
            <motion.div key={t} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + k * 0.25 }} className="flex items-center gap-2 text-sm text-[var(--text-mid)]">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-green-500/20 text-green-400"><Check size={12} /></span>{t}</motion.div>
          ))}
        </div>
      </div>
    </div>
  );
  if (i === 3) return (
    <div className="relative flex w-full items-center justify-center">
      <Orb className="hidden sm:block absolute w-[85%] max-w-[380px] opacity-70" /><ChatDemo className="relative" />
    </div>
  );
  return (
    <div className="relative w-full max-w-[420px]">
      <Chart className="!p-5" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="mt-4 rounded-2xl border border-gold/40 bg-gold/10 p-4 backdrop-blur">
        <div className="flex items-center justify-between"><span className="font-mono text-[10px] text-gold">#1 on Google</span><TrendingUp size={14} className="text-gold" /></div>
        <p className="mt-1 text-sm font-semibold text-bright">{COMPANY} | Websites and SEO</p>
        <p className="text-xs text-[var(--text-dim)]">We help local businesses get found online...</p>
      </motion.div>
    </div>
  );
}
function Services() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % SERVICES.length), 6000);
    return () => clearTimeout(t);
  }, [active, paused]);
  return (
    <section className="sec bg-base" aria-labelledby="svc-h">
      <div className="blob -right-20 top-0 h-[500px] w-[500px]" style={{ background: "var(--blob-blue)" }} />
      <div className="wrap">
        <Head eyebrow="What we do" title={<span id="svc-h">Everything your business needs online.</span>} sub="Pick what you need. We take care of the rest." />
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-14" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onTouchStart={() => setPaused(true)}>
          <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 lg:mx-0 lg:snap-none lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0">
            {SERVICES.map((s, i) => {
              const on = i === active, Icon = s.icon;
              return (
                <button key={s.id} onClick={() => setActive(i)} aria-pressed={on}
                  className={`relative min-w-[82%] snap-center overflow-hidden rounded-2xl border p-5 text-left transition-all duration-500 sm:min-w-[60%] lg:min-w-0 ${on ? "border-brand-line bg-primary/10 shadow-[var(--glow-brand)]" : "border-line bg-card/60 hover:border-line-hover"}`}>
                  <div className="flex items-start gap-4">
                    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl border transition-colors ${on ? "border-brand-line bg-primary/20 text-bright" : "border-line-hover bg-white/5 text-[var(--text-mid)]"}`}><Icon size={20} /></span>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-semibold">{s.t}</h3>
                      <p className={`mt-1 text-sm leading-relaxed ${on ? "text-[var(--text-mid)]" : "text-[var(--text-dim)]"}`}>{s.d}</p>
                      {on && <Link href={`/services#${s.id}`} className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-bright">Learn more <ArrowRight size={14} /></Link>}
                    </div>
                  </div>
                  {on && <span key={active} className="progress-bar absolute bottom-0 left-0 h-[2px] w-full" style={{ background: "var(--grad-perf)", animationDuration: "6s", animationPlayState: paused ? "paused" : "running" }} />}
                </button>
              );
            })}
          </div>
          <div className="glass relative flex h-[380px] items-center justify-center overflow-hidden p-5 sm:h-[460px] lg:sticky lg:top-28 lg:h-[560px]">
            <div className="grid-bg opacity-60" />
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.97 }} transition={{ duration: 0.5, ease }} className="relative z-10 flex w-full justify-center">
                <Stage i={active} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ 4. HOW IT WORKS (scroll-drawn timeline) ═══════════════ */
function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  return (
    <section className="sec bg-raised" aria-labelledby="how-h">
      <div className="wrap">
        <Head center eyebrow="How it works" title={<span id="how-h">Four simple steps. That is all.</span>} sub="No confusing process. You always know what happens next." />
        <div ref={ref} className="relative mx-auto mt-20 max-w-4xl">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-white/10 md:left-1/2" />
          <motion.div style={{ scaleY: fill }} className="absolute bottom-0 left-6 top-0 w-[2px] origin-top md:left-1/2" ><div className="h-full w-full" style={{ background: "var(--grad-perf)", boxShadow: "0 0 14px rgba(74,158,255,.8)" }} /></motion.div>
          <div className="space-y-14 md:space-y-24">
            {STEPS.map(({ i: Icon, t, d }, k) => (
              <div key={t} className={`relative grid items-center gap-4 pl-16 md:grid-cols-2 md:gap-24 md:pl-0 ${k % 2 ? "" : ""}`}>
                <motion.span initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true, margin: "-35% 0px -35% 0px" }} transition={{ type: "spring", stiffness: 220, damping: 14 }}
                  className="absolute left-6 top-1/2 z-10 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-bright bg-base text-bright shadow-[0_0_24px_rgba(74,158,255,.6)] md:left-1/2">
                  <Icon size={20} />
                </motion.span>
                <motion.div initial={{ opacity: 0, x: k % 2 ? 60 : -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.9, ease }}
                  className={`glass spot p-6 md:p-8 ${k % 2 ? "md:col-start-2" : "md:col-start-1"}`} onMouseMove={spot}>
                  <span className="font-mono text-xs text-eyebrow">Step {k + 1}</span>
                  <h3 className="mt-2 font-heading text-2xl font-semibold md:text-3xl">{t}</h3>
                  <p className="mt-2 text-[var(--text-mid)]">{d}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ 5. SHOP BUILDERS ═══════════════ */
function TiltStore() {
  const mx = useMotionValue(0), my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-1, 1], [10, -10]), { stiffness: 120, damping: 14 });
  const ry = useSpring(useTransform(mx, [-1, 1], [-14, 14]), { stiffness: 120, damping: 14 });
  return (
    <div className="flex h-full min-h-[340px] items-center justify-center p-4 [perspective:1200px]"
      onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); mx.set(((e.clientX - r.left) / r.width) * 2 - 1); my.set(((e.clientY - r.top) / r.height) * 2 - 1); }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}>
      <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }} className="relative w-[92%] max-w-[560px]">
        <Browser><StoreUI /></Browser>
        <Float d={4} a={10} className="absolute -right-3 -top-5"><div style={{ transform: "translateZ(80px)" }} className="flex items-center gap-2 rounded-2xl border border-brand-line bg-base/90 px-3 py-2 text-xs backdrop-blur"><span className="dot-pulse" /> New order <b className="text-gold">$84</b></div></Float>
        <Float d={5} a={12} delay={1} className="absolute -bottom-6 -left-3 hidden sm:block"><Phone className="w-[110px]" /></Float>
      </motion.div>
    </div>
  );
}
function Shop() {
  const small = [
    { i: Store, t: "Shopify Stores", d: "Quick to launch and trusted by millions of shoppers." },
    { i: ShoppingCart, t: "WordPress and WooCommerce", d: "Full control, built exactly the way you sell." },
    { i: Smartphone, t: "Fast and mobile-friendly", d: "Most customers shop on their phone, so we start there." },
  ];
  return (
    <section className="sec bg-base" aria-labelledby="shop-h">
      <div className="wrap">
        <Head eyebrow="Online shops" title={<span id="shop-h">Take your products online with confidence.</span>} sub="We develop e-commerce experiences that make it easier for businesses to showcase products, manage orders and reach customers online." />
        <div className="mt-14 grid gap-4 md:grid-cols-3 md:grid-rows-3">
          <Reveal className="md:col-span-2 md:row-span-3"><div className="glass spot h-full overflow-hidden" onMouseMove={spot}><TiltStore /></div></Reveal>
          {small.map(({ i: Icon, t, d }, k) => (
            <Reveal key={t} delay={k * 0.08}>
              <div className="glass spot h-full p-6" onMouseMove={spot}>
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl border border-brand-line bg-primary/10 text-bright"><Icon size={20} /></span>
                <h3 className="font-heading text-lg font-semibold">{t}</h3><p className="mt-1 text-sm text-[var(--text-dim)]">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ 6. AI SPOTLIGHT ═══════════════ */
function AISection() {
  return (
    <section className="sec overflow-hidden" style={{ background: "linear-gradient(180deg,var(--bg-base),#0b0a1c 50%,var(--bg-raised))" }} aria-labelledby="ai-h">
      <div className="blob right-0 top-1/4 h-[500px] w-[500px]" style={{ background: "rgba(124,58,237,.14)" }} />
      <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal className="flex flex-col gap-5">
            <span className="eyebrow !text-violet-light">AI for your business</span>
            <h2 id="ai-h" className="h-lg">Let AI do the boring work for you.</h2>
            <p className="lead">Answer customers at night, send replies on time and turn data into simple reports, all without hiring more people.</p>
          </Reveal>
          <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-2">
            {["Chatbots that reply 24/7", "Automatic follow-ups", "Smart weekly reports"].map((t) => (
              <span key={t} className="flex items-center gap-2 rounded-full border border-violet/30 bg-violet/10 px-4 py-2 text-sm text-[var(--text-mid)]"><Check size={14} className="text-violet-light" />{t}</span>
            ))}
          </Reveal>
          <Reveal delay={0.25} className="mt-8"><Link href="/services#ai" className="btn btn-ghost">See AI services <ArrowRight size={16} /></Link></Reveal>
        </div>
        <div className="relative flex h-[440px] items-center justify-center sm:h-[520px]">
          <Orb className="hidden sm:block absolute w-[92%] max-w-[480px]" />
          <Reveal className="relative flex w-full justify-center lg:justify-end"><Float d={5} a={8}><ChatDemo /></Float></Reveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ 7. SEO & GROWTH ═══════════════ */
function Seo() {
  const hs = [28, 40, 34, 55, 70, 62, 92];
  const pts = [["More visitors", "Get found by people who are already searching for you."], ["A higher Google ranking", "We fix what holds you back and build what moves you up."], ["Reports you can read", "Clear monthly numbers. No confusing charts."]];
  return (
    <section className="sec bg-raised" aria-labelledby="seo-h">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div className="glass relative overflow-hidden p-5 sm:p-8">
            <div className="rounded-2xl border border-line-hover bg-base/70 p-4">
              <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-xs text-[var(--text-mid)]"><Search size={13} /> best web company near me</div>
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.7 }} className="mt-3 rounded-xl border border-gold/40 bg-gold/10 p-3">
                <div className="flex items-center justify-between"><span className="font-mono text-[10px] text-gold">#1 result</span><TrendingUp size={14} className="text-gold" /></div>
                <p className="mt-1 text-sm font-semibold text-bright">{COMPANY} | Websites and SEO</p>
                <p className="text-xs text-[var(--text-dim)]">We help local businesses get found online...</p>
              </motion.div>
            </div>
            <div className="mt-6">
              <p className="text-xs text-[var(--text-dim)]">Visitors per month</p>
              <div className="relative mt-3 flex h-44 items-end gap-2 sm:h-56 sm:gap-3">
                {hs.map((h, i) => (
                  <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 1, ease }}
                    className="flex-1 rounded-t-lg" style={{ background: i === 6 ? "linear-gradient(180deg,#f59e0b,#d97706)" : "linear-gradient(180deg,#4a9eff,#1d3a63)", boxShadow: i === 6 ? "0 0 30px rgba(245,158,11,.5)" : undefined }} />
                ))}
                <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
                  <motion.path d="M7 80 L21 68 L35 74 L50 52 L64 38 L79 46 L93 12" stroke="#06b6d4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.8, delay: 0.5, ease: "easeInOut" }} />
                </svg>
              </div>
            </div>
          </div>
        </Reveal>
        <div className="order-1 lg:order-2">
          <Head eyebrow="SEO and growth" title={<span id="seo-h">Build a stronger presence on Google.</span>} sub="We help businesses improve their online visibility through technical SEO, on-page optimization and search-friendly website structures." />
          <div className="mt-8 space-y-4">
            {pts.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.1}>
                <div className="flex gap-4 rounded-2xl border border-line bg-card/50 p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold/15 text-gold"><Check size={18} /></span>
                  <div><h3 className="font-heading font-semibold">{t}</h3><p className="text-sm text-[var(--text-dim)]">{d}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ 8. PORTFOLIO PREVIEW ═══════════════ */
function Portfolio() {
  const rail = useRef<HTMLDivElement>(null);
  const go = (dir: number) => rail.current?.scrollBy({ left: dir * rail.current.clientWidth * 0.6, behavior: "smooth" });
  return (
    <section className="sec overflow-hidden bg-base" aria-labelledby="pf-h">
      <div className="wrap">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Head eyebrow="Our work" title={<span id="pf-h">Real projects. Real results.</span>} sub="Swipe or use the arrows to see some of our work." />
          <div className="hidden gap-2 md:flex">
            {[-1, 1].map((d) => (
              <button key={d} onClick={() => go(d)} aria-label={d < 0 ? "Previous" : "Next"} className="grid h-12 w-12 place-items-center rounded-full border border-line-hover bg-white/5 transition hover:border-brand-line hover:bg-primary/20">
                {d < 0 ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
              </button>
            ))}
          </div>
        </div>
        <div ref={rail} className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 md:mx-0 md:px-0">
        {PROJECTS.map(([name, cat, a, b, url, img], i) => (
          <motion.a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${name} in a new tab`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease, delay: i * 0.08 }}
            whileHover={{ y: -12 }}
            className="group block w-[80%] shrink-0 snap-center sm:w-[46%] lg:w-[31%]"
          >
              <div className="glass overflow-hidden p-3">
                <div
                  className="relative aspect-[16/11] overflow-hidden rounded-2xl"
                  style={{ background: `linear-gradient(135deg,${a},${b})` }}
                >
                  <img
                    src={img}
                    alt={name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base/50 via-transparent to-transparent" />
                </div>
                <div className="flex items-center justify-between px-2 pb-1 pt-4">
                  <div><h3 className="font-heading text-xl font-semibold">{name}</h3><p className="font-mono text-xs text-eyebrow">{cat}</p></div>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-line-hover text-[var(--text-mid)]"><ArrowUpRight size={16} /></span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="mt-6 flex justify-center"><Link href="/portfolio" className="btn btn-primary w-full sm:w-auto">View All Projects <ArrowUpRight size={16} /></Link></div>
      </div>
    </section>
  );
}

/* ═══════════════ 9. WHY CHOOSE US ═══════════════ */
function Why() {
  return (
    <section className="sec overflow-hidden bg-raised" aria-labelledby="why-h">
      {[["10%", "10%", "var(--blob-blue)", 14], ["70%", "55%", "var(--blob-violet)", 18]].map(([l, t, bg, d], i) => (
        <motion.div key={i} className="blob h-80 w-80" style={{ left: l as string, top: t as string, background: bg as string }} animate={{ x: [0, 60, -30, 0], y: [0, -40, 30, 0] }} transition={{ duration: d as number, repeat: Infinity, ease: "easeInOut" }} />
      ))}
      <div className="wrap">
        <Head center eyebrow="Why choose us" title={<span id="why-h">A thoughtful approach to every project.</span>} />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map(({ i: Icon, t, d }, k) => (
            <Reveal key={t} delay={(k % 3) * 0.1} className={k % 3 === 1 ? "lg:translate-y-8" : ""}>
              <div className="glass spot h-full p-7" onMouseMove={spot}>
                <motion.span whileHover={{ rotate: -8, scale: 1.1 }} className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-brand-line bg-primary/10 text-bright"><Icon size={22} /></motion.span>
                <h3 className="font-heading text-xl font-semibold">{t}</h3><p className="mt-2 text-[var(--text-dim)]">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ 10. FAQ ═══════════════ */
function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="sec bg-base" aria-labelledby="faq-h">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Head eyebrow="Questions" title={<span id="faq-h">Good questions. Simple answers.</span>} sub="Cannot find what you need? Send us a message and we will reply within a day." />
          <Reveal delay={0.1} className="mt-6"><Link href="/contact" className="btn btn-ghost">Ask us anything</Link></Reveal>
        </div>
        <div className="divide-y divide-line rounded-3xl border border-line bg-card/40">
          {FAQ.map(([q, a], i) => {
            const on = open === i;
            return (
              <div key={q}>
                <button onClick={() => setOpen(on ? null : i)} aria-expanded={on} className="flex min-h-[64px] w-full items-center justify-between gap-4 px-6 py-4 text-left font-heading text-lg font-medium">
                  {q}
                  <motion.span animate={{ rotate: on ? 45 : 0 }} className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border ${on ? "border-brand-line bg-primary/20 text-bright" : "border-line-hover text-[var(--text-mid)]"}`}><Plus size={16} /></motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease }} className="overflow-hidden">
                      <p className="px-6 pb-6 pr-16 text-[var(--text-dim)]">{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ 11. FINAL CTA ═══════════════ */
function FinalCta() {
  return (
    <section className="relative flex min-h-[85svh] items-center justify-center overflow-hidden bg-base px-5 py-24" aria-labelledby="cta-h">
      <div className="grid-bg" />
      <div className="pointer-events-none absolute left-1/2 top-1/2" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <motion.span key={i} className="absolute rounded-full border border-primary/40" style={{ width: 340, height: 340, left: -170, top: -170 }}
            animate={{ scale: [0.4, 3.2], opacity: [0.6, 0] }} transition={{ duration: 7, repeat: Infinity, delay: i * 1.75, ease: "easeOut" }} />
        ))}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(71,142,206,.14),transparent_55%)]" />
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-7 text-center">
        <Reveal><h2 id="cta-h" className="h-xl">Ready to grow your <span className="grad-text">business online?</span></h2></Reveal>
        <Reveal delay={0.1}><p className="lead mx-auto">Tell us your idea. We will send you a clear plan and price, free and within one day.</p></Reveal>
        <Reveal delay={0.2} className="w-full">
          <div className="relative mx-auto flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <span className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-3xl" />
            <div className="relative w-full sm:w-auto"><Magnetic><Link href="/contact" className="btn btn-primary w-full">Get a Free Quote <ArrowUpRight size={16} /></Link></Magnetic></div>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn relative w-full border border-[#25D366]/50 bg-[#25D366]/10 text-[#25D366] hover:-translate-y-0.5 hover:bg-[#25D366]/20 sm:w-auto"><MessageCircle size={16} /> Talk to Us on WhatsApp</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════ PAGE ═══════════════ */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <HowItWorks />
      <Shop />
      <AISection />
      <Seo />
      <Portfolio />
      <Why />
      <Faq />
      <FinalCta />
    </>
  );
}