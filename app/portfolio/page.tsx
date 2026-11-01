"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight, ArrowRight, Code2, Smartphone, ShoppingCart, 
  Globe, Zap, LayoutTemplate, Search
} from "lucide-react";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

/* ═══════ DATA ═══════ */
const PROJECTS = [
  {
    title: "Fashion Store",
    category: "E-Commerce",
    desc: "A modern Shopify store with seamless checkout and high-converting product pages.",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    color: "from-pink-500/20 to-rose-500/5",
    size: "md:col-span-2 md:row-span-2", // Bada card
    icon: ShoppingCart,
  },
  {
    title: "TechFlow SaaS",
    category: "Custom Development",
    desc: "Next.js based dashboard for a SaaS startup with real-time analytics.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    color: "from-blue-500/20 to-cyan-500/5",
    size: "md:col-span-1 md:row-span-1",
    icon: Code2,
  },
  {
    title: "Luxe Real Estate",
    category: "Website + SEO",
    desc: "A high-end property listing website that ranks #1 for local searches.",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
    color: "from-amber-500/20 to-orange-500/5",
    size: "md:col-span-1 md:row-span-1",
    icon: Search,
  },
  {
    title: "HealthPulse App",
    category: "AI Integration",
    desc: "Mobile-first wellness app with an AI chatbot for daily health tips.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    color: "from-emerald-500/20 to-green-500/5",
    size: "md:col-span-1 md:row-span-1",
    icon: Smartphone,
  },
  {
    title: "EduSphere Portal",
    category: "Custom Dev + SEO",
    desc: "Learning management system with built-in performance tracking.",
    img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
    color: "from-violet-500/20 to-purple-500/5",
    size: "md:col-span-1 md:row-span-1",
    icon: LayoutTemplate,
  },
  {
    title: "Urban Coffee",
    category: "E-Commerce",
    desc: "WooCommerce store with subscription models and local delivery logic.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    color: "from-orange-500/20 to-amber-500/5",
    size: "md:col-span-2 md:row-span-1", // Lamba card
    icon: ShoppingCart,
  },
  {
    title: "FitLife Gym",
    category: "Website",
    desc: "A bold, high-energy website for a fitness brand with class booking.",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    color: "from-red-500/20 to-rose-500/5",
    size: "md:col-span-1 md:row-span-1",
    icon: Zap,
  },
  {
    title: "Global Logistics",
    category: "Web App",
    desc: "Tracking dashboard for a freight company handling 10k+ shipments daily.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8ed7c508b0?q=80&w=800&auto=format&fit=crop",
    color: "from-slate-500/20 to-gray-500/5",
    size: "md:col-span-1 md:row-span-1",
    icon: Globe,
  },
];

/* ═══════ COMPONENTS ═══════ */
function HeroMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center [perspective:1000px] mt-10 md:mt-0">
      {/* Background Blobs */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-violet/20 blur-3xl rounded-full scale-75 animate-pulse" />
      
      {/* Main Floating Browser Window */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotateX: [0, 5, 0], rotateY: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-[90%] glass rounded-2xl p-2 border-white/10 shadow-2xl overflow-hidden"
      >
        <div className="flex gap-1.5 p-2 pb-3">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        {/* Mockup Content */}
        <div className="bg-base/80 rounded-xl overflow-hidden border border-line">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" alt="Dashboard" className="w-full h-48 md:h-64 object-cover opacity-80" />
          <div className="p-4 grid gap-3">
             <div className="h-3 w-1/2 bg-white/20 rounded-full" />
             <div className="h-2 w-3/4 bg-white/10 rounded-full" />
             <div className="h-2 w-2/3 bg-white/10 rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* Floating Card 1 (Top Right) */}
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-4 top-10 z-20 glass p-4 rounded-xl border-brand-line bg-card/90 backdrop-blur-md shadow-xl flex items-center gap-3"
      >
        <div className="p-2 bg-green-500/20 text-green-400 rounded-lg"><ArrowUpRight size={20} /></div>
        <div>
          <p className="text-xs text-[var(--text-dim)]">Traffic Boost</p>
          <p className="font-heading font-bold text-lg">+240%</p>
        </div>
      </motion.div>

      {/* Floating Card 2 (Bottom Left) */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -left-6 bottom-16 z-20 glass p-4 rounded-xl border-violet/30 bg-card/90 backdrop-blur-md shadow-xl flex items-center gap-3"
      >
        <div className="p-2 bg-violet-500/20 text-violet-400 rounded-lg"><Code2 size={20} /></div>
        <div>
          <p className="text-xs text-[var(--text-dim)]">Projects Done</p>
          <p className="font-heading font-bold text-lg">120+</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <main className="bg-base min-h-screen text-white overflow-hidden">

      {/* ── 1. HERO SECTION ── */}
      <section className="relative pt-32 pb-20 px-5 md:px-10 overflow-hidden">
        <div className="grid-bg" />
        <div className="blob left-[-10%] top-[10%] h-[400px] w-[400px]" style={{ background: "var(--blob-blue)" }} />
        
        <div className="wrap max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center relative z-10">
          <div>
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
              Real projects. <br /> <span className="grad-text">Real results.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.2 }}
              className="lead mt-6"
            >
              We don't just build websites. We build digital experiences that drive growth, sales, and engagement for businesses worldwide.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease, delay: 0.3 }}
          >
            <HeroMockup />
          </motion.div>
        </div>
      </section>

      {/* ── 2. MASONRY PROJECTS GRID ── */}
      <section className="py-24 px-5 md:px-10 border-t border-line relative">
        <div className="wrap max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6">
            {PROJECTS.map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease, delay: (i % 3) * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-card ${proj.size} cursor-pointer`}
              >
                {/* Image with Zoom Effect */}
                <img 
                  src={proj.img} 
                  alt={proj.title} 
                  className="absolute inset-0 w-full h-full object-cover filter grayscale-[50%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-base via-base/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                <div className={`absolute inset-0 bg-gradient-to-br ${proj.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay`} />

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-10">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-white">
                        <proj.icon size={16} />
                      </span>
                      <span className="text-xs font-mono tracking-widest text-primary uppercase bg-primary/10 px-2 py-1 rounded-md">{proj.category}</span>
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">{proj.title}</h3>
                    <p className="text-sm text-[var(--text-mid)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md">
                      {proj.desc}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500">
                    <ArrowUpRight size={20} className="text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. CTA ── */}
      <section className="py-28 text-center px-5 relative overflow-hidden bg-raised border-t border-line">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(71,142,206,.12),transparent_70%)]" />
        <div className="wrap relative z-10 max-w-3xl mx-auto">
          <h2 className="h-lg">Want to be our next success story?</h2>
          <p className="lead mx-auto mt-4 mb-8">Let's build something amazing together. Get a free quote today.</p>
          <Link href="/contact" className="btn btn-primary">
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </main>
  );
}