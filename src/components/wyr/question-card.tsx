"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"

export type WyrQuestion = {
  option_a: string
  option_a_votes: number
  option_b: string
  option_b_votes: number
}

function formatVotes(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${Math.round(n / 1_000)}K`
  return `${n}`
}

function OptionButton({
  text,
  pct,
  accent,
  isPicked,
  revealed,
  onPick,
}: {
  text: string
  pct: number
  accent: string
  isPicked: boolean
  revealed: boolean
  onPick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onPick}
      aria-pressed={isPicked}
      aria-label={`Would you rather: ${text}${revealed ? ` — ${pct}% chose this` : ""}`}
      className={cn(
        "group relative flex-1 overflow-hidden rounded-2xl border px-4 py-4 text-left transition-colors duration-300",
        "border-[#F7F3EA]/15 bg-[#0B0B10] hover:border-[#F7F3EA]/40",
        revealed && isPicked && "border-current",
      )}
      style={revealed && isPicked ? { color: accent } : undefined}
    >
      {/* result bar — fills on reveal */}
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 z-0 transition-[width] duration-700 ease-out"
        style={{
          width: revealed ? `${pct}%` : "0%",
          backgroundColor: accent,
          opacity: isPicked ? 0.28 : 0.12,
        }}
      />
      <span className="relative z-10 flex items-center justify-between gap-3">
        <span className="text-[0.95rem] leading-snug text-[#F7F3EA]">{text}</span>
        <span
          className={cn(
            "shrink-0 text-[0.95rem] font-bold tabular-nums transition-opacity duration-500 [font-family:var(--v1-display,inherit)]",
            revealed ? "opacity-100" : "opacity-0",
          )}
          style={{ color: accent }}
        >
          {pct}%
        </span>
      </span>
    </button>
  )
}

/**
 * A single "would you rather" dilemma.
 *
 * Both options, both vote totals and the computed split are rendered into the
 * HTML up front (crawlable in the static export). Clicking an option is pure
 * progressive enhancement: it reveals/animates the percentage bars — it never
 * gates the content.
 */
export function QuestionCard({
  question,
  accent,
  index,
}: {
  question: WyrQuestion
  accent: string
  index: number
}) {
  const [picked, setPicked] = useState<"a" | "b" | null>(null)
  const revealed = picked !== null

  const totalVotes = question.option_a_votes + question.option_b_votes
  const pctA =
    totalVotes > 0 ? Math.round((question.option_a_votes / totalVotes) * 100) : 50
  const pctB = 100 - pctA

  return (
    <div className="rounded-3xl border border-[#F7F3EA]/10 bg-[#0A0A0E]/60 p-4 backdrop-blur sm:p-5">
      <div className="mb-3 flex items-center gap-2 text-[0.6rem] tracking-[0.3em] text-[#F7F3EA]/40 uppercase">
        <span style={{ color: accent }}>#{index + 1}</span>
        Would you rather…
      </div>

      <div className="flex flex-col gap-2.5 sm:flex-row sm:items-stretch">
        <OptionButton
          text={question.option_a}
          pct={pctA}
          accent={accent}
          isPicked={picked === "a"}
          revealed={revealed}
          onPick={() => setPicked("a")}
        />
        <div
          aria-hidden
          className="grid shrink-0 place-items-center text-[0.65rem] tracking-[0.25em] text-[#F7F3EA]/40 uppercase sm:px-1"
        >
          or
        </div>
        <OptionButton
          text={question.option_b}
          pct={pctB}
          accent={accent}
          isPicked={picked === "b"}
          revealed={revealed}
          onPick={() => setPicked("b")}
        />
      </div>

      <div className="mt-3 text-[0.7rem] tracking-[0.15em] text-[#F7F3EA]/45 uppercase">
        {revealed ? (
          <span>
            {formatVotes(totalVotes)} votes ·{" "}
            <span style={{ color: accent }}>
              you&apos;re with the {picked === "a" ? pctA : pctB}%
            </span>
          </span>
        ) : (
          <span>Tap an option to reveal the global vote</span>
        )}
      </div>
    </div>
  )
}
