# Academic Excellence Plan — 5-Year Prep Plan

A complete day-by-day academic preparation website for two children (Kindergartner and Grade 3) in Ottawa, Canada — built around exactly **1 hour of tutor time, ~50 minutes of parent time, and self-directed kid time** every day, with concrete step-by-step instructions and named resources for every single session.

## Deploy to Vercel (3 steps, 2 minutes)

### Option A — Drag & Drop (Easiest)
1. Go to **vercel.com** and sign up / log in (free)
2. On your dashboard, click **"Add New Project"**
3. Drag the entire `harvard-prep` folder into the upload box
4. Click **Deploy** — your site will be live in ~30 seconds

### Option B — GitHub (Recommended for updates)
1. Create a free GitHub account at github.com
2. Create a new repository called `harvard-prep`
3. Upload all files in this folder to the repository
4. Go to vercel.com → "Add New Project" → Import from GitHub
5. Select your repository → click Deploy
6. Every time you update files on GitHub, Vercel auto-redeploys

### Option C — Vercel CLI
```bash
npm install -g vercel
cd harvard-prep
vercel
```
Follow the prompts. Site deploys in ~20 seconds.

## What's inside

- `index.html` — HTML structure and all CSS (no inline JS — loads the files below)
- `yr-k1.js`–`yr-k5.js` — Kindergartner-track year plans (actual Grade 1–5), each with **5 genuinely distinct weekday schedules** (Monday–Friday), a weekly rhythm overview, book list, and milestones
- `yr-g3.js`–`yr-g7.js` — Grade 3 student-track year plans (actual Grade 3–7), same structure
- `weekend.js` — Saturday and Sunday schedule builder, plus the `buildDayPlan` dispatcher that routes any of the 7 days to the right content
- `data7.js` — Resource library (books, tools, programs, competitions, Ottawa-specific links)
- `app.js` — All rendering logic (year overview cards, the 7-day Daily Explorer, resource tabs, kid switching)
- `vercel.json` — Vercel routing configuration

**Load order matters.** `index.html` loads `yr-k1.js` through `yr-g7.js`, then `weekend.js`, then `data7.js`, then `app.js` last, since `app.js` reads the `yearPlans`, `resources`, and `buildDayPlan` that the data files define.

## How each day is structured

Every grade-year now has **7 genuinely different days**, not one repeated "weekday" template:
- **Monday–Friday** each have a different primary academic focus (e.g. Monday = Number Sense + reading fluency, Tuesday = Writing, Wednesday = a second math strand + coding, Thursday = Reading Comprehension + Science, Friday = weekly review and consolidation) — this spreads subjects across the week the way real instructional time actually works, rather than cramming everything into every single day.
- **Saturday** is the enrichment/outing day — competitions, museums, clubs, long-form projects.
- **Sunday** is the deep-work and weekly-review day — passion projects, competition prep, and the parent's weekly check-in with the tutor.

Every session in every schedule is tagged with **who** is responsible:
- Parent (red) — a 15-min morning spark, a 20-min dinner discussion, and a 15-min bedtime read-aloud on weekdays, plus a longer Sunday review (~50 min/day total)
- Tutor (blue) — exactly 1 hour/day, after school, with specific named resources for every activity (exact websites, exact book titles, exact problem counts)
- Self-directed (green) — school day, reading, coding, instrument practice, French support, science observation — each with exact steps a child can follow without an adult explaining it

Every session includes: a time block, the exact activity, a step-by-step instruction list with specific named resources (websites, books, problem counts), the materials needed, the expected outcome, and (for parent/tutor sessions) a coaching cue.

## Features

- 5-year plans for both children, now broken into **70 distinct day-by-day schedules** (7 days × 5 years × 2 children)
- A weekly rhythm overview on every year card showing the focus of each weekday at a glance
- Daily Explorer — pick child / year / **specific day of the week** / season to see that exact day in full detail
- Book lists curated by year and child (150+ titles)
- Ottawa-specific resources — local programs, museums, competitions, RCM music pathway, IB/AP high schools
- Competition calendar (AMC 8, Math Kangaroo, GAUSS, Science Fair, etc.) woven into specific weekdays and weekends
- Parent's ~50-minute daily script — exactly what to say and do, with a "what not to do" card

## Customization

- To edit a specific grade's weekday schedules, books, or milestones: open the matching `yr-*.js` file and find the `weekdaySchedules.monday` (or tuesday/wednesday/etc.) block.
- To edit Saturday/Sunday plans: edit `weekend.js` (`buildDayPlan` function).
- To edit the resource library: edit `data7.js`.
- To change how anything is displayed (HTML structure, styling hooks): edit `app.js` and the `<style>` block in `index.html`.

## Ontario curriculum alignment

Every year's math and language content is now built directly against the official **Ontario Curriculum (Mathematics 2020, Language 2023)** expectations, not generic grade-level assumptions:

- **Math**: exact number ranges, multiplication-fact timing, and strand expectations per grade (e.g. Grade 1 = facts to 10, numbers to 50; Grade 3 = multiplication only ×2/×5/×10; Grade 4 = full 1×1–10×10 tables begin; Grade 5 = full multiplication/division mastery target; Grade 6 = integers introduced; Grade 7 = rational numbers and ratios).
- **Language**: aligned to the 4-strand structure (Foundations, Comprehension, Composition, Transferable Skills).
- **EQAO**: the Grade 3 (current) and Grade 6 assessment years include a light, calmly-framed familiarity block in the tutor session — never test-prep drilling, and explicitly only in the 6-8 weeks before the actual assessment window.
- **Early French Immersion (EFI)**: every year reflects the real OCDSB EFI structure — Math and English Language taught in English; Science, Social Studies, Arts, and Health taught in French at 60% (dropping to 50% in Grade 7). French-related sessions reinforce school immersion content rather than running a separate, disconnected "French enrichment" track.
- Each year card includes a **curriculum context note** (blue box) explaining exactly what's true for that grade and why.

The AMC/Math Kangaroo/competition layer and other enrichment content sits alongside this curriculum foundation, not in place of it — curriculum mastery comes first in the tutor hour, enrichment second.

## Note on "guaranteeing" admission

No plan can guarantee admission to any specific university — top-school acceptance rates are typically in the low single digits and the process is holistic everywhere. What this plan guarantees: your children will develop the academic skills, character, habits, and achievements that give them the strongest possible foundation for any competitive university — or any path in life they choose.
