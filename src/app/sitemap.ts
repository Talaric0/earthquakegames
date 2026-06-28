import type { MetadataRoute } from "next"

import { absoluteUrl } from "@/lib/site"
import { CATEGORIES } from "@/lib/wyr-categories"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES.map((c) => ({
    url: absoluteUrl(`/would-you-rather/questions/${c.slug}/`),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.7,
  }))

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/would-you-rather/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/would-you-rather/questions/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...categoryRoutes,
    {
      url: absoluteUrl("/would-you-rather/privacy/"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: absoluteUrl("/would-you-rather/terms/"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}
