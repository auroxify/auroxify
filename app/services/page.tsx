"use client";

import { motion } from "framer-motion";
import {
  ShoppingCart, Code2, Bot, ShieldCheck, Search, ArrowRight,
  CheckCircle2, Store, Smartphone, Zap, Globe, LineChart
} from "lucide-react";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

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
    colSpan: "md:col-span-2 lg:col-span-2" // Badi card
  },
  {
    id: "custom",
    icon: Code2,
    title: "Custom Web Development",
    desc: "No templates. We code your website exactly how you want it. Fast, secure, and perfectly matching your brand identity.",
    features: ["Next.js & React", "Custom UI/UX", "API Integrations", "Database Design"],
    color: "from-violet-500/20 to-fuchsia-500/5",
    iconColor: "text-violet-400",
    colSpan: "md:col-span-1 lg:col-span-1" // Normal card
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI Integration",
    desc: "Let AI do the heavy lifting. We add smart chatbots, automated emails, and AI workflows to your business to save you hours every day.",
    features: ["Custom AI Chatbots", "Automated Workflows", "OpenAI API Setup", "Smart Analytics"],
    color: "from-purple-500/20 to-indigo-500/5",
    iconColor: "text-purple-400",
    colSpan: "md:col-span-1 lg:col-span-1"
  },
  {
    id: "maintenance",
    icon: ShieldCheck,
    title: "Maintenance & Care",
    desc: "Keep your website running at 100%. We handle the technical headaches so you can focus on your business.",
    features: ["Daily Backups", "Security Scans", "Speed Optimization", "Bug Fixes"],
    color: "from-green-500/20 to-emerald-500/5",
    iconColor: "text-green-400",
    colSpan: "md:col-span-1 lg:col-span-1"
  },
  {
    id: "seo",
    icon: Search,
    title: "End-to-End SEO",
    desc: "Be the first name people see on Google. We do full on-page, off-page, and technical SEO to bring organic traffic to your site.",
    features: ["Keyword Research", "On-Page Optimization", "Technical SEO", "Monthly Reports"],
    color: "from-orange-500/20 to-amber-500/5",
    iconColor: "text-orange-400",
    colSpan: "md:col-span-1 lg:col-span-1"
  }
];

export default function Services() {
  return (
    <main className="bg-base min-h-screen text-white overflow-hidden">

      {/* ── 1. HERO SECTION ── */}
      <section className="relative pt-32 pb-20 px-5 md:px-10 overflow-hidden">
        <div className="grid-bg" />
        <div className="blob left-[-10%] top-[10%] h-[400px] w-[400px]" style={{ background: "var(--blob-blue)" }} />
        <div className="blob right-[-10%] top-[30%] h-[400px] w-[400px]" style={{ background: "var(--blob-violet)" }} />

        <div className="wrap max-w-5xl mx-auto text-center relative z-10">
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
            Everything you need <br /> to <span className="grad-text">grow online.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="lead mx-auto mt-6"
          >
            From building your first online store to automating your business with AI — we provide end-to-end digital solutions.
          </motion.p>
        </div>
      </section>

      {/* ── 2. SERVICES GRID ── */}
      <section className="py-24 px-5 md:px-10 relative">
        <div className="wrap max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((srv, i) => (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease, delay: i * 0.1 }}
                className={`glass group relative p-8 flex flex-col overflow-hidden hover:border-primary/40 transition-colors duration-500 ${srv.colSpan}`}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${srv.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className={`grid h-14 w-14 place-items-center rounded-2xl bg-white/5 border border-white/10 ${srv.iconColor} group-hover:scale-110 transition-transform duration-500`}>
                      <srv.icon size={26} />
                    </span>
                    <h3 className="font-heading text-2xl font-bold">{srv.title}</h3>
                  </div>

                  <p className="text-[var(--text-mid)] text-sm leading-relaxed mb-8">
                    {srv.desc}
                  </p>

                  <div className="mt-auto">
                    <ul className="space-y-3 mb-8">
                      {srv.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-3 text-sm text-[var(--text-dim)]">
                          <CheckCircle2 size={16} className={srv.iconColor} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link href={`/contact?service=${srv.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-primary transition-colors">
                      Get Started <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHY CHOOSE US (Quick Strip) ── */}
      <section className="py-20 px-5 md:px-10 bg-raised border-y border-line">
        <div className="wrap max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Zap, title: "Fast Delivery" },
            { icon: ShieldCheck, title: "100% Secure" },
            { icon: Globe, title: "Global Standard" },
            { icon: LineChart, title: "Result Driven" }
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
                <item.icon size={22} />
              </span>
              <span className="font-heading font-semibold text-sm">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 4. CTA ── */}
      <section className="py-28 text-center px-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(71,142,206,.12),transparent_70%)]" />
        <div className="wrap relative z-10 max-w-3xl mx-auto">
          <h2 className="h-lg">Not sure what you need?</h2>
          <p className="lead mx-auto mt-4 mb-8">Tell us about your business and we will suggest the perfect digital plan for you. Free consultation, no pressure.</p>
          <Link href="/contact" className="btn btn-primary">
            Book a Free Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </main>
  );
}