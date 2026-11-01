"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // close the menu when the route changes
  if (pathname !== lastPath) { setLastPath(pathname); setOpen(false); }

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

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`safe-top fixed inset-x-0 top-0 z-[60] transition-all duration-500 ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        } ${scrolled || open ? "border-b border-line bg-base/70 backdrop-blur-xl" : "border-b border-transparent"}`}
      >
        <nav className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between px-5 md:px-10" aria-label="Main">
          <Link href="/" className="flex items-center gap-3 font-heading text-lg font-bold tracking-tight" aria-label="Auroxify home">
            <span className="grid h-9 w-9 place-items-center rounded-xl text-sm font-bold text-white shadow-[var(--glow-brand)]" style={{ background: "var(--grad-brand)" }}>
              C
            </span>
            Auroxify
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link href={l.href} className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${active ? "text-white" : "text-[var(--text-dim)] hover:text-white"}`}>
                    {l.label}
                    {active && (
                      <motion.span layoutId="nav-dot" className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-bright shadow-[0_0_10px_3px_rgba(74,158,255,.7)]" />
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
              <span className={`absolute h-[2px] w-5 bg-white transition-all duration-300 ${open ? "rotate-45" : "-translate-y-[6px]"}`} />
              <span className={`absolute h-[2px] w-5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`absolute h-[2px] w-5 bg-white transition-all duration-300 ${open ? "-rotate-45" : "translate-y-[6px]"}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            className="safe-top safe-bottom fixed inset-0 z-50 flex flex-col justify-between bg-base/95 px-6 pb-8 pt-28 backdrop-blur-2xl lg:hidden"
          >
            <div className="grid-bg opacity-70" />
            <div className="blob right-[-20%] top-[10%] h-72 w-72" style={{ background: "var(--blob-blue)" }} />
            <ul className="relative z-10 flex flex-col">
              {LINKS.map((l, i) => (
                <motion.li key={l.href} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                  <Link href={l.href} onClick={() => setOpen(false)} className={`flex min-h-[64px] items-center justify-between border-b border-line font-heading text-4xl font-semibold tracking-tight ${pathname === l.href ? "text-bright" : "text-white"}`}>
                    {l.label}
                    <ArrowUpRight className="text-[var(--text-faint)]" />
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="relative z-10">
              <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                Get a Free Quote <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}