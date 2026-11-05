import type { MetadataRoute } from "next";
import { SITE } from "@/app/lib/site";

const ROUTES = [
  { path: "", priority: 1, freq: "weekly" },
  { path: "/services", priority: 0.9, freq: "monthly" },
  { path: "/portfolio", priority: 0.8, freq: "monthly" },
  { path: "/about", priority: 0.7, freq: "monthly" },
  { path: "/contact", priority: 0.7, freq: "yearly" },
  { path: "/privacy", priority: 0.3, freq: "yearly" },
  { path: "/terms", priority: 0.3, freq: "yearly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({
    url: SITE.url + r.path,
    lastModified: new Date("2026-11-06"), // jab page asli mein badle tab date badlein
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}