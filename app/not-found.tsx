import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-base px-5 py-32 text-center text-white">
      <div className="grid-bg" />
      <div className="relative z-10 mx-auto max-w-xl">
        <p className="font-mono text-sm text-eyebrow">Error 404</p>
        <h1 className="h-xl mt-4">This page does not exist</h1>
        <p className="lead mx-auto mt-4">The link may be broken or the page may have moved.</p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primary">Back to Home</Link>
          <Link href="/services" className="btn btn-ghost">Our Services</Link>
          <Link href="/contact" className="btn btn-ghost">Contact Us</Link>
        </div>
      </div>
    </main>
  );
}