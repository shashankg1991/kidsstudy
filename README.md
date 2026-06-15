# Harvard Bound — 5-Year Prep Plan

A complete day-by-day academic preparation website for two children (Kindergartner and Grade 3) targeting elite university admission, built for a family in Ottawa, Canada.

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

- `index.html` — The complete single-file website (all CSS + JS inline)
- `vercel.json` — Vercel routing configuration

## Features

- **5-year year-by-year plans** for both children
- **Books lists** curated by year and child (200+ titles)
- **Daily schedules** for weekdays, Saturdays, and Sundays across all 4 seasons
- **Ottawa-specific resources** (local programs, museums, competitions)
- **Competition calendar** (AMC 8, Math Kangaroo, GAUSS, Science Fair, etc.)
- **Parent 1-hour daily guide**
- **Resource library** with apps, tools, kits, and programs by age

## Customization

Everything is in `index.html`. Search for:
- `Ottawa` to update city-specific content
- `years.kinder` or `years.grade3` in the `<script>` section to edit year plans
- `scheduleData` to edit daily schedules
- `resourceSets` to update book/tool recommendations

## Note on "guaranteeing" admission

No plan can guarantee Harvard admission — acceptance rates are ~3.4% and holistic.
What this plan guarantees: your children will develop the academic skills, character,
habits, and achievements that give them the strongest possible foundation for any
elite university — or any path in life they choose.
