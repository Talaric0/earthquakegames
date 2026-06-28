#!/usr/bin/env node
/**
 * Imports a curated, brand-safe taster of Would You Rather questions from the
 * sibling app repo (../wyr) into this repo as src/data/wyr-questions.json.
 *
 * WHY THIS EXISTS: the app's questions live in a separate repo, but Cloudflare
 * Workers Builds only clones this repo — so the data we publish must be committed
 * here. Re-run this and commit the output whenever the app's questions change.
 *
 * SAFETY: only reads free_questions.json + pro_questions.json. The adult/explicit
 * files are never opened, so nothing NSFW can leak into the public site.
 * pro_questions.json is the PAID tier, so we expose only a small sampler per
 * category and tease the rest — never the full catalogue.
 *
 * Usage:
 *   node scripts/import-questions.mjs            # reads ../wyr
 *   WYR_DIR=/path/to/wyr node scripts/import-questions.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { resolve, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, "..")
const WYR_DIR = process.env.WYR_DIR || resolve(repoRoot, "..", "wyr")

/** Max questions exposed publicly per category (free + Pro sampler). */
const CAP_PER_CATEGORY = 20
const OUT_PATH = resolve(repoRoot, "src", "data", "wyr-questions.json")

function load(file) {
  const path = resolve(WYR_DIR, file)
  try {
    return JSON.parse(readFileSync(path, "utf8"))
  } catch (err) {
    console.error(`✘ Could not read ${path}`)
    console.error(`  Set WYR_DIR to the app repo path. (${err.message})`)
    process.exit(1)
  }
}

const total = (q) => (q.option_a_votes || 0) + (q.option_b_votes || 0)

const clean = (q) => ({
  option_a: String(q.option_a).trim(),
  option_a_votes: Number(q.option_a_votes) || 0,
  option_b: String(q.option_b).trim(),
  option_b_votes: Number(q.option_b_votes) || 0,
})

const free = load("free_questions.json")
const pro = load("pro_questions.json")

// Group by category. Free first (already-free content), then Pro to fill.
const byCat = new Map()
const ensure = (name) => {
  if (!byCat.has(name)) byCat.set(name, { free: [], pro: [] })
  return byCat.get(name)
}
for (const q of free) ensure(q.category).free.push(q)
for (const q of pro) ensure(q.category).pro.push(q)

const categories = {}
let exposedTotal = 0
let fullTotal = 0

for (const [name, { free: f, pro: p }] of byCat) {
  const fullCount = f.length + p.length
  fullTotal += fullCount

  // All free, then highest-voted Pro until we hit the cap.
  const proSorted = [...p].sort((a, b) => total(b) - total(a))
  const picked = [...f, ...proSorted].slice(0, CAP_PER_CATEGORY)

  // Display most-engaging first.
  picked.sort((a, b) => total(b) - total(a))

  const questions = picked.map(clean)
  exposedTotal += questions.length
  categories[name] = {
    fullCount,
    exposedCount: questions.length,
    questions,
  }
}

const output = {
  generatedAt: new Date().toISOString(),
  source: "wyr free_questions.json + pro_questions.json",
  perCategoryCap: CAP_PER_CATEGORY,
  totals: {
    categories: Object.keys(categories).length,
    exposed: exposedTotal,
    fullCatalogue: fullTotal,
  },
  categories,
}

mkdirSync(dirname(OUT_PATH), { recursive: true })
writeFileSync(OUT_PATH, JSON.stringify(output, null, 2) + "\n")

console.log(`✓ Wrote ${OUT_PATH}`)
console.log(
  `  ${exposedTotal} questions exposed across ${Object.keys(categories).length} categories (of ${fullTotal} in catalogue)`,
)
for (const [name, c] of Object.entries(categories)) {
  console.log(`  · ${name}: ${c.exposedCount}/${c.fullCount}`)
}
