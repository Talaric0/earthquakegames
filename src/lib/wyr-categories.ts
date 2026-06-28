/**
 * Canonical taxonomy for the Would You Rather questions hub.
 *
 * `name` matches the `category` value in the app data exactly (and the keys in
 * src/data/wyr-questions.json). Counts are NOT stored here — they live in the
 * generated data file so there's a single source of truth. SEO copy is unique
 * per category to keep each hub page substantial.
 */
export type WyrCategory = {
  /** Exact category name as it appears in the app data. */
  name: string
  /** URL slug under /would-you-rather/questions/. */
  slug: string
  emoji: string
  /** Brand accent hex used for the category's UI. */
  accent: string
  /** Short one-liner for cards. */
  blurb: string
  /** Page <h1>. */
  h1: string
  /** Page <title> (root layout appends "| Earthquake Games"). */
  title: string
  /** Meta description, ~150 chars, unique. */
  metaDescription: string
  /** Intro paragraph shown under the h1. */
  intro: string
}

export const CATEGORIES: WyrCategory[] = [
  {
    name: "Lifestyle",
    slug: "lifestyle",
    emoji: "🏠",
    accent: "#FFDE59",
    blurb: "Daily life & everyday habits.",
    h1: "Lifestyle Would You Rather Questions",
    title: "Lifestyle Would You Rather Questions",
    metaDescription:
      "Would you rather questions about everyday life, habits and impossible daily trade-offs — vote and see how the world splits, then play 800+ more in the app.",
    intro:
      "The dilemmas hiding inside ordinary life. These lifestyle would you rather questions force a choice between two everyday trade-offs — sleep or money, city or countryside, never late or never early. Tap an option to reveal how everyone else voted.",
  },
  {
    name: "Dark",
    slug: "dark",
    emoji: "🌑",
    accent: "#C9C4FF",
    blurb: "Moral dilemmas & dark choices.",
    h1: "Dark Would You Rather Questions",
    title: "Dark Would You Rather Questions",
    metaDescription:
      "Dark, twisted would you rather questions and moral dilemmas with no easy answer. Pick a side, reveal the global vote, and find more in the app.",
    intro:
      "For when the easy answer isn't on the table. These dark would you rather questions trade in moral dilemmas, grim hypotheticals and impossible sacrifices. Choose your side, then see whether the rest of the world agreed with you.",
  },
  {
    name: "Entertainment",
    slug: "entertainment",
    emoji: "🎬",
    accent: "#00F0FF",
    blurb: "Movies, music & pop culture.",
    h1: "Entertainment Would You Rather Questions",
    title: "Entertainment Would You Rather Questions",
    metaDescription:
      "Would you rather questions about movies, music, TV and pop culture. Vote on the ultimate fan dilemmas and see how the crowd splits.",
    intro:
      "Settle the great pop-culture debates. These entertainment would you rather questions pit movies, music, shows and fandoms against each other. Make your call and watch the global verdict roll in.",
  },
  {
    name: "Appearance",
    slug: "appearance",
    emoji: "👀",
    accent: "#00F0FF",
    blurb: "Looks & body changes.",
    h1: "Appearance Would You Rather Questions",
    title: "Appearance Would You Rather Questions",
    metaDescription:
      "Would you rather questions about looks, style and body changes. Pick the lesser evil and see how the world voted, then play more in the app.",
    intro:
      "Vanity, meet impossible choices. These appearance would you rather questions ask you to trade one part of how you look for another. Tap your pick and reveal where the crowd landed.",
  },
  {
    name: "Fantasy",
    slug: "fantasy",
    emoji: "🧙",
    accent: "#A4F0C0",
    blurb: "Magic & mythical worlds.",
    h1: "Fantasy Would You Rather Questions",
    title: "Fantasy Would You Rather Questions",
    metaDescription:
      "Fantasy would you rather questions about magic, mythical worlds and impossible powers. Choose your fate and see how everyone else decided.",
    intro:
      "If the rules of reality were yours to break. These fantasy would you rather questions drop you into worlds of magic, monsters and myth. Pick a path and find out how the world would choose.",
  },
  {
    name: "Food & Drink",
    slug: "food-and-drink",
    emoji: "🍔",
    accent: "#FFDE59",
    blurb: "Culinary conundrums.",
    h1: "Food & Drink Would You Rather Questions",
    title: "Food & Drink Would You Rather Questions",
    metaDescription:
      "Would you rather questions about food and drink — the tastiest, cruellest culinary trade-offs. Vote and see the global split, plus more in the app.",
    intro:
      "The most delicious way to lose a friend. These food and drink would you rather questions force a choice between flavours, cravings and culinary sacrifices. Tap a side to reveal the votes.",
  },
  {
    name: "Relationships",
    slug: "relationships",
    emoji: "💕",
    accent: "#FF2D95",
    blurb: "Love, friends & family.",
    h1: "Relationships Would You Rather Questions",
    title: "Relationships Would You Rather Questions",
    metaDescription:
      "Would you rather questions about love, friends and family — perfect for couples and group chats. Vote on the dilemmas and see how others answered.",
    intro:
      "The questions that start the best arguments. These relationship would you rather questions dig into love, friendship and family loyalty — ideal for couples and group chats. Make your choice and compare with the world.",
  },
  {
    name: "Skills",
    slug: "skills",
    emoji: "🎯",
    accent: "#A4F0C0",
    blurb: "Talents & expertise.",
    h1: "Skills Would You Rather Questions",
    title: "Skills Would You Rather Questions",
    metaDescription:
      "Would you rather questions about talents, abilities and expertise. Which skill would you trade for another? Vote and see the global split.",
    intro:
      "If you could only master one. These skills would you rather questions ask which talent you'd take and which you'd give up. Choose your side and see what everyone else picked.",
  },
  {
    name: "Fame & Fortune",
    slug: "fame-and-fortune",
    emoji: "💰",
    accent: "#FFDE59",
    blurb: "Wealth & celebrity.",
    h1: "Fame & Fortune Would You Rather Questions",
    title: "Fame & Fortune Would You Rather Questions",
    metaDescription:
      "Would you rather questions about money, fame and celebrity. Rich or famous? Vote on the trade-offs and see how the world splits.",
    intro:
      "Money, fame, or neither — pick your poison. These fame and fortune would you rather questions weigh wealth against celebrity and everything in between. Tap an option to reveal the verdict.",
  },
  {
    name: "Superpowers",
    slug: "superpowers",
    emoji: "⚡",
    accent: "#FFB547",
    blurb: "Extraordinary abilities.",
    h1: "Superpowers Would You Rather Questions",
    title: "Superpowers Would You Rather Questions",
    metaDescription:
      "Superpower would you rather questions — flight or invisibility, time travel or telepathy? Make the call and see how the world voted.",
    intro:
      "The classic playground debate, settled by data. These superpower would you rather questions make you choose between extraordinary abilities. Pick your power and see how the rest of the world would use theirs.",
  },
]

const BY_SLUG = new Map(CATEGORIES.map((c) => [c.slug, c]))
const BY_NAME = new Map(CATEGORIES.map((c) => [c.name, c]))

export function categoryBySlug(slug: string): WyrCategory | undefined {
  return BY_SLUG.get(slug)
}

export function categoryByName(name: string): WyrCategory | undefined {
  return BY_NAME.get(name)
}
