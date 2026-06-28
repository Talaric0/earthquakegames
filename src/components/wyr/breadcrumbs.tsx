import Link from "next/link"

import { absoluteUrl } from "@/lib/site"

export type Crumb = { name: string; href: string }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 text-[0.62rem] tracking-[0.25em] text-[#F7F3EA]/45 uppercase"
    >
      {items.map((c, i) => {
        const last = i === items.length - 1
        return (
          <span key={c.href} className="flex items-center gap-2">
            {last ? (
              <span className="text-[#F7F3EA]/70" aria-current="page">
                {c.name}
              </span>
            ) : (
              <Link
                href={c.href}
                className="no-underline hover:text-[#FF2D95] hover:no-underline"
              >
                {c.name}
              </Link>
            )}
            {!last && <span aria-hidden>/</span>}
          </span>
        )
      })}
    </nav>
  )
}

export function breadcrumbJsonLd(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.href),
    })),
  }
}
