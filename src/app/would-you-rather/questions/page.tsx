import type { Metadata } from "next"
import Link from "next/link"

import { CATEGORIES } from "@/lib/wyr-categories"
import {
  catalogueTotal,
  getCategoryData,
  topQuestions,
} from "@/lib/questions"
import { QuestionCard } from "@/components/wyr/question-card"
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/wyr/breadcrumbs"

const CRUMBS = [
  { name: "Home", href: "/" },
  { name: "Would You Rather", href: "/would-you-rather/" },
  { name: "Questions", href: "/would-you-rather/questions/" },
]

export const metadata: Metadata = {
  title: "Would You Rather Questions — 800+ Dilemmas by Category",
  description:
    "The best would you rather questions, sorted by category and ranked by real votes. Pick a side, see how the world splits, and play 800+ more in the app.",
  alternates: { canonical: "/would-you-rather/questions/" },
  openGraph: {
    type: "website",
    siteName: "Earthquake Games",
    title: "Would You Rather Questions — 800+ Dilemmas by Category",
    description:
      "The best would you rather questions, sorted by category and ranked by real votes. Pick a side and see how the world splits.",
    url: "/would-you-rather/questions/",
    locale: "en_GB",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Would You Rather Questions — 800+ Dilemmas by Category",
    description:
      "The best would you rather questions, sorted by category and ranked by real votes.",
    images: ["/og.png"],
  },
}

export default function QuestionsHubPage() {
  const featured = topQuestions(3)

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd(CRUMBS),
      {
        "@type": "CollectionPage",
        name: "Would You Rather Questions",
        description: metadata.description,
        url: "https://earthquakegames.uk/would-you-rather/questions/",
        isPartOf: { "@id": "https://earthquakegames.uk/#website" },
        hasPart: CATEGORIES.map((c) => ({
          "@type": "CreativeWork",
          name: `${c.name} Would You Rather Questions`,
          url: `https://earthquakegames.uk/would-you-rather/questions/${c.slug}/`,
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

      <div className="mx-auto max-w-5xl px-6 pt-10 pb-16 sm:px-10">
        <Breadcrumbs items={CRUMBS} />

        <header className="mt-8 mb-12 max-w-3xl">
          <h1 className="text-[clamp(2.4rem,7vw,5rem)] leading-[0.9] [font-family:var(--v1-display)] uppercase">
            Would You Rather
            <span className="text-[#FF2D95]"> Questions</span>
          </h1>
          <p className="mt-6 text-[0.98rem] leading-relaxed text-[#F7F3EA]/75">
            Two impossible options, one global verdict. Browse{" "}
            {catalogueTotal.toLocaleString("en-GB")}+ would you rather questions
            sorted into {CATEGORIES.length} categories and ranked by real votes
            from players around the world. Tap any option to reveal how everyone
            else answered — then settle the rest in the app.
          </p>
        </header>

        {/* FEATURED */}
        <section className="mb-14">
          <h2 className="mb-5 text-[0.7rem] tracking-[0.35em] text-[#00F0FF] uppercase">
            {"/// Most-voted right now"}
          </h2>
          <div className="grid gap-3 lg:grid-cols-3">
            {featured.map((f, i) => (
              <QuestionCard
                key={i}
                question={f.question}
                accent="#FF2D95"
                index={i}
              />
            ))}
          </div>
        </section>

        {/* CATEGORY GRID */}
        <section>
          <h2 className="mb-5 text-[0.7rem] tracking-[0.35em] text-[#FFDE59] uppercase">
            {"/// Browse by category"}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => {
              const count = getCategoryData(c.name)?.fullCount ?? 0
              return (
                <Link
                  key={c.slug}
                  href={`/would-you-rather/questions/${c.slug}/`}
                  className="group flex items-start gap-4 rounded-2xl border border-[#F7F3EA]/10 bg-[#0B0B10] p-5 no-underline transition-all hover:-translate-y-1 hover:border-[#FF2D95]/40 hover:no-underline"
                >
                  <span
                    aria-hidden
                    className="grid size-11 shrink-0 place-items-center rounded-xl text-[1.4rem]"
                    style={{ backgroundColor: `${c.accent}1a` }}
                  >
                    {c.emoji}
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="flex items-center gap-2">
                      <span
                        className="text-[1rem] text-[#F7F3EA]"
                        style={{ color: c.accent }}
                      >
                        {c.name}
                      </span>
                      <span className="text-[0.62rem] tracking-[0.2em] text-[#F7F3EA]/40 uppercase">
                        {count}
                      </span>
                    </span>
                    <span className="text-[0.82rem] leading-relaxed text-[#F7F3EA]/60">
                      {c.blurb}
                    </span>
                  </span>
                </Link>
              )
            })}
          </div>
        </section>
      </div>
    </>
  )
}
