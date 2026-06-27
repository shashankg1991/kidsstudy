"use strict";

yearPlans.grade3[0] = {
  label: "Grade 3 — EQAO Year (Current Grade)",
  theme: "Ontario Math (Number to 1,000, multiplication ×2/×5/×10), Language strands C/D, Grade 3 EQAO assessment, Early French Immersion",
  curriculumNote: "This is the child's current grade. Grade 3 EFI: Math and English Language taught in English; Science, Social Studies, Arts, Health taught in French (60%). The Grade 3 EQAO Primary Division assessment is written in late May/early June — low-stakes, no report card impact, no bearing on Grade 4 placement.",
  tip: "Addition and subtraction facts should be fully automatic by the end of this year — multiplication is just beginning (×2, ×5, ×10 only) and depends on that automaticity. Each weekday below targets a different focus so nothing gets crammed; Friday only touches EQAO format in the 6-8 weeks before the actual assessment.",
  weeklyRhythm: [
    { day: "Monday", focus: "Math: Number Sense to 1,000", secondary: "Reading fluency check" },
    { day: "Tuesday", focus: "Writing: Paragraph Structure", secondary: "French immersion vocabulary" },
    { day: "Wednesday", focus: "Math: Multiplication ×2/×5/×10", secondary: "Coding & Financial Literacy" },
    { day: "Thursday", focus: "Reading Comprehension", secondary: "Science: rotating experiments" },
    { day: "Friday", focus: "Weekly Review (EQAO familiarity near assessment window)", secondary: "Writing piece + French wrap-up" }
  ],
  weekdaySchedules: {
    monday: [
      {
        who: "parent", label: "Parent", time: "6:45–7:00 AM",
        title: "Monday Morning Spark — Number Sense to 1,000",
        subject: "🧠 Math", subjectStyle: "background:#f5f3ff;color:#6d28d9",
        activity: "Mental math and rounding at breakfast",
        steps: [
          "'We have 456 stickers and 287 more arrive. How many now?' (Ontario Gr.3 B2). Ask how they figured it out.",
          "Rounding: 'Round 638 to the nearest ten, then the nearest hundred.'",
          "READING REMINDER: 'You have time to read before school if you're up early.'"
        ],
        materials: ["Paper for working"],
        outcome: "Place value to 1,000 and rounding reinforced before school",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "7:15–7:45 AM",
        title: "Morning Independent Reading",
        subject: "📖 Reading", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "30 min silent reading before school",
        steps: [
          "Book is on nightstand. Read silently for 30 minutes.",
          "No phone, no screens.",
          "When you finish a chapter: write 1 sentence in your reading journal — a reaction, not a summary.",
          "Log pages read on your reading tracker."
        ],
        materials: ["Current chapter book", "Reading journal", "Reading page tracker"],
        outcome: "Daily reading volume compounds — directly supports the comprehension and vocabulary EQAO assesses",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "8:00 AM–3:30 PM",
        title: "School Day — Grade 3 (Early French Immersion)",
        subject: "🏫 School", subjectStyle: "background:#e8f7ee;color:#1b5e38",
        activity: "Full engagement — Math/Language in English, other subjects in French",
        steps: [
          "Before class: set one goal — 'Today I will ask one question I genuinely don't know the answer to.'",
          "During French-taught subjects: listen for new vocabulary, guess meaning from context before asking.",
          "During Math and Language: if work feels easy, write a harder related question in the margin."
        ],
        materials: ["School notebook (ideas section)", "Pen or pencil"],
        outcome: "School reinforces the plan; French immersion comprehension and English literacy build side by side",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "3:30–4:00 PM",
        title: "Physical Reset",
        subject: "🏃 Physical", subjectStyle: "background:#e8f7ee;color:#1b5e38",
        activity: "30 min physical activity",
        steps: ["Go outside immediately. No screens first.", "Bike, basketball, soccer, or a run around the block."],
        materials: ["Bike / ball / outdoor space"],
        outcome: "Focus restored for the tutor session after a bilingual school day",
        parentCue: null
      },
      {
        who: "tutor", label: "Tutor", time: "4:00–5:00 PM",
        title: "Tutor Session — Number to 1,000 + Reading Fluency",
        subject: "📐 Curriculum", subjectStyle: "background:#e8f3fd;color:#1565a0",
        activity: "Ontario Math Number strand (primary) + reading fluency check (secondary)",
        steps: [
          "MATH (35 min) — Ontario Gr.3 B1/B2: Round to nearest ten/hundred using a number line (printable at mathies.ca). Add/subtract within 1,000 — 5 mental-strategy problems, 5 using the standard written algorithm. Estimate first, calculate second, compare.",
          "READING FLUENCY (15 min) — A chapter from the current book. Time 1 minute aloud, log words-per-minute (Grade 3 target: 70-90 correct words/min by June). Ask 2 comprehension questions.",
          "WRAP-UP (10 min) — Financial literacy (Ontario F1): calculate change from a simple purchase, e.g. 'A book costs $4.65 and you pay with a $10 bill. How much change?'"
        ],
        materials: ["Number line (printable, mathies.ca)", "Base-ten blocks", "Current chapter book", "Timer and tracking sheet", "Play money or real coins/bills"],
        outcome: "Rounding and operations to 1,000 practised, reading rate measured and logged, change-making practised",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "5:00–6:00 PM",
        title: "Self-Directed Study Block",
        subject: "📚 Independent", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Math practice, reading response, coding, French support",
        steps: [
          "MATH PRACTICE (15 min): IXL Ontario Grade 3 or Khan Academy, Number Sense section — one activity set.",
          "READING RESPONSE (15 min): write a reading response using the template: 'In today's reading, [character] did [action] because [reason]. I think this was [opinion] because [reasoning].'",
          "CODING (15 min) — Ontario Algebra C3: Scratch — build a sequence with a repeat block.",
          "FRENCH SUPPORT (15 min): review this week's French science/social studies vocabulary from school."
        ],
        materials: ["Tablet with IXL or Khan Academy", "Reading journal", "Laptop for Scratch", "French vocabulary from school folder"],
        outcome: "Math, reading analysis, curriculum-mandated coding, and French all reinforced",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "6:00–6:25 PM",
        title: "Instrument or Free Enrichment",
        subject: "🎵 Enrichment", subjectStyle: "background:#f5e6e9;color:#a51c30",
        activity: "Instrument practice or a chosen enrichment activity",
        steps: [
          "If instrument has started: scales, then assigned piece twice through.",
          "If not yet started: free choice of drawing, building, or another creative pursuit."
        ],
        materials: ["Instrument if applicable"],
        outcome: "Enrichment or creative time without adding pressure on top of a demanding bilingual school day",
        parentCue: null
      },
      {
        who: "parent", label: "Parent", time: "6:30–6:50 PM",
        title: "Monday Dinner Discussion",
        subject: "💛 Family", subjectStyle: "background:#faeeda;color:#92400e",
        activity: "Talk about rounding and the book",
        steps: [
          "Ask: 'What's a number you rounded today? To the nearest ten and hundred?'",
          "Ask about the book's main idea so far."
        ],
        materials: ["Dinner", "No phones"],
        outcome: "Math and reading both reinforced through talk",
        parentCue: null
      },
      {
        who: "parent", label: "Parent", time: "7:45–8:00 PM",
        title: "Bedtime Read-Aloud + Goal",
        subject: "📖 Read", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Advanced chapter book + goal for tomorrow",
        steps: [
          "Read one chapter of a book above their reading level.",
          "After: 'What is the theme of this chapter?'",
          "3 gratitudes. Tomorrow's goal on a sticky note. Lights out 8:30 PM."
        ],
        materials: ["Chapter book for reading aloud", "Sticky note"],
        outcome: "Theme analysis modelled, goal-setting maintained, sleep protected",
        parentCue: "9+ hours of sleep matters even more during a bilingual school year."
      }
    ],
    tuesday: [
      {
        who: "parent", label: "Parent", time: "6:45–7:00 AM",
        title: "Tuesday Morning Spark — Vocabulary & Persuasion",
        subject: "🧠 Language", subjectStyle: "background:#f5f3ff;color:#6d28d9",
        activity: "A word and a persuasive mini-challenge",
        steps: [
          "Word of the day: e.g. PERSUADE. 'Try to persuade me to let you stay up 10 minutes later using one good reason.'",
          "Ask about French class content this week."
        ],
        materials: ["Nothing — just talk"],
        outcome: "Vocabulary and persuasive thinking both primed",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "7:15–7:45 AM",
        title: "Morning Independent Reading",
        subject: "📖 Reading", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "30 min silent reading",
        steps: ["Read silently 30 minutes, no screens.", "Write 1 reaction sentence if a chapter finishes.", "Log pages read."],
        materials: ["Current chapter book", "Reading journal"],
        outcome: "Reading volume compounds",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "8:00 AM–3:30 PM",
        title: "School Day — Grade 3 (Early French Immersion)",
        subject: "🏫 School", subjectStyle: "background:#e8f7ee;color:#1b5e38",
        activity: "Full engagement at school",
        steps: ["Arrive ready.", "Use today's word if a chance comes up.", "Participate actively in French-taught subjects."],
        materials: ["School notebook", "Pen or pencil"],
        outcome: "Vocabulary and immersion engagement continue",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "3:30–4:00 PM",
        title: "Physical Reset",
        subject: "🏃 Physical", subjectStyle: "background:#e8f7ee;color:#1b5e38",
        activity: "30 min physical activity",
        steps: ["Outside immediately, no screens first.", "Bike, sport, or a run."],
        materials: ["Bike / ball / outdoor space"],
        outcome: "Focus restored for tutoring",
        parentCue: null
      },
      {
        who: "tutor", label: "Tutor", time: "4:00–5:00 PM",
        title: "Tutor Session — Paragraph Structure + French Vocabulary",
        subject: "📐 Curriculum", subjectStyle: "background:#e8f3fd;color:#1565a0",
        activity: "Ontario Strand D (primary) + French support (secondary)",
        steps: [
          "WRITING (35 min) — Ontario Strand D: Teach paragraph structure with a graphic organizer (free hamburger-diagram printables at twinkl.ca) — topic sentence, 2-3 supporting details, closing sentence. Student writes a full paragraph on a topic of choice.",
          "FRENCH VOCABULARY (15 min) — Review this week's French-taught subject vocabulary, pushing for spoken output.",
          "WRAP-UP (10 min) — Read the paragraph aloud, identify the topic sentence and each supporting detail."
        ],
        materials: ["Writing notebook", "Printable paragraph graphic organizer", "This week's French vocabulary from school folder"],
        outcome: "Full paragraph written with explicit structure, French vocabulary reinforced",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "5:00–6:00 PM",
        title: "Self-Directed Study Block",
        subject: "📚 Independent", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Writing continuation, reading, French",
        steps: [
          "WRITING (15 min): revise the paragraph from tutoring for one more detail.",
          "READING (20 min): silent reading + reaction sentence.",
          "CODING (15 min): continue the Scratch project.",
          "FRENCH SUPPORT (10 min): review vocabulary."
        ],
        materials: ["Writing notebook", "Current chapter book", "Laptop for Scratch", "French vocabulary from school"],
        outcome: "Writing, reading, coding, and French all reinforced",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "6:00–6:25 PM",
        title: "Instrument or Free Enrichment",
        subject: "🎵 Enrichment", subjectStyle: "background:#f5e6e9;color:#a51c30",
        activity: "Instrument practice or chosen enrichment",
        steps: ["Scales and assigned piece if started.", "Or free creative pursuit."],
        materials: ["Instrument if applicable"],
        outcome: "Enrichment continues",
        parentCue: null
      },
      {
        who: "parent", label: "Parent", time: "6:30–6:50 PM",
        title: "Tuesday Dinner Discussion",
        subject: "💛 Family", subjectStyle: "background:#faeeda;color:#92400e",
        activity: "Talk about the paragraph and persuasion",
        steps: [
          "Have them read the paragraph aloud — point out the topic sentence.",
          "DEBATE (5 min): 'School should start at 10 AM.' They argue FOR, you argue AGAINST, then switch — must use 'because' and a reason."
        ],
        materials: ["Dinner", "No phones"],
        outcome: "Writing pride and argumentation both reinforced",
        parentCue: null
      },
      {
        who: "parent", label: "Parent", time: "7:45–8:00 PM",
        title: "Bedtime Read-Aloud + Goal",
        subject: "📖 Read", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Advanced chapter book + goal",
        steps: ["Read one chapter.", "3 gratitudes.", "Goal on sticky note. Lights out 8:30 PM."],
        materials: ["Chapter book", "Sticky note"],
        outcome: "Vocabulary and accountability maintained, sleep protected",
        parentCue: null
      }
    ],
    wednesday: [
      {
        who: "parent", label: "Parent", time: "6:45–7:00 AM",
        title: "Wednesday Morning Spark — Multiplication Intro",
        subject: "🧠 Math", subjectStyle: "background:#f5f3ff;color:#6d28d9",
        activity: "Multiplication as grouping",
        steps: [
          "'If there are 6 rows of 5 chairs, how many chairs total?' (Ontario Gr.3 B2: multiplication as arrays, ×2/×5/×10 only this year).",
          "Ask about today's French content."
        ],
        materials: ["Paper for working"],
        outcome: "Place value and early multiplication concepts reinforced",
        parentCue: "Resist pushing full multiplication tables this year — Ontario deliberately limits Grade 3 to ×2, ×5, ×10."
      },
      {
        who: "self", label: "Self-directed", time: "7:15–7:45 AM",
        title: "Morning Independent Reading",
        subject: "📖 Reading", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "30 min silent reading",
        steps: ["Read silently 30 minutes.", "Reaction sentence if a chapter finishes.", "Log pages."],
        materials: ["Current chapter book", "Reading journal"],
        outcome: "Reading volume compounds",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "8:00 AM–3:30 PM",
        title: "School Day — Grade 3 (Early French Immersion)",
        subject: "🏫 School", subjectStyle: "background:#e8f7ee;color:#1b5e38",
        activity: "Full engagement at school",
        steps: ["Arrive ready.", "Notice connections between today's math lesson and home practice."],
        materials: ["School notebook", "Pen or pencil"],
        outcome: "School reinforces home learning",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "3:30–4:00 PM",
        title: "Physical Reset",
        subject: "🏃 Physical", subjectStyle: "background:#e8f7ee;color:#1b5e38",
        activity: "30 min physical activity",
        steps: ["Outside immediately.", "Bike, sport, or a run."],
        materials: ["Bike / ball / outdoor space"],
        outcome: "Focus restored for tutoring",
        parentCue: null
      },
      {
        who: "tutor", label: "Tutor", time: "4:00–5:00 PM",
        title: "Tutor Session — Multiplication ×2/×5/×10 + Coding & Financial Literacy",
        subject: "📐 Curriculum", subjectStyle: "background:#e8f3fd;color:#1565a0",
        activity: "Ontario Math multiplication (primary) + coding and money (secondary)",
        steps: [
          "MULTIPLICATION (35 min) — Ontario Gr.3 B2: Build arrays with counters or grid paper for ×2, ×5, ×10 facts. Practise the related division fact alongside each (20÷5=4). Use simple flashcards limited to ×2/×5/×10 only.",
          "CODING (15 min) — Ontario Algebra C3: Scratch — extend the repeat-block sequence from this week with one new element.",
          "FINANCIAL LITERACY (10 min) — Ontario F1: more change-making practice with slightly larger amounts."
        ],
        materials: ["Counters or grid paper", "Flashcards (×2,×5,×10 only)", "Laptop for Scratch", "Play money or coins/bills"],
        outcome: "Multiplication facts ×2/×5/×10 built with grouping models, coding sequence extended, financial literacy continued",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "5:00–6:00 PM",
        title: "Self-Directed Study Block",
        subject: "📚 Independent", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Multiplication practice, reading, coding",
        steps: [
          "MATH (20 min): Multiplication War with a ×2/×5/×10-only card deck — flip two cards, multiply, highest product wins.",
          "READING (20 min): silent reading + reaction sentence.",
          "CODING (15 min): extend the Scratch project further.",
          "FRENCH SUPPORT (5 min): quick vocabulary review."
        ],
        materials: ["Playing cards (limited range)", "Current chapter book", "Laptop for Scratch", "French vocabulary"],
        outcome: "Multiplication facts reinforced through play, reading and coding continue",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "6:00–6:25 PM",
        title: "Instrument or Free Enrichment",
        subject: "🎵 Enrichment", subjectStyle: "background:#f5e6e9;color:#a51c30",
        activity: "Instrument practice or chosen enrichment",
        steps: ["Scales and assigned piece if started.", "Or free creative pursuit."],
        materials: ["Instrument if applicable"],
        outcome: "Enrichment continues",
        parentCue: null
      },
      {
        who: "parent", label: "Parent", time: "6:30–6:50 PM",
        title: "Wednesday Dinner Discussion",
        subject: "💛 Family", subjectStyle: "background:#faeeda;color:#92400e",
        activity: "Talk about multiplication and coding",
        steps: [
          "Ask: 'Show me a multiplication fact using food on your plate — like 3 groups of 5.'",
          "Ask: 'What does your Scratch project do now?'"
        ],
        materials: ["Dinner", "No phones"],
        outcome: "Multiplication and coding both made visible",
        parentCue: null
      },
      {
        who: "parent", label: "Parent", time: "7:45–8:00 PM",
        title: "Bedtime Read-Aloud + Goal",
        subject: "📖 Read", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Advanced chapter book + goal",
        steps: ["Read one chapter.", "3 gratitudes.", "Goal sticky note. Lights out 8:30 PM."],
        materials: ["Chapter book", "Sticky note"],
        outcome: "Vocabulary, accountability, and sleep all supported",
        parentCue: null
      }
    ],
    thursday: [
      {
        who: "parent", label: "Parent", time: "6:45–7:00 AM",
        title: "Thursday Morning Spark — Science Curiosity",
        subject: "🧠 Science", subjectStyle: "background:#f5f3ff;color:#6d28d9",
        activity: "A science question and book talk",
        steps: [
          "Ask a 'why' question tied to this week's experiment theme.",
          "Ask: 'What do you predict happens next in your book?'"
        ],
        materials: ["Nothing — just talk"],
        outcome: "Curiosity and prediction both sparked",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "7:15–7:45 AM",
        title: "Morning Independent Reading",
        subject: "📖 Reading", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "30 min silent reading",
        steps: ["Read silently 30 minutes.", "Reaction sentence.", "Log pages."],
        materials: ["Current chapter book", "Reading journal"],
        outcome: "Reading volume compounds",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "8:00 AM–3:30 PM",
        title: "School Day — Grade 3 (Early French Immersion)",
        subject: "🏫 School", subjectStyle: "background:#e8f7ee;color:#1b5e38",
        activity: "Full engagement at school",
        steps: ["Arrive ready.", "Ask one genuine question in class.", "Notice an interesting fact during French-taught subjects."],
        materials: ["School notebook", "Pen or pencil"],
        outcome: "Curiosity and engagement reinforced",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "3:30–4:00 PM",
        title: "Physical Reset",
        subject: "🏃 Physical", subjectStyle: "background:#e8f7ee;color:#1b5e38",
        activity: "30 min physical activity",
        steps: ["Outside immediately.", "Bike, sport, or a run."],
        materials: ["Bike / ball / outdoor space"],
        outcome: "Focus restored for tutoring",
        parentCue: null
      },
      {
        who: "tutor", label: "Tutor", time: "4:00–5:00 PM",
        title: "Tutor Session — Reading Comprehension + Science",
        subject: "📐 Curriculum", subjectStyle: "background:#e8f3fd;color:#1565a0",
        activity: "Ontario Strand C (primary) + hands-on science (secondary)",
        steps: [
          "READING (35 min) — Ontario Strand C: Identify the main idea and supporting details in a non-fiction passage (free printable at readworks.org). Practise summarizing the main idea in one sentence.",
          "SCIENCE (20 min) — This week's rotating experiment: a baking-soda volcano, growing crystals, or testing buoyancy with household objects in a basin of water. Predict before, observe and record after.",
          "WRAP-UP (5 min): 'What's the one big idea from today's reading passage?'"
        ],
        materials: ["Printable non-fiction passages (readworks.org, free)", "This week's experiment materials", "Science notebook"],
        outcome: "Main idea identification practised explicitly, a hands-on prediction-observation cycle completed",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "5:00–6:00 PM",
        title: "Self-Directed Study Block",
        subject: "📚 Independent", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Science follow-up, reading, French",
        steps: [
          "SCIENCE (15 min): check on the experiment if ongoing, record any change.",
          "READING (25 min): silent reading + reaction sentence.",
          "FRENCH SUPPORT (10 min): review this week's vocabulary.",
          "CODING (10 min): continue the Scratch project."
        ],
        materials: ["Experiment setup", "Science notebook", "Current chapter book", "French vocabulary"],
        outcome: "Science, reading, French, and coding all reinforced",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "6:00–6:25 PM",
        title: "Instrument or Free Enrichment",
        subject: "🎵 Enrichment", subjectStyle: "background:#f5e6e9;color:#a51c30",
        activity: "Instrument practice or chosen enrichment",
        steps: ["Scales and assigned piece if started.", "Or free creative pursuit."],
        materials: ["Instrument if applicable"],
        outcome: "Enrichment continues",
        parentCue: null
      },
      {
        who: "parent", label: "Parent", time: "6:30–6:50 PM",
        title: "Thursday Dinner Discussion",
        subject: "💛 Family", subjectStyle: "background:#faeeda;color:#92400e",
        activity: "Talk about the science and reading",
        steps: [
          "Ask: 'What did you discover with today's experiment?'",
          "Ask: 'What's the main idea of what you read today?'"
        ],
        materials: ["Dinner", "No phones"],
        outcome: "Science thinking and main-idea summarizing both reinforced",
        parentCue: null
      },
      {
        who: "parent", label: "Parent", time: "7:45–8:00 PM",
        title: "Bedtime Read-Aloud + Goal",
        subject: "📖 Read", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Advanced chapter book + goal",
        steps: ["Read one chapter.", "3 gratitudes.", "Goal sticky note. Lights out 8:30 PM."],
        materials: ["Chapter book", "Sticky note"],
        outcome: "Vocabulary, accountability, and sleep all supported",
        parentCue: null
      }
    ],
    friday: [
      {
        who: "parent", label: "Parent", time: "6:45–7:00 AM",
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
        who: "self", label: "Self-directed", time: "7:15–7:45 AM",
        title: "Morning Independent Reading",
        subject: "📖 Reading", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "30 min silent reading",
        steps: ["Read silently 30 minutes.", "Reaction sentence.", "Log pages."],
        materials: ["Current chapter book", "Reading journal"],
        outcome: "Reading volume compounds",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "8:00 AM–3:30 PM",
        title: "School Day — Grade 3 (Early French Immersion)",
        subject: "🏫 School", subjectStyle: "background:#e8f7ee;color:#1b5e38",
        activity: "Full engagement, finishing the week",
        steps: ["Arrive ready.", "Notice connections from this week's lessons."],
        materials: ["School notebook", "Pen or pencil"],
        outcome: "School week closes with continued engagement",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "3:30–4:00 PM",
        title: "Physical Reset",
        subject: "🏃 Physical", subjectStyle: "background:#e8f7ee;color:#1b5e38",
        activity: "30 min physical activity",
        steps: ["Outside immediately.", "Bike, sport, or a run."],
        materials: ["Bike / ball / outdoor space"],
        outcome: "Focus restored for the review session",
        parentCue: null
      },
      {
        who: "tutor", label: "Tutor", time: "4:00–5:00 PM",
        title: "Tutor Session — Weekly Review (EQAO familiarity near assessment window) + Writing Finish + French",
        subject: "📐 Curriculum", subjectStyle: "background:#e8f3fd;color:#1565a0",
        activity: "Consolidation of math, finishing the writing piece, French review",
        steps: [
          "MATH REVIEW (20 min) — Mixed practice: rounding, addition/subtraction within 1,000, multiplication-as-arrays (×2/×5/×10). Outside the 6-8 weeks before the late-May/June EQAO window, this stays general review. In that window: one official EQAO Grade 3 sample math question from eqao.com, discussed calmly.",
          "FINISH THE WRITING PIECE (20 min) — Ontario Strand D: Complete the paragraph from Tuesday. Read it aloud, identifying the topic sentence and supporting details together.",
          "FRENCH WRAP-UP (20 min) — Review this week's French vocabulary with a matching game."
        ],
        materials: ["Mixed math review sheet", "EQAO official sample test (eqao.com) — only near the window", "This week's writing piece", "French vocabulary flashcards"],
        outcome: "Math consolidated, writing piece completed, French reinforced, EQAO de-mystified without pressure when relevant",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "5:00–6:00 PM",
        title: "Free Reading + Enrichment Wind-Down",
        subject: "📖 + 🎵", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Free choice reading + relaxed enrichment time",
        steps: [
          "READING (30 min): any book, just for enjoyment.",
          "ENRICHMENT (30 min): instrument practice if started, or any chosen creative pursuit, kept light for a Friday."
        ],
        materials: ["Library books", "Instrument if applicable"],
        outcome: "Reading for pleasure and relaxed enrichment both protected heading into the weekend",
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
        who: "parent", label: "Parent", time: "8:00–8:15 PM",
        title: "Friday Bedtime Read-Aloud",
        subject: "📖 Read", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Relaxed Friday read-aloud",
        steps: ["Read one chapter.", "3 gratitudes about the week.", "Lights out 8:30 PM."],
        materials: ["Chapter book for reading aloud"],
        outcome: "Week closes warmly, weekend begins",
        parentCue: null
      }
    ]
  },
  books: ["The Lightning Thief — Riordan", "Wonder — Palacio", "Hatchet — Paulsen", "Holes — Sachar", "Number the Stars — Lowry", "Le Petit Prince (French immersion support)", "Le Petit Nicolas (French immersion support)"],
  milestones: ["Read, write, and round whole numbers to 1,000 (Ontario B1)", "Add/subtract within 1,000 using mental and written strategies (Ontario B2)", "Recall multiplication facts ×2, ×5, ×10 and related division facts (Ontario B2 — full tables come Grade 4)", "Write a structured paragraph with a clear main idea and supporting details", "Complete the Grade 3 EQAO assessment calmly as a normal part of the year", "Continue strengthening oral French production in immersion subjects"]
};
