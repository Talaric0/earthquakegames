import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Monoton, Space_Mono } from "next/font/google"

import { cn } from "@/lib/utils"
import { Iphone } from "@/components/ui/iphone"
import { Meteors } from "@/components/ui/meteors"
import { Marquee } from "@/components/ui/marquee"
import { BorderBeam } from "@/components/ui/border-beam"
import { NumberTicker } from "@/components/ui/number-ticker"
import { SparklesText } from "@/components/ui/sparkles-text"
import { ShimmerButton } from "@/components/ui/shimmer-button"

import screenSplash from "./assets/screen-splash.png"
import screenChoose from "./assets/screen-choose.png"
import screenTap from "./assets/screen-tap.png"
import screenResultsDemo from "./assets/screen-results-demo.png"
import screenResults from "./assets/screen-results.png"
import screenParty from "./assets/screen-party.png"
import screenCategories from "./assets/screen-categories.png"

import { HeroPhoneSlideshow } from "./HeroPhoneSlideshow"

export const metadata: Metadata = {
  title: "Would You Rather — Game | Earthquake Games",
  description:
    "Two impossible options. One global verdict. The ultimate choice game for your phone and your group chat.",
}

const display = Monoton({
  weight: "400",
  subsets: ["latin"],
  variable: "--v1-display",
})
const body = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--v1-body",
})

const TICKER = [
  "★ WOULD YOU RATHER",
  "THE ULTIMATE CHOICE GAME",
  "TAP · VOTE · REPEAT",
  "1.7M VOTES & COUNTING",
  "NO GOING BACK",
]

const STEPS = [
  {
    n: "01",
    title: "Choose your side.",
    body: "Two impossible scenarios, side by side. No neutral, no middle, no 'it depends.' You have to pick.",
    screen: screenChoose,
    accent: "#FF2D95",
  },
  {
    n: "02",
    title: "Tap to commit.",
    body: "Read both options carefully. Tap the one you'd rather. Once it's in, it's in — no going back.",
    screen: screenTap,
    accent: "#00F0FF",
  },
  {
    n: "03",
    title: "See the world decide.",
    body: "Watch the global split unfold in real time. Find out whether you're part of the majority — or the weird 4%.",
    screen: screenResultsDemo,
    accent: "#FFDE59",
  },
]

const CATEGORIES = [
  {
    emoji: "🔀",
    name: "Random",
    blurb: "Shuffle the whole library. Anything goes.",
    accent: "#FF2D95",
    featured: true,
  },
  {
    emoji: "🏠",
    name: "Lifestyle",
    blurb: "Daily life & habits.",
    count: 219,
    accent: "#FFDE59",
  },
  {
    emoji: "🌑",
    name: "Dark",
    blurb: "Moral dilemmas & dark choices.",
    count: 145,
    accent: "#F7F3EA",
  },
  {
    emoji: "🎬",
    name: "Entertainment",
    blurb: "Movies, music & fun.",
    count: 107,
    accent: "#00F0FF",
  },
  {
    emoji: "👀",
    name: "Appearance",
    blurb: "Looks & body changes.",
    count: 106,
    accent: "#00F0FF",
  },
  {
    emoji: "💕",
    name: "Relationships",
    blurb: "Love, friends & family.",
    count: 83,
    accent: "#FF2D95",
  },
  {
    emoji: "🍔",
    name: "Food & Drink",
    blurb: "Culinary conundrums.",
    count: 75,
    accent: "#FFDE59",
  },
  {
    emoji: "🧙",
    name: "Fantasy",
    blurb: "Magic & mythical worlds.",
    count: 73,
    accent: "#A4F0C0",
  },
  {
    emoji: "💰",
    name: "Fame & Fortune",
    blurb: "Wealth & celebrity.",
    count: 53,
    accent: "#FFDE59",
  },
  {
    emoji: "🎯",
    name: "Skills",
    blurb: "Talents & expertise.",
    count: 51,
    accent: "#A4F0C0",
  },
  {
    emoji: "⚡",
    name: "Superpowers",
    blurb: "Extraordinary abilities.",
    count: 24,
    accent: "#FFDE59",
  },
  {
    emoji: "🔥",
    name: "Explicit",
    blurb: "Steamy & uncensored.",
    count: 100,
    accent: "#FF2D95",
    locked: "18+ · Adult",
  },
]

const SAMPLE_DILEMMAS = [
  {
    q: "Have no tongue",
    a: "Have no teeth",
    split: 37,
    votes: "1,753,752",
    tag: "Dark",
  },
  {
    q: "Read minds for a day",
    a: "Live forever, alone",
    split: 62,
    votes: "944,203",
    tag: "Superpowers",
  },
  {
    q: "Know every language",
    a: "Play every instrument",
    split: 54,
    votes: "612,088",
    tag: "Skills",
  },
]

export default function WouldYouRather() {
  return (
    <main
      className={cn(
        display.variable,
        body.variable,
        "relative min-h-dvh overflow-x-clip bg-[#07070A] text-[#F7F3EA] [font-family:var(--v1-body)] selection:bg-[#FF2D95] selection:text-black"
      )}
    >
      {/* grain */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-1 opacity-[0.10] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.7'/></svg>\")",
        }}
      />
      {/* radial glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-1"
        style={{
          background:
            "radial-gradient(1200px 800px at 80% -10%, rgba(255,45,149,0.25), transparent 60%), radial-gradient(1000px 700px at -10% 30%, rgba(0,240,255,0.18), transparent 60%), radial-gradient(900px 700px at 50% 110%, rgba(255,222,89,0.15), transparent 60%)",
        }}
      />

      {/* TOP TICKER */}
      <div className="relative z-20 overflow-hidden border-y border-[#FF2D95]/40 bg-[#0A0A0E]/70 backdrop-blur">
        <Marquee className="[--duration:30s] py-2.5 text-[0.78rem] tracking-[0.3em] uppercase">
          {TICKER.map((s, i) => (
            <span key={i} className="flex items-center gap-6 text-[#F7F3EA]/80">
              <span>{s}</span>
              <span className="inline-block size-1.5 rounded-full bg-[#FF2D95]" />
            </span>
          ))}
        </Marquee>
      </div>

      {/* NAV */}
      <header className="relative z-20 flex items-center justify-between px-6 pt-6 sm:px-10">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.25em] text-[#F7F3EA]/80 no-underline hover:text-[#FF2D95] hover:no-underline"
        >
          <span className="grid size-9 place-items-center overflow-hidden rounded-full border border-[#F7F3EA]/30 bg-black transition-colors group-hover:border-[#FF2D95]">
            <Image
              src="/LOGO-RAIO.png"
              alt="Earthquake Games"
              width={36}
              height={36}
              className="size-full object-contain"
              priority
            />
          </span>
          Earthquake Games / WYR
        </Link>
        <nav className="hidden items-center gap-7 text-[0.72rem] uppercase tracking-[0.25em] text-[#F7F3EA]/70 md:flex">
          <a href="#play" className="hover:text-[#FF2D95] hover:no-underline">
            How it plays
          </a>
          <a
            href="#categories"
            className="hover:text-[#FF2D95] hover:no-underline"
          >
            Categories
          </a>
          <a href="#tiers" className="hover:text-[#FF2D95] hover:no-underline">
            Tiers
          </a>
          <a href="#party" className="hover:text-[#FF2D95] hover:no-underline">
            Party
          </a>
        </nav>
        <a
          href="https://apps.apple.com/app/would-you-rather-game/id6762091119"
          target="_blank"
          rel="noreferrer"
          className="group relative inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#FF2D95] via-[#FF5FAE] to-[#FFB547] px-5 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.25em] text-black no-underline shadow-[0_0_24px_rgba(255,45,149,0.55)] ring-1 ring-white/30 transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(255,45,149,0.9)] hover:no-underline"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -inset-1 -z-10 animate-pulse rounded-full bg-[#FF2D95]/55 opacity-75 blur-lg"
          />
          <span
            aria-hidden
            className="inline-block size-1.5 animate-pulse rounded-full bg-black"
          />
          <span aria-hidden className="text-[0.95rem] leading-none"></span>
          <span>Get it free</span>
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          >
            ↗
          </span>
        </a>
      </header>

      {/* HERO */}
      <section className="relative z-10 px-6 pt-14 pb-24 sm:px-10 md:pt-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Meteors
            number={24}
            maxDuration={9}
            minDuration={3}
            angle={215}
          />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div className="relative">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F7F3EA]/15 bg-[#0A0A0E]/60 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.3em] text-[#F7F3EA]/70 backdrop-blur">
              <span className="inline-block size-1.5 animate-pulse rounded-full bg-[#A4F0C0]" />
              EQG-001 · Live on iOS
            </div>

            <div className="mb-4 text-[0.65rem] tracking-[0.4em] text-[#FF2D95] uppercase">
              {"/// Earthquake Games · Title 01"}
            </div>

            <h1
              className="relative mb-7 text-[clamp(2.8rem,8vw,6.8rem)] leading-[0.9] tracking-tight [font-family:var(--v1-display)] uppercase"
              style={{ textShadow: "0 0 35px rgba(255,45,149,0.25)" }}
            >
              <span className="block text-[#F7F3EA]">Two choices.</span>
              <span className="relative block">
                <span
                  aria-hidden
                  className="absolute inset-0 translate-x-[3px] translate-y-[3px] text-[#00F0FF]/80"
                >
                  No going back.
                </span>
                <span className="relative text-[#FF2D95]">No going back.</span>
              </span>
            </h1>

            <p className="mb-10 max-w-lg text-[0.95rem] leading-relaxed text-[#F7F3EA]/75">
              Would You Rather is the choice game that settles arguments you
              didn&apos;t know you had. Two impossible options, one global
              verdict, infinite reasons to text your best friend at 2am.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://apps.apple.com/app/would-you-rather-game/id6762091119"
                target="_blank"
                rel="noreferrer"
                className="no-underline hover:no-underline"
              >
                <ShimmerButton
                  shimmerColor="#FF2D95"
                  shimmerDuration="2.5s"
                  background="#0A0A0E"
                  borderRadius="999px"
                  className="border-[#FF2D95]/40 px-6 py-3 text-[0.75rem] uppercase tracking-[0.3em]"
                >
                  <span className="mr-2" aria-hidden>

                  </span>
                  Get it on the App Store
                </ShimmerButton>
              </a>
              <a
                href="#play"
                className="inline-flex items-center gap-2 rounded-full border border-[#F7F3EA]/25 px-5 py-3 text-[0.72rem] uppercase tracking-[0.3em] text-[#F7F3EA] no-underline transition-all hover:border-[#00F0FF] hover:text-[#00F0FF] hover:no-underline"
              >
                How it plays
                <span aria-hidden>↓</span>
              </a>
            </div>

            {/* mini dilemma teaser */}
            <div className="mt-12 hidden max-w-md md:block">
              <div className="mb-2 text-[0.6rem] tracking-[0.4em] text-[#F7F3EA]/45 uppercase">
                {"/// Live from the app"}
              </div>
              <div className="rounded-2xl border border-[#F7F3EA]/10 bg-[#0A0A0E]/70 p-5 backdrop-blur">
                <div className="mb-3 text-[0.62rem] tracking-[0.35em] text-[#F7F3EA]/55 uppercase">
                  Would you rather...
                </div>
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                  <div className="rounded-lg border border-[#FF2D95]/40 bg-[#FF2D95]/10 p-3 text-[0.85rem] leading-snug text-[#F7F3EA]">
                    Read minds for a day
                  </div>
                  <span className="text-[0.6rem] tracking-[0.3em] text-[#F7F3EA]/40 uppercase">
                    OR
                  </span>
                  <div className="rounded-lg border border-[#00F0FF]/40 bg-[#00F0FF]/10 p-3 text-[0.85rem] leading-snug text-[#F7F3EA]">
                    Live forever, alone
                  </div>
                </div>
                <div className="mt-4">
                  <div className="mb-1 flex justify-between text-[0.55rem] tracking-[0.3em] text-[#F7F3EA]/55 uppercase">
                    <span>62%</span>
                    <span>38%</span>
                  </div>
                  <div className="flex h-1 w-full overflow-hidden rounded-full bg-[#F7F3EA]/10">
                    <div className="h-full bg-[#FF2D95]" style={{ width: "62%" }} />
                    <div className="h-full bg-[#00F0FF]" style={{ width: "38%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* flagship iPhone — clickable, slideshows onboarding */}
          <div className="relative flex justify-center lg:justify-end">
            <a
              href="https://apps.apple.com/app/would-you-rather-game/id6762091119"
              target="_blank"
              rel="noreferrer"
              aria-label="Download Would You Rather on the App Store"
              className="group relative block w-[min(78%,360px)] rotate-[4deg] no-underline transition-transform duration-500 hover:rotate-0 hover:no-underline"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-10 -z-10 rounded-full opacity-70 blur-3xl transition-opacity duration-500 group-hover:opacity-90"
                style={{
                  background:
                    "conic-gradient(from 140deg, rgba(255,45,149,0.6), rgba(0,240,255,0.45), rgba(255,222,89,0.35), rgba(255,45,149,0.6))",
                }}
              />
              <div className="relative overflow-hidden rounded-[46px] border border-[#F7F3EA]/15 bg-[#0A0A0E]/60 p-3 backdrop-blur">
                <HeroPhoneSlideshow
                  slides={[screenSplash, screenChoose, screenTap, screenResultsDemo]}
                  intervalMs={2000}
                  className="[&_svg]:drop-shadow-[0_30px_60px_rgba(255,45,149,0.35)]"
                />
                <BorderBeam
                  size={180}
                  duration={7}
                  colorFrom="#FF2D95"
                  colorTo="#00F0FF"
                  borderWidth={2}
                />
              </div>

              {/* sticker badges */}
              <span
                aria-hidden
                className="absolute -top-6 -left-8 rotate-[-14deg] rounded-full bg-[#FFDE59] px-3 py-1 text-[0.6rem] font-bold tracking-[0.2em] text-black uppercase shadow-lg"
              >
                Free to play
              </span>
              <span
                aria-hidden
                className="absolute -right-6 -bottom-2 rotate-[8deg] rounded-full border border-[#00F0FF] bg-[#0A0A0E] px-3 py-1 text-[0.6rem] tracking-[0.2em] text-[#00F0FF] uppercase"
              >
                iOS
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 border-y border-[#F7F3EA]/10 bg-[#0A0A0E]/60 py-10 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 sm:px-10 md:grid-cols-4">
          {[
            { k: "Community votes", v: 1.1, suffix: "B", decimals: 1 },
            { k: "Dilemmas", v: 1036, suffix: "", decimals: 0 },
            { k: "Categories", v: 11, suffix: "", decimals: 0 },
            { k: "Avg. rating", v: 4.8, suffix: "★", decimals: 1 },
          ].map((s) => (
            <div key={s.k} className="flex flex-col gap-1">
              <div className="text-[0.65rem] tracking-[0.3em] text-[#F7F3EA]/50 uppercase">
                {s.k}
              </div>
              <div className="flex items-baseline gap-1 text-[2.4rem] leading-none [font-family:var(--v1-display)] text-[#F7F3EA]">
                <NumberTicker
                  value={s.v}
                  decimalPlaces={s.decimals}
                  className="text-[#F7F3EA]"
                />
                <span className="text-[#FF2D95]">{s.suffix}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT PLAYS */}
      <section id="play" className="relative z-10 px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 grid items-end gap-6 md:grid-cols-[auto_1fr_auto]">
            <div>
              <div className="mb-3 text-[0.65rem] tracking-[0.4em] text-[#FF2D95] uppercase">
                {"/// 01 → 03"}
              </div>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] [font-family:var(--v1-display)] uppercase">
                <SparklesText
                  colors={{ first: "#FF2D95", second: "#00F0FF" }}
                  sparklesCount={6}
                  className="text-inherit"
                >
                  How it plays.
                </SparklesText>
              </h2>
            </div>
            <div className="hidden" />
            <p className="max-w-xs text-[0.85rem] leading-relaxed text-[#F7F3EA]/65 md:self-end">
              Three screens. Thirty seconds to learn. A lifetime of
              unresolvable arguments with your group chat.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {STEPS.map((step) => (
              <div
                key={step.n}
                className="group relative flex flex-col items-center rounded-3xl border border-[#F7F3EA]/10 bg-[#0B0B10] p-6 transition-all duration-500 hover:-translate-y-1"
                style={{
                  borderColor: `color-mix(in srgb, ${step.accent} 0%, rgba(247,243,234,0.1))`,
                }}
              >
                <div
                  className="mb-2 self-start text-[0.65rem] tracking-[0.4em] uppercase"
                  style={{ color: step.accent }}
                >
                  Step {step.n}
                </div>
                <div className="mb-6 self-start [font-family:var(--v1-display)] text-[1.8rem] leading-[0.95] uppercase">
                  {step.title}
                </div>

                <div className="relative mx-auto mb-6 w-[min(82%,260px)]">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-6 -z-10 rounded-full opacity-60 blur-2xl"
                    style={{
                      background: `radial-gradient(circle at center, ${step.accent}55, transparent 65%)`,
                    }}
                  />
                  <div className="relative overflow-hidden rounded-[38px] border border-[#F7F3EA]/12 bg-[#0A0A0E]/60 p-2">
                    <Iphone src={step.screen.src} />
                  </div>
                </div>

                <p className="self-start text-[0.88rem] leading-relaxed text-[#F7F3EA]/70">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE DILEMMAS */}
      <section
        id="dilemmas"
        className="relative z-10 border-t border-[#F7F3EA]/10 px-6 py-24 sm:px-10"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid items-end gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-3 text-[0.65rem] tracking-[0.4em] text-[#00F0FF] uppercase">
                {"/// Sampler"}
              </div>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] [font-family:var(--v1-display)] uppercase">
                A few to get you <span className="text-[#FF2D95]">started.</span>
              </h2>
            </div>
            <p className="max-w-xs text-[0.85rem] leading-relaxed text-[#F7F3EA]/60 md:text-right">
              Three live from the app. Vote in your head, then open it and
              see how wrong you were.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {SAMPLE_DILEMMAS.map((d) => (
              <article
                key={d.q}
                className="relative flex flex-col gap-5 rounded-3xl border border-[#F7F3EA]/10 bg-[#0B0B10] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#FF2D95]/40"
              >
                <div className="flex items-center justify-between text-[0.6rem] tracking-[0.3em] text-[#F7F3EA]/55 uppercase">
                  <span className="rounded-full border border-[#F7F3EA]/20 bg-[#F7F3EA]/5 px-2 py-0.5">
                    {d.tag}
                  </span>
                  <span>{d.votes} votes</span>
                </div>

                <div className="text-[0.65rem] tracking-[0.3em] text-[#F7F3EA]/45 uppercase">
                  Would you rather…
                </div>

                <div className="space-y-3">
                  <div
                    className="rounded-xl border border-[#FF2D95]/40 bg-[#FF2D95]/10 p-3 text-[0.95rem] leading-snug [font-family:var(--v1-display)] uppercase"
                  >
                    A. {d.q}
                  </div>
                  <div className="text-center text-[0.55rem] tracking-[0.4em] text-[#F7F3EA]/45 uppercase">
                    — or —
                  </div>
                  <div className="rounded-xl border border-[#00F0FF]/40 bg-[#00F0FF]/10 p-3 text-[0.95rem] leading-snug [font-family:var(--v1-display)] uppercase">
                    B. {d.a}
                  </div>
                </div>

                <div>
                  <div className="mb-1 flex justify-between text-[0.55rem] tracking-[0.3em] text-[#F7F3EA]/55 uppercase">
                    <span>A · {d.split}%</span>
                    <span>B · {100 - d.split}%</span>
                  </div>
                  <div className="flex h-1 w-full overflow-hidden rounded-full bg-[#F7F3EA]/10">
                    <div
                      className="h-full bg-[#FF2D95]"
                      style={{ width: `${d.split}%` }}
                    />
                    <div
                      className="h-full bg-[#00F0FF]"
                      style={{ width: `${100 - d.split}%` }}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section
        id="categories"
        className="relative z-10 border-t border-[#F7F3EA]/10 px-6 py-24 sm:px-10"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 grid items-end gap-10 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <div className="mb-3 text-[0.65rem] tracking-[0.4em] text-[#FFDE59] uppercase">
                {"/// Pick your vibe"}
              </div>
              <h2 className="text-[clamp(2rem,5vw,3.8rem)] leading-[0.95] [font-family:var(--v1-display)] uppercase">
                Eleven flavors
                <br />
                of <span className="text-[#FF2D95]">&quot;hell no&quot;.</span>
              </h2>
              <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-[#F7F3EA]/70">
                Pick a category that matches the mood, or hit Random and let
                the app gut-punch you with whatever comes up. The{" "}
                <span className="font-bold text-[#FF2D95]">Explicit</span>{" "}
                category is 18+, unlocked by the Adult in-app purchase.
              </p>
            </div>

            {/* Phone screenshot on the right */}
            <div className="relative flex justify-center top-22">
              <div className="relative w-[min(68%,300px)] -rotate-3">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-6 -z-10 rounded-full opacity-60 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(255,222,89,0.5), transparent 65%)",
                  }}
                />
                <div className="relative overflow-hidden rounded-[38px] border border-[#F7F3EA]/12 bg-[#0A0A0E]/60 p-2">
                  <Iphone src={screenCategories.src} />
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {CATEGORIES.map((c) => (
              <div
                key={c.name}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border bg-[#0B0B10] p-5 transition-all duration-300 hover:-translate-y-1",
                  c.featured
                    ? "sm:col-span-2 md:col-span-3 border-[#FF2D95]/40"
                    : c.locked
                      ? "border-[#FF2D95]/30"
                      : "border-[#F7F3EA]/10 hover:border-[#F7F3EA]/25"
                )}
                style={
                  c.featured
                    ? {
                      background:
                        "linear-gradient(135deg, rgba(255,45,149,0.12), rgba(0,240,255,0.06))",
                    }
                    : c.locked
                      ? {
                        background:
                          "linear-gradient(135deg, rgba(255,45,149,0.10), rgba(255,45,149,0) 70%)",
                      }
                      : undefined
                }
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div
                      aria-hidden
                      className="grid size-12 shrink-0 place-items-center rounded-xl border border-[#F7F3EA]/10 bg-[#0A0A0E] text-[1.5rem]"
                      style={{
                        boxShadow: `inset 0 0 0 1px ${c.accent}22`,
                      }}
                    >
                      {c.emoji}
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="[font-family:var(--v1-display)] text-[1.4rem] leading-none uppercase">
                          {c.name}
                        </div>
                        {c.locked && (
                          <span className="rounded-full border border-[#FF2D95]/60 bg-[#FF2D95]/15 px-2 py-0.5 text-[0.55rem] font-bold tracking-[0.25em] text-[#FF2D95] uppercase">
                            {c.locked}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-[0.82rem] leading-relaxed text-[#F7F3EA]/60">
                        {c.blurb}
                      </p>
                      {c.count !== undefined && (
                        <p className="mt-2 text-[0.62rem] tracking-[0.3em] text-[#F7F3EA]/40 uppercase">
                          {c.count}{" "}
                          {c.count === 1 ? "dilemma" : "dilemmas"}
                        </p>
                      )}
                    </div>
                  </div>
                  <span
                    aria-hidden
                    className="relative grid size-8 shrink-0 place-items-center overflow-hidden rounded-full border border-[#F7F3EA]/20 text-[0.8rem] text-[#F7F3EA] transition-all duration-300 group-hover:text-black"
                    style={{
                      borderColor: `${c.accent}55`,
                    }}
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 scale-0 rounded-full opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                      style={{ backgroundColor: c.accent }}
                    />
                    <span className="relative">
                      {c.locked ? "🔒" : "↗"}
                    </span>
                  </span>
                </div>
                {c.featured && (
                  <BorderBeam
                    size={140}
                    duration={7}
                    colorFrom="#FF2D95"
                    colorTo="#00F0FF"
                    borderWidth={1}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section
        id="tiers"
        className="relative z-10 border-t border-[#F7F3EA]/10 px-6 py-24 sm:px-10"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 grid items-end gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-3 text-[0.65rem] tracking-[0.4em] text-[#A4F0C0] uppercase">
                {"/// Free + two tiers"}
              </div>
              <h2 className="text-[clamp(2rem,5vw,3.8rem)] leading-[0.95] [font-family:var(--v1-display)] uppercase">
                Start free.
                <br />
                Upgrade <span className="text-[#FF2D95]">if you dare.</span>
              </h2>
            </div>
            <p className="max-w-xs text-[0.85rem] leading-relaxed text-[#F7F3EA]/65 md:text-right">
              Free plays ad-supported with a daily sample. Pro unlocks the
              full library ad-free. Adult turns on 18+ content after age
              verification.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* FREE */}
            <div className="relative flex h-full flex-col rounded-3xl border border-[#F7F3EA]/10 bg-[#0B0B10] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#F7F3EA]/25">
              <div className="mb-3 flex items-center justify-between text-[0.62rem] tracking-[0.3em] text-[#F7F3EA]/55 uppercase">
                <span>Tier 01 · Free</span>
                <span className="rounded-full border border-[#F7F3EA]/20 bg-[#F7F3EA]/5 px-2 py-0.5">
                  Default
                </span>
              </div>
              <div className="[font-family:var(--v1-display)] text-[2.4rem] leading-none uppercase text-[#F7F3EA]">
                Free
              </div>
              <div className="mt-1 text-[0.7rem] tracking-[0.28em] text-[#F7F3EA]/50 uppercase">
                $0 · ad-supported
              </div>
              <ul className="mt-6 space-y-2.5 text-[0.88rem] leading-relaxed text-[#F7F3EA]/75">
                <li className="flex gap-3">
                  <span aria-hidden className="text-[#A4F0C0]">
                    ✓
                  </span>
                  30 dilemmas a day to get hooked
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="text-[#A4F0C0]">
                    ✓
                  </span>
                  Watch a rewarded ad for 20 bonus questions
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="text-[#A4F0C0]">
                    ✓
                  </span>
                  10 core categories
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="text-[#F7F3EA]/35">
                    —
                  </span>
                  <span className="text-[#F7F3EA]/50">
                    Banner + interstitial ads
                  </span>
                </li>
              </ul>
            </div>

            {/* PRO */}
            <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#00F0FF]/40 bg-[#0B0B10] p-6 transition-all duration-500 hover:-translate-y-1">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  background:
                    "radial-gradient(600px 300px at 50% 0%, rgba(0,240,255,0.18), transparent 70%)",
                }}
              />
              <div className="relative mb-3 flex items-center justify-between text-[0.62rem] tracking-[0.3em] text-[#00F0FF]/90 uppercase">
                <span>Tier 02 · Pro</span>
                <span className="rounded-full border border-[#00F0FF]/40 bg-[#00F0FF]/10 px-2 py-0.5">
                  Best value
                </span>
              </div>
              <div className="relative [font-family:var(--v1-display)] text-[2.4rem] leading-none uppercase text-[#F7F3EA]">
                Pro
              </div>
              <div className="relative mt-1 flex items-baseline gap-2 text-[#F7F3EA]">
                <span className="[font-family:var(--v1-display)] text-[1.6rem] leading-none">
                  $1.99
                </span>
                <span className="text-[0.68rem] tracking-[0.28em] text-[#F7F3EA]/55 uppercase">
                  one-time
                </span>
              </div>
              <ul className="relative mt-6 space-y-2.5 text-[0.88rem] leading-relaxed text-[#F7F3EA]/80">
                <li className="flex gap-3">
                  <span aria-hidden className="text-[#00F0FF]">
                    ✓
                  </span>
                  <span>
                    <strong className="text-[#F7F3EA]">900+ dilemmas</strong>{" "}
                    across all 10 standard categories
                  </span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="text-[#00F0FF]">
                    ✓
                  </span>
                  Zero ads. Zero interruptions.
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="text-[#00F0FF]">
                    ✓
                  </span>
                  No daily cap — play until your thumbs give out
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="text-[#00F0FF]">
                    ✓
                  </span>
                  Pay once. No subscription.
                </li>
              </ul>
              <BorderBeam
                size={140}
                duration={7}
                colorFrom="#00F0FF"
                colorTo="#FF2D95"
                borderWidth={1}
              />
            </div>

            {/* ADULT */}
            <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#FF2D95]/50 bg-[#0B0B10] p-6 transition-all duration-500 hover:-translate-y-1">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  background:
                    "radial-gradient(600px 320px at 50% 0%, rgba(255,45,149,0.22), transparent 70%)",
                }}
              />
              <div className="relative mb-3 flex items-center justify-between text-[0.62rem] tracking-[0.3em] text-[#FF2D95] uppercase">
                <span>Tier 03 · Adult</span>
                <span className="rounded-full border border-[#FF2D95]/50 bg-[#FF2D95]/15 px-2 py-0.5 font-bold">
                  18+
                </span>
              </div>
              <div className="relative flex items-end gap-3">
                <div className="[font-family:var(--v1-display)] text-[2.4rem] leading-none uppercase text-[#F7F3EA]">
                  Adult
                </div>
                <span aria-hidden className="mb-1 text-[1.3rem]">
                  🔥
                </span>
              </div>
              <div className="relative mt-1 flex items-baseline gap-2 text-[#F7F3EA]">
                <span className="[font-family:var(--v1-display)] text-[1.6rem] leading-none">
                  $4.99
                </span>
                <span className="text-[0.68rem] tracking-[0.28em] text-[#F7F3EA]/55 uppercase">
                  one-time
                </span>
              </div>
              <ul className="relative mt-6 space-y-2.5 text-[0.88rem] leading-relaxed text-[#F7F3EA]/80">
                <li className="flex gap-3">
                  <span aria-hidden className="text-[#FF2D95]">
                    ✓
                  </span>
                  <span>
                    Unlocks the{" "}
                    <strong className="text-[#F7F3EA]">Explicit</strong>{" "}
                    category — 200 steamy, uncensored dilemmas
                  </span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="text-[#FF2D95]">
                    ✓
                  </span>
                  Everything in Pro (full library, ad-free)
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="text-[#FF2D95]">
                    ✓
                  </span>
                  Age-gated: verified 18+ at first launch
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="text-[#FF2D95]">
                    ✓
                  </span>
                  Pay once. No subscription.
                </li>
              </ul>
              <BorderBeam
                size={140}
                duration={7}
                colorFrom="#FF2D95"
                colorTo="#FFDE59"
                borderWidth={1}
              />
            </div>
          </div>

          <p className="mt-8 text-[0.7rem] tracking-[0.25em] text-[#F7F3EA]/45 uppercase">
            {"/// Adult content is gated by age verification at launch and a separate in-app purchase. You can play Free or Pro forever without it."}
          </p>
        </div>
      </section>

      {/* PARTY MODE */}
      <section
        id="party"
        className="relative z-10 border-t border-[#F7F3EA]/10 px-6 py-24 sm:px-10"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-[min(72%,320px)] rotate-[-4deg]">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-10 -z-10 rounded-full opacity-70 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(255,222,89,0.55), rgba(255,45,149,0.3) 50%, transparent 70%)",
                }}
              />
              <div className="relative overflow-hidden rounded-[46px] border border-[#F7F3EA]/15 bg-[#0A0A0E]/60 p-3 backdrop-blur">
                <Iphone src={screenParty.src} />
                <BorderBeam
                  size={160}
                  duration={7}
                  colorFrom="#FFDE59"
                  colorTo="#FF2D95"
                  borderWidth={2}
                />
              </div>
            </div>
          </div>

          <div>
            <div className="mb-3 text-[0.65rem] tracking-[0.4em] text-[#FFDE59] uppercase">
              {"/// Party mode"}
            </div>
            <h2 className="text-[clamp(2rem,5vw,3.8rem)] leading-[0.95] [font-family:var(--v1-display)] uppercase">
              Play <span className="text-[#FFDE59]">with</span> the
              <br />
              room, not just
              <br />
              <span className="text-[#FF2D95]">at</span> it.
            </h2>
            <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-[#F7F3EA]/70">
              Host a lobby and watch everyone&apos;s choices come in live.
              Five-digit code, no sign-ups, no downloads for guests — open
              the link and pick a side.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#FFDE59]/40 bg-[#FFDE59]/10 p-5">
                <div className="[font-family:var(--v1-display)] text-[1.5rem] leading-none uppercase text-[#FFDE59]">
                  Host
                </div>
                <p className="mt-3 text-[0.82rem] leading-relaxed text-[#F7F3EA]/75">
                  Spin up a lobby in one tap. Share the code. Start
                  roasting your friends.
                </p>
              </div>
              <div className="rounded-2xl border border-[#00F0FF]/40 bg-[#00F0FF]/10 p-5">
                <div className="[font-family:var(--v1-display)] text-[1.5rem] leading-none uppercase text-[#00F0FF]">
                  Join
                </div>
                <p className="mt-3 text-[0.82rem] leading-relaxed text-[#F7F3EA]/75">
                  Got a code? Type five digits. You&apos;re in. No
                  account, no email, no friction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="get"
        className="relative z-10 overflow-hidden border-t border-[#F7F3EA]/10 px-6 py-24 sm:px-10"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(600px 400px at 20% 40%, rgba(255,45,149,0.3), transparent 60%), radial-gradient(500px 400px at 80% 60%, rgba(0,240,255,0.25), transparent 60%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="mb-4 text-[0.65rem] tracking-[0.4em] text-[#FF2D95] uppercase">
              {"/// Free to play"}
            </div>
            <h2 className="text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.95] [font-family:var(--v1-display)] uppercase">
              Your thumbs.
              <br />
              Your call.
              <br />
              <span className="text-[#00F0FF]">No going back.</span>
            </h2>
            <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-[#F7F3EA]/75">
              1,036 dilemmas. 11 categories. One button per choice. Download
              Would You Rather free on the App Store — then see what your
              friends would actually do.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://apps.apple.com/app/would-you-rather-game/id6762091119"
                target="_blank"
                rel="noreferrer"
                className="no-underline hover:no-underline"
              >
                <ShimmerButton
                  shimmerColor="#FF2D95"
                  shimmerDuration="2.5s"
                  background="#0A0A0E"
                  borderRadius="999px"
                  className="border-[#FF2D95]/40 px-7 py-3.5 text-[0.8rem] uppercase tracking-[0.3em]"
                >
                  Download free · App Store
                </ShimmerButton>
              </a>
              <span className="text-[0.7rem] tracking-[0.3em] text-[#F7F3EA]/50 uppercase">
                iOS 17+ · Free with IAP
              </span>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[min(62%,260px)] rotate-6">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-8 -z-10 rounded-full opacity-60 blur-3xl"
                style={{
                  background:
                    "conic-gradient(from 60deg, rgba(0,240,255,0.5), rgba(255,45,149,0.5), rgba(255,222,89,0.4), rgba(0,240,255,0.5))",
                }}
              />
              <div className="relative overflow-hidden rounded-[46px] border border-[#F7F3EA]/15 bg-[#0A0A0E]/60 p-3 backdrop-blur">
                <Iphone src={screenResults.src} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM TICKER */}
      <div className="relative z-20 overflow-hidden border-y border-[#00F0FF]/30 bg-[#0A0A0E]/70 [font-family:var(--v1-display)]">
        <Marquee
          reverse
          className="[--duration:26s] py-3 text-[1.3rem] tracking-widest uppercase"
        >
          {[
            "Would",
            "You",
            "Rather",
            "·",
            "Tap",
            "·",
            "Vote",
            "·",
            "Repeat",
            "·",
            "Regret",
            "·",
            "Nothing",
            "·",
          ].map((w, i) => (
            <span
              key={i}
              className={cn(
                "mx-6 inline-block",
                i % 2 ? "text-[#00F0FF]" : "text-[#F7F3EA]"
              )}
            >
              {w}
            </span>
          ))}
        </Marquee>
      </div>

      {/* FOOTER */}
      <footer className="relative z-10 px-6 py-12 sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 border-t border-[#F7F3EA]/10 pt-8 text-[0.7rem] tracking-[0.25em] text-[#F7F3EA]/50 uppercase">
          <span>© 2026 Earthquake Games</span>
          <div className="flex items-center gap-6">
            <Link
              href="/would-you-rather/privacy/"
              className="text-[#F7F3EA]/70 no-underline hover:text-[#FF2D95] hover:no-underline"
            >
              Privacy
            </Link>
            <Link
              href="/would-you-rather/terms/"
              className="text-[#F7F3EA]/70 no-underline hover:text-[#FF2D95] hover:no-underline"
            >
              Terms
            </Link>
            <Link
              href="/"
              className="text-[#F7F3EA]/70 no-underline hover:text-[#FF2D95] hover:no-underline"
            >
              ← Earthquake
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
