"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { SOCIALS } from "./Socials";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const EMAIL = "hello@auroxify.com";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.2 });

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  // close the menu when the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // hide on scroll down, show on scroll up
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > last && y > 240);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock page scroll while the mobile menu is open, close on Escape / when resized to desktop
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-all duration-500 ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        } ${scrolled || open ? "border-b border-line bg-base/80 backdrop-blur-xl" : "border-b border-transparent"}`}
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <nav className="mx-auto flex h-[68px] w-full max-w-[1400px] items-center justify-between px-5 md:px-10" aria-label="Main">
          <Link href="/" className="flex items-center gap-3 font-heading text-lg font-bold tracking-tight" aria-label="Auroxify home">
            <span
              className="grid h-9 w-9 place-items-center rounded-xl text-sm font-bold text-white shadow-[var(--glow-brand)]"
              style={{ background: "var(--grad-brand)" }}
            >
              A
            </span>
            Auroxify
          </Link>

          {/* desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => {
              const active = isActive(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      active ? "text-white" : "text-[var(--text-dim)] hover:text-white"
                    }`}
                  >
                    {l.label}
                    {active && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-bright shadow-[0_0_10px_3px_rgba(74,158,255,.7)]"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="btn btn-primary hidden !min-h-[42px] !px-5 sm:inline-flex">
              Get a Free Quote <ArrowUpRight size={16} />
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative grid h-12 w-12 place-items-center rounded-full border border-line-hover bg-white/5 lg:hidden"
            >
              <span className={`absolute h-[2px] w-5 rounded bg-white transition-all duration-300 ${open ? "rotate-45" : "-translate-y-[6px]"}`} />
              <span className={`absolute h-[2px] w-5 rounded bg-white transition-all duration-300 ${open ? "scale-x-0 opacity-0" : ""}`} />
              <span className={`absolute h-[2px] w-5 rounded bg-white transition-all duration-300 ${open ? "-rotate-45" : "translate-y-[6px]"}`} />
            </button>
          </div>
        </nav>

        {/* scroll progress */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[2px] origin-left"
          style={{ scaleX: progress, background: "var(--grad-brand)" }}
        />
      </header>

      {/* full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex h-[100dvh] w-full flex-col overflow-y-auto overflow-x-hidden bg-base/95 px-6 backdrop-blur-2xl lg:hidden"
            style={{
              paddingTop: "calc(5.25rem + env(safe-area-inset-top))",
              paddingBottom: "calc(6rem + env(safe-area-inset-bottom))",
            }}
          >
            <div className="grid-bg opacity-70" />
            <div className="blob right-0 top-[8%] h-64 w-64" style={{ background: "var(--blob-blue)" }} />

            <ul className="relative z-10 flex flex-col">
              {LINKS.map((l, i) => {
                const active = isActive(l.href);
                return (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`flex min-h-[60px] items-center justify-between border-b border-line font-heading text-3xl font-semibold tracking-tight sm:text-4xl ${
                        active ? "text-bright" : "text-white"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        {active && <span className="h-2 w-2 rounded-full bg-bright shadow-[0_0_10px_3px_rgba(74,158,255,.7)]" />}
                        {l.label}
                      </span>
                      <ArrowUpRight className="shrink-0 text-[var(--text-faint)]" />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative z-10 mt-auto space-y-5 pt-10"
            >
              <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                Get a Free Quote <ArrowUpRight size={16} />
              </Link>

              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm text-[var(--text-mid)] hover:text-white">
                <Mail size={16} className="shrink-0" />
                <span className="min-w-0 break-all">{EMAIL}</span>
              </a>

              <div className="flex gap-2">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-line-hover bg-white/5 text-[var(--text-mid)] transition hover:border-brand-line hover:text-bright"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}