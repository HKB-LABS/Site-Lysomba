import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { locales } from "@/lib/i18n";

const paths = ["", "/legal"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];
  for (const p of paths) {
    for (const l of locales) {
      entries.push({
        url: `${SITE_URL}/${l}${p}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: p === "" ? 1 : 0.5,
        alternates: {
          languages: Object.fromEntries(
            locales.map((x) => [x, `${SITE_URL}/${x}${p}`]),
          ),
        },
      });
    }
  }
  return entries;
}
