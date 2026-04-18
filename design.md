# Earthquake Games — Design System

The landing page (`src/app/page.tsx`) is the canonical reference for this system. When in doubt, open it and match what it does. This document explains the rules so new pages don't have to guess.

---

## 1 · Principles

1. **Loud by default.** We make mobile games. Pages should feel like a concert poster, not a bank dashboard. Default to bold type, saturated accents, and movement — never timid, evenly-distributed "SaaS neutral."
2. **Dominant color, sharp accents.** The background is almost always near-black. Color comes in as precise hits of magenta, cyan, and yellow — not gradients fading into gradients.
3. **Typography does the heavy lifting.** Monoton display for moments that matter. Space Mono everywhere else. No Inter, no Roboto, no system stack for body copy.
4. **Layered atmosphere.** Every full-page surface carries grain + radial glows + a structural motif (grid, meteors, marquee). Flat solid-color sections are a bug, not a style.
5. **Copy is punchy and short.** "Three projects. Zero filler." "Pocket worlds." Staccato fragments over paragraphs. One idea per sentence.

---

## 2 · Brand voice

- **Tone:** confident, a little punk, self-aware. Never corporate.
- **Sentence length:** short. Fragments are fine. End sentences with a period, not an exclamation mark.
- **Casing:** Title Case for product/page titles. `UPPERCASE TRACKING-WIDE` for meta labels, tags, navigation, and tickers. Normal case for body prose.
- **Gaming vocabulary:** "play", "tap", "tilt", "shake", "worlds", "rooms", "cartridges" are in. Avoid "solution", "experience", "leverage".
- **Never claim** the company is ad-free. We monetize with ads. Don't write "no ads", "0 ads", "ad-free". "No gacha" and "no dark patterns" are still allowed — those are design stances we keep.
- **Don't call out a specific city.** Brand is country-flavored (🇧🇷 OK, "Brasil" OK as texture); avoid Rio-specific callouts, coordinates, or addresses.

---

## 3 · Color

Pages must render dark. `src/app/layout.tsx` forces `<html class="dark">` — don't remove it.

### Brand palette (hardcoded hex — the landing's source of truth)

| Role                     | Hex         | When to use                                                        |
| ------------------------ | ----------- | ------------------------------------------------------------------ |
| `--eqg-noir`             | `#07070A`   | Page background. The one true black.                                |
| `--eqg-noir-raised`      | `#0A0A0E`   | Ticker bars, backdrop panels with `/60–/80` alpha + blur.           |
| `--eqg-noir-card`        | `#0B0B10`   | Card surfaces. One step lighter than the page.                      |
| `--eqg-bone`             | `#F7F3EA`   | Primary text + strokes. Never pure `#FFFFFF`.                       |
| `--eqg-magenta`          | `#FF2D95`   | Primary accent. Live states, hover color, CTA, selection.           |
| `--eqg-cyan`             | `#00F0FF`   | Secondary accent. Counterpoint to magenta — status, underlines.     |
| `--eqg-yellow`           | `#FFDE59`   | Tertiary accent. Stickers, flags, "free" badges.                    |
| `--eqg-mint`             | `#A4F0C0`   | Live-dot pulse only. Not for text or large fills.                   |

These are not in `globals.css` yet (see §14). For now, paste the hex inline with Tailwind's arbitrary-value syntax: `bg-[#FF2D95]`, `text-[#F7F3EA]/70`, `border-[#00F0FF]/40`.

### Alpha conventions

- Primary text on dark: `text-[#F7F3EA]` (no alpha).
- Secondary text: `text-[#F7F3EA]/75` or `/70`.
- Tertiary / muted labels: `text-[#F7F3EA]/50` or `/55`.
- Dividers and hairlines: `border-[#F7F3EA]/10` (never `/20` for body dividers — too heavy).
- Accent outlines: `/40` for prominent, `/15`–`/25` for ambient.

### Selection

Every full page wrapper sets `selection:bg-[#FF2D95] selection:text-black`. Keep it.

### Gradients

Used only for **hero glows** and **game-card posters**. Never on body backgrounds, never on text (except the existing `AuroraText` brand wordmark). Glow recipe:

```css
radial-gradient(1200px 800px at 80% -10%, rgba(255,45,149,0.25), transparent 60%),
radial-gradient(1000px 700px at -10% 30%, rgba(0,240,255,0.18), transparent 60%),
radial-gradient(900px 700px at 50% 110%, rgba(255,222,89,0.15), transparent 60%)
```

Game-card poster gradients are always 3-stop diagonals (`from-X via-Y to-Z`) sampled from the three brand accents.

### Existing `globals.css` tokens

The CSS variables in `src/app/globals.css` (`--primary: #4b8eff`, `--link`, etc.) exist for shadcn components and the legal pages (`src/app/would-you-rather/*`). **Don't delete them.** They govern secondary UI surfaces. The brand palette above overrides them on marketing/game/feature pages.

---

## 4 · Typography

Two fonts, loaded per page via `next/font/google`.

```tsx
import { Monoton, Space_Mono } from "next/font/google"

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
```

Apply both `.variable` classes to the page's root element. Keep the CSS-variable names `--v1-display` and `--v1-body` so styles stay copy-pasteable from the landing.

### When to use which

- **Monoton (`--v1-display`)** — hero headline, section titles, oversized numbers (stats, game index `01/02/03`), brand wordmark, bottom ticker. Always uppercase. Always `leading-[0.88]` to `[0.95]`. Pair with text-shadow glows on hero-scale text only: `textShadow: "0 0 35px rgba(255,45,149,0.25)"`.
- **Space Mono (`--v1-body`)** — **everything else**: body prose, nav labels, tags, buttons, meta text, table rows. This is the default; the page wrapper declares `[font-family:var(--v1-body)]` once and children inherit.

### Scale (tight, gamer-poster rhythm)

| Element            | Size                                   | Notes                                    |
| ------------------ | -------------------------------------- | ---------------------------------------- |
| Hero display       | `text-[clamp(3rem,8vw,7.5rem)]`        | Monoton, `leading-[0.88]`                |
| Section title      | `text-[clamp(2rem,5vw,3.5rem)]`        | Monoton, `leading-[0.95]`                |
| Stat number        | `text-[2.4rem]`                        | Monoton                                  |
| Card title         | `text-[1.7rem]`                        | Monoton                                  |
| Body paragraph     | `text-[0.95rem]` with `leading-relaxed`| Space Mono                               |
| Card copy          | `text-[0.82rem]` with `leading-relaxed`| Space Mono                               |
| Meta / nav labels  | `text-[0.65rem]`–`text-[0.72rem]`      | Space Mono, uppercase, tracking-wide     |
| Tag chip           | `text-[0.7rem]`                        | Space Mono, uppercase, tracking `[0.2em]`|

### Tracking rules

- Any uppercase label (nav, tags, meta, tickers) needs `tracking-[0.22em]`–`tracking-[0.4em]`. The tighter end for long strings, the wider for short flourishes.
- Display headlines: default tracking — Monoton is already wide.
- Body prose: default tracking.

### No-goes

- No Inter, Roboto, Arial, system-ui, Space Grotesk.
- No body weights lighter than 400. No italic Monoton (it doesn't exist).
- No variable-weight switching mid-word; use color or size to emphasize instead.

---

## 5 · Spacing & layout

### Page shell

Every new full-bleed marketing/feature page starts like this:

```tsx
<main
  className={cn(
    display.variable,
    body.variable,
    "relative min-h-dvh overflow-x-hidden bg-[#07070A] text-[#F7F3EA] [font-family:var(--v1-body)] selection:bg-[#FF2D95] selection:text-black"
  )}
>
  {/* grain + radial glow layer (see §6) */}
  {/* top marquee ticker */}
  {/* nav */}
  {/* sections */}
  {/* bottom marquee ticker */}
  {/* footer */}
</main>
```

### Section widths

- **Marketing / feature sections:** `max-w-6xl` (1152px) with `px-6 sm:px-10`.
- **Long-form / legal content:** use the existing `Container` component (`max-w-[720px]`, narrower for readability). See `src/components/container.tsx` and `src/components/legal-layout.tsx`.
- **Tickers and footers:** full-bleed, no max-width.

### Section rhythm

- Standard section: `py-24`.
- Compact band (stats strip, marquee-adjacent): `py-10`.
- Always separate major sections with a hairline: `border-t border-[#F7F3EA]/10`.
- Never stack two full-dark sections without either a ticker, a gradient glow, or a border between them — flat noir deserts kill the mood.

### Grids

- Prefer asymmetric splits: `lg:grid-cols-[1.15fr_1fr]`, `lg:grid-cols-[1fr_1.1fr]`. Straight 50/50 reads stiff.
- Game grid is `md:grid-cols-3` with `gap-6`.

### Z-index

- Fixed decorative overlays (grain, vignette): `z-[1]`.
- Page content sections: `z-10`.
- Nav, tickers, nav-like sticky bars: `z-20`.

---

## 6 · Atmosphere (backgrounds & overlays)

Every page wrapper gets these two layers, in order, pinned to the viewport:

```tsx
{/* grain */}
<div
  aria-hidden
  className="pointer-events-none fixed inset-0 z-[1] opacity-[0.10] mix-blend-overlay"
  style={{
    backgroundImage:
      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.7'/></svg>\")",
  }}
/>

{/* radial glow */}
<div
  aria-hidden
  className="pointer-events-none fixed inset-0 z-[1]"
  style={{
    background:
      "radial-gradient(1200px 800px at 80% -10%, rgba(255,45,149,0.25), transparent 60%), radial-gradient(1000px 700px at -10% 30%, rgba(0,240,255,0.18), transparent 60%), radial-gradient(900px 700px at 50% 110%, rgba(255,222,89,0.15), transparent 60%)",
  }}
/>
```

If the page feels "empty", add `<Meteors />` **scoped to the hero section** (not full-page). Don't run meteors on low-powered or accessibility-sensitive pages.

---

## 7 · Motion

We use `motion/react` (Motion library). Principles:

- **One orchestrated moment beats twenty tiny ones.** The hero stagger sets the tone; later sections should have *selective* hover effects, not micro-animations on every element.
- **Hover contract:**
  - Links/nav: color shift to `#FF2D95` (or `#00F0FF` for secondary paths), no underline change.
  - Cards: `-translate-y-1`, border color shift to an accent `/40`.
  - Icon chips on card hover: fill with the accent (`group-hover:bg-[#FF2D95] group-hover:text-black`).
- **Live-state animation:** pulsing `size-1.5 rounded-full` dot in a live/online color (`#00F0FF`, `#A4F0C0`). Every "LIVE", "NO AR", "SHIPPING" badge has one.
- **Durations:** transitions 300–500ms, ease defaulted. BorderBeam 6–7s. Marquee 25–40s depending on content density.
- **Never** animate `transform: scale(1.05)` on full cards (breaks layout); use `translate-y` or border/glow instead.
- **Reduced motion:** meteors, border-beams, and marquee are decorative. If we add a reduced-motion preference later, they're the first things to disable.

---

## 8 · Components

Only use components that exist. When a new need arises, add via the shadcn/MagicUI CLI instead of hand-rolling:

```bash
pnpm dlx shadcn@latest add @magicui/<name>
```

### Installed (ready to use)

| Component                | Path                                          | Typical use                                     |
| ------------------------ | --------------------------------------------- | ----------------------------------------------- |
| `Iphone`                 | `@/components/ui/iphone`                      | Hero product mockup. Screen overlay via absolute-positioned div inside a `relative` wrapper (see landing hero). |
| `Meteors`                | `@/components/ui/meteors`                     | Hero atmosphere. Scope to a `relative overflow-hidden` parent. |
| `Marquee`                | `@/components/ui/marquee`                     | Top/bottom tickers, logo strips.                 |
| `BorderBeam`             | `@/components/ui/border-beam`                 | On anything "live" / the featured card.          |
| `NumberTicker`           | `@/components/ui/number-ticker`               | Stats counters. Pair with Monoton wrapper.       |
| `SparklesText`           | `@/components/ui/sparkles-text`               | A single section heading per page — don't overuse. |
| `ShimmerButton`          | `@/components/ui/shimmer-button`              | Primary CTA. One per viewport, max.              |
| `AnimatedGridPattern`    | `@/components/ui/animated-grid-pattern`       | Alternate hero backdrop when meteors are wrong.  |
| `AuroraText`             | `@/components/ui/aurora-text`                 | Brand wordmark flourish. Use blue palette sparingly.|
| `MagicCard`              | `@/components/ui/magic-card`                  | Secondary card accents. Haven't used on landing yet — start small. |
| `ShineBorder`            | `@/components/ui/shine-border`                | Alt to BorderBeam for static-feeling elements.   |
| `BlurFade`               | `@/components/ui/blur-fade`                   | Scroll-reveal. Stagger with `delay` prop.        |
| `WordRotate`             | `@/components/ui/word-rotate`                 | One rotating word in a headline — never a whole rotating sentence. |
| `Button` (shadcn)        | `@/components/ui/button`                      | Non-hero buttons and form controls. Use `variant="outline"` or `"ghost"` to keep it quiet. |
| `Container`              | `@/components/container`                      | **Legal / long-form only.** 720px. Not for marketing. |
| `LegalLayout`            | `@/components/legal-layout`                   | Privacy / terms / policy pages. Keep using it.  |

### When to introduce a new component

Inline it in the page first. If the same block appears on a **second** page, extract to `src/components/` with a short, descriptive name. Don't preemptively abstract — cost is high, payoff is low until there's a real second use.

---

## 9 · Patterns

### CTA button

- **Primary (one per hero):** `ShimmerButton` with `shimmerColor="#FF2D95"`, `background="#0A0A0E"`, `borderRadius="999px"`, body text in `text-[0.75rem] uppercase tracking-[0.3em]`.
- **Secondary:** bordered pill — `rounded-full border border-[#F7F3EA]/25 px-5 py-3 text-[0.72rem] uppercase tracking-[0.3em]`, hover border-color shifts to `#00F0FF`.
- **Inline ghost link:** underline-less, color shifts to `#FF2D95` on hover.

### Meta label

Every section begins with a tiny kicker line before the headline:

```tsx
<div className="mb-3 text-[0.65rem] tracking-[0.4em] text-[#FF2D95] uppercase">
  {"/// Portfolio 01 → 03"}
</div>
```

The `{"/// ... "}` brace wrap is **required** — `///` in raw JSX is parsed as a JS comment. Same for `//`.

### Status pill

```tsx
<span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/30 px-2.5 py-1 text-[0.55rem] tracking-[0.3em] text-white uppercase backdrop-blur">
  <span className="size-1.5 animate-pulse rounded-full bg-[#A4F0C0]" />
  Live
</span>
```

### Card

Rounded-3xl, dark card background, hairline border, accent on hover, BorderBeam only if the card is **live/featured**. See the game cards in `src/app/page.tsx` for the full recipe.

### Sticker / tape badge

Rotated ~8–14°, hard primary color, tiny uppercase caps, absolutely positioned against its parent. One per section max; they're a garnish.

---

## 10 · Iconography

- **Library:** lucide-react (declared in `components.json`).
- **Sizes:** align with text — `size-3`, `size-3.5`, `size-4` mostly. Button slots auto-size via shadcn button variants.
- **Color:** always inherit from the surrounding text color (`currentColor`). Don't assign icons their own hex unless they're a deliberate accent (e.g. a cyan "↗" against bone text).
- **Stroke weight:** default (1.5 or 2). Don't mix weights within a page.
- **ASCII flourish:** `→`, `↗`, `▶`, `★`, `●`, `⌂`, `/// ` are part of the vocabulary and can stand in for icons where a char is cleaner than an SVG.

---

## 11 · Accessibility

- Hit targets: ≥ 36px on interactive elements (buttons already ship at `h-8`–`h-9`; bump to `h-11+` for primary CTAs).
- Color contrast: bone (`#F7F3EA`) on noir meets WCAG AA. Accent colors (`#FF2D95`, `#00F0FF`) on noir pass AA for large text only — don't set body copy in magenta/cyan.
- Every decorative layer (grain, glow, meteors, sparkles) has `aria-hidden` and `pointer-events-none`. Keep doing that.
- Every external/mailto link uses a visible character (`↗`) in addition to color to signal it's external.

---

## 12 · Copy reference

A short glossary of phrases that pass the voice check:

- "Make the ground move."
- "Three projects. Zero filler."
- "Pocket worlds that rattle your thumbs and your group chat."
- "Tap to start."
- "No gacha. No dark patterns."
- "The ultimate choice game."

Language that is **off-brand** and should not appear:

- "Our platform leverages…"
- "Seamlessly experience…"
- "Powered by AI."
- "Ad-free", "no ads", "0 ads" (we use ads).

---

## 13 · Adding a new page — checklist

1. Create `src/app/<route>/page.tsx`.
2. Import `Monoton` + `Space_Mono` from `next/font/google` with the same CSS-var names (`--v1-display`, `--v1-body`).
3. Wrap in the page shell from §5.
4. Add the grain + radial glow layers from §6.
5. Top ticker (optional but recommended on full-bleed marketing).
6. Nav bar — copy the one from the landing for consistency, change the links.
7. Content sections — kick off each with a `///` meta label and a Monoton headline.
8. Bottom ticker + footer with `© 2026 Earthquake Games` + mailto.
9. Every text color uses `#F7F3EA` or an alpha of it; every accent uses `#FF2D95`, `#00F0FF`, or `#FFDE59`.
10. Any new MagicUI components: install via `pnpm dlx shadcn@latest add @magicui/<name>` — don't hand-port.
11. Smoke-test: start dev server, open the route, verify hero staggering and hover transitions feel like the landing.
12. Lint: `pnpm lint`. Ignore MagicUI library warnings; fix any errors in your own page.

---

## 14 · Known gaps / next steps

These are open items for a future pass, not blockers:

- **Tokenize the brand palette** — move the hex values from §3 into `globals.css` as CSS variables (`--eqg-noir`, `--eqg-magenta`, etc.) and switch page files to reference them. Today everything is hard-coded inline, which works but is fragile for a palette change.
- **Reconcile with shadcn tokens** — `--primary` in `globals.css` is still the old blue (`#4b8eff`). If all pages end up on the brand palette, swap the shadcn `--primary` to `#FF2D95` so shadcn-default components (buttons, inputs) render on-brand automatically.
- **Motion-reduce opt-out** — add a `prefers-reduced-motion` media query that silences meteors, border beams, marquees, and the scanline roll where it shows up.
- **Typography plate** — add a `/style-guide` page that renders every type size and component once, as a living spec.
