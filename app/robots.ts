import type { MetadataRoute } from "next";
import { SITE } from "@/app/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/og"] }],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}