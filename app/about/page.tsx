"use client";

import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle2, Target, Zap, Users, Award, Globe, Rocket,
  Heart, Shield, Clock, Quote, Plus, Minus,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { animate, useInView, AnimatePresence } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

/* ═══════ DATA ═══════ */
const FOUNDERS = [
  {
    name: "Muhammad Qasim",
    role: "Co-Founder & CEO",
    desc: "The tech brain behind our infrastructure. Zubair ensures every line of code is fast, secure, and scalable — built to grow with your business.",
    img: "/founder2.png",
  },
  {
    name: "Hafiz Hamza",
    role: "Co-Founder & CTO",
    desc: "10+ years in digital strategy. Ahmed leads the vision to make premium web solutions accessible to every business, from startups to enterprises.",
    img: "/founder1.jpeg",
  },
];

const STATS = [
  { to: 120, s: "+", l: "Projects Delivered" },
  { to: 98, s: "%", l: "Client Satisfaction" },
  { to: 6, s: "+", l: "Years Experience" },
  { to: 45, s: "+", l: "Team Members" },
];

const TIMELINE = [
  { year: "2020", title: "The Beginning", desc: "Auroxify started in a small room with 2 founders and one big dream — to build websites that actually work." },
  { year: "2021", title: "First 50 Clients", desc: "Word spread fast. We delivered 50+ projects and built a reputation for speed, quality, and honest pricing." },
  { year: "2022", title: "Going Global", desc: "We expanded beyond borders, serving clients from the US, UK, UAE, and Pakistan." },
  { year: "2023", title: "AI Integration", desc: "We added AI-powered solutions — chatbots, automation, and smart analytics — to our toolkit." },
  { year: "2024", title: "Team of 45+", desc: "What started as 2 people is now a full team of designers, developers, and marketers." },
  { year: "2025", title: "The Future", desc: "We're building the next generation of digital experiences. And we're just getting started." },
];

const VALUES = [
  { icon: Target, title: "Results First", desc: "We measure our success by your growth. Every decision is made with your ROI in mind." },
  { icon: Zap, title: "Lightning Fast", desc: "No delays, no excuses. We deliver on time, every time — because your time is money." },
  { icon: Shield, title: "Total Transparency", desc: "Clear pricing, honest timelines, and real communication. No hidden surprises." },
  { icon: Heart, title: "Client Obsession", desc: "Your goals become our goals. We treat your business like it's our own." },
  { icon: Award, title: "Premium Quality", desc: "We don't cut corners. Every pixel, every line of code is crafted with care." },
  { icon: Globe, title: "Global Mindset", desc: "Serving clients worldwide with world-class standards and local understanding." },
];

const TEAM_CULTURE = [
  "Remote-first, flexible work environment",
  "Continuous learning and skill development",
  "Open communication at every level",
  "Celebrating wins — big and small",
];

const TESTIMONIALS = [
  { name: "Sarah Johnson", role: "CEO, Bloom Boutique", text: "Auroxify transformed our online store. Sales jumped 3x in the first month. Absolute pros.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" },
  { name: "Michael Chen", role: "Founder, TechFlow", text: "The team delivered our website ahead of schedule. Communication was flawless. Highly recommended.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
  { name: "Ayesha Malik", role: "Owner, Cafe Aroma", text: "Our Google ranking went from page 5 to page 1. We now get walk-ins daily. Thank you Auroxify!", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" },
];

const FAQ = [
  ["What makes Auroxify different?", "We combine premium quality with honest pricing. No hidden fees, no jargon — just real results delivered on time."],
  ["Do you work with small businesses?", "Absolutely. From solo founders to enterprises, we tailor solutions to fit your budget and goals."],
  ["How long does a typical project take?", "Most websites take 2-4 weeks. Complex projects like e-commerce or AI tools may take 6-8 weeks."],
  ["Do you offer ongoing support?", "Yes. Our care plans cover updates, backups, security, and fixes so your site stays fast and safe."],
  ["Which countries do you serve?", "We serve clients globally — US, UK, UAE, Canada, Australia, Pakistan, and beyond."],
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
    <motion.div className={className} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.9, ease, delay }}>
      {children}
    </motion.div>
  );
}

/* ═══════ PAGE ═══════ */
export default function About() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bg-base min-h-screen text-white overflow-hidden">

      {/* ── 1. HERO ── */}
      <section className="relative pt-32 pb-20 px-5 md:px-10 overflow-hidden">
        <div className="grid-bg" />
        <div className="blob left-[-10%] top-[10%] h-[400px] w-[400px]" style={{ background: "var(--blob-blue)" }} />
        <div className="blob right-[-10%] top-[30%] h-[400px] w-[400px]" style={{ background: "var(--blob-violet)" }} />

        <div className="wrap max-w-5xl mx-auto text-center relative z-10">
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
            We turn ideas into <br /> <span className="grad-text">digital reality.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="lead mx-auto mt-6"
          >
            Founded in 2020, Auroxify started with a simple goal: to build websites and digital tools that actually help businesses grow. No jargon, just results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.4 }}
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {STATS.map((s) => (
              <div key={s.l} className="flex flex-col items-center gap-1">
                <span className="font-heading text-4xl md:text-5xl font-bold text-primary">
                  <Counter to={s.to} suffix={s.s} />
                </span>
                <span className="text-sm text-[var(--text-dim)]">{s.l}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 2. FOUNDERS ── */}
      <section className="py-24 px-5 md:px-10 border-t border-line relative">
        <div className="wrap max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="eyebrow justify-center">The Minds Behind It</span>
            <h2 className="h-lg mt-4">Meet Our Founders</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-4xl mx-auto">
            {FOUNDERS.map((founder, i) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease, delay: i * 0.2 }}
                className="flex flex-col group relative overflow-hidden rounded-2xl bg-card border border-line hover:border-primary transition-colors duration-500 cursor-pointer"
              >
                {/* Image Container */}
                <div className="aspect-[3/4] relative w-full overflow-hidden">
                  <img
                    src={founder.img}
                    alt={founder.name}
                    // blur-[2px] hata diya hai, sirf zoom aur color rakha hai
                    className="w-full h-full object-cover filter grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Hover par Name aur Role */}
                  <div className="absolute bottom-8 left-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10">
                    <h3 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-wide uppercase">
                      {founder.name.split(' ')[0]}
                    </h3>
                    <p className="text-[#f97316] font-mono text-sm tracking-[0.2em] mt-1 uppercase">
                      {founder.role}
                    </p>
                  </div>
                </div>

                {/* Double Inner Borders */}
                <div className="absolute inset-3 border border-white/20 group-hover:border-primary/60 transition-colors duration-500 pointer-events-none rounded-lg z-20" />
                <div className="absolute inset-[14px] border border-white/10 group-hover:border-primary/30 transition-colors duration-500 pointer-events-none rounded-md z-20" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. TIMELINE ── */}
      <section className="py-24 px-5 md:px-10 bg-raised border-y border-line relative">
        <div className="wrap max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="eyebrow justify-center">Our Journey</span>
            <h2 className="h-lg mt-4">From 2 people to a global team.</h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />
            <div className="space-y-10">
              {TIMELINE.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.05}>
                  <div className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12`}>
                    <div className="absolute left-4 md:left-1/2 top-2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 shadow-[0_0_16px_rgba(71,142,206,.8)]" />
                    <div className={`${i % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                      <span className="font-mono text-sm text-eyebrow">{item.year}</span>
                      <h3 className="font-heading text-xl font-semibold mt-1">{item.title}</h3>
                      <p className="text-[var(--text-dim)] text-sm mt-2">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. MISSION & VISION ── */}
      <section className="py-24 px-5 md:px-10 relative">
        <div className="wrap max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="glass p-8 md:p-12 h-full">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-bright mb-6">
                  <Target size={24} />
                </span>
                <h3 className="font-heading text-2xl font-bold">Our Mission</h3>
                <p className="text-[var(--text-mid)] mt-4 leading-relaxed">
                  To empower businesses of every size with digital tools that are simple, powerful, and built to grow. We believe every business deserves a world-class online presence — without the world-class price tag.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="glass p-8 md:p-12 h-full">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet/10 text-violet-light mb-6">
                  <Rocket size={24} />
                </span>
                <h3 className="font-heading text-2xl font-bold">Our Vision</h3>
                <p className="text-[var(--text-mid)] mt-4 leading-relaxed">
                  To become the go-to digital partner for businesses worldwide — known not just for what we build, but for how we build it: with honesty, speed, and a relentless focus on results.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5. VALUES ── */}
      <section className="py-24 px-5 md:px-10 bg-raised border-y border-line relative overflow-hidden">
        <div className="blob right-0 top-0 h-[400px] w-[400px]" style={{ background: "var(--blob-blue)" }} />
        <div className="wrap max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="eyebrow justify-center">Our Values</span>
            <h2 className="h-lg mt-4">What drives us every day.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((val, i) => (
              <Reveal key={val.title} delay={(i % 3) * 0.1}>
                <div className="glass p-6 h-full hover:border-brand-line transition-colors">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-bright mb-4">
                    <val.icon size={20} />
                  </span>
                  <h3 className="font-heading text-lg font-semibold">{val.title}</h3>
                  <p className="text-[var(--text-dim)] text-sm mt-2">{val.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CULTURE ── */}
      <section className="py-24 px-5 md:px-10 relative">
        <div className="wrap max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-line">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="Our team"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </Reveal>
          <div>
            <span className="eyebrow">Our Culture</span>
            <h2 className="h-lg mt-4">A team that loves what it does.</h2>
            <p className="lead mt-4">
              We're a remote-first team of designers, developers, and marketers who genuinely care about the work we do.
            </p>
            <ul className="mt-8 space-y-4">
              {TEAM_CULTURE.map((item, i) => (
                <Reveal key={item} delay={i * 0.1}>
                  <li className="flex items-center gap-3 text-[var(--text-mid)]">
                    <CheckCircle2 size={18} className="text-primary shrink-0" />
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 7. ACHIEVEMENTS ── */}
      <section className="py-24 px-5 md:px-10 bg-raised border-y border-line">
        <div className="wrap max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="eyebrow justify-center">By The Numbers</span>
            <h2 className="h-lg mt-4">Our achievements so far.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, to: 120, s: "+", l: "Projects" },
              { icon: Users, to: 98, s: "%", l: "Happy Clients" },
              { icon: Globe, to: 12, s: "+", l: "Countries" },
              { icon: Clock, to: 6, s: "+", l: "Years" },
            ].map((item, i) => (
              <Reveal key={item.l} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center gap-2">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-bright">
                    <item.icon size={22} />
                  </span>
                  <span className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2">
                    <Counter to={item.to} suffix={item.s} />
                  </span>
                  <span className="text-sm text-[var(--text-dim)]">{item.l}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. TESTIMONIALS ── */}
      <section className="py-24 px-5 md:px-10 relative">
        <div className="wrap max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="eyebrow justify-center">What Clients Say</span>
            <h2 className="h-lg mt-4">Trusted by businesses worldwide.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="glass p-7 h-full flex flex-col">
                  <Quote size={28} className="text-primary/40 mb-4" />
                  <p className="text-[var(--text-mid)] text-sm leading-relaxed flex-1">"{t.text}"</p>
                  <div className="flex items-center gap-3 mt-6 pt-5 border-t border-line">
                    <img src={t.img} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                    <div>
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

      {/* ── 10. CTA ── */}
      <section className="py-28 text-center px-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(71,142,206,.12),transparent_70%)]" />
        <div className="wrap relative z-10">
          <Reveal>
            <h2 className="h-xl">Ready to work with us?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead mx-auto mt-5 mb-8">Let's discuss your project and build something amazing together.</p>
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