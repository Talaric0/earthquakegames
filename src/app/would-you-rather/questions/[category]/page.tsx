import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { SITE } from "@/lib/site"
import { CATEGORIES, categoryBySlug } from "@/lib/wyr-categories"
import { getCategoryData } from "@/lib/questions"
import { QuestionCard } from "@/components/wyr/question-card"
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/wyr/breadcrumbs"

export const dynamicParams = false

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }))
}

type Props = { params: Promise<{ category: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const cat = categoryBySlug(category)
  if (!cat) return {}
  const canonical = `/would-you-rather/questions/${cat.slug}/`
  return {
    title: cat.title,
    description: cat.metaDescription,
    alternates: { canonical },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      title: `${cat.title} | Earthquake Games`,
      description: cat.metaDescription,
      url: canonical,
      locale: SITE.locale,
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: cat.title,
      description: cat.metaDescription,
      images: ["/og.png"],
    },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const cat = categoryBySlug(category)
  if (!cat) notFound()

  const data = getCategoryData(cat.name)
  const questions = data?.questions ?? []
  const remaining = Math.max(0, (data?.fullCount ?? 0) - questions.length)

  const others = CATEGORIES.filter((c) => c.slug !== cat.slug)

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Would You Rather", href: "/would-you-rather/" },
    { name: "Questions", href: "/would-you-rather/questions/" },
    { name: cat.name, href: `/would-you-rather/questions/${cat.slug}/` },
  ]

  const faqs = [
    {
      q: `What are ${cat.name.toLowerCase()} would you rather questions?`,
      a: `${cat.intro}`,
    },
    {
      q: "How are the vote percentages worked out?",
      a: "Every percentage comes from real votes cast by Would You Rather players. Tap an option on this page to reveal the global split for that dilemma.",
    },
    {
      q: `Where can I find more ${cat.name.toLowerCase()} questions?`,
      a: `This page shows ${questions.length} of ${data?.fullCount ?? questions.length} ${cat.name.toLowerCase()} dilemmas. The full set — plus weekly new questions and live voting — is free in the Would You Rather app on the App Store.`,
    },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd(crumbs),
      {
        "@type": "ItemList",
        name: cat.h1,
        numberOfItems: questions.length,
        itemListElement: questions.map((qq, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `Would you rather ${qq.option_a} or ${qq.option_b}?`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-3xl px-6 pt-10 pb-16 sm:px-10">
        <Breadcrumbs items={crumbs} />

        <header className="mt-8 mb-10">
          <div className="mb-4 flex items-center gap-3">
            <span
              aria-hidden
              className="grid size-12 place-items-center rounded-2xl text-[1.6rem]"
              style={{ backgroundColor: `${cat.accent}1a` }}
            >
              {cat.emoji}
            </span>
            <span
              className="text-[0.65rem] tracking-[0.3em] uppercase"
              style={{ color: cat.accent }}
            >
              {data?.fullCount ?? questions.length} questions
            </span>
          </div>
          <h1 className="text-[clamp(2rem,6vw,3.6rem)] leading-[0.92] [font-family:var(--v1-display)] uppercase">
            {cat.h1}
          </h1>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-[#F7F3EA]/75">
            {cat.intro}
          </p>
        </header>

        {/* QUESTIONS */}
        <section className="flex flex-col gap-3">
          {questions.map((qq, i) => (
            <QuestionCard
              key={i}
              question={qq}
              accent={cat.accent}
              index={i}
            />
          ))}
        </section>

        {/* LOCKED TEASER */}
        {remaining > 0 && (
          <a
            href={SITE.appStoreUrl}
            target="_blank"
            rel="noreferrer"
            className="group mt-3 block overflow-hidden rounded-3xl border border-dashed border-[#F7F3EA]/20 bg-[#0A0A0E]/40 p-6 text-center no-underline transition-colors hover:border-[#FF2D95]/50 hover:no-underline"
          >
            <span className="block text-[1.05rem] [font-family:var(--v1-display)] text-[#F7F3EA] uppercase">
              + {remaining} more {cat.name} questions
            </span>
            <span className="mt-2 block text-[0.82rem] text-[#F7F3EA]/60">
              Unlock the full set, weekly new dilemmas and live voting in the app
            </span>
            <span
              className="mt-4 inline-block text-[0.72rem] font-bold tracking-[0.25em] uppercase"
              style={{ color: cat.accent }}
            >
              Get it free on the App Store ↗
            </span>
          </a>
        )}

        {/* CROSS-LINKS */}
        <section className="mt-14">
          <h2 className="mb-4 text-[0.7rem] tracking-[0.35em] text-[#F7F3EA]/50 uppercase">
            {"/// More categories"}
          </h2>
          <div className="flex flex-wrap gap-2">
            {others.map((c) => (
              <Link
                key={c.slug}
                href={`/would-you-rather/questions/${c.slug}/`}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#F7F3EA]/15 px-3.5 py-2 text-[0.78rem] text-[#F7F3EA]/75 no-underline transition-colors hover:border-[#FF2D95]/50 hover:text-[#F7F3EA] hover:no-underline"
              >
                <span aria-hidden>{c.emoji}</span>
                {c.name}
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="mb-5 text-[0.7rem] tracking-[0.35em] text-[#00F0FF] uppercase">
            {"/// FAQ"}
          </h2>
          <dl className="flex flex-col gap-5">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border border-[#F7F3EA]/10 bg-[#0B0B10] p-5"
              >
                <dt className="text-[0.95rem] font-bold text-[#F7F3EA]">
                  {f.q}
                </dt>
                <dd className="mt-2 text-[0.88rem] leading-relaxed text-[#F7F3EA]/70">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </>
  )
}
