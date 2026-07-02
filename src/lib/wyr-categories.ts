/**
 * Canonical taxonomy for the Would You Rather questions hub.
 *
 * `name` matches the `category` value in the app data exactly (and the keys in
 * src/data/wyr-questions.json). Counts are NOT stored here — they live in the
 * generated data file so there's a single source of truth. SEO copy is unique
 * per category to keep each hub page substantial. Vote-split claims in the
 * copy are drift-tolerant approximations of the snapshot in wyr-questions.json
 * — keep them roughly in sync when the data file regenerates.
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
  /**
   * Standalone answer for the "What are X would you rather questions?" FAQ.
   * Deliberately distinct from `intro` (no duplicated extraction blocks) and
   * written as a self-contained ~130-word definition an AI/search snippet can
   * lift whole.
   */
  faqDefinition: string
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
      "The dilemmas hiding inside ordinary life. These lifestyle would you rather questions force a choice between two everyday trade-offs — be a cat or be a dog, sleep three hours a night or fifteen, spend a year in jail or a year alone in the mountains. Some end in landslides: almost two-thirds of voters would rather be a dog. Others split the world clean down the middle — the sleep debate sits at a near 50/50 deadlock after more than 1.7 million votes. It's the biggest category in the Would You Rather catalogue, and the one most likely to start an argument at dinner. Tap an option to reveal how everyone else voted.",
    faqDefinition:
      "Lifestyle would you rather questions are dilemmas about everyday living — the routines, habits and creature comforts you'd trade away if you had to pick. Instead of far-fetched hypotheticals, they weaponise the familiar: your sleep schedule, your pets, your temperature tolerance, where you live and how you spend your time. That familiarity is what makes them work as a party game — everyone has a stake in whether always-hot or always-cold is worse, so everyone argues their corner. The best ones expose real values: choosing a year in jail over a year of isolation says something about how much you need other people. Every dilemma here shows the live global vote split, so you can see whether your version of a normal life matches everyone else's.",
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
      "For when the easy answer isn't on the table. These dark would you rather questions trade in moral dilemmas, grim hypotheticals and impossible sacrifices — burn or drown, lose your tongue or lose your teeth, be the first killed in a group or the last. Some verdicts are decisive: nearly seven in ten voters would rather drown. Others refuse to settle — first-killed versus last-killed has stayed locked around 50/50 across 1.7 million votes, because both options are genuinely horrible. That's the point of the category: there is no good outcome, only the one you can live with. Choose your side, then see whether the rest of the world agreed with you.",
    faqDefinition:
      "Dark would you rather questions are the heavy end of the game: forced choices between two outcomes you'd never willingly pick — painful deaths, cruel bargains, moral compromises and worst-case scenarios. They work because they remove the comfortable middle ground; you can't opt out, so you have to decide which nightmare you could actually survive, and then defend that reasoning to your friends. Played in a group, they reliably produce the longest arguments of any category, because people justify their picks with genuinely different logic — minimising pain, protecting others, or simple stubborn pride. They're intended for older players and thicker skins. Each dilemma on this page shows the real global vote split, so you can find out whether your darkest instincts are common or rare.",
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
      "Settle the great pop-culture debates. These entertainment would you rather questions pit movies, music, TV and fandoms against each other — watch only dramas forever or only comedies, give up YouTube or give up Facebook, speak only in questions or only in movie quotes. Some are blowouts: a crushing 86% of voters choose a lifetime of comedies over dramas. Others expose real fault lines in what people refuse to live without. It's the category where everyone believes their answer is objectively correct — which is exactly what makes it dangerous in a group chat. Make your call and watch the global verdict roll in.",
    faqDefinition:
      "Entertainment would you rather questions are dilemmas about the media you love — films, music, television, celebrities and the platforms you'd defend to the death. The format forces a ranking you'd never make voluntarily: nobody wants to declare that comedy matters more than drama or that one app is expendable, but the game makes you commit. That's why this category thrives in group chats and around pub tables — taste feels personal, so every vote reads as a small confession. The dilemmas range from silly (speaking only in movie quotes) to genuinely revealing (which platform you'd actually delete forever). Every question here displays the live worldwide vote split, so you can see instantly whether your taste puts you with the crowd or out on your own.",
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
      "Vanity, meet impossible choices. These appearance would you rather questions ask what you'd trade about the way you look — be four feet tall or ten feet tall, have half your body burned or all of it tattooed, be ugly or be attractive but punched in the face every single morning. That last one isn't close: nearly three-quarters of voters take the daily punch. The category is a running experiment in how much people will endure for their looks — and the vote splits suggest the answer is 'almost anything'. Tap your pick and reveal where the crowd landed.",
    faqDefinition:
      "Appearance would you rather questions are dilemmas about looks, bodies and the price you'd pay to change them — height, faces, scars, tattoos and every permanent trade-off in between. They cut deeper than they first appear: choosing between four feet tall and ten feet tall is really a question about which kind of attention you could tolerate, and the famous 'attractive but punched every morning' dilemma is a referendum on exactly how much daily suffering good looks are worth (the global vote says: a lot). Because everybody has a body and an opinion about it, no one can sit these out. Each question on this page shows the live worldwide split, so you can check whether your vanity threshold is normal or extreme.",
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
      "If the rules of reality were yours to break. These fantasy would you rather questions drop you into worlds of magic, monsters and myth — be Batman or be Superman, take the lightsaber or the helper monkey, live as a centaur or a mermaid. Some results defy the source material: Batman edges out Superman even without any powers. Others are landslides — nearly three-quarters of players choose hero over villain, which says something reassuring about humanity. It's the category for anyone whose honest answer to 'be realistic' is 'no'. Pick a path and find out how the world would choose.",
    faqDefinition:
      "Fantasy would you rather questions are dilemmas set outside the laws of physics — superheroes, magic, mythical creatures, enchanted objects and impossible worlds. The premise is unrealistic; the arguments are not. Deciding between Batman and Superman is really a debate about whether money and preparation beat raw power, and choosing between a lightsaber and a helper monkey is a question about whether you want a weapon or a friend. That gap between silly setup and serious reasoning is what makes the category a party-game staple — everyone has canon, everyone has logic, and nobody can be proven wrong. Every dilemma here shows the real global vote split, so you can finally learn whether the world shares your taste in impossible things.",
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
      "The most delicious way to lose a friend. These food and drink would you rather questions force a choice between flavours, cravings and culinary sacrifices — Coke or Pepsi, Pringles or Lay's, a lifetime of fruit or a lifetime of vegetables. Some debates are settled: Coke takes almost two-thirds of the vote, and fruit crushes vegetables with a brutal 88%. Others stay genuinely contested — Skittles versus M&M's has over a million votes and no runaway winner. It's proof that nothing divides a table faster than taste. Tap a side to reveal the votes.",
    faqDefinition:
      "Food and drink would you rather questions are dilemmas about what you eat, what you'd give up and which cravings would win a fight — brand rivalries, lifetime bans and impossible menus. They're the most democratic category in the game: you don't need pop-culture knowledge or a strong stomach for hypotheticals, just opinions about dinner, and everyone has those. That's also what makes them dangerous — food loyalty runs deeper than logic, so a simple cola question can outlast an entire meal. The classic brand battles (Coke–Pepsi, Pringles–Lay's, Skittles–M&M's) carry some of the biggest vote totals in the whole catalogue. Each dilemma shows the live global split, so you can see at a glance whether your palate is mainstream or a minority of one.",
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
      "The questions that start the best arguments. These relationship would you rather questions dig into love, friendship and family loyalty — have loved and lost or never loved at all, raise two sets of twins or quadruplets, and harder bargains you'll be glad are hypothetical. The world has answered some of them emphatically: over seven in ten voters would rather have loved and lost. Ideal for couples, awkward for exes, irresistible for group chats — these are the dilemmas that reveal what people actually value in the people around them. Make your choice and compare with the world.",
    faqDefinition:
      "Relationship would you rather questions are dilemmas about love, friendship, family and the loyalties between them — who you'd protect, what you'd sacrifice and which heartbreaks you could bear. They're the most personal category in the game: a question about twins versus quadruplets is secretly a question about chaos tolerance, and 'loved and lost versus never loved at all' asks whether pain is a fair price for joy — seven in ten voters say yes. Couples use them as conversation starters; group chats use them as slow-motion ambushes. Some dilemmas in this set are heavy, deliberately — the game is more interesting when something real is at stake. Every question shows the live global vote split, so you can see how your heart compares with everyone else's.",
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
      "If you could only master one. These skills would you rather questions ask which talent you'd take and which you'd give up — dance like Michael Jackson or sing like Freddie Mercury, run a marathon or swim five miles, lose reading or lose writing. Some are dead heats: the marathon-versus-swim debate is split almost exactly 50/50 after 1.8 million votes. Others have a clear people's champion — Michael Jackson's moves beat Freddie's voice by a comfortable margin. It's the category that quietly reveals what people think talent is actually for. Choose your side and see what everyone else picked.",
    faqDefinition:
      "Skills would you rather questions are dilemmas about abilities — talents you'd love to have, competencies you'd hate to lose, and the trade-offs between mastery and versatility. They sound lighter than they are: choosing between dancing like Michael Jackson and singing like Freddie Mercury is really a choice about how you'd want to be admired, and deciding whether you'd rather lose reading or lose writing forces you to work out which skill your life actually runs on. The category rewards self-knowledge — the fun isn't the pick, it's hearing people defend it. Several of these dilemmas sit at genuine 50/50 deadlocks after millions of votes, which almost never happens elsewhere in the game. Tap any option to reveal the live global split and find out which side you're on.",
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
      "Money, fame, or neither — pick your poison. These fame and fortune would you rather questions weigh wealth against celebrity and everything in between — be famous now or go down in the history books, be a rock star or a movie star, win the lottery or live twice as long. The votes tell a story: movie star beats rock star by a landslide, and given the choice, most people take the lottery money over the extra decades. Other dilemmas stay uncomfortably close, because nobody fully trusts their own price. Tap an option to reveal the verdict.",
    faqDefinition:
      "Fame and fortune would you rather questions are dilemmas about wealth, celebrity and legacy — what you'd trade for money, what money can't fix, and whether being known is worth being watched. Each one is a disguised price tag: 'live to 80 in poverty or 40 in riches' asks what a comfortable year is worth in lifespan, and 'famous in this lifetime or remembered by history' asks whether recognition counts if you never get to feel it. The global votes are revealing — comfort tends to beat legacy, and screen fame beats stage fame decisively — but the margins shift dilemma by dilemma, because everyone's price is different. Every question here shows the live worldwide split, so you can find out exactly how expensive your soul turns out to be.",
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
      "The classic playground debate, settled by data. These superpower would you rather questions make you choose between extraordinary abilities — fly or breathe underwater, be invincible or invisible, teleport or time travel. Some are ancient rivalries with decisive answers: flight wins 72% of the vote against breathing underwater. Others are genuine philosophical stalemates — teleportation versus time travel has hovered at 50/50 across more than 1.6 million votes, because one buys convenience and the other buys do-overs. Pick your power and see how the rest of the world would use theirs.",
    faqDefinition:
      "Superpower would you rather questions are dilemmas between extraordinary abilities — flight, invisibility, teleportation, time travel, telepathy and the other powers everyone has already privately ranked. They're the oldest questions in the game, but the voting data gives them a second life: it turns out the playground never settled anything. Flight beats underwater breathing decisively, yet teleport-versus-time-travel splits the world almost perfectly in half — a genuine divide between people who want their time back and people who want it over again. Your picks say more than you'd think: invisibility fans and invincibility fans are planning very different weeks. Each dilemma on this page shows the real global vote split, so you can settle the argument with numbers instead of volume.",
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
