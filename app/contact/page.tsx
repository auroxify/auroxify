"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  MapPin, Phone, Mail, ArrowRight, CheckCircle2, Plus, Minus,
  Send, ShieldCheck, Clock, MessageCircle, Search, FileText, PhoneCall,
} from "lucide-react";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const ease = [0.16, 1, 0.3, 1] as const;

/* ── EDIT YOUR REAL DETAILS HERE ── */
const EMAIL = "info@auroxify.com";
const PHONE_DISPLAY = "+92 300 1234567";
const PHONE_TEL = "+923001234567";
const WHATSAPP = "920000000000"; // country code + number, no + or spaces
const WHATSAPP_MESSAGE = "Hello! I would like to know more about your services.";
const OFFICE_NAME = "Auroxify HQ";
const OFFICE_ADDRESS = "Gulberg III, Lahore, Pakistan";
const MAP_QUERY = "Gulberg III, Lahore, Pakistan";
const HOURS = "Mon-Sat, 9am to 6pm (PKT)";

const WA_LINK = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const SERVICES = [
  { id: "web", label: "Web Development" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "ai", label: "AI Automation" },
  { id: "seo", label: "SEO" },
  { id: "maintenance", label: "Website Maintenance" },
  { id: "other", label: "Other" },
];

const BUDGETS = ["Under $500", "$500 – $1,500", "$1,500 – $5,000", "$5,000+", "Not sure yet"];

const FAQS = [
  { q: "What services does Auroxify offer?", a: "We provide web development, e-commerce solutions, website maintenance, AI automation and SEO services." },
  { q: "How do I get started?", a: "Simply fill out our contact form with your project details. We'll review your requirements and discuss the next steps." },
  { q: "How much does a project cost?", a: "Pricing depends on your project scope, features and requirements. We'll discuss your needs and provide a suitable quotation." },
  { q: "How long will my project take?", a: "Timelines vary depending on the complexity and requirements of each project. We'll discuss an estimated timeline before starting." },
  { q: "Do you provide support after launch?", a: "Yes. Ongoing maintenance and post-launch support can be discussed according to your project requirements." },
];

const STEPS = [
  { icon: Search, title: "Share Your Requirements", desc: "Tell us about your business, project goals and what you want to achieve." },
  { icon: PhoneCall, title: "Discuss Your Project", desc: "We'll discuss your ideas, requirements, timeline and expectations." },
  { icon: FileText, title: "Get a Project Proposal", desc: "Receive a clear outline of the proposed solution, estimated timeline and pricing." },
];

const FIELD =
  "w-full min-h-[48px] rounded-xl border border-line-hover bg-base/50 px-4 py-3 text-base text-white outline-none transition-all placeholder:text-[var(--text-faint)] focus:border-primary focus:ring-1 focus:ring-primary sm:text-sm";

/* ═══════ FORM ═══════ */
function ContactForm() {
  const params = useSearchParams();
  const [service, setService] = useState<string>("");
  const [budget, setBudget] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");

  // pre-select the service when coming from /services (?service=ai)
  useEffect(() => {
    const s = params.get("service");
    if (s && SERVICES.some((x) => x.id === s)) setService(s);
  }, [params]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!service) {
      setError("Please choose the service you need.");
      return;
    }
    setError("");
    setStatus("sending");

    // TODO: connect this to your real backend, e.g.
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify({ ...fields, service, budget }) });
    await new Promise((r) => setTimeout(r, 1400));

    setStatus("sent");
  };

  const reset = () => {
    setStatus("idle");
    setService("");
    setBudget("");
  };

  return (
    <div className="glass rounded-3xl p-5 sm:p-8">
      <AnimatePresence mode="wait" initial={false}>
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease }}
            className="flex flex-col items-center py-10 text-center"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-green-500/15 text-green-400">
              <CheckCircle2 size={34} />
            </span>
            <h3 className="mt-6 font-heading text-2xl font-bold">Message sent!</h3>
            <p className="mt-2 max-w-sm text-sm text-[var(--text-mid)]">
                Thank you for contacting Auroxify. We appreciate your interest and look forward to discussing your project.
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Chat on WhatsApp <MessageCircle size={16} />
              </a>
              <button
                onClick={reset}
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-line-hover bg-white/5 px-6 text-sm font-semibold transition hover:border-brand-line"
              >
                Send another message
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-medium text-[var(--text-dim)]">Your name</span>
                <input name="name" type="text" required autoComplete="name" placeholder="Ali Khan" className={FIELD} />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-medium text-[var(--text-dim)]">Email</span>
                <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={FIELD} />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-xs font-medium text-[var(--text-dim)]">Phone / WhatsApp (optional)</span>
              <input name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="+92 300 0000000" className={FIELD} />
            </label>

            <fieldset>
              <legend className="mb-3 text-xs font-medium text-[var(--text-dim)]">What do you need?</legend>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    aria-pressed={service === s.id}
                    onClick={() => {
                      setService(s.id);
                      setError("");
                    }}
                    className={`min-h-[44px] rounded-full border px-4 text-sm transition-colors ${
                      service === s.id
                        ? "border-primary bg-primary/20 text-white"
                        : "border-line-hover bg-white/5 text-[var(--text-mid)] hover:border-brand-line hover:text-white"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
              {error && (
                <p role="alert" className="mt-3 text-sm text-red-400">
                  {error}
                </p>
              )}
            </fieldset>

            <fieldset>
              <legend className="mb-3 text-xs font-medium text-[var(--text-dim)]">Estimated budget (optional)</legend>
              <div className="flex flex-wrap gap-2">
                {BUDGETS.map((b) => (
                  <button
                    key={b}
                    type="button"
                    aria-pressed={budget === b}
                    onClick={() => setBudget(budget === b ? "" : b)}
                    className={`min-h-[44px] rounded-full border px-4 text-sm transition-colors ${
                      budget === b
                        ? "border-primary bg-primary/20 text-white"
                        : "border-line-hover bg-white/5 text-[var(--text-mid)] hover:border-brand-line hover:text-white"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </fieldset>

            <label className="block">
              <span className="mb-2 block text-xs font-medium text-[var(--text-dim)]">Tell us about your project</span>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="What are you building, and what does success look like?"
                className={`${FIELD} resize-none`}
              />
            </label>

            <button type="submit" disabled={status === "sending"} className="btn btn-primary group w-full disabled:opacity-70">
              {status === "sending" ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" /> Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Send Message
                  <Send size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-1" />
                </span>
              )}
            </button>

            <p className="flex items-center justify-center gap-2 text-center text-xs text-[var(--text-dim)]">
              <ShieldCheck size={14} className="shrink-0 text-green-400" />Your information will only be used to discuss your project and respond to your inquiry.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════ PHONE MOCKUP ═══════ */
function PhoneMockup() {
  return (
    <div className="relative mx-auto flex w-full max-w-md justify-center py-6 [perspective:1000px]">
      <div className="absolute inset-x-10 inset-y-10 rounded-full bg-gradient-to-tr from-primary/25 to-violet/25 blur-3xl" />
      {/* phone */}
      <motion.div
        animate={{ rotateY: [-5, 5, -5], rotateX: [2, -2, 2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 h-[540px] w-[270px] overflow-hidden rounded-[2.8rem] border-[8px] border-[#1a1a1a] bg-[#0a0a0a] sm:h-[600px] sm:w-[300px]"
        style={{ boxShadow: "0 0 50px rgba(71,142,206,.25), inset 0 0 20px rgba(0,0,0,.8)" }}
      >
        <div className="absolute left-1/2 top-3 z-30 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

        <div className="absolute inset-0 overflow-hidden rounded-[2.2rem] bg-[#e5e3df]">
          <iframe
            title={`Map showing ${OFFICE_NAME}`}
            src={`https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=14&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(110%)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="absolute bottom-5 left-1/2 flex w-[88%] -translate-x-1/2 items-start gap-3 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-md">
            <div className="shrink-0 rounded-full bg-primary/10 p-2 text-primary">
              <MapPin size={20} />
            </div>
            <div className="min-w-0">
              <h4 className="text-sm font-bold text-gray-900">{OFFICE_NAME}</h4>
              <p className="mt-0.5 text-xs text-gray-600">{OFFICE_ADDRESS}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex min-h-[32px] items-center gap-1 text-xs font-semibold text-primary"
              >
                Get directions <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ═══════ PAGE ═══════ */
export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const CARDS = [
    { icon: Mail, title: "Email us", val: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Phone, title: "Call us", val: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
    { icon: MessageCircle, title: "WhatsApp", val: "Message us anytime", href: WA_LINK },
    { icon: MapPin, title: "Visit us", val: OFFICE_ADDRESS, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}` },
  ];

  return (
    <main className="min-h-screen overflow-x-clip bg-base text-white">

      {/* ── 1. HERO: FORM + PHONE MOCKUP ── */}
      <section className="relative overflow-hidden px-5 pb-20 pt-32 md:px-10">
        <div className="grid-bg" />
        <div className="blob left-[-10%] top-[10%] h-[400px] w-[400px]" style={{ background: "var(--blob-blue)" }} />
        <div className="blob bottom-[10%] right-[-10%] h-[400px] w-[400px]" style={{ background: "var(--blob-violet)" }} />

        <div className="wrap relative z-10 mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
          <div className="min-w-0">
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
              Let's build <br className="hidden sm:block" /> <span className="grad-text">something great.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.2 }}
              className="lead mb-10 mt-6"
            >
              Have an idea or project in mind? Tell us what you're looking to build, and let's discuss how we can bring it to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.3 }}
            >
              <Suspense fallback={<div className="glass h-[520px] rounded-3xl" />}>
                <ContactForm />
              </Suspense>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease, delay: 0.3 }}
            className="min-w-0 lg:sticky lg:top-28"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </section>

      {/* ── 2. QUICK CONTACT CARDS ── */}
      <section className="border-y border-line bg-raised px-5 py-12 md:px-10">
        <div className="wrap mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass flex min-w-0 items-center gap-4 p-5 transition-colors hover:border-primary/50"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <item.icon size={22} />
              </span>
              <div className="min-w-0">
                <p className="text-xs text-[var(--text-dim)]">{item.title}</p>
                <p className="break-words text-sm font-semibold text-white">{item.val}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ── 3. WHAT HAPPENS NEXT ── */}
      <section className="px-5 py-24 md:px-10">
        <div className="wrap mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <span className="eyebrow justify-center">What Happens Next</span>
            <h2 className="h-lg mt-4">From message to quote in three steps.</h2>
          </div>
          <ol className="relative grid gap-6 md:grid-cols-3">
            <div className="absolute left-[16%] right-[16%] top-7 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:block" />
            {STEPS.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease, delay: i * 0.1 }}
                className="glass relative p-6 text-center"
              >
                <span className="relative mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-bright">
                  <s.icon size={24} />
                  <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-primary font-mono text-[11px] font-bold text-white">
                    {i + 1}
                  </span>
                </span>
                <h3 className="font-heading text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-dim)]">{s.desc}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 4. FAQ ── */}
      <section className="relative border-t border-line bg-raised px-5 py-24 md:px-10">
        <div className="wrap mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <span className="eyebrow justify-center">Before You Ask</span>
            <h2 className="h-lg mt-4">Frequently asked questions</h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={faq.q}
                  className={`glass overflow-hidden rounded-2xl border transition-colors duration-300 ${isOpen ? "border-brand-line" : "border-line"}`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex min-h-[64px] w-full items-center justify-between gap-4 p-5 text-left text-white sm:p-6"
                  >
                    <span className="font-heading text-base font-semibold text-white sm:text-lg">{faq.q}</span>
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
                        <p className="px-5 pb-6 text-sm leading-relaxed text-[var(--text-mid)] sm:px-6">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. CTA: TALK TO A HUMAN ── */}
      <section className="relative overflow-hidden px-5 py-24 md:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(71,142,206,.14),transparent_70%)]" />
        <div className="wrap relative z-10 mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease }}
            className="relative overflow-hidden rounded-[28px] border border-brand-line p-8 text-center md:p-14"
            style={{ background: "linear-gradient(135deg, rgba(71,142,206,.18), rgba(8,14,28,.92) 60%)" }}
          >
            <div className="blob right-[-10%] top-[-30%] h-72 w-72" style={{ background: "var(--blob-violet)" }} />

            <div className="relative z-10">
              <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-1.5 text-xs font-medium text-green-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                {HOURS}
              </span>

              <h2 className="h-lg mx-auto mt-6 max-w-2xl">Let's discuss your next big idea.</h2>
              <p className="lead mx-auto mb-10 mt-4 max-w-xl">
                Have questions or need to discuss your project? Reach out to us directly and let's explore the possibilities.
              </p>

              <div className="mx-auto flex max-w-lg flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Chat on WhatsApp <MessageCircle size={16} />
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-line-hover bg-white/5 px-6 text-sm font-semibold transition hover:border-brand-line hover:text-bright"
                >
                  <Phone size={16} /> Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}