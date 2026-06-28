/**
 * Central site config — single source of truth for SEO metadata,
 * sitemap, robots and structured data.
 */
export const SITE = {
  name: "Earthquake Games",
  url: "https://earthquakegames.uk",
  description:
    "Earthquake Games is an independent mobile games studio building small, sharp, replayable games — starting with Would You Rather, the ultimate choice game for your phone and your group chat.",
  locale: "en_GB",
  parentCompany: "Earthquake Digital",
  email: "suporte@earthquakedigital.com.br",
  appStoreUrl:
    "https://apps.apple.com/app/would-you-rather-game/id6762091119",
} as const

/** Absolute URL helper for a path like "/would-you-rather/". */
export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE.url).toString()
}
