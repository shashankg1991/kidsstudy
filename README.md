# Academic Excellence Plan — 5-Year Prep Plan

A complete day-by-day academic preparation website for two children (Kindergartner and Grade 3) in Ottawa, Canada — built around exactly **1 hour of parent time, 1 hour of tutor time, and self-directed kid time** every day, with concrete step-by-step instructions for every single session.

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
- `data1.js`–`data2.js` — Kindergartner year plans (Years 1–5), each with a full weekday schedule, book list, and milestones
- `data3.js`–`data5.js` — Grade 3 year plans (Years 1–5), same structure
- `data6.js` — Saturday and Sunday schedule builder (`buildDayPlan`), varies by child, year, and season
- `data7.js` — Resource library (books, tools, programs, competitions, Ottawa-specific links)
- `app.js` — All rendering logic (year cards, the Daily Explorer, resource tabs, kid switching)
- `vercel.json` — Vercel routing configuration

**Load order matters.** `index.html` loads `data1.js` through `data7.js` first, then `app.js` last, since `app.js` reads the `yearPlans`, `resources`, and `buildDayPlan` that the data files define.

## How the day is structured

Every session in every schedule is tagged with **who** is responsible:
- Parent (red) — exactly 1 hour/day: a 15-min morning spark, a 20-min dinner discussion, and a 15-min bedtime read-aloud, plus a slightly longer Sunday review
- Tutor (blue) — exactly 1 hour/day, after school: explicit math teaching, a writing technique, and science/enrichment setup
- Self-directed (green) — everything else: school day, reading, coding, instrument practice, French app, science observation — each with exact steps a child can follow without an adult explaining it

Every session includes: a time block, the exact activity, a step-by-step instruction list, the materials needed, the expected outcome, and (for parent/tutor sessions) a coaching cue.

## Features

- 5-year year-by-year plans for both children, each year with a full sample weekday schedule
- Daily Explorer — pick child / year / day type (weekday, Saturday, Sunday) / season to see that exact day in full detail
- Book lists curated by year and child (150+ titles)
- Ottawa-specific resources — local programs, museums, competitions, RCM music pathway, IB/AP high schools
- Competition calendar (AMC 8, Math Kangaroo, GAUSS, Science Fair, etc.)
- Parent 1-hour daily script — exactly what to say and do, with a "what not to do" card

## Customization

- To edit a specific year's weekday schedule, books, or milestones: open the matching `dataN.js` file and find the `yearPlans.kinder[...]` or `yearPlans.grade3[...]` block.
- To edit Saturday/Sunday plans: edit `data6.js` (`buildDayPlan` function).
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
