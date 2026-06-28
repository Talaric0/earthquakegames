import data from "@/data/wyr-questions.json"
import type { WyrQuestion } from "@/components/wyr/question-card"

export type CategoryData = {
  fullCount: number
  exposedCount: number
  questions: WyrQuestion[]
}

const categories = data.categories as Record<string, CategoryData>

export function getCategoryData(name: string): CategoryData | undefined {
  return categories[name]
}

const totalVotes = (q: WyrQuestion) => q.option_a_votes + q.option_b_votes

/** Highest-voted questions across every category, for the hub's featured strip. */
export function topQuestions(
  n: number,
): { question: WyrQuestion; category: string }[] {
  return Object.entries(categories)
    .flatMap(([category, c]) => c.questions.map((question) => ({ question, category })))
    .sort((a, b) => totalVotes(b.question) - totalVotes(a.question))
    .slice(0, n)
}

export const catalogueTotal = data.totals.fullCatalogue
export const exposedTotal = data.totals.exposed
