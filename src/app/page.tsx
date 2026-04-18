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

import { HeroPhoneSlideshow } from "./would-you-rather/HeroPhoneSlideshow"
import screenSplash from "./would-you-rather/assets/screen-splash.png"
import screenChoose from "./would-you-rather/assets/screen-choose.png"
import screenTap from "./would-you-rather/assets/screen-tap.png"
import screenResultsDemo from "./would-you-rather/assets/screen-results-demo.png"

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

const STRIP = [
  "★ EARTHQUAKE GAMES",
  "PLAYABLE EVERYWHERE",
  "EST. MMXXVI",
  "MADE IN BRASIL",
  "TAP TO START",
]

const GAMES = [
  {
    n: "01",
    title: "Would You Rather",
    tag: "Live",
    genre: "Social / Party",
    blurb:
      "The choice game that ate the internet. Two impossible options, one global verdict.",
    href: "/would-you-rather/",
    swatch: "from-[#FF2D95] via-[#F2506F] to-[#FFB547]",
    accent: "#FF2D95",
    meta: "Ultimate choice game",
  },
  {
    n: "02",
    title: "Aftershock",
    tag: "In dev",
    genre: "Rhythm / Endless",
    blurb:
      "Feel the beat under your feet. Tap, hold, and survive the tremor line.",
    href: "#",
    swatch: "from-[#00F0FF] via-[#5CC8FF] to-[#A4F0C0]",
    accent: "#00F0FF",
    meta: "TBA - Coming soon",
  },
  {
    n: "03",
    title: "Fault Line",
    tag: "Concept",
    genre: "Puzzle / Strategy",
    blurb:
      "Rebuild a city across shifting plates. Every swipe redraws the map.",
    href: "#",
    swatch: "from-[#FFDE59] via-[#F2C94C] to-[#FF8A3D]",
    accent: "#FFDE59",
    meta: "TBA - Coming soon",
  },
]

export default function Page() {
  return (
    <main
      className={cn(
        display.variable,
        body.variable,
        "relative min-h-dvh overflow-x-clip bg-[#07070A] text-[#F7F3EA] [font-family:var(--v1-body)] selection:bg-[#FF2D95] selection:text-black"
      )}
    >
      {/* grain + vignette */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-1 opacity-[0.10] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.7'/></svg>\")",
        }}
      />
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
        <Marquee className="[--duration:35s] py-2.5 text-[0.78rem] tracking-[0.3em] uppercase">
          {STRIP.map((s, i) => (
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
          Earthquake Games / Home
        </Link>
        <nav className="hidden items-center gap-7 text-[0.72rem] uppercase tracking-[0.25em] text-[#F7F3EA]/70 md:flex">
          <a href="#games" className="hover:text-[#FF2D95] hover:no-underline">
            Games
          </a>
          <a href="#stats" className="hover:text-[#FF2D95] hover:no-underline">
            Numbers
          </a>
          <a
            href="#studio"
            className="hover:text-[#FF2D95] hover:no-underline"
          >
            Studio
          </a>
        </nav>
        <a
          href="mailto:suporte@earthquakedigital.com.br"
          className="rounded-full border border-[#F7F3EA]/30 px-4 py-2 text-[0.7rem] uppercase tracking-[0.25em] text-[#F7F3EA] no-underline transition-colors hover:border-[#FF2D95] hover:text-[#FF2D95] hover:no-underline"
        >
          Contact ↗
        </a>
      </header>

      {/* HERO */}
      <section className="relative z-10 px-6 pt-14 pb-24 sm:px-10 md:pt-20">
        {/* meteor shower scoped to hero */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Meteors number={28} maxDuration={8} minDuration={3} angle={215} />
        </div>

        <div className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div className="relative">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#F7F3EA]/15 bg-[#0A0A0E]/60 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.3em] text-[#F7F3EA]/70 backdrop-blur">
              <span className="inline-block size-1.5 animate-pulse rounded-full bg-[#00F0FF]" />
              Now shipping · iOS
            </div>

            <h1
              className="relative mb-8 text-[clamp(3rem,8vw,7.5rem)] leading-[0.88] tracking-tight [font-family:var(--v1-display)] uppercase"
              style={{ textShadow: "0 0 35px rgba(255,45,149,0.25)" }}
            >
              <span className="block text-[#F7F3EA]">Make the</span>
              <span className="relative block">
                <span
                  aria-hidden
                  className="absolute inset-0 translate-x-[3px] translate-y-[3px] text-[#00F0FF]/80"
                >
                  ground
                </span>
                <span className="relative text-[#FF2D95]">ground</span>
              </span>
              <span className="block">
                <span className="text-[#F7F3EA]">move.</span>
                <span className="ml-3 inline-block align-baseline text-[0.18em] tracking-[0.2em] text-[#F7F3EA]/50">
                  /sismo/
                </span>
              </span>
            </h1>

            <p className="mb-10 max-w-lg text-[0.95rem] leading-relaxed text-[#F7F3EA]/70">
              A tiny, loud mobile games studio. We build pocket worlds that
              rattle your thumbs and your group chat. Three projects. Zero
              filler.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/would-you-rather/"
                className="no-underline hover:no-underline"
              >
                <ShimmerButton
                  shimmerColor="#FF2D95"
                  shimmerDuration="2.5s"
                  background="#0A0A0E"
                  borderRadius="999px"
                  className="border-[#FF2D95]/40 px-6 py-3 text-[0.75rem] uppercase tracking-[0.3em]"
                >
                  ▶ Play Would You Rather
                </ShimmerButton>
              </Link>
              <a
                href="#games"
                className="inline-flex items-center gap-2 rounded-full border border-[#F7F3EA]/25 px-5 py-3 text-[0.72rem] uppercase tracking-[0.3em] text-[#F7F3EA] no-underline transition-all hover:border-[#00F0FF] hover:text-[#00F0FF] hover:no-underline"
              >
                See the portfolio
                <span aria-hidden>→</span>
              </a>
            </div>

            {/* floating tape label */}
            <div
              aria-hidden
              className="absolute top-0 right-0 hidden rotate-6 lg:block"
            >
              <div className="border border-[#00F0FF]/50 bg-[#0A0A0E]/80 px-3 py-1 text-[0.6rem] tracking-[0.4em] text-[#00F0FF] uppercase">
                Cat. No. EQG / 01 — 03
              </div>
            </div>
          </div>

          {/* iPhone block — clickable, slideshows WYR onboarding */}
          <div className="relative flex justify-center lg:justify-end">
            <a
              href="https://apps.apple.com/app/would-you-rather-game/id6762091119"
              target="_blank"
              rel="noreferrer"
              aria-label="Download Would You Rather on the App Store"
              className="group relative block w-[min(78%,360px)] rotate-6 no-underline transition-transform duration-500 hover:rotate-0 hover:no-underline"
            >
              {/* halo */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-10 -z-10 rounded-full opacity-70 blur-3xl transition-opacity duration-500 group-hover:opacity-90"
                style={{
                  background:
                    "conic-gradient(from 120deg, rgba(255,45,149,0.6), rgba(0,240,255,0.45), rgba(255,222,89,0.35), rgba(255,45,149,0.6))",
                }}
              />
              {/* mount */}
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
      <section
        id="stats"
        className="relative z-10 border-y border-[#F7F3EA]/10 bg-[#0A0A0E]/60 py-10 backdrop-blur"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 sm:px-10 md:grid-cols-4">
          {[
            { k: "Players", v: 2.4, suffix: "M", decimals: 1 },
            { k: "Countries", v: 42, suffix: "" },
            { k: "Avg. rating", v: 4.8, suffix: "★", decimals: 1 },
            { k: "Projects", v: 3, suffix: "/∞" },
          ].map((s) => (
            <div key={s.k} className="flex flex-col gap-1">
              <div className="text-[0.65rem] tracking-[0.3em] text-[#F7F3EA]/50 uppercase">
                {s.k}
              </div>
              <div className="flex items-baseline gap-1 text-[2.4rem] leading-none [font-family:var(--v1-display)] text-[#F7F3EA]">
                <NumberTicker
                  value={s.v}
                  decimalPlaces={s.decimals ?? 0}
                  className="text-[#F7F3EA]"
                />
                <span className="text-[#FF2D95]">{s.suffix}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GAMES */}
      <section id="games" className="relative z-10 px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex items-end justify-between gap-6">
            <div>
              <div className="mb-3 text-[0.65rem] tracking-[0.4em] text-[#FF2D95] uppercase">
                {"/// Portfolio 01 → 03"}
              </div>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] [font-family:var(--v1-display)] uppercase">
                <SparklesText
                  colors={{ first: "#FF2D95", second: "#00F0FF" }}
                  sparklesCount={7}
                  className="text-inherit"
                >
                  Three pocket worlds.
                </SparklesText>
              </h2>
            </div>
            <div className="hidden max-w-xs text-[0.85rem] leading-relaxed text-[#F7F3EA]/60 md:block">
              Everything below is built, shipped or in active development by
              four people in one room.
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {GAMES.map((g) => {
              const isLive = g.tag === "Live"
              const Card = (
                <div className="group relative h-full overflow-hidden rounded-3xl border border-[#F7F3EA]/10 bg-[#0B0B10] transition-all duration-500 hover:-translate-y-1 hover:border-[#FF2D95]/40">
                  <div
                    className={cn(
                      "relative aspect-4/5 overflow-hidden bg-linear-to-br",
                      g.swatch
                    )}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_45%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_60%,rgba(7,7,10,0.9))]" />
                    {/* grid pattern */}
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-30 mix-blend-overlay"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                      }}
                    />
                    {/* big number */}
                    <div className="absolute top-5 left-5 [font-family:var(--v1-display)] text-[4rem] leading-none text-white/90">
                      {g.n}
                    </div>
                    <div className="absolute top-6 right-5 flex items-center gap-1.5 rounded-full border border-white/30 bg-black/30 px-2.5 py-1 text-[0.55rem] tracking-[0.3em] text-white uppercase backdrop-blur">
                      <span
                        className={cn(
                          "size-1.5 rounded-full",
                          isLive ? "animate-pulse bg-[#A4F0C0]" : "bg-white/70"
                        )}
                      />
                      {g.tag}
                    </div>
                    <div
                      className={cn(
                        "absolute bottom-5 left-5",
                        isLive ? "right-[44%]" : "right-5"
                      )}
                    >
                      <div className="mb-1 text-[0.6rem] tracking-[0.3em] text-white/70 uppercase">
                        {g.genre}
                      </div>
                      <div className="[font-family:var(--v1-display)] text-[1.7rem] leading-[0.95] text-white">
                        {g.title}
                      </div>
                    </div>
                    {isLive && (
                      <div
                        aria-hidden
                        className="pointer-events-none absolute top-[18%] right-[-7%] z-5 w-[36%] rotate-[9deg] drop-shadow-[0_18px_30px_rgba(0,0,0,0.55)] transition-transform duration-500 group-hover:rotate-[4deg] group-hover:-translate-y-1"
                      >
                        <div
                          aria-hidden
                          className="pointer-events-none absolute -inset-4 -z-10 rounded-full opacity-70 blur-2xl"
                          style={{
                            background:
                              "radial-gradient(circle at center, rgba(255,45,149,0.55), transparent 70%)",
                          }}
                        />
                        <Iphone src={screenTap.src} />
                      </div>
                    )}
                  </div>
                  <div className="flex items-start justify-between gap-4 p-5">
                    <p className="max-w-[80%] text-[0.82rem] leading-relaxed text-[#F7F3EA]/70">
                      {g.blurb}
                    </p>
                    <span
                      aria-hidden
                      className="mt-1 grid size-9 shrink-0 place-items-center rounded-full border border-[#F7F3EA]/20 text-[#F7F3EA] transition-all group-hover:border-[#FF2D95] group-hover:bg-[#FF2D95] group-hover:text-black"
                    >
                      ↗
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-t border-[#F7F3EA]/10 px-5 py-3 text-[0.65rem] tracking-[0.3em] text-[#F7F3EA]/50 uppercase">
                    <span>{g.meta}</span>
                    <span className="text-[#FF2D95]">
                      {isLive ? "Play now" : "Notify me"}
                    </span>
                  </div>
                  {isLive && (
                    <BorderBeam
                      size={120}
                      duration={6}
                      colorFrom="#FF2D95"
                      colorTo="#00F0FF"
                    />
                  )}
                </div>
              )
              return isLive ? (
                <Link
                  key={g.n}
                  href={g.href}
                  className="block no-underline hover:no-underline"
                >
                  {Card}
                </Link>
              ) : (
                <div key={g.n}>{Card}</div>
              )
            })}
          </div>
        </div>
      </section>

      {/* STUDIO */}
      <section
        id="studio"
        className="relative z-10 overflow-hidden border-t border-[#F7F3EA]/10 px-6 py-24 sm:px-10"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(600px 400px at 20% 40%, rgba(255,45,149,0.25), transparent 60%), radial-gradient(500px 400px at 80% 60%, rgba(0,240,255,0.2), transparent 60%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <div className="mb-4 text-[0.65rem] tracking-[0.4em] text-[#00F0FF] uppercase">
              {"/// The studio"}
            </div>
            <h3 className="text-[clamp(2rem,4.5vw,3rem)] leading-[0.95] [font-family:var(--v1-display)] uppercase">
              Four humans,
              <br />
              one room,
              <br />
              loud music.
            </h3>
          </div>
          <div className="space-y-6 text-[0.95rem] leading-relaxed text-[#F7F3EA]/75">
            <p>
              Earthquake Games is an independent mobile games studio. We
              ship small, sharp, replayable games — the kind your friends
              text you about at 1am.
            </p>
            <p>
              No gacha. No dark patterns. Every game launches with a story,
              a vibe, and at most three buttons. If it doesn&apos;t make the
              room laugh, argue or scream, we don&apos;t ship it.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Indie",
                "Free-to-play",
                "iOS first",
                "Built in 🇧🇷",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[#F7F3EA]/20 px-3 py-1.5 text-[0.7rem] tracking-[0.2em] text-[#F7F3EA]/80 uppercase"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM TICKER */}
      <div className="relative z-20 overflow-hidden border-y border-[#00F0FF]/30 bg-[#0A0A0E]/70 [font-family:var(--v1-display)]">
        <Marquee
          reverse
          className="[--duration:28s] py-3 text-[1.3rem] tracking-widest uppercase"
        >
          {[
            "Earthquake",
            "Games",
            "·",
            "Play",
            "·",
            "Tap",
            "·",
            "Tilt",
            "·",
            "Shake",
            "·",
            "2026",
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
          <a
            href="mailto:suporte@earthquakedigital.com.br"
            className="text-[#F7F3EA]/70 no-underline hover:text-[#FF2D95] hover:no-underline"
          >
            suporte@earthquakedigital.com.br
          </a>
        </div>
      </footer>
    </main>
  )
}
