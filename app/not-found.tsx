import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

const css = `
@keyframes nf-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-14px) } }
@keyframes nf-float-b { 0%,100% { transform: translateY(0) } 50% { transform: translateY(12px) } }
@keyframes nf-orb { 0%,100% { transform: translate(0,0) scale(1) } 50% { transform: translate(30px,-24px) scale(1.12) } }
@keyframes nf-type { from { width: 0 } to { width: var(--n) } }
@keyframes nf-caret { 50% { border-color: transparent } }
@keyframes nf-fade { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: translateY(0) } }
@keyframes nf-glitch-a {
  0%,90%,100% { transform: translate(0); clip-path: inset(0 0 0 0) }
  92% { transform: translate(-4px,2px); clip-path: inset(15% 0 55% 0) }
  94% { transform: translate(4px,-2px); clip-path: inset(60% 0 10% 0) }
  96% { transform: translate(-3px,1px); clip-path: inset(35% 0 35% 0) }
}
@keyframes nf-glitch-b {
  0%,90%,100% { transform: translate(0); clip-path: inset(0 0 0 0) }
  93% { transform: translate(4px,-2px); clip-path: inset(50% 0 20% 0) }
  95% { transform: translate(-4px,2px); clip-path: inset(10% 0 65% 0) }
  97% { transform: translate(3px,-1px); clip-path: inset(70% 0 5% 0) }
}
@keyframes nf-scan { from { transform: translateY(-100%) } to { transform: translateY(100%) } }
@keyframes nf-pulse { 0%,100% { opacity: 1 } 50% { opacity: .35 } }

.nf-up { opacity: 0; animation: nf-fade .8s cubic-bezier(.2,.7,.2,1) forwards; }
.nf-orb { animation: nf-orb 12s ease-in-out infinite; }
.nf-float { animation: nf-float 6s ease-in-out infinite; }
.nf-float-b { animation: nf-float-b 7s ease-in-out infinite; }

.nf-404 { position: relative; display: inline-block; font-weight: 800; line-height: .9; letter-spacing: -.04em;
  font-size: clamp(6rem, 22vw, 11rem);
  background: linear-gradient(180deg, #fff 20%, rgba(255,255,255,.15));
  -webkit-background-clip: text; background-clip: text; color: transparent; }
.nf-404::before, .nf-404::after { content: attr(data-text); position: absolute; inset: 0; background: inherit;
  -webkit-background-clip: text; background-clip: text; color: transparent; }
.nf-404::before { text-shadow: -3px 0 rgba(0,200,255,.7); animation: nf-glitch-a 4s infinite linear; }
.nf-404::after { text-shadow: 3px 0 rgba(255,60,120,.6); animation: nf-glitch-b 4s infinite linear; }

.nf-line { display: block; overflow: hidden; white-space: nowrap; width: 0; border-right: 2px solid transparent;
  animation: nf-type 1.1s steps(var(--n-steps)) forwards; animation-delay: var(--d); }
.nf-line.nf-last { animation: nf-type 1.1s steps(var(--n-steps)) forwards, nf-caret .8s step-end infinite; animation-delay: var(--d), calc(var(--d) + 1.1s); border-right-color: #fff; }
.nf-scan { position: absolute; inset: 0; pointer-events: none; overflow: hidden; border-radius: inherit; }
.nf-scan::after { content: ""; position: absolute; left: 0; right: 0; height: 40%;
  background: linear-gradient(180deg, transparent, rgba(255,255,255,.05), transparent); animation: nf-scan 5s linear infinite; }
.nf-dot { animation: nf-pulse 1.6s ease-in-out infinite; }

@media (prefers-reduced-motion: reduce) {
  .nf-up, .nf-orb, .nf-float, .nf-float-b, .nf-404::before, .nf-404::after, .nf-scan::after, .nf-dot { animation: none !important; opacity: 1; }
  .nf-line { animation: none !important; width: var(--n); }
}
`;

const lines = [
  { text: "$ auroxify route --find /this-page", n: 34, d: "0.6s", cls: "text-white/90" },
  { text: "› scanning 7 routes...", n: 22, d: "1.8s", cls: "text-white/50" },
  { text: "✕ error 404: route not found", n: 28, d: "3s", cls: "text-red-400" },
  { text: "✓ fix: head back home", n: 21, d: "4.2s", cls: "text-emerald-400", last: true },
];

export default function NotFound() {
  return (
    <main className="relative flex min-h-[92vh] items-center overflow-hidden bg-base px-5 py-28 text-white">
      <style>{css}</style>
      <div className="grid-bg" />

      {/* glow orbs */}
      <div className="nf-orb pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      <div
        className="nf-orb pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl"
        style={{ animationDelay: "-5s" }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-2">
        {/* LEFT: copy */}
        <div className="text-center lg:text-left">
          <p
            className="nf-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-eyebrow backdrop-blur"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="nf-dot h-1.5 w-1.5 rounded-full bg-red-400" />
            Error 404
          </p>

          <div className="nf-up mt-5" style={{ animationDelay: "0.2s" }}>
            <span className="nf-404" data-text="404" aria-hidden="true">404</span>
          </div>

          <h1 className="nf-up h-xl mt-2" style={{ animationDelay: "0.35s" }}>
            Looks like this page got lost in the code
          </h1>
          <p className="nf-up lead mx-auto mt-4 max-w-md lg:mx-0" style={{ animationDelay: "0.5s" }}>
            The link may be broken or the page may have moved. Let&apos;s get you back to something that works.
          </p>

          <div
            className="nf-up mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row lg:justify-start"
            style={{ animationDelay: "0.65s" }}
          >
            <Link href="/" className="btn btn-primary">Back to Home</Link>
            <Link href="/services" className="btn btn-ghost">Our Services</Link>
            <Link href="/contact" className="btn btn-ghost">Contact Us</Link>
          </div>

          <p className="nf-up mt-6 text-sm text-white/40" style={{ animationDelay: "0.8s" }}>
            Popular:{" "}
            <Link href="/portfolio" className="text-white/70 underline-offset-4 hover:text-white hover:underline">Portfolio</Link>
            {" · "}
            <Link href="/about" className="text-white/70 underline-offset-4 hover:text-white hover:underline">About</Link>
          </p>
        </div>

        {/* RIGHT: terminal mockup */}
        <div className="nf-up relative mx-auto w-full max-w-md lg:max-w-none" style={{ animationDelay: "0.5s" }}>
          {/* floating chips */}
          <div className="nf-float absolute -top-5 right-2 z-20 rounded-xl border border-white/10 bg-white/10 px-3 py-2 font-mono text-[11px] shadow-2xl backdrop-blur-md sm:-right-3">
            <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-emerald-400" />
            200 OK <span className="text-white/50">/</span>
          </div>
          <div className="nf-float-b absolute -bottom-5 left-2 z-20 rounded-xl border border-white/10 bg-white/10 px-3 py-2 font-mono text-[11px] shadow-2xl backdrop-blur-md sm:-left-3">
            <span className="nf-dot mr-1.5 inline-block h-2 w-2 rounded-full bg-red-400" />
            404 <span className="text-white/50">/this-page</span>
          </div>

          {/* window */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/50 shadow-[0_30px_80px_-20px_rgba(0,0,0,.8)] backdrop-blur-xl">
            <div className="nf-scan" />
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <div className="ml-3 min-w-0 flex-1 truncate rounded-md bg-white/5 px-3 py-1 font-mono text-[11px] text-white/40">
                auroxify.com/this-page
              </div>
            </div>

            <div className="space-y-2 p-5 font-mono text-[12px] leading-6 sm:text-[13px]">
              {lines.map((l) => (
                <span
                  key={l.text}
                  className={`nf-line ${l.cls} ${l.last ? "nf-last" : ""}`}
                  style={
                    {
                      "--n": `${l.n}ch`,
                      "--n-steps": l.n,
                      "--d": l.d,
                    } as React.CSSProperties
                  }
                >
                  {l.text}
                </span>
              ))}
            </div>

            {/* skeleton "missing page" */}
            <div className="space-y-3 border-t border-white/10 p-5">
              <div className="h-3 w-2/3 rounded bg-white/10" />
              <div className="h-3 w-1/2 rounded bg-white/5" />
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="h-14 rounded-lg bg-white/5" />
                <div className="h-14 rounded-lg bg-white/5" />
                <div className="h-14 rounded-lg bg-white/5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}