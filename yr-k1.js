"use strict";
var yearPlans = { kinder: [], grade3: [] };

yearPlans.kinder[0] = {
  label: "Grade 1 — Ontario Curriculum Foundations",
  theme: "Ontario Math (Number to 50, facts to 10), Language foundations (phonics, oral language), Early French Immersion begins",
  curriculumNote: "Grade 1 EFI: Math and English Language are taught in English at school; Science, Social Studies, Arts, and Health are taught in French (60% of instructional time). This plan's tutor/self-directed blocks reinforce the English-taught subjects (Math, Language) plus support French vocabulary for the immersion subjects.",
  tip: "This is the highest-leverage year in the entire plan. Ontario's curriculum builds on Grade 1 foundations and does not slow down to fill gaps later — fluent addition/subtraction facts to 10 and solid phonics now compound for years. Each weekday below has a different focus so nothing gets crammed into one session; follow the rhythm and trust it.",
  weeklyRhythm: [
    { day: "Monday", focus: "Math: Number Sense to 50", secondary: "Reading fluency check" },
    { day: "Tuesday", focus: "Phonics & Writing", secondary: "French immersion vocabulary" },
    { day: "Wednesday", focus: "Math: Addition/Subtraction Facts", secondary: "Coding basics (Scratch Jr)" },
    { day: "Thursday", focus: "Reading Comprehension", secondary: "Science curiosity & observation" },
    { day: "Friday", focus: "Weekly Review: Math Facts Quiz", secondary: "Writing piece + French wrap-up" }
  ],
  weekdaySchedules: {
    monday: [
      {
        who: "parent", label: "Parent", time: "7:30–7:45 AM",
        title: "Monday Morning Spark — Number Sense",
        subject: "🧠 Math", subjectStyle: "background:#f5f3ff;color:#6d28d9",
        activity: "Mental math within 50 using real objects at breakfast",
        steps: [
          "Count out 23 cereal pieces or crackers together. Eat 5. Ask: 'How many are left? How do you know?' (Ontario Gr.1 B2: subtraction within 50 using concrete objects).",
          "Practise writing today's date number on a sticky note — say the number out loud, then write the numeral.",
          "Quick skip count: count by 2s from 0 to 20 while putting on shoes (Ontario Gr.1 B1)."
        ],
        materials: ["Cereal, crackers, or small counters", "Sticky note and marker"],
        outcome: "Subtraction within 50 practised with real objects, skip-counting by 2s reinforced",
        parentCue: "Always ask 'how do you know' even when they get it right — explaining the strategy out loud is what Ontario's curriculum actually assesses, not just the answer."
      },
      {
        who: "self", label: "Self-directed", time: "8:00 AM–3:30 PM",
        title: "Grade 1 School Day (Early French Immersion)",
        subject: "🏫 School", subjectStyle: "background:#e8f7ee;color:#1b5e38",
        activity: "Full engagement — Math/Language in English, other subjects in French",
        steps: [
          "Arrive on time, coat and bag put away independently.",
          "During French-taught subjects (science, social studies, arts): listen for 3 new French words and try to guess meaning from pictures or context.",
          "During Math: if a worksheet feels easy, ask the teacher 'can I try a harder one?'",
          "Before leaving: try to read 5 words from the classroom word wall on your own."
        ],
        materials: ["School supplies", "Packed snack and lunch"],
        outcome: "Engaged school day building French immersion comprehension and English literacy side by side",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "3:30–4:00 PM",
        title: "Outdoor Free Play",
        subject: "🌿 Physical", subjectStyle: "background:#e8f7ee;color:#1b5e38",
        activity: "Unstructured outdoor time — essential brain reset before tutoring",
        steps: [
          "Go outside immediately. No screens first.",
          "Free play: run, climb, bike — whatever feels good for 25-30 minutes."
        ],
        materials: ["Outdoor space and gear"],
        outcome: "Brain reset after a bilingual school day, ready for focused tutor time",
        parentCue: null
      },
      {
        who: "tutor", label: "Tutor", time: "4:00–5:00 PM",
        title: "Tutor Session — Number Sense to 50 + Reading Fluency",
        subject: "📐 Curriculum", subjectStyle: "background:#e8f3fd;color:#1565a0",
        activity: "Ontario Math Number strand (primary focus) + reading fluency check (secondary)",
        steps: [
          "MATH (35 min) — Ontario Gr.1 B1/B2: Open Mathies.ca (free, Ontario Ministry-funded) and use the 'Number Line' and 'Ten Frames' tools. Practise representing numbers 30-50 using ten-frames. Then: 10 addition/subtraction problems within 50 using base-ten blocks or the Mathies virtual blocks — write each as an equation (e.g. 23 + 14 = 37). Finish with a 2-minute timed drill of addition facts to 10 using printed flashcards; track which facts are still slow.",
          "READING FLUENCY (15 min) — Use a Bob Books Set 1 book (this week's assigned title from the set). Student reads aloud; tutor times exactly 1 minute and counts words read correctly. Record the number on a tracking sheet — the Grade 1 target is reaching 30-40 correct words per minute by June. Ask 2 comprehension questions: 'What happened first? What happened at the end?'",
          "WRAP-UP (10 min): Review the 3-5 addition/subtraction facts flagged as slow today. Use a simple drill app — Khan Academy Kids, 'Numbers and Counting' path, the addition mini-games — for 10 minutes of targeted practice on exactly those facts."
        ],
        materials: ["Tablet/laptop with mathies.ca (free, no login needed)", "Base-ten blocks or printable from mathies.ca", "Addition/subtraction flashcards (0-10)", "Bob Books Set 1 (this week's title)", "Timer", "Simple tracking sheet (words-per-minute log)", "Tablet with Khan Academy Kids (free)"],
        outcome: "Numbers 30-50 represented and added/subtracted with concrete tools; reading rate measured and logged; weak facts identified for tomorrow's practice",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "5:00–5:30 PM",
        title: "Reading Practice — Independent",
        subject: "📖 Reading", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Read today's Bob Books title aloud to a stuffed animal",
        steps: [
          "Re-read tonight's Bob Books title (the same one from tutoring) out loud to a stuffed animal or toy.",
          "After: tell the toy what happened in 1-2 sentences.",
          "Put a sticker on the reading log chart on the wall for finishing it."
        ],
        materials: ["Tonight's Bob Books title", "Stuffed animal", "Reading log chart", "Stickers"],
        outcome: "Reading fluency repetition (rereading the same text builds real fluency gains), comprehension retell practised",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "5:30–6:00 PM",
        title: "Math Games + Passion Project",
        subject: "🔢 + 🎨", subjectStyle: "background:#f0fdf4;color:#166534",
        activity: "Number-to-50 math game + ongoing weekly passion project",
        steps: [
          "MATH (15 min): Open Khan Academy Kids, Grade 1 path, 'Addition' unit. Complete one full activity set (usually 5-8 questions).",
          "PASSION PROJECT (15 min): Continue the ongoing weekly passion project (whatever this child is fascinated by — dinosaurs, space, bugs). Add one new drawing or fact to the dedicated notebook. Let them lead completely."
        ],
        materials: ["Tablet with Khan Academy Kids", "Passion project notebook"],
        outcome: "Addition practice reinforced through app; sustained self-chosen interest continues building",
        parentCue: "Resist steering the passion project toward something 'more impressive' — genuine sustained fascination with anything is the actual skill being built."
      },
      {
        who: "parent", label: "Parent", time: "6:30–6:50 PM",
        title: "Monday Dinner Discussion",
        subject: "💛 Family", subjectStyle: "background:#faeeda;color:#92400e",
        activity: "Talk about today's math and the day at school",
        steps: [
          "Ask: 'Show me with your fingers or with peas on your plate — what's 23 plus 14 again? How did the tutor help you figure it out?'",
          "Ask: 'Did you hear any new French words today? What do you think they mean?'",
          "Share your own 'something I figured out today' to model the habit."
        ],
        materials: ["Dinner", "No phones"],
        outcome: "Math concept reinforced through explanation, French immersion effort validated",
        parentCue: "Celebrate French comprehension, not just speaking — understanding comes well before confident speaking in EFI, and that's normal."
      },
      {
        who: "parent", label: "Parent", time: "7:45–8:00 PM",
        title: "Bedtime Read-Aloud + Gratitude",
        subject: "📖 Read", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Parent reads aloud a picture book one level above what child reads alone",
        steps: [
          "Choose a picture book or early chapter book (see book list) — read with expression, voices for characters.",
          "Stop once mid-story: 'What do you think will happen next?'",
          "After: 3 gratitudes — you share one too.",
          "Lights out at 8:00 PM sharp."
        ],
        materials: ["Tonight's read-aloud book", "Lamp on bedside table"],
        outcome: "Vocabulary built through rich text, emotional security reinforced, sleep protected",
        parentCue: "EFI is cognitively demanding. If they seem extra tired some evenings, that's the brain working hard processing two languages all day — not a problem to fix."
      }
    ],
    tuesday: [
      {
        who: "parent", label: "Parent", time: "7:30–7:45 AM",
        title: "Tuesday Morning Spark — Phonics",
        subject: "🧠 Language", subjectStyle: "background:#f5f3ff;color:#6d28d9",
        activity: "Sound segmenting and blending game at breakfast",
        steps: [
          "Say a simple word slowly, sound by sound: 'c-a-t'. Ask them to blend it into the whole word.",
          "Reverse it: say 'dog' and ask them to break it into sounds: 'd-o-g' (Ontario Language Strand B2: phonemic awareness).",
          "Ask: 'What letter does your name start with? What sound does it make? Can you think of another word with that sound?'"
        ],
        materials: ["Nothing — just talk"],
        outcome: "Phonemic segmenting and blending practised — the single strongest predictor of reading success",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "8:00 AM–3:30 PM",
        title: "Grade 1 School Day (Early French Immersion)",
        subject: "🏫 School", subjectStyle: "background:#e8f7ee;color:#1b5e38",
        activity: "Full engagement at school",
        steps: [
          "Arrive ready, materials organized.",
          "During French time: try repeating one French word or phrase out loud, even quietly to yourself.",
          "During English Language time: notice one new word and ask what it means if unsure."
        ],
        materials: ["School supplies", "Packed snack and lunch"],
        outcome: "Continued immersion comprehension and English literacy growth",
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
        title: "Tutor Session — Phonics & Writing + French Vocabulary",
        subject: "📐 Curriculum", subjectStyle: "background:#e8f3fd;color:#1565a0",
        activity: "Ontario Language Strand B/D (primary) + French immersion vocabulary support (secondary)",
        steps: [
          "PHONICS AND WRITING (35 min) — Ontario Strand B3/D2: Review this week's letter-sound pattern using printable phonics cards (Starfall.com 'Learn to Read' section has free printable letter cards). Read one new Bob Books title together, sounding out unfamiliar words rather than just supplying them. Then: writing practice — student writes 2-3 simple sentences about their weekend or a favourite toy, focusing on starting each sentence with a capital letter and ending with a period. Tutor marks only those two conventions and has the student fix any errors themselves.",
          "FRENCH VOCABULARY SUPPORT (15 min) — Check the school take-home folder or ask what topic is being covered in French science/social studies this week. Review 6-8 of those French words using simple flashcards (write the word on one side, draw or print a picture on the other). Say each aloud together 3 times.",
          "WRAP-UP (10 min) — Free phonics game on Starfall.com ('Starfall ABCs' section) to reinforce today's letter-sound pattern in a low-pressure way."
        ],
        materials: ["Starfall.com (free, no login)", "Bob Books Set 1 (next title in sequence)", "Writing notebook", "Index cards for French vocabulary flashcards", "This week's French topic from school folder"],
        outcome: "Phonemic blending strengthened, 2-3 sentences written with correct capitalization/punctuation, French immersion vocabulary reinforced",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "5:00–5:30 PM",
        title: "Independent Reading",
        subject: "📖 Reading", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Read tonight's book aloud, then add to reading log",
        steps: [
          "Pick a book from the book box (rotated weekly from the library).",
          "Read it aloud in your reading spot — to yourself or to a toy audience.",
          "Add the title to the reading log chart with a sticker."
        ],
        materials: ["Library books", "Reading log chart", "Stickers"],
        outcome: "Independent reading habit, fluency repetition",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "5:30–6:00 PM",
        title: "French Media + Passion Project",
        subject: "🇫🇷 + 🎨", subjectStyle: "background:#faeeda;color:#92400e",
        activity: "Light French exposure + continue passion project",
        steps: [
          "FRENCH (15 min): Watch one short episode of Caillou or Franklin et ses amis in French (available on TFO or YouTube) — ear exposure supporting the immersion classroom.",
          "PASSION PROJECT (15 min): Add to the ongoing weekly passion project notebook."
        ],
        materials: ["TFO or YouTube access for French children's content", "Passion project notebook"],
        outcome: "French listening comprehension supported, sustained interest project continues",
        parentCue: null
      },
      {
        who: "parent", label: "Parent", time: "6:30–6:50 PM",
        title: "Tuesday Dinner Discussion",
        subject: "💛 Family", subjectStyle: "background:#faeeda;color:#92400e",
        activity: "Talk about the sentences they wrote and today's French",
        steps: [
          "Ask them to read you the sentences they wrote in tutoring today.",
          "Ask: 'What's one French word you learned this week? Can you teach it to me?'",
          "Praise specific effort: 'I noticed you sounded out that hard word instead of giving up.'"
        ],
        materials: ["Dinner", "No phones"],
        outcome: "Writing pride reinforced, French ownership built by having them 'teach' you",
        parentCue: "Having them teach you French (even one word) reframes immersion as a strength, not a struggle."
      },
      {
        who: "parent", label: "Parent", time: "7:45–8:00 PM",
        title: "Bedtime Read-Aloud + Gratitude",
        subject: "📖 Read", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Read aloud, 3 gratitudes, sleep",
        steps: [
          "Read tonight's chapter or picture book with expression.",
          "3 gratitudes — you share one too.",
          "Lights out 8:00 PM."
        ],
        materials: ["Tonight's read-aloud book"],
        outcome: "Vocabulary built, emotional security reinforced, sleep protected",
        parentCue: null
      }
    ],
    wednesday: [
      {
        who: "parent", label: "Parent", time: "7:30–7:45 AM",
        title: "Wednesday Morning Spark — Addition Facts",
        subject: "🧠 Math", subjectStyle: "background:#f5f3ff;color:#6d28d9",
        activity: "Quick-fire addition/subtraction facts to 10",
        steps: [
          "Quiz 5 addition facts to 10 while getting dressed: 'What's 4+3? 6+2?' Ask for instant answers, not counting on fingers — that's the automaticity goal.",
          "If any fact is slow: say 'let's remember that one together' and repeat it 3 times out loud."
        ],
        materials: ["Nothing — just talk"],
        outcome: "Addition facts to 10 fluency checked and reinforced before school",
        parentCue: "By the end of Grade 1, these facts need to be instant, not counted. A few minutes daily gets there faster than long sessions occasionally."
      },
      {
        who: "self", label: "Self-directed", time: "8:00 AM–3:30 PM",
        title: "Grade 1 School Day (Early French Immersion)",
        subject: "🏫 School", subjectStyle: "background:#e8f7ee;color:#1b5e38",
        activity: "Full engagement at school",
        steps: [
          "Arrive ready and organized.",
          "During Math: notice if today's lesson matches what's being practised at home — ask the teacher a question if curious.",
          "During French time: try to follow along with gestures and pictures even without understanding every word."
        ],
        materials: ["School supplies", "Packed snack and lunch"],
        outcome: "School reinforces home practice",
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
        title: "Tutor Session — Addition/Subtraction Mastery + Coding Basics",
        subject: "📐 Curriculum", subjectStyle: "background:#e8f3fd;color:#1565a0",
        activity: "Ontario Math facts fluency drilling (primary) + coding fundamentals (secondary, Ontario Algebra C3)",
        steps: [
          "MATH FACTS (30 min) — Ontario Gr.1 B2: Timed flashcard rounds — addition facts 0-10, 2 minutes, then subtraction facts 0-10, 2 minutes. Sort cards into 'instant' and 'still thinking' piles. For the 'still thinking' pile, use ten-frames or counters to rebuild understanding, then redrill. Finish with 'Sum Swamp' or 'Zingo' board game for 10 minutes — facts practice disguised as play.",
          "CODING BASICS (20 min) — Ontario Algebra Strand C3 (mandatory from Grade 1): Open Scratch Jr (free iPad/tablet app) or scratch.mit.edu. Build a simple sequence: make a character move forward 3 times in a row, then add a sound. This is the earliest building block of the 'repeating sequence' concept Ontario's coding curriculum requires.",
          "WRAP-UP (10 min): Canadian coin recognition (Ontario Financial Literacy F1) — sort real or play coins (penny is no longer minted but still seen; nickel, dime, quarter, loonie, toonie), name each one, and count a simple combination like 'a dime and a nickel.'"
        ],
        materials: ["Addition/subtraction flashcards (0-10)", "Ten-frames or counters", "Sum Swamp or Zingo board game", "Tablet with Scratch Jr (free) or laptop for scratch.mit.edu", "Canadian coins (real or play set)"],
        outcome: "Addition/subtraction facts to 10 drilled with targeted re-teaching for weak ones, first coding sequence built, coin recognition practised",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "5:00–5:30 PM",
        title: "Independent Reading",
        subject: "📖 Reading", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Read aloud, log the book",
        steps: ["Read a book from the book box aloud in your reading spot.", "Add to reading log with a sticker."],
        materials: ["Library books", "Reading log chart"],
        outcome: "Reading volume and fluency continue building",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "5:30–6:00 PM",
        title: "Coding Project + Passion Project",
        subject: "💻 + 🎨", subjectStyle: "background:#f0fdf4;color:#166534",
        activity: "Extend today's Scratch Jr project + passion project",
        steps: [
          "CODING (15 min): Open the Scratch Jr project from tutoring. Add one more block — a different sound, or a second character that also moves.",
          "PASSION PROJECT (15 min): Add to the ongoing notebook."
        ],
        materials: ["Tablet with Scratch Jr", "Passion project notebook"],
        outcome: "Coding sequence extended independently, sustained interest project continues",
        parentCue: null
      },
      {
        who: "parent", label: "Parent", time: "6:30–6:50 PM",
        title: "Wednesday Dinner Discussion",
        subject: "💛 Family", subjectStyle: "background:#faeeda;color:#92400e",
        activity: "Talk about the coding project and math facts progress",
        steps: [
          "Ask: 'Show me your Scratch project — what does your character do?'",
          "Ask: 'Which addition fact felt easiest today? Which one is still tricky?'",
          "Celebrate any fact that moved from 'still thinking' to 'instant' this week."
        ],
        materials: ["Dinner", "No phones", "Tablet to show the coding project if handy"],
        outcome: "Coding pride shared, math fact progress made visible",
        parentCue: null
      },
      {
        who: "parent", label: "Parent", time: "7:45–8:00 PM",
        title: "Bedtime Read-Aloud + Gratitude",
        subject: "📖 Read", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Read aloud, 3 gratitudes, sleep",
        steps: ["Read tonight's book with expression.", "3 gratitudes.", "Lights out 8:00 PM."],
        materials: ["Tonight's read-aloud book"],
        outcome: "Vocabulary and connection, sleep protected",
        parentCue: null
      }
    ],
    thursday: [
      {
        who: "parent", label: "Parent", time: "7:30–7:45 AM",
        title: "Thursday Morning Spark — Curiosity",
        subject: "🧠 Science", subjectStyle: "background:#f5f3ff;color:#6d28d9",
        activity: "A science question and a comprehension warm-up",
        steps: [
          "Ask a simple 'why' question about nature: 'Why do you think leaves fall off trees?' Let them guess — don't correct, just listen.",
          "Comprehension warm-up: 'What was your favourite part of the book we read last night? Why?'"
        ],
        materials: ["Nothing — just talk"],
        outcome: "Scientific curiosity sparked, comprehension and opinion-with-reason practised",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "8:00 AM–3:30 PM",
        title: "Grade 1 School Day (Early French Immersion)",
        subject: "🏫 School", subjectStyle: "background:#e8f7ee;color:#1b5e38",
        activity: "Full engagement at school",
        steps: [
          "Arrive ready and organized.",
          "During French science/social studies time: notice one fact or idea and try to remember it to share at home.",
          "Ask one genuine question in class today, even a small one."
        ],
        materials: ["School supplies", "Packed snack and lunch"],
        outcome: "Curiosity and question-asking habit reinforced at school",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "3:30–4:00 PM",
        title: "Outdoor Free Play + Nature Observation",
        subject: "🌿 Physical", subjectStyle: "background:#e8f7ee;color:#1b5e38",
        activity: "Outdoor time with one nature mission",
        steps: [
          "Go outside immediately. No screens first.",
          "Mission: find one thing in nature you've never noticed before — a bug, a leaf shape, a cloud pattern.",
          "Draw it in the nature notebook when you come inside (2 minutes)."
        ],
        materials: ["Nature notebook", "Pencil or crayon"],
        outcome: "Brain reset plus a first science observation for the day",
        parentCue: null
      },
      {
        who: "tutor", label: "Tutor", time: "4:00–5:00 PM",
        title: "Tutor Session — Reading Comprehension + Science Observation",
        subject: "📐 Curriculum", subjectStyle: "background:#e8f3fd;color:#1565a0",
        activity: "Ontario Language Strand C (primary) + hands-on science (secondary)",
        steps: [
          "READING COMPREHENSION (30 min) — Ontario Strand C: Read a slightly longer picture book together (see book list). After each page or two, pause and ask one of: 'What do you think will happen next?' (predicting), 'Why do you think the character did that?' (inferring), or 'Does this remind you of anything?' (connecting) — these are the three comprehension strategies Ontario's curriculum names explicitly. Student then retells the whole story in their own words using 3-4 sentences.",
          "SCIENCE OBSERVATION (20 min) — Do this week's simple experiment from the rotating list: making a rain cloud in a jar (water, shaving cream, blue food colouring), or growing bean sprouts in a clear cup against the window. Before starting: ask 'What do you think will happen?' and have them say their prediction out loud (writing it isn't necessary yet at this age). After: ask 'What did you see? Were you right?'",
          "WRAP-UP (10 min): Free choice — either continue reading the book from earlier, or do one more round of the science observation."
        ],
        materials: ["A longer picture book (see book list)", "Experiment materials: jar, water, shaving cream, blue food colouring OR clear cup, beans, water", "Science notebook (drawing-based at this age)"],
        outcome: "Three comprehension strategies (predict/infer/connect) practised explicitly, a hands-on prediction-observation cycle completed",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "5:00–5:30 PM",
        title: "Independent Reading",
        subject: "📖 Reading", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Read today's book again, log it",
        steps: ["Re-read today's tutoring book or a new book from the box.", "Add to reading log."],
        materials: ["Books", "Reading log chart"],
        outcome: "Reading volume continues building",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "5:30–6:00 PM",
        title: "Science Check-In + Passion Project",
        subject: "🔬 + 🎨", subjectStyle: "background:#e8f7ee;color:#1b5e38",
        activity: "Check on the science experiment + passion project",
        steps: [
          "SCIENCE (15 min): Check on the rain cloud jar or bean sprouts — has anything changed? Draw what you see today in the science notebook.",
          "PASSION PROJECT (15 min): Add to the ongoing notebook."
        ],
        materials: ["Experiment setup from tutoring", "Science notebook", "Passion project notebook"],
        outcome: "Ongoing observation skill built, sustained interest project continues",
        parentCue: null
      },
      {
        who: "parent", label: "Parent", time: "6:30–6:50 PM",
        title: "Thursday Dinner Discussion",
        subject: "💛 Family", subjectStyle: "background:#faeeda;color:#92400e",
        activity: "Talk about the science experiment and the book",
        steps: [
          "Ask: 'What's happening with your rain cloud jar / bean sprouts? What do you think will happen tomorrow?'",
          "Ask them to retell the book from tutoring in their own words.",
          "This week's big question: 'If you could ask a scientist anything, what would you ask?'"
        ],
        materials: ["Dinner", "No phones"],
        outcome: "Scientific thinking and retelling both reinforced",
        parentCue: null
      },
      {
        who: "parent", label: "Parent", time: "7:45–8:00 PM",
        title: "Bedtime Read-Aloud + Gratitude",
        subject: "📖 Read", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Read aloud, 3 gratitudes, sleep",
        steps: ["Read tonight's book.", "3 gratitudes.", "Lights out 8:00 PM."],
        materials: ["Tonight's read-aloud book"],
        outcome: "Connection and vocabulary, sleep protected",
        parentCue: null
      }
    ],
    friday: [
      {
        who: "parent", label: "Parent", time: "7:30–7:45 AM",
        title: "Friday Morning Spark — Week Recap",
        subject: "🧠 Review", subjectStyle: "background:#f5f3ff;color:#6d28d9",
        activity: "Quick recall of the week's learning",
        steps: [
          "Ask: 'What's one thing you learned this week that you didn't know on Monday?'",
          "Quiz 3 addition facts quickly — these should feel easy by Friday.",
          "Preview: 'Today we'll do a fun math facts challenge and finish your story!'"
        ],
        materials: ["Nothing — just talk"],
        outcome: "Week's learning surfaced and consolidated before the review day",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "8:00 AM–3:30 PM",
        title: "Grade 1 School Day (Early French Immersion)",
        subject: "🏫 School", subjectStyle: "background:#e8f7ee;color:#1b5e38",
        activity: "Full engagement, finishing the week strong",
        steps: ["Arrive ready.", "Notice anything from this week's lessons that connects to what's been practised at home."],
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
        title: "Tutor Session — Weekly Math Facts Quiz + Writing Finish + French Wrap-Up",
        subject: "📐 Curriculum", subjectStyle: "background:#e8f3fd;color:#1565a0",
        activity: "Consolidation: this week's math facts, finishing the writing piece, and French vocabulary review",
        steps: [
          "MATH FACTS QUIZ (20 min) — A genuinely fun 'quiz': 10 mixed addition/subtraction facts to 10, timed (2 minutes), like a game with a small celebration for every correct instant answer. Record the score on a simple weekly chart so progress is visible over the months — that chart becomes very motivating by Year 2.",
          "FINISH THE WRITING PIECE (20 min) — Ontario Strand D: Take the sentences written on Tuesday and add 1-2 more, working toward a complete tiny story with a beginning, middle, and end (Ontario Gr.1 expectation: write a short text with a main idea). Read the finished piece aloud together — celebrate it as a finished piece of work, not a draft.",
          "FRENCH WRAP-UP (20 min) — Review all the French vocabulary words covered this week using the flashcards made on Tuesday. Play a simple matching game: word side up, picture side up, match them. End with the French song or show from earlier in the week, sung/watched together once more."
        ],
        materials: ["Printed math facts quiz sheet (0-10 mixed)", "Timer", "Weekly progress chart (simple grid, can be hand-drawn)", "This week's writing piece", "French vocabulary flashcards from Tuesday"],
        outcome: "Math facts progress measured and charted, a complete short story finished and celebrated, full week of French vocabulary consolidated",
        parentCue: null
      },
      {
        who: "self", label: "Self-directed", time: "5:00–5:45 PM",
        title: "Free Reading + Passion Project Showcase",
        subject: "📖 + 🎨", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Free choice reading + showing the week's passion project progress",
        steps: [
          "READING (25 min): Free choice — any book from the box, no pressure, just enjoyment.",
          "PASSION PROJECT (20 min): Look back at everything added to the notebook this week. Add one final touch if inspired."
        ],
        materials: ["Library books", "Passion project notebook"],
        outcome: "Reading for pure enjoyment protected, week's creative work reviewed with pride",
        parentCue: null
      },
      {
        who: "parent", label: "Parent", time: "6:30–6:50 PM",
        title: "Friday Dinner — Week Celebration",
        subject: "💛 Family", subjectStyle: "background:#faeeda;color:#92400e",
        activity: "Celebrate the whole week's progress",
        steps: [
          "Ask them to read their finished story from today out loud at the table.",
          "Ask: 'What was your favourite thing you did this week?'",
          "Look at the math facts chart together: 'Look how many you got right today compared to a few weeks ago!'"
        ],
        materials: ["Dinner", "No phones", "This week's writing piece and math facts chart"],
        outcome: "Whole week's growth made visible and celebrated together",
        parentCue: "Friday dinner is the moment to step back and notice growth over weeks, not just days — this is what keeps motivation strong long-term."
      },
      {
        who: "parent", label: "Parent", time: "7:45–8:00 PM",
        title: "Bedtime Read-Aloud + Gratitude",
        subject: "📖 Read", subjectStyle: "background:#eff6ff;color:#1d4ed8",
        activity: "Read aloud, 3 gratitudes, sleep — and a relaxed weekend ahead",
        steps: ["Read tonight's book.", "3 gratitudes about the whole week.", "Lights out 8:00 PM (a little flexibility is fine on Fridays)."],
        materials: ["Tonight's read-aloud book"],
        outcome: "Week closes warmly, weekend begins",
        parentCue: null
      }
    ]
  },
  books: ["Bob Books Set 1–4 (phonics)", "Elephant and Piggie series — Willems", "Fly Guy series — Arnold", "Dragon Loves Tacos — Rubin", "Ada Twist Scientist — Beaty", "Pete the Cat — Litwin", "Charlotte's Web — White (read-aloud)", "My Father's Dragon — Gannett (read-aloud)"],
  milestones: ["Recall addition and subtraction facts to 10 with fluency (Ontario B2 end-of-Grade-1 target)", "Read and write whole numbers to 50 and add/subtract within 50", "Identify Canadian coins and represent simple amounts (Financial Literacy F1)", "Read 50+ sight words aloud without hesitation", "Write a 2-3 sentence story with a capital letter and period", "Demonstrate growing French comprehension in immersion subjects even if spoken output is still developing"]
};
