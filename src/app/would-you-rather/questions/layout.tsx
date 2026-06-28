import Image from "next/image"
import Link from "next/link"
import { DM_Sans, Monoton, Space_Mono } from "next/font/google"

import { cn } from "@/lib/utils"
import { SITE } from "@/lib/site"

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
const readable = DM_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--v1-readable",
})

export default function QuestionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main
      className={cn(
        display.variable,
        body.variable,
        readable.variable,
        "relative min-h-dvh overflow-x-clip bg-[#07070A] text-[#F7F3EA] [font-family:var(--v1-body)] selection:bg-[#FF2D95] selection:text-black",
      )}
    >
      {/* grain + glow, matching the rest of the site */}
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
            "radial-gradient(1100px 700px at 85% -10%, rgba(255,45,149,0.18), transparent 60%), radial-gradient(900px 600px at -10% 20%, rgba(0,240,255,0.14), transparent 60%)",
        }}
      />

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
            />
          </span>
          Earthquake Games
        </Link>
        <Link
          href="/would-you-rather/"
          className="rounded-full border border-[#F7F3EA]/30 px-4 py-2 text-[0.7rem] uppercase tracking-[0.25em] text-[#F7F3EA] no-underline transition-colors hover:border-[#00F0FF] hover:text-[#00F0FF] hover:no-underline"
        >
          About the app ↗
        </Link>
      </header>

      <div className="relative z-10">{children}</div>

      {/* CTA BAND */}
      <section className="relative z-10 px-6 pb-4 sm:px-10">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#FF2D95]/30 bg-[#0A0A0E]/70 p-8 text-center backdrop-blur sm:p-12">
          <h2 className="mx-auto max-w-2xl text-[clamp(1.6rem,4vw,2.6rem)] leading-[1] [font-family:var(--v1-display)] uppercase">
            Play the live version
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[0.9rem] leading-relaxed text-[#F7F3EA]/70">
            800+ questions, real-time global votes and brand-new dilemmas every
            week. Free on the App Store.
          </p>
          <a
            href={SITE.appStoreUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#FF2D95] px-7 py-3.5 text-[0.75rem] font-bold uppercase tracking-[0.25em] text-black no-underline transition-transform hover:-translate-y-0.5 hover:no-underline"
          >
            ▶ Get Would You Rather
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 px-6 py-12 sm:px-10">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6 border-t border-[#F7F3EA]/10 pt-8 text-[0.7rem] tracking-[0.25em] text-[#F7F3EA]/50 uppercase">
          <div className="flex flex-col gap-1">
            <span>© 2026 Earthquake Games</span>
            <span>
              A brand of{" "}
              <a
                href="https://earthquakedigital.com.br"
                target="_blank"
                rel="noreferrer"
                className="text-[#F7F3EA]/70 no-underline hover:text-[#FF2D95] hover:no-underline"
              >
                Earthquake Digital
              </a>{" "}
              Serviços de Audiovisual LTDA
            </span>
          </div>
          <nav className="flex flex-wrap gap-4 normal-case tracking-normal [font-family:var(--v1-readable)]">
            <Link
              href="/would-you-rather/questions/"
              className="text-[#F7F3EA]/70 no-underline hover:text-[#FF2D95] hover:no-underline"
            >
              All questions
            </Link>
            <Link
              href="/would-you-rather/"
              className="text-[#F7F3EA]/70 no-underline hover:text-[#FF2D95] hover:no-underline"
            >
              The app
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  )
}
