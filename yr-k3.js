"use strict";

yearPlans.kinder[2] = {
  label: "Grade 3 — EQAO Year",
  theme: "Ontario Math (Number to 1,000, multiplication ×2/×5/×10), Language strands C and D deepen, first EQAO assessment",
  curriculumNote: "Grade 3 EFI continues at 60% French instructional time. This is also the year of the Grade 3 EQAO assessment (Primary Division) — a low-stakes provincial check of reading, writing, and math against end-of-Grade-3 expectations, written in late May/early June. It does not appear on the report card and has no bearing on Grade 4 placement.",
  tip: "Ontario expects addition/subtraction facts mastered by the end of this year — multiplication is just beginning (×2, ×5, ×10 only). EQAO needs no special prep beyond normal curriculum coverage and one calm walkthrough of the official sample test near the assessment window, which Friday sessions reflect only in spring.",
  weeklyRhythm: [
    { day: "Monday", focus: "Math: Number Sense to 1,000", secondary: "Reading fluency check" },
    { day: "Tuesday", focus: "Writing: Paragraphs", secondary: "French immersion vocabulary" },
    { day: "Wednesday", focus: "Math: Multiplication ×2/×5/×10", secondary: "Coding & Financial Literacy" },
    { day: "Thursday", focus: "Reading Comprehension", secondary: "Science observation" },
    { day: "Friday", focus: "Weekly Review (EQAO familiarity near assessment window)", secondary: "Writing piece + French wrap-up" }
  ],
  weekdaySchedules: {
    monday: [
      {
        who: "parent", label: "Parent", time: "7:30–7:45 AM",
        title: "Monday Morning Spark — Number Sense to 1,000",
        subject: "🧠 Math", subjectStyle: "background:#f5f3ff;color:#6d28d9",
        activity: "Mental math and rounding within 1,000",
        steps: [
          "'We have 340 stickers and 215 more arrive. How many now?' (Ontario Gr.3 B2). Ask for the strategy.",
          "Rounding: 'Round 462 to the nearest ten. Now to the nearest hundred.'",
          "Show a 3-digit number and ask: 'how many hundreds, tens, ones?'"
        ],
        materials: ["Paper and pencil"],
        outcome: "Place value to 1,000 and rounding reinforced before school",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "8:00 AM–3:30 PM",
        title: "Grade 3 School Day (Early French Immersion)",
        subject: "🏫 School", subjectStyle: "background:#e8f7ee;color:#1b5e38",
        activity: "Full engagement at school",
        steps: [
          "Arrive ready, organized independently.",
          "During French-taught subjects: guess unfamiliar words from context before asking for help.",
          "During Math: if work feels easy, write a harder related question to discuss with the tutor."
        ],
        materials: ["School supplies", "Packed snack and lunch"],
        outcome: "Engaged school day, French immersion and English literacy building together",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "3:30–4:00 PM",
        title: "Outdoor Free Play",
        subject: "🌿 Physical", subjectStyle: "background:#e8f7ee;color:#1b5e38",
        activity: "Unstructured outdoor time before tutoring",
        steps: ["Outside immediately, no screens first.", "Free play for 25-30 minutes."],
        materials: ["Outdoor space and gear"],
        outcome: "Brain reset before the tutor session",
        parentCue: null
      },
      {
        who: "tutor", label: "Tutor", time: "4:00–5:00 PM",
        title: "Tutor Session — Number to 1,000 + Reading Fluency",
        subject: "📐 Curriculum", subjectStyle: "background:#e8f3fd;color:#1565a0",
        activity: "Ontario Math Number strand (primary) + reading fluency check (secondary)",
        steps: [
          "MATH (35 min) — Ontario Gr.3 B1/B2: Round numbers to the nearest ten and hundred using a number line (printable at mathies.ca). Add/subtract within 1,000 — 5 problems using mental strategies (e.g. breaking into hundreds/tens/ones), 5 using the standard written algorithm. Compare answers by estimating first, then calculating.",
          "READING FLUENCY (15 min) — A chapter from a Grade 3-level book (see book list). Time exactly 1 minute reading aloud, log words-per-minute (Grade 3 target by June: 70-90 correct words per minute). Ask 2 comprehension questions.",
          "WRAP-UP (10 min) — Mental math speed round: 5 quick addition/subtraction-within-1000 problems, answered out loud as fast as possible."
        ],
        materials: ["Number line (printable, mathies.ca)", "Grade 3-level chapter book", "Timer and tracking sheet"],
        outcome: "Rounding and operations to 1,000 practised, reading rate measured and logged",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "5:00–5:45 PM",
        title: "Reading + Coding + Instrument",
        subject: "📖 Self-study", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Reading, a Scratch project, and instrument if started",
        steps: [
          "READING (25 min): Read silently from the current chapter book. After finishing a chapter, write 1 sentence about how you feel about what happened.",
          "CODING (10 min): scratch.mit.edu — open your current project and add one new feature (a sprite, sound, or movement).",
          "INSTRUMENT (10 min, if started this year): scales once, then assigned piece twice through."
        ],
        materials: ["Current chapter book", "Laptop/tablet for Scratch", "Instrument if applicable"],
        outcome: "Reading comprehension, coding project progress, and instrument habit (if applicable) all advanced",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "5:45–6:15 PM",
        title: "Math Practice + Passion Project",
        subject: "🔢 + 🎨", subjectStyle: "background:#f0fdf4;color:#166534",
        activity: "Mental math app + ongoing passion project",
        steps: [
          "MATH (15 min): Khan Academy Kids or IXL Ontario Grade 3, Number Sense section — one full activity set on rounding or 3-digit addition/subtraction.",
          "PASSION PROJECT (15 min): Add to the notebook."
        ],
        materials: ["Tablet with Khan Academy Kids or IXL", "Passion project notebook"],
        outcome: "Number sense reinforced, sustained interest continues",
        parentCue: null
      },
      {
        who: "parent", label: "Parent", time: "6:30–6:50 PM",
        title: "Monday Dinner Discussion",
        subject: "💛 Family", subjectStyle: "background:#faeeda;color:#92400e",
        activity: "Talk about rounding and the book",
        steps: [
          "Ask: 'What's a number you rounded today? Round it to the nearest ten and then the nearest hundred.'",
          "Ask about the book: 'What's the main character's problem so far?'"
        ],
        materials: ["Dinner", "No phones"],
        outcome: "Math and reading both reinforced through talk",
        parentCue: null
      },
      {
        who: "parent", label: "Parent", time: "7:45–8:00 PM",
        title: "Bedtime Read-Aloud + Goal Review",
        subject: "📖 Read", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Read aloud, check today's goal",
        steps: ["Read one chapter of a book slightly above level.", "3 gratitudes.", "Lights out 8:00 PM."],
        materials: ["Current read-aloud book"],
        outcome: "Vocabulary, sleep, and connection all supported",
        parentCue: null
      }
    ],
    tuesday: [
      {
        who: "parent", label: "Parent", time: "7:30–7:45 AM",
        title: "Tuesday Morning Spark — Vocabulary & Ethics",
        subject: "🧠 Language", subjectStyle: "background:#f5f3ff;color:#6d28d9",
        activity: "A word and a simple ethical question",
        steps: [
          "Word of the day on a sticky note — e.g. PERSUADE. Use it together.",
          "Light ethical question: 'Is it ever okay to break a small rule? Why or why not?' Listen, don't correct."
        ],
        materials: ["Sticky note pad", "Marker"],
        outcome: "Vocabulary and reasoning both primed before school",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "8:00 AM–3:30 PM",
        title: "Grade 3 School Day (Early French Immersion)",
        subject: "🏫 School", subjectStyle: "background:#e8f7ee;color:#1b5e38",
        activity: "Full engagement at school",
        steps: ["Arrive ready.", "Try using today's word of the day if a chance comes up.", "Participate actively in French-taught subjects."],
        materials: ["School supplies", "Packed snack and lunch"],
        outcome: "Vocabulary and immersion engagement continue",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "3:30–4:00 PM",
        title: "Outdoor Free Play",
        subject: "🌿 Physical", subjectStyle: "background:#e8f7ee;color:#1b5e38",
        activity: "Unstructured outdoor time",
        steps: ["Outside immediately, no screens first.", "Free play for 25-30 minutes."],
        materials: ["Outdoor space and gear"],
        outcome: "Brain reset before tutoring",
        parentCue: null
      },
      {
        who: "tutor", label: "Tutor", time: "4:00–5:00 PM",
        title: "Tutor Session — Paragraph Writing + French Vocabulary",
        subject: "📐 Curriculum", subjectStyle: "background:#e8f3fd;color:#1565a0",
        activity: "Ontario Strand D (primary) + French immersion vocabulary support (secondary)",
        steps: [
          "WRITING (35 min) — Ontario Strand D: Teach paragraph structure — a topic sentence stating the main idea, 2-3 supporting detail sentences, a closing sentence. Use a graphic organizer (a simple hamburger diagram works well, free printables at twinkl.ca) to plan before writing. Student writes one full paragraph on a topic of their choice.",
          "FRENCH VOCABULARY (15 min) — Review this week's French science/social studies vocabulary from the school folder using flashcards, pushing for spoken output, not just recognition.",
          "WRAP-UP (10 min) — Read the finished paragraph aloud together; identify the topic sentence and each supporting detail out loud."
        ],
        materials: ["Writing notebook", "Printable paragraph graphic organizer", "This week's French vocabulary from school folder"],
        outcome: "Full paragraph written with explicit structure, French vocabulary reinforced",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "5:00–5:45 PM",
        title: "Reading + Coding + Instrument",
        subject: "📖 Self-study", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Reading, coding, instrument",
        steps: [
          "READING (25 min): silent reading, then a 1-sentence reaction in the reading log.",
          "CODING (10 min): continue the Scratch project.",
          "INSTRUMENT (10 min, if applicable): scales and assigned piece."
        ],
        materials: ["Current chapter book", "Laptop/tablet for Scratch", "Instrument if applicable"],
        outcome: "Reading, coding, and music habits all continue",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "5:45–6:15 PM",
        title: "French Media + Passion Project",
        subject: "🇫🇷 + 🎨", subjectStyle: "background:#faeeda;color:#92400e",
        activity: "French exposure + ongoing passion project",
        steps: [
          "FRENCH (15 min): A French show or podcast for kids, ear exposure supporting the immersion classroom.",
          "PASSION PROJECT (15 min): Add to the notebook."
        ],
        materials: ["French media access", "Passion project notebook"],
        outcome: "French comprehension and sustained interest both continue",
        parentCue: null
      },
      {
        who: "parent", label: "Parent", time: "6:30–6:50 PM",
        title: "Tuesday Dinner Discussion",
        subject: "💛 Family", subjectStyle: "background:#faeeda;color:#92400e",
        activity: "Talk about the paragraph",
        steps: [
          "Ask them to read the paragraph from tutoring aloud — point out the topic sentence.",
          "Ask: 'What's one French word you learned this week? Teach it to me.'"
        ],
        materials: ["Dinner", "No phones"],
        outcome: "Writing pride and French ownership both reinforced",
        parentCue: null
      },
      {
        who: "parent", label: "Parent", time: "7:45–8:00 PM",
        title: "Bedtime Read-Aloud",
        subject: "📖 Read", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Chapter read-aloud",
        steps: ["Read one chapter.", "3 gratitudes.", "Lights out 8:00 PM."],
        materials: ["Current read-aloud book"],
        outcome: "Connection and sleep supported",
        parentCue: null
      }
    ],
    wednesday: [
      {
        who: "parent", label: "Parent", time: "7:30–7:45 AM",
        title: "Wednesday Morning Spark — Multiplication Intro",
        subject: "🧠 Math", subjectStyle: "background:#f5f3ff;color:#6d28d9",
        activity: "Multiplication as grouping, visually",
        steps: [
          "'If there are 5 rows of 2 chairs, how many chairs?' (Ontario Gr.3 B2: multiplication as arrays).",
          "Ask about French class content this week."
        ],
        materials: ["Nothing — just talk"],
        outcome: "Multiplication concept and French engagement both reinforced",
        parentCue: "Resist pushing memorized times tables this year — Ontario deliberately limits Grade 3 to ×2, ×5, ×10 with grouping models, not abstract recall yet."
      },
      {
        who: "self", label: "Self-directed", time: "8:00 AM–3:30 PM",
        title: "Grade 3 School Day (Early French Immersion)",
        subject: "🏫 School", subjectStyle: "background:#e8f7ee;color:#1b5e38",
        activity: "Full engagement at school",
        steps: ["Arrive ready.", "Notice connections between today's math lesson and home practice."],
        materials: ["School supplies", "Packed snack and lunch"],
        outcome: "School reinforces home learning",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "3:30–4:00 PM",
        title: "Outdoor Free Play",
        subject: "🌿 Physical", subjectStyle: "background:#e8f7ee;color:#1b5e38",
        activity: "Unstructured outdoor time",
        steps: ["Outside immediately, no screens first.", "Free play for 25-30 minutes."],
        materials: ["Outdoor space and gear"],
        outcome: "Brain reset before tutoring",
        parentCue: null
      },
      {
        who: "tutor", label: "Tutor", time: "4:00–5:00 PM",
        title: "Tutor Session — Multiplication ×2/×5/×10 + Coding & Financial Literacy",
        subject: "📐 Curriculum", subjectStyle: "background:#e8f3fd;color:#1565a0",
        activity: "Ontario Math multiplication facts (primary) + coding and money (secondary)",
        steps: [
          "MULTIPLICATION (35 min) — Ontario Gr.3 B2: Use counters or grid paper to build arrays for ×2, ×5, ×10 facts (e.g. 4 rows of 5 = 20). Practise the related division fact alongside each one (20÷5=4). Use 'Times Tales' story method or simple flashcards for ×2/×5/×10 only — no full tables yet.",
          "CODING (15 min) — Ontario Algebra C3: Scratch — build a sequence with a repeat block that draws a simple shape or makes a character perform a repeating dance.",
          "FINANCIAL LITERACY (10 min) — Ontario F1: Practise making change from a simple purchase, e.g. 'A toy costs $3.45 and you pay with a $5 bill. How much change?'"
        ],
        materials: ["Counters or grid paper", "Times Tales method materials or flashcards (×2,×5,×10 only)", "Laptop/tablet for Scratch", "Play money or real coins/bills"],
        outcome: "Multiplication facts ×2/×5/×10 built with grouping models, a coding sequence extended, change-making practised",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "5:00–5:45 PM",
        title: "Reading + Coding + Instrument",
        subject: "📖 Self-study", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Reading, coding, instrument",
        steps: [
          "READING (25 min): silent reading + 1-sentence log entry.",
          "CODING (10 min): extend today's Scratch project.",
          "INSTRUMENT (10 min, if applicable)."
        ],
        materials: ["Current chapter book", "Laptop/tablet for Scratch", "Instrument if applicable"],
        outcome: "Reading, coding, and music habits continue",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "5:45–6:15 PM",
        title: "Multiplication Practice + Passion Project",
        subject: "🔢 + 🎨", subjectStyle: "background:#f0fdf4;color:#166534",
        activity: "Multiplication game + ongoing passion project",
        steps: [
          "MATH (15 min): Multiplication War — flip two cards from a ×2/×5/×10-only deck, multiply, highest product wins.",
          "PASSION PROJECT (15 min): Add to the notebook."
        ],
        materials: ["Playing cards (face cards removed, limited to relevant numbers)", "Passion project notebook"],
        outcome: "Multiplication facts reinforced through play, sustained interest continues",
        parentCue: null
      },
      {
        who: "parent", label: "Parent", time: "6:30–6:50 PM",
        title: "Wednesday Dinner Discussion",
        subject: "💛 Family", subjectStyle: "background:#faeeda;color:#92400e",
        activity: "Talk about multiplication and coding",
        steps: [
          "Ask: 'Show me a multiplication fact using your fingers or food on your plate — like 3 groups of 5.'",
          "Ask: 'What does your Scratch project do now?'"
        ],
        materials: ["Dinner", "No phones"],
        outcome: "Multiplication and coding both made visible",
        parentCue: null
      },
      {
        who: "parent", label: "Parent", time: "7:45–8:00 PM",
        title: "Bedtime Read-Aloud",
        subject: "📖 Read", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Chapter read-aloud",
        steps: ["Read one chapter.", "3 gratitudes.", "Lights out 8:00 PM."],
        materials: ["Current read-aloud book"],
        outcome: "Connection and sleep supported",
        parentCue: null
      }
    ],
    thursday: [
      {
        who: "parent", label: "Parent", time: "7:30–7:45 AM",
        title: "Thursday Morning Spark — Curiosity",
        subject: "🧠 Science", subjectStyle: "background:#f5f3ff;color:#6d28d9",
        activity: "A science question and book talk",
        steps: [
          "Ask a 'why' question relevant to this week's science theme.",
          "Ask: 'What do you predict will happen next in your book?'"
        ],
        materials: ["Nothing — just talk"],
        outcome: "Curiosity and prediction both sparked",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "8:00 AM–3:30 PM",
        title: "Grade 3 School Day (Early French Immersion)",
        subject: "🏫 School", subjectStyle: "background:#e8f7ee;color:#1b5e38",
        activity: "Full engagement at school",
        steps: ["Arrive ready.", "Ask one genuine question in class.", "Notice an interesting fact during French science/social studies."],
        materials: ["School supplies", "Packed snack and lunch"],
        outcome: "Curiosity and engagement reinforced",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "3:30–4:00 PM",
        title: "Outdoor Free Play",
        subject: "🌿 Physical", subjectStyle: "background:#e8f7ee;color:#1b5e38",
        activity: "Unstructured outdoor time",
        steps: ["Outside immediately, no screens first.", "Free play for 25-30 minutes."],
        materials: ["Outdoor space and gear"],
        outcome: "Brain reset before tutoring",
        parentCue: null
      },
      {
        who: "tutor", label: "Tutor", time: "4:00–5:00 PM",
        title: "Tutor Session — Reading Comprehension + Science",
        subject: "📐 Curriculum", subjectStyle: "background:#e8f3fd;color:#1565a0",
        activity: "Ontario Strand C (primary) + hands-on science (secondary)",
        steps: [
          "READING (35 min) — Ontario Strand C: Identify the main idea and supporting details in a short non-fiction passage (free printable passages at readworks.org, has Canadian-friendly free content). Practise summarizing the main idea in one sentence.",
          "SCIENCE (20 min) — This week's experiment: build a simple volcano model (baking soda, vinegar, modelling clay) or test which materials are magnetic around the house. Predict before, observe and record after.",
          "WRAP-UP (5 min): 'What's the one big idea from today's reading passage?'"
        ],
        materials: ["Printable non-fiction passages (readworks.org, free)", "Experiment materials (baking soda, vinegar, clay OR a magnet and household objects)", "Science notebook"],
        outcome: "Main idea identification practised explicitly, a hands-on prediction-observation cycle completed",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "5:00–5:45 PM",
        title: "Reading + Coding + Instrument",
        subject: "📖 Self-study", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Reading, coding, instrument",
        steps: [
          "READING (25 min): silent reading + log entry.",
          "CODING (10 min): extend the Scratch project.",
          "INSTRUMENT (10 min, if applicable)."
        ],
        materials: ["Current chapter book", "Laptop/tablet for Scratch", "Instrument if applicable"],
        outcome: "Reading, coding, music all continue",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "5:45–6:15 PM",
        title: "Science Check-In + Passion Project",
        subject: "🔬 + 🎨", subjectStyle: "background:#e8f7ee;color:#1b5e38",
        activity: "Check the experiment + passion project",
        steps: [
          "SCIENCE (15 min): check on the experiment from tutoring if it's ongoing, record any change.",
          "PASSION PROJECT (15 min): add to the notebook."
        ],
        materials: ["Experiment setup", "Science notebook", "Passion project notebook"],
        outcome: "Ongoing observation and sustained interest both continue",
        parentCue: null
      },
      {
        who: "parent", label: "Parent", time: "6:30–6:50 PM",
        title: "Thursday Dinner Discussion",
        subject: "💛 Family", subjectStyle: "background:#faeeda;color:#92400e",
        activity: "Talk about the science and reading",
        steps: [
          "Ask: 'What did you discover with the volcano or magnets today?'",
          "Ask: 'What's the main idea of what you read today?'"
        ],
        materials: ["Dinner", "No phones"],
        outcome: "Science thinking and main-idea summarizing both reinforced",
        parentCue: null
      },
      {
        who: "parent", label: "Parent", time: "7:45–8:00 PM",
        title: "Bedtime Read-Aloud",
        subject: "📖 Read", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Chapter read-aloud",
        steps: ["Read one chapter.", "3 gratitudes.", "Lights out 8:00 PM."],
        materials: ["Current read-aloud book"],
        outcome: "Connection and sleep supported",
        parentCue: null
      }
    ],
    friday: [
      {
        who: "parent", label: "Parent", time: "7:30–7:45 AM",
        title: "Friday Morning Spark — Week Recap",
        subject: "🧠 Review", subjectStyle: "background:#f5f3ff;color:#6d28d9",
        activity: "Recall the week's learning",
        steps: [
          "Ask: 'What's one math thing and one science thing you learned this week?'",
          "If EQAO is approaching (spring): one calm mention — 'Today we'll look at a practice question, just for fun.'"
        ],
        materials: ["Nothing — just talk"],
        outcome: "Week's learning surfaced, EQAO kept low-key if relevant",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "8:00 AM–3:30 PM",
        title: "Grade 3 School Day (Early French Immersion)",
        subject: "🏫 School", subjectStyle: "background:#e8f7ee;color:#1b5e38",
        activity: "Full engagement, finishing the week",
        steps: ["Arrive ready.", "Notice connections from this week's lessons."],
        materials: ["School supplies", "Packed snack and lunch"],
        outcome: "School week closes with continued engagement",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "3:30–4:00 PM",
        title: "Outdoor Free Play",
        subject: "🌿 Physical", subjectStyle: "background:#e8f7ee;color:#1b5e38",
        activity: "Unstructured outdoor time",
        steps: ["Outside immediately, no screens first.", "Free play for 25-30 minutes."],
        materials: ["Outdoor space and gear"],
        outcome: "Brain reset before the review session",
        parentCue: null
      },
      {
        who: "tutor", label: "Tutor", time: "4:00–5:00 PM",
        title: "Tutor Session — Weekly Review (EQAO familiarity near the assessment window) + Writing Finish + French",
        subject: "📐 Curriculum", subjectStyle: "background:#e8f3fd;color:#1565a0",
        activity: "Consolidation of math facts, finishing the writing piece, French review",
        steps: [
          "MATH REVIEW (20 min) — Mixed practice: rounding, addition/subtraction within 1,000, and 5 multiplication-as-arrays problems (×2/×5/×10). Outside the 6-8 weeks before the late-May/June EQAO window, this stays general review. In that window: substitute one official EQAO Grade 3 sample math question from eqao.com, discussed calmly — what's being asked, what strategy to use.",
          "FINISH THE WRITING PIECE (20 min) — Ontario Strand D: Complete the paragraph started Tuesday. Read it aloud, identify the topic sentence and supporting details together.",
          "FRENCH WRAP-UP (20 min) — Review this week's French vocabulary with a matching game; end with the week's French media once more."
        ],
        materials: ["Mixed math review sheet", "EQAO official sample test (eqao.com) — only in the 6-8 weeks before the assessment", "This week's writing piece", "French vocabulary flashcards"],
        outcome: "Math facts consolidated, writing piece completed, French vocabulary reinforced, EQAO format de-mystified without pressure when relevant",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "5:00–5:45 PM",
        title: "Free Reading + Passion Project Showcase",
        subject: "📖 + 🎨", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Free reading + reviewing the week's passion project",
        steps: [
          "READING (25 min): free choice, just for enjoyment.",
          "PASSION PROJECT (20 min): look back at the week's progress in the notebook."
        ],
        materials: ["Library books", "Passion project notebook"],
        outcome: "Reading for pleasure and creative pride both protected",
        parentCue: null
      },
      {
        who: "parent", label: "Parent", time: "6:30–6:50 PM",
        title: "Friday Dinner — Week Celebration",
        subject: "💛 Family", subjectStyle: "background:#faeeda;color:#92400e",
        activity: "Celebrate the week, calm EQAO framing if relevant",
        steps: [
          "Have them read the finished paragraph aloud.",
          "If EQAO is approaching: 'It's just a chance to show what you know, nothing to stress about' — then move on.",
          "Ask: 'What was your favourite part of this week?'"
        ],
        materials: ["Dinner", "No phones", "This week's writing piece"],
        outcome: "Week's growth celebrated, EQAO kept low-stakes in tone",
        parentCue: "Your calm about EQAO is the biggest predictor of your child's calm."
      },
      {
        who: "parent", label: "Parent", time: "7:45–8:00 PM",
        title: "Bedtime Read-Aloud",
        subject: "📖 Read", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Relaxed Friday read-aloud",
        steps: ["Read one chapter.", "3 gratitudes about the week.", "Lights out 8:00 PM."],
        materials: ["Current read-aloud book"],
        outcome: "Week closes warmly, weekend begins",
        parentCue: null
      }
    ]
  },
  books: ["Charlotte's Web (if not done)", "The Lion the Witch and the Wardrobe — Lewis", "Matilda — Dahl", "Holes — Sachar", "Because of Winn-Dixie — DiCamillo", "Number the Stars — Lowry", "Le Petit Prince (French immersion, simplified edition)"],
  milestones: ["Read, write, and round whole numbers to 1,000 (Ontario B1)", "Add and subtract whole numbers within 1,000 using mental and written strategies (Ontario B2)", "Recall multiplication facts of ×2, ×5, ×10 and related division facts (Ontario B2)", "Write a paragraph with a clear main idea and supporting details (Ontario Strand D)", "Complete the Grade 3 EQAO assessment calmly as a normal part of the school year", "Demonstrate growing oral French production in immersion subjects"]
};
