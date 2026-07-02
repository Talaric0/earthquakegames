import type { MetadataRoute } from "next"

import { absoluteUrl } from "@/lib/site"
import { CATEGORIES } from "@/lib/wyr-categories"
import { contentUpdatedAt } from "@/lib/questions"

export const dynamic = "force-static"

// lastModified reflects when a page's content actually changed, not build
// time. Question pages track the dataset's generatedAt; legal pages track
// their visible "Last updated" date. The homepage omits lastModified rather
// than report a misleading uniform timestamp.
const LEGAL_UPDATED = new Date("2026-04-17")

export default function sitemap(): MetadataRoute.Sitemap {
  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES.map((c) => ({
    url: absoluteUrl(`/would-you-rather/questions/${c.slug}/`),
    lastModified: contentUpdatedAt,
    changeFrequency: "weekly",
    priority: 0.7,
  }))

  return [
    {
      url: absoluteUrl("/"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/would-you-rather/"),
      lastModified: contentUpdatedAt,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/would-you-rather/questions/"),
      lastModified: contentUpdatedAt,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...categoryRoutes,
    {
      url: absoluteUrl("/would-you-rather/privacy/"),
      lastModified: LEGAL_UPDATED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: absoluteUrl("/would-you-rather/terms/"),
      lastModified: LEGAL_UPDATED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}
