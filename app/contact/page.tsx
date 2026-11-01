"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Phone, Mail, ArrowRight, CheckCircle2, Plus, Minus, 
  Send, ShieldCheck, Clock, Award, MessageCircle, ChevronDown
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const FAQS = [
  { q: "How soon can we start?", a: "Once we finalize the requirements and you approve the quote, we can start within 24 to 48 hours." },
  { q: "Do you sign NDAs?", a: "Absolutely. We respect your privacy and intellectual property. We are happy to sign an NDA before we discuss the details." },
  { q: "What is your payment structure?", a: "Usually, we take 50% upfront to kick off the project and the remaining 50% upon successful completion and testing." },
  { q: "Do you provide support after launch?", a: "Yes, we offer 30 days of free bug-fixing support after launch, and then you can choose from our monthly maintenance plans." }
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Fake API call simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <main className="bg-base min-h-screen text-white overflow-hidden">

      {/* ── 1. HERO & FORM & IPHONE MOCKUP ── */}
      <section className="relative pt-32 pb-20 px-5 md:px-10 overflow-hidden">
        <div className="grid-bg" />
        <div className="blob left-[-10%] top-[10%] h-[400px] w-[400px]" style={{ background: "var(--blob-blue)" }} />
        <div className="blob right-[-10%] bottom-[10%] h-[400px] w-[400px]" style={{ background: "var(--blob-violet)" }} />

        <div className="wrap max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left Side: Contact Form */}
          <div className="order-2 lg:order-1">
            <motion.span
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
              className="eyebrow"
            >
              Get In Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="h-xl mt-6"
            >
              Let's build <br /> <span className="grad-text">something great.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.2 }}
              className="lead mt-6 mb-10"
            >
              Have a project in mind? Fill out the form below and our team will get back to you within 24 hours.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.3 }}
              className="glass p-6 md:p-8 rounded-3xl"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="relative group">
                    <input type="text" required placeholder="Your Name" className="w-full bg-base/50 border border-line-hover rounded-xl px-4 py-3.5 text-sm text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all peer" />
                  </div>
                  {/* Email */}
                  <div className="relative group">
                    <input type="email" required placeholder="Your Email" className="w-full bg-base/50 border border-line-hover rounded-xl px-4 py-3.5 text-sm text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all peer" />
                  </div>
                </div>
                
                {/* Service Selection */}
                <div className="relative">
                  {/* Yahan defaultValue="" add kiya hai */}
                  <select 
                    defaultValue=""
                    className="w-full bg-base/50 border border-line-hover rounded-xl px-4 py-3.5 text-sm text-[var(--text-dim)] outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer"
                  >
                    {/* Yahan se 'selected' hata diya hai */}
                    <option value="" disabled>Select a Service</option>
                    <option value="ecommerce">E-Commerce Store</option>
                    <option value="custom">Custom Development</option>
                    <option value="ai">AI Integration</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-dim)] pointer-events-none" />
                </div>

                {/* Message */}
                <div className="relative group">
                  <textarea required placeholder="Tell us about your project..." rows={4} className="w-full bg-base/50 border border-line-hover rounded-xl px-4 py-3.5 text-sm text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn btn-primary w-full group relative overflow-hidden"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</span>
                  ) : submitted ? (
                    <span className="flex items-center gap-2 text-green-300"><CheckCircle2 size={18} /> Message Sent!</span>
                  ) : (
                    <span className="flex items-center gap-2">Send Message <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Right Side: iPhone Mockup with Google Maps */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center relative [perspective:1000px]"
          >
            {/* Floating Elements behind Phone */}
            <div className="absolute top-10 left-10 p-4 glass rounded-2xl border-brand-line bg-card/80 backdrop-blur-md animate-[bounce_4s_infinite] z-0 hidden md:block">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-green-500/20 text-green-400"><Clock size={18} /></span>
                <div><p className="text-xs text-[var(--text-dim)]">Response Time</p><p className="font-bold text-sm">Under 24h</p></div>
              </div>
            </div>
            <div className="absolute bottom-16 right-4 p-4 glass rounded-2xl border-violet/30 bg-card/80 backdrop-blur-md animate-[bounce_5s_infinite_reverse] z-0 hidden md:block">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-violet-500/20 text-violet-400"><ShieldCheck size={18} /></span>
                <div><p className="text-xs text-[var(--text-dim)]">100% Secure</p><p className="font-bold text-sm">NDA Protected</p></div>
              </div>
            </div>

            {/* The iPhone Frame */}
            <motion.div 
              animate={{ rotateY: [-5, 5, -5], rotateX: [2, -2, 2] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[300px] h-[600px] bg-[#0a0a0a] rounded-[3rem] border-[8px] border-[#1a1a1a] shadow-2xl overflow-hidden z-10"
              style={{ boxShadow: "0 0 50px rgba(71,142,206,0.2), inset 0 0 20px rgba(0,0,0,0.8)" }}
            >
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30" />
              
              {/* Screen Content - Google Map */}
              <div className="absolute inset-0 bg-[#e5e3df] rounded-[2.5rem] overflow-hidden">
                {/* Map Iframe */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13622.52724033893!2d74.34828863295117!3d31.520369999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045b11111111%3A0x1111111111111111!2sGulberg%20III%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(110%)" }} // Dark mode map trick
                  allowFullScreen={false} 
                  loading="lazy"
                />
                
                {/* Floating Location Card Overlay */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-start gap-3">
                  <div className="p-2 bg-primary/10 text-primary rounded-full shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Auroxify HQ</h4>
                    <p className="text-xs text-gray-600 mt-1">Gulberg III, Lahore, Pakistan</p>
                    <button className="mt-2 text-xs font-semibold text-primary flex items-center gap-1">Get Directions <ArrowRight size={12} /></button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. QUICK INFO CARDS ── */}
      <section className="py-12 border-y border-line bg-raised">
        <div className="wrap max-w-6xl mx-auto grid sm:grid-cols-3 gap-6 px-5 md:px-0">
          {[
            { icon: Mail, title: "Email Us", val: "hello@auroxify.com" },
            { icon: Phone, title: "Call Us", val: "+92 300 1234567" },
            { icon: MessageCircle, title: "WhatsApp", val: "Available 24/7" },
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="glass p-6 flex items-center gap-4 hover:border-primary/50 transition-colors cursor-pointer"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary"><item.icon size={22} /></span>
              <div>
                <p className="text-xs text-[var(--text-dim)]">{item.title}</p>
                <p className="font-semibold text-white">{item.val}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 3. FAQ / ACCORDION (Why contact us?) ── */}
      <section className="py-24 px-5 md:px-10 relative">
        <div className="wrap max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="eyebrow justify-center">Before You Ask</span>
            <h2 className="h-lg mt-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className={`glass border ${isOpen ? 'border-brand-line' : 'border-line'} overflow-hidden rounded-2xl transition-colors duration-300`}
                >
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-heading font-semibold text-lg">{faq.q}</span>
                    <span className={`grid h-8 w-8 place-items-center rounded-full transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-white/5 text-[var(--text-dim)]'}`}>
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease }}
                        className="px-6 pb-6 text-[var(--text-mid)] text-sm leading-relaxed"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. CTA ── */}
      <section className="py-24 text-center px-5 relative overflow-hidden bg-raised border-t border-line">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(71,142,206,.12),transparent_70%)]" />
        <div className="wrap relative z-10 max-w-3xl mx-auto">
          <h2 className="h-lg">Prefer a direct call?</h2>
          <p className="lead mx-auto mt-4 mb-8">Skip the form and talk to our team directly. We are available Mon-Sat, 9am to 6pm.</p>
          <a href="https://wa.me/920000000000" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Chat on WhatsApp <MessageCircle size={16} />
          </a>
        </div>
      </section>

    </main>
  );
}