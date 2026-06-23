"use strict";
var yearPlans = { kinder: [], grade3: [] };

yearPlans.kinder[0] = {
  label: "Grade 1 — Ontario Curriculum Foundations",
  theme: "Ontario Math (Number to 50, facts to 10), Language foundations (phonics, oral language), Early French Immersion begins",
  curriculumNote: "Grade 1 EFI: Math and English Language are taught in English at school; Science, Social Studies, Arts, and Health are taught in French (60% of instructional time). This plan's tutor/self-directed blocks reinforce the English-taught subjects (Math, Language) plus support French vocabulary for the immersion subjects.",
  tip: "This is the highest-leverage year in the entire plan. Ontario's curriculum builds on Grade 1 foundations and does not slow down to fill gaps later — fluent addition/subtraction facts to 10 and solid phonics now compound for years. Keep it playful; the content itself is enough of a stretch.",
  schedule: [
    {
      who: "parent", label: "Parent", time: "7:30–7:45 AM",
      title: "Morning Spark",
      subject: "🧠 Curiosity", subjectStyle: "background:#f5f3ff;color:#6d28d9",
      activity: "Breakfast brain warm-up — number sense and phonics",
      steps: [
        "Number talk (curriculum-aligned): ask a mental math question within 50, e.g. 'We have 23 crackers and I eat 5, how many are left? How did you figure that out?' (Ontario Gr.1 B2: addition/subtraction within 50).",
        "Phonics: say a word and ask them to identify the beginning, middle, and ending sound (Ontario Language Strand B2: phonemic awareness).",
        "Skip counting: count by 2s or 5s together to 50 while walking to the car or bus stop (Ontario Gr.1 B1: skip counting).",
        "Say: 'Today, notice one thing outside that surprises you. Tell me at dinner.'"
      ],
      materials: ["Nothing — just talk"],
      outcome: "Mental math within 50, phonemic awareness, and skip counting practised — all directly tied to Ontario Grade 1 expectations",
      parentCue: "Your tone sets the tone. Be genuinely curious yourself. No phones at breakfast."
    },
    {
      who: "self", label: "Self-directed", time: "8:00 AM–3:30 PM",
      title: "Grade 1 School Day (Early French Immersion)",
      subject: "🏫 School", subjectStyle: "background:#e8f7ee;color:#1b5e38",
      activity: "Full engagement at school — Math/Language in English, Science/Social Studies/Arts in French",
      steps: [
        "Arrive on time, coat and bag put away independently.",
        "During French-taught subjects (science, social studies, arts): listen for 3 French words you don't know and try to guess their meaning from context before asking.",
        "During Math: if a concept feels easy, ask the teacher 'is there a harder way to do this?'",
        "At French story time or read-aloud: follow along with the pictures even if you miss some words — this is normal and expected in immersion.",
        "Before leaving: try to read 5 words from the English word wall on your own."
      ],
      materials: ["School supplies", "Packed snack and lunch"],
      outcome: "Engaged school day building French immersion comprehension and English literacy foundations side by side",
      parentCue: "It's normal for EFI kids to understand more French than they speak at first. Don't worry if they seem 'behind' in French output — comprehension comes first."
    },
    {
      who: "self", label: "Self-directed", time: "3:30–4:00 PM",
      title: "Outdoor Free Play",
      subject: "🌿 Physical", subjectStyle: "background:#e8f7ee;color:#1b5e38",
      activity: "Unstructured outdoor time — essential, not optional",
      steps: [
        "Go outside immediately after school. No screens first.",
        "One mission: find something in nature you have never noticed before.",
        "Draw it in your nature notebook when you come inside (2 minutes).",
        "Physical play: run, climb, bike, jump."
      ],
      materials: ["Nature notebook", "Pencil or crayon"],
      outcome: "Brain reset after a long bilingual school day, gross motor development",
      parentCue: null
    },
    {
      who: "tutor", label: "Tutor", time: "4:00–5:00 PM",
      title: "Tutor Session — Ontario Math + Phonics + French Support",
      subject: "📐 Curriculum", subjectStyle: "background:#e8f3fd;color:#1565a0",
      activity: "Ontario Grade 1 Number strand + phonics + light French vocabulary reinforcement",
      steps: [
        "MATH (25 min) — Ontario B1/B2 Number strand: Practise reading and writing numbers to 50. Use objects/drawings to add and subtract within 50 (e.g. 'show me 23 + 14 with blocks'). Drill addition/subtraction facts to 10 with flashcards until automatic — this is the single most predictive skill for Grade 2 success. Introduce Canadian coin recognition and simple amounts (Ontario F1: Financial Literacy).",
        "PHONICS AND LANGUAGE (20 min) — Ontario Language Strand B: Review letter-sound correspondences with flashcards. Read one decodable reader together; tutor notes errors without correcting mid-sentence, then asks 2 comprehension questions (Strand C: Comprehension). Practise writing 2-3 simple sentences with a capital letter and period (Strand D: Composition).",
        "FRENCH VOCABULARY SUPPORT (15 min) — Since Science/Social Studies/Arts are taught in French at school: review 5-8 French words from this week's school unit (ask the teacher or check the take-home folder for the week's theme). Practise saying them aloud and matching them to pictures. This is reinforcement, not new instruction — the goal is comprehension support for French immersion subjects, not replacing the school's French program."
      ],
      materials: ["Flashcard set (letter sounds)", "Counting objects or blocks", "Decodable reader (Bob Books Set 1)", "Canadian coins (real or play)", "This week's French vocabulary from school folder"],
      outcome: "Addition/subtraction facts to 10 drilled, phonics practised, French immersion vocabulary reinforced",
      parentCue: null
    },
    {
      who: "self", label: "Self-directed", time: "5:00–5:30 PM",
      title: "Reading Practice — Independent",
      subject: "📖 Reading", subjectStyle: "background:#eff6ff;color:#1d4ed8",
      activity: "Read aloud to a stuffed animal (English decodable readers)",
      steps: [
        "Pick one book from the book box (English readers — French reading support comes from school).",
        "Sit in your reading spot.",
        "Read the whole book aloud to your stuffed animal.",
        "After: tell your animal what the book was about in 2 sentences.",
        "Add the title to your reading log chart."
      ],
      materials: ["Library books (English, decodable level)", "Stuffed animal", "Reading log chart", "Sticker sheet"],
      outcome: "English reading fluency practice and comprehension retell",
      parentCue: null
    },
    {
      who: "self", label: "Self-directed", time: "5:30–6:00 PM",
      title: "Math Games + Weekly Passion Project",
      subject: "🔢 + 🎨", subjectStyle: "background:#f0fdf4;color:#166534",
      activity: "Number-to-50 math game + ongoing weekly passion project (the age-5 version of a 'spike')",
      steps: [
        "MATH (15 min): Khan Academy Kids (Grade 1 track) or a board game involving counting/adding to 50 (Sum Swamp, Zingo). The goal: facts to 10 should start feeling automatic, not effortful, by the end of this year.",
        "PASSION PROJECT (15 min): Pick ONE thing this child is genuinely fascinated by (dinosaurs, space, bugs, trains — whatever it is) and build a simple ongoing project over several weeks: a drawing collection, a fact book they dictate to you and you write down, a small diorama. This is not academic enrichment — it's the earliest version of sustained, self-directed deep interest that becomes a real strength later. Let them lead completely."
      ],
      materials: ["Tablet with Khan Academy Kids (free)", "Zingo or Sum Swamp game", "A dedicated notebook or folder for the passion project"],
      outcome: "Number facts to 10 reinforced through play; the first thread of sustained, self-chosen deep interest begins",
      parentCue: "Resist steering the passion project toward something more 'impressive.' At this age, genuine fascination with anything — bugs, trucks, princesses — is the actual skill being built: sustained attention to something they chose."
    },
    {
      who: "parent", label: "Parent", time: "6:30–6:50 PM",
      title: "Dinner Discussion",
      subject: "💛 Family", subjectStyle: "background:#faeeda;color:#92400e",
      activity: "The most important 20 minutes of the day",
      steps: [
        "Ask: 'What was the one surprising thing you noticed today outside?'",
        "Ask: 'Did you hear any new French words today? What do you think they mean?' (validates immersion effort without requiring fluency).",
        "Follow up: 'Why do you think that happens?' — do not explain, just ask more.",
        "End with: 'What is one thing your brain got better at today?'"
      ],
      materials: ["Dinner", "Your full attention — no phones"],
      outcome: "Curiosity habit deepened, French immersion effort validated, vocabulary built through conversation",
      parentCue: "Celebrate French comprehension, not just speaking. In EFI, understanding comes well before confident speaking — that's normal, not a gap."
    },
    {
      who: "self", label: "Self-directed", time: "7:00–7:30 PM",
      title: "French Reinforcement + Instrument Exploration",
      subject: "🇫🇷 Language", subjectStyle: "background:#faeeda;color:#92400e",
      activity: "Light French exposure (supporting school immersion, not separate curriculum) + music play",
      steps: [
        "FRENCH (15 min): Watch a short French children's show (Caillou en français, Franklin et ses amis) or listen to French nursery rhymes. The goal is ear exposure to support the immersion classroom, not new vocabulary instruction.",
        "MUSIC (15 min): Children's classical playlist. Clap along to the beat, sing nursery rhymes, explore rhythm with pots and pans."
      ],
      materials: ["TV or tablet with French children's content", "Speaker for music"],
      outcome: "French immersion comprehension supported through enjoyable exposure, rhythm and music exposure built",
      parentCue: null
    },
    {
      who: "parent", label: "Parent", time: "7:45–8:00 PM",
      title: "Bedtime Read-Aloud + Gratitude",
      subject: "📖 Read", subjectStyle: "background:#eff6ff;color:#1d4ed8",
      activity: "Read aloud (English), then 3 gratitudes, then sleep",
      steps: [
        "Choose a picture book or early chapter book one level above what child reads alone.",
        "Read with expression. Stop once to ask: 'What do you think will happen?'",
        "After: ask child for 3 things they are grateful for today. You share one too.",
        "Lights out at 8:00 PM sharp — EFI is cognitively demanding; sleep matters even more this year."
      ],
      materials: ["Tonight's read-aloud book", "Lamp on bedside table"],
      outcome: "Vocabulary built through rich text, emotional security reinforced, sleep protected",
      parentCue: "EFI students often seem more tired after school in the early months. This is normal — the brain is working hard processing two languages all day."
    }
  ],
  books: ["Bob Books Set 1–4 (English phonics)", "Elephant and Piggie series — Willems", "Fly Guy series — Arnold", "Pete the Cat — Litwin", "Caillou en français (French immersion support)", "Franklin et ses amis (French immersion support)", "Charlotte's Web — White (read-aloud)", "My Father's Dragon — Gannett (read-aloud)"],
  milestones: ["Recall addition and subtraction facts to 10 with fluency (Ontario B2 end-of-Grade-1 target)", "Read and write whole numbers to 50 and add/subtract within 50", "Identify Canadian coins and represent simple amounts (Financial Literacy F1)", "Read 50+ sight words aloud without hesitation", "Write a 2-3 sentence story with a capital letter and period", "Demonstrate growing French comprehension in immersion subjects (science, social studies, arts) even if spoken output is still developing"]
};

yearPlans.kinder[1] = {
  label: "Grade 2 — Building Fluency",
  theme: "Ontario Math (Number to 200, add/subtract to 100), Language conventions and comprehension strategies, French Immersion year 2",
  curriculumNote: "Grade 2 EFI: same structure as Grade 1 — Math and English Language in English; Science, Social Studies, Arts, Health in French (60%). By now most EFI students are starting to produce simple French phrases, not just comprehend.",
  tip: "Ontario's curriculum expects automatic addition/subtraction facts to 10 by now (carried over from Grade 1) and is building toward facts to 20 and place value to 200. If facts to 10 aren't automatic yet, that's the priority before anything else — everything in Grade 2 math depends on it.",
  schedule: [
    {
      who: "parent", label: "Parent", time: "7:30–7:45 AM",
      title: "Morning Spark",
      subject: "🧠 Curiosity", subjectStyle: "background:#f5f3ff;color:#6d28d9",
      activity: "Number sense to 100/200 + word work",
      steps: [
        "Number talk: 'We have 84 stickers and gave away 27, how many are left?' (Ontario Gr.2 B2: add/subtract within 100). Ask them to explain their strategy, not just the answer.",
        "Skip counting: count by 2s, 5s, and 10s to 100 (Ontario Gr.2 B1).",
        "Word of the day on a sticky note on the fridge — use it in conversation 3 times today.",
        "Ask: 'Did you say anything in French today? What was it?'"
      ],
      materials: ["Sticky note pad", "Marker"],
      outcome: "Mental arithmetic within 100, vocabulary primed, French speaking effort acknowledged",
      parentCue: "The sticky note word habit is powerful. Keep it up every school day."
    },
    {
      who: "self", label: "Self-directed", time: "8:00 AM–3:30 PM",
      title: "Grade 2 School Day (Early French Immersion)",
      subject: "🏫 School", subjectStyle: "background:#e8f7ee;color:#1b5e38",
      activity: "Full engagement at school — Math/Language in English, other subjects in French",
      steps: [
        "Arrive on time, materials organized independently.",
        "During French-taught subjects: try to follow along with context clues before asking for English help.",
        "During Math and Language: if a concept feels easy, ask 'is there a trickier version of this?'",
        "At recess: play with a different group of classmates at least once this week.",
        "Before leaving: try reading something from the classroom word wall or a posted French phrase."
      ],
      materials: ["School supplies", "Packed snack and lunch"],
      outcome: "Engaged school day continuing to build French immersion comprehension alongside English literacy",
      parentCue: null
    },
    {
      who: "self", label: "Self-directed", time: "3:30–4:00 PM",
      title: "Outdoor Free Play",
      subject: "🌿 Physical", subjectStyle: "background:#e8f7ee;color:#1b5e38",
      activity: "Unstructured outdoor time before the tutor session",
      steps: [
        "Go outside immediately after school. No screens first.",
        "Free play — bike, run, climb, whatever feels good.",
        "This is a brain reset, not a break to skip when busy."
      ],
      materials: ["Outdoor space and gear"],
      outcome: "Brain reset after a full bilingual school day, ready for focused tutor time",
      parentCue: null
    },
    {
      who: "tutor", label: "Tutor", time: "4:00–5:00 PM",
      title: "Tutor Session — Ontario Math + Language Conventions",
      subject: "📐 Curriculum", subjectStyle: "background:#e8f3fd;color:#1565a0",
      activity: "Number to 200, add/subtract to 100, reading fluency, sentence writing",
      steps: [
        "MATH (25 min) — Ontario B1/B2: Practise reading, writing, and estimating quantities to 200. Add and subtract within 100 using objects, drawings, and equations. If addition/subtraction facts to 10 aren't yet automatic, spend 5 of these minutes drilling them — this is the Grade 1 carry-over that must be solid. Skip count by 2s, 5s, 10s. Continue Canadian coin and simple amount work (F1).",
        "READING FLUENCY AND COMPREHENSION (20 min) — Ontario Language Strand C: Student reads aloud from a levelled English reader; tutor times 1 minute, counts words per minute (target 60+ words/min by June per common benchmarks). Ask comprehension questions using strategies from the curriculum: predicting, questioning, making connections.",
        "WRITING — LANGUAGE CONVENTIONS (15 min) — Ontario Strand B3/D2: Teach one specific convention this week (e.g. using a capital letter for proper nouns, or basic punctuation in a short paragraph). Student writes 3-5 sentences and revises using the taught convention."
      ],
      materials: ["Counting objects/blocks", "Hundred chart", "Levelled English reader", "Timer", "Writing notebook", "Canadian coins"],
      outcome: "Number to 200 and operations to 100 practised, reading rate measured, one writing convention taught and applied",
      parentCue: null
    },
    {
      who: "self", label: "Self-directed", time: "5:00–5:30 PM",
      title: "Independent Reading + Discovery Journal",
      subject: "📖 Reading", subjectStyle: "background:#eff6ff;color:#1d4ed8",
      activity: "15 min silent reading + 10 min journal entry",
      steps: [
        "READING (15 min): Sit in reading spot. Read silently. Put a finger under unfamiliar words to look up after.",
        "DISCOVERY JOURNAL (10 min): Write today's date. Draw something you learned or noticed. Write 1-3 sentences about it.",
        "READING LOG: Add today's book to the chart."
      ],
      materials: ["Current reading book", "Discovery journal", "Reading log chart", "Stickers"],
      outcome: "Independent reading habit established, journaling habit begun",
      parentCue: null
    },
    {
      who: "self", label: "Self-directed", time: "5:30–6:00 PM",
      title: "Math Practice + French Exposure",
      subject: "🔢 Math + French", subjectStyle: "background:#f0fdf4;color:#166534",
      activity: "Number-to-200 practice + light French media",
      steps: [
        "MATH (15 min): Khan Academy Kids (Grade 2 track) — number sense to 200, addition/subtraction to 100 activities.",
        "FRENCH (15 min): French children's show or song. By Grade 2, try to repeat a few simple phrases aloud, not just listen."
      ],
      materials: ["Tablet with Khan Academy Kids", "French media access"],
      outcome: "Math facts and number sense to 200 reinforced, French oral comfort building",
      parentCue: null
    },
    {
      who: "self", label: "Self-directed", time: "6:00–6:30 PM",
      title: "Passion Project",
      subject: "🎨 Creative", subjectStyle: "background:#f5f3ff;color:#6d28d9",
      activity: "Continue the ongoing weekly passion project started in Grade 1",
      steps: [
        "Open the passion project notebook/folder from last year (or start one now if new to this).",
        "Add to it: a new drawing, fact, or piece for whatever they're genuinely fascinated by — dinosaurs, space, animals, building, anything self-chosen.",
        "By Grade 2, encourage them to dictate a full sentence or two about today's addition, which you (or they, if able) write down.",
        "No grading, no correcting. The goal is sustained voluntary attention to something they chose — this is the real foundation for later deep expertise in any field."
      ],
      materials: ["Passion project notebook or folder", "Drawing/writing supplies"],
      outcome: "A second year of sustained, self-directed deep interest — the long-run foundation for later genuine expertise",
      parentCue: "If interests shift entirely (dinosaurs to space to bugs), that's completely normal and fine at this age. Follow them, don't redirect them."
    },
    {
      who: "parent", label: "Parent", time: "6:30–6:50 PM",
      title: "Dinner Discussion",
      subject: "💛 Family", subjectStyle: "background:#faeeda;color:#92400e",
      activity: "Use today's word of the day + French check-in",
      steps: [
        "Try to use the sticky-note word from morning in a real sentence.",
        "Ask: 'What is one thing you read about today that was interesting?'",
        "Ask them to teach you one French word or phrase from school — let them be the expert."
      ],
      materials: ["Dinner", "No phones"],
      outcome: "Vocabulary reinforced, French immersion confidence built by having them 'teach' you",
      parentCue: "Asking them to teach you French (even simple words) reframes immersion as a strength, not a struggle."
    },
    {
      who: "parent", label: "Parent", time: "7:45–8:00 PM",
      title: "Bedtime Read-Aloud",
      subject: "📖 Read", subjectStyle: "background:#eff6ff;color:#1d4ed8",
      activity: "Chapter book read-aloud — one chapter per night",
      steps: [
        "Read one chapter of a longer book.",
        "Before starting: 'What happened last time? What do you think will happen tonight?'",
        "After: 3 gratitudes. Lights out at 8:00 PM."
      ],
      materials: ["Current chapter book"],
      outcome: "Vocabulary built through rich language, reading stamina modelled, sleep protected",
      parentCue: null
    }
  ],
  books: ["Junie B. Jones series — Park", "Magic Tree House series — Osborne", "Mercy Watson series — DiCamillo", "Stuart Little — White (read-aloud)", "Charlotte's Web — White (read-aloud)", "Flat Stanley series", "Le Petit Nicolas (French immersion support, simple)"],
  milestones: ["Read, write, and estimate whole numbers to 200 (Ontario B1)", "Add and subtract whole numbers within 100 using a range of strategies (Ontario B2)", "Skip count fluently by 2s, 5s, and 10s to 100", "Read a Grade 2-level chapter book independently cover to cover", "Write a short story using at least one taught language convention correctly", "Produce simple French phrases aloud in immersion subjects, not just comprehend"]
};

yearPlans.kinder[2] = {
  label: "Grade 3 — EQAO Year",
  theme: "Ontario Math (Number to 1,000, multiplication ×2/×5/×10), Language strands C and D deepen, first EQAO assessment",
  curriculumNote: "Grade 3 EFI continues at 60% French instructional time. This is also the year of the Grade 3 EQAO assessment (Primary Division) — a low-stakes provincial check of reading, writing, and math against end-of-Grade-3 expectations, written in late May/early June. It does not appear on the report card and has no bearing on Grade 4 placement.",
  tip: "Ontario expects addition/subtraction facts to be mastered by the end of this year — if they aren't automatic yet, this is the year to close that gap, since multiplication (starting now) depends on strong addition fluency. EQAO itself needs no special cramming: a calm, curriculum-aligned year is the actual preparation.",
  schedule: [
    {
      who: "parent", label: "Parent", time: "7:30–7:45 AM",
      title: "Morning Spark",
      subject: "🧠 Curiosity", subjectStyle: "background:#f5f3ff;color:#6d28d9",
      activity: "Number sense to 1,000 + multiplication intro",
      steps: [
        "Number talk: 'We have 340 stickers and 215 more arrive, how many now?' (Ontario Gr.3 B2: add/subtract within 1,000). Ask for their strategy.",
        "Multiplication intro: 'If there are 5 rows of 2 chairs, how many chairs?' (Ontario Gr.3 B2: multiplication as area/array, facts of ×2, ×5, ×10).",
        "Ask: 'What's one thing you read or did in French today?'"
      ],
      materials: ["Nothing — just talk"],
      outcome: "Place value to 1,000 and early multiplication concepts reinforced before school",
      parentCue: "Multiplication starts as repeated addition and grouping (rows/columns) in Ontario's Grade 3 curriculum — not memorized tables yet. Let it stay visual."
    },
    {
      who: "self", label: "Self-directed", time: "8:00 AM–3:30 PM",
      title: "Grade 3 School Day (Early French Immersion)",
      subject: "🏫 School", subjectStyle: "background:#e8f7ee;color:#1b5e38",
      activity: "Full engagement at school — Math/Language in English, other subjects in French",
      steps: [
        "Arrive on time, organized and ready.",
        "During French-taught subjects: guess unfamiliar words from context before asking for help.",
        "If work feels easy: write a harder related question in the margin to discuss with the tutor later.",
        "At lunch: discuss an idea, not just social topics, with at least one classmate.",
        "On the way home: think of one thing learned today that connects to something at home."
      ],
      materials: ["School supplies", "Packed snack and lunch"],
      outcome: "Engaged school day, French immersion comprehension and English literacy building together",
      parentCue: null
    },
    {
      who: "self", label: "Self-directed", time: "3:30–4:00 PM",
      title: "Outdoor Free Play",
      subject: "🌿 Physical", subjectStyle: "background:#e8f7ee;color:#1b5e38",
      activity: "Unstructured outdoor time before the tutor session",
      steps: [
        "Go outside immediately after school. No screens first.",
        "Free, unstructured physical play.",
        "This resets focus for the tutor session — not optional."
      ],
      materials: ["Outdoor space and gear"],
      outcome: "Brain reset after a bilingual school day, ready for the tutor session",
      parentCue: null
    },
    {
      who: "tutor", label: "Tutor", time: "4:00–5:00 PM",
      title: "Tutor Session — Ontario Math + Language + EQAO Familiarity",
      subject: "📐 Curriculum", subjectStyle: "background:#e8f3fd;color:#1565a0",
      activity: "Number to 1,000, multiplication ×2/×5/×10, reading comprehension, EQAO format exposure (light)",
      steps: [
        "MATH (25 min) — Ontario B1/B2: Round whole numbers to the nearest ten or hundred. Add/subtract within 1,000 using mental strategies and the standard algorithm. Practise multiplication facts of ×2, ×5, ×10 and related division facts using arrays/grouping (not yet full times tables — that's Grade 4+). Continue financial literacy: calculating change in simple transactions (F1).",
        "READING AND WRITING (20 min) — Ontario Strands C/D: Practise identifying the main idea and supporting details in a short passage. Write a short paragraph with a clear main idea and 2-3 supporting sentences (a step toward the Grade 3 writing expectations).",
        "EQAO FAMILIARITY (15 min, only in the months leading up to the assessment window in May/June) — Use one official EQAO Grade 3 sample question (math or language) so the format feels familiar, not stressful. This is NOT test prep or drilling — one sample question, discussed calmly, is the right dose. In months outside the EQAO window, replace this block with extra reading or a science/social studies French vocabulary review instead."
      ],
      materials: ["Hundred chart and base-ten blocks", "Counters for arrays", "Short passages for main-idea practice", "Writing notebook", "EQAO official sample test (eqao.com) — only near the assessment window"],
      outcome: "Number to 1,000 and early multiplication facts practised, paragraph writing skill built, EQAO format de-mystified without pressure",
      parentCue: null
    },
    {
      who: "self", label: "Self-directed", time: "5:00–5:45 PM",
      title: "Reading + Math Practice + Instrument",
      subject: "📖 Self-study", subjectStyle: "background:#eff6ff;color:#1d4ed8",
      activity: "30 min reading, 10 min math practice, 10 min instrument (if started)",
      steps: [
        "READING (30 min): Read silently from current chapter book. Write 1 sentence in your reading log about what happened.",
        "MATH (10 min): Practise ×2, ×5, ×10 facts using flashcards or an array drawing — say the multiplication AND the matching division fact (e.g. '4 × 5 = 20, so 20 ÷ 5 = 4').",
        "INSTRUMENT (10 min, if started this year): Scales once, then assigned piece start to finish twice."
      ],
      materials: ["Current chapter book", "Multiplication/division flashcards (×2,×5,×10)", "Instrument if applicable"],
      outcome: "Reading comprehension and stamina, multiplication-division relationship reinforced",
      parentCue: null
    },
    {
      who: "self", label: "Self-directed", time: "5:45–6:15 PM",
      title: "Science/Social Studies French Vocabulary + Coding Intro",
      subject: "🇫🇷 + 💻", subjectStyle: "background:#faeeda;color:#92400e",
      activity: "French immersion subject vocabulary review + first coding concepts (Ontario Algebra strand)",
      steps: [
        "FRENCH SUPPORT (15 min): Review this week's French science/social studies vocabulary from the school take-home folder. Match words to pictures, say them aloud.",
        "CODING (15 min) — Ontario Algebra strand C3 (coding is mandatory from Grade 1): Scratch Jr or Scratch — create or extend a simple repeating sequence (e.g. a character moves forward 3 times). This directly supports the curriculum's coding expectations, not just enrichment."
      ],
      materials: ["French vocabulary from school folder", "Tablet or laptop for Scratch/Scratch Jr"],
      outcome: "French immersion subject comprehension supported, curriculum-mandated coding skills practised",
      parentCue: null
    },
    {
      who: "parent", label: "Parent", time: "6:30–6:50 PM",
      title: "Dinner Discussion",
      subject: "💛 Family", subjectStyle: "background:#faeeda;color:#92400e",
      activity: "Book discussion + light EQAO reassurance if relevant",
      steps: [
        "Ask: 'In your book, what is the main character's biggest problem?'",
        "If EQAO is coming up: 'It's just a chance to show what you already know — no need to be nervous.' Keep it brief and calm; do not dwell on it.",
        "This week's big question: 'If you could invent any machine, what problem would it solve?'"
      ],
      materials: ["Dinner table", "No phones"],
      outcome: "Character analysis, calm framing of EQAO, creative problem-solving",
      parentCue: "EQAO is genuinely low-stakes — it doesn't appear on the report card or affect Grade 4 placement. Treat it that way out loud, even if you're tracking it quietly yourself."
    },
    {
      who: "parent", label: "Parent", time: "7:45–8:00 PM",
      title: "Bedtime Read-Aloud + Goal Review",
      subject: "📖 Read", subjectStyle: "background:#eff6ff;color:#1d4ed8",
      activity: "Chapter book + review sticky-note goal",
      steps: [
        "Read one chapter of a book slightly above their reading level.",
        "Check the sticky note from morning: did they meet the goal?",
        "3 gratitudes. Set tomorrow's learning goal. Lights out 8:00 PM."
      ],
      materials: ["Current read-aloud chapter book"],
      outcome: "Rich vocabulary exposure, goal completion reviewed, sleep protected",
      parentCue: null
    }
  ],
  books: ["Charlotte's Web (if not done)", "The Lion the Witch and the Wardrobe — Lewis", "Matilda — Dahl", "Holes — Sachar", "Because of Winn-Dixie — DiCamillo", "Number the Stars — Lowry", "Le Petit Prince (French immersion, simplified edition)"],
  milestones: ["Read, write, and round whole numbers to 1,000 (Ontario B1)", "Add and subtract whole numbers within 1,000 using mental and written strategies (Ontario B2)", "Recall multiplication facts of ×2, ×5, ×10 and related division facts (Ontario B2)", "Write a paragraph with a clear main idea and supporting details (Ontario Strand D)", "Complete the Grade 3 EQAO assessment calmly as a normal part of the school year (no extra pressure at home)", "Demonstrate growing oral French production in immersion subjects"]
};
