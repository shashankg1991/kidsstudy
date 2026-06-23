"use strict";

function buildDayPlan(kid, year, dayType, season) {
  var yIdx = parseInt(year) - 1;
  var plan = yearPlans[kid][yIdx];
  var label = kid === "kinder" ? "Kindergartner track" : "Grade 3 track";
  var ageBase = kid === "kinder" ? 5 : 8;
  var age = ageBase + yIdx;

  if (dayType === "weekday") {
    return { type: "weekday", label: label, year: year, age: age, season: season, sessions: plan.schedule };
  }

  if (dayType === "saturday") {
    if (kid === "kinder") {
      return { type: "saturday", label: label, year: year, age: age, season: season, sessions: [
        {
          who: "self", label: "Self-directed", time: "8:30–9:00 AM",
          title: "Free Morning Start",
          subject: "☀️ Morning", subjectStyle: "background:#e8f7ee;color:#1b5e38",
          activity: "Slow start, child-led activity",
          steps: ["Eat breakfast slowly.", "Read or look at books for 20 minutes — no assigned book, any book.", "Go outside for 10 minutes before the day starts."],
          materials: ["Books from library pile"], outcome: "Gentle transition into enrichment Saturday", parentCue: null
        },
        {
          who: "parent", label: "Parent", time: "9:00–10:30 AM",
          title: "Enrichment Outing or Activity",
          subject: "⭐ Enrichment", subjectStyle: "background:#f5e6e9;color:#a51c30",
          activity: season === "winter" ? "Canadian Museum of Nature or Science and Tech Museum" : "Ottawa Public Library — borrow 5 books, attend storytime if available",
          steps: [
            "Year 1–2: Ottawa Public Library. Child picks 5 books — 1 non-fiction, 4 any choice.",
            "Year 3: Canada Science and Technology Museum — pick one exhibit to study in depth.",
            "Year 4–5: Enrichment class (coding club, math circle, robotics, debate) or museum visit with written reflection.",
            "Always ask: 'What is the most interesting thing you learned here?'"
          ],
          materials: ["Library card", "Small notebook for observations", "Bus or car"], outcome: "Weekly cultural and intellectual enrichment outside the home", parentCue: "Your 15 minutes here is the walk in and the walk out conversation. Ask great questions."
        },
        {
          who: "self", label: "Self-directed", time: "10:30–11:30 AM",
          title: "Reading + Math Game",
          subject: "📖 + 🔢", subjectStyle: "background:#eff6ff;color:#1d4ed8",
          activity: "30 min reading then 30 min math game",
          steps: [
            "READING (30 min): Read silently from a library book. If you finish a book, write the title on your reading chart and pick the next one.",
            "MATH GAME (30 min): Choose one: Prodigy Math, Zingo Number Bingo, Monopoly Jr with a sibling, or Khan Academy Kids math activities. Set a 30-minute timer if using a screen."
          ],
          materials: ["Library books", "Tablet or board game"], outcome: "Reading habit reinforced on non-school day, math in play format", parentCue: null
        },
        {
          who: "parent", label: "Parent", time: "11:30 AM–1:00 PM",
          title: "Outdoor Ottawa Adventure",
          subject: "🌿 Outdoor", subjectStyle: "background:#e8f7ee;color:#1b5e38",
          activity: season === "winter" ? "Rideau Canal skating (when open) or Gatineau Park snowshoeing" : season === "summer" ? "Gatineau Park trails or Petrie Island beach" : "NCC pathway bike ride or Hog's Back Falls walk",
          steps: [
            "Bring a nature notebook.", "Set a mission: find and draw 3 things you have never noticed before.", "Ask one science question on the way and let them wonder rather than answering it.",
            "Physical activity for 60–90 minutes."
          ],
          materials: ["Nature notebook", "Pencils", "Appropriate outdoor gear"], outcome: "Physical health, Ottawa connection, science observation", parentCue: "This is your highest-quality family time. No phones unless for navigation."
        },
        {
          who: "self", label: "Self-directed", time: "2:00–3:00 PM",
          title: "Monthly Creative Project",
          subject: "🎨 Creative", subjectStyle: "background:#f5f3ff;color:#6d28d9",
          activity: "Long-term creative project — one per month",
          steps: [
            "Sep: Design and build a model of your home using cardboard.", "Oct: Write and illustrate a Halloween story (6 pages minimum).", "Nov: Make a bird feeder and install it in the garden.", "Dec: Write holiday cards in French to 5 people.", "Jan: Build a snow fort with a floor plan drawn first.", "Feb: Create a Valentine's book about why you love 3 different people.", "Mar: Design and plant a seed tray for spring (label each plant).", "Apr: Write and perform a short play about a season.", "May: Make a nature field guide for your neighbourhood (10 entries).", "Jun–Aug: Big summer project chosen by child."
          ],
          materials: ["Varies by month — sourced the week before"], outcome: "Planning, making, and finishing — the three skills that compound into remarkable output", parentCue: null
        },
        {
          who: "self", label: "Self-directed", time: "3:00–4:00 PM",
          title: "Music and Arts",
          subject: "🎵 Music", subjectStyle: "background:#f5e6e9;color:#a51c30",
          activity: "Year 1–2: music exploration. Year 3+: formal practice and art portfolio",
          steps: [
            "Year 1–2: Put on a children's classical music playlist. Dance, draw to the music, bang on pots. 30 min of joyful noise.",
            "Year 3+: Full instrument practice session (as per weekday). Then 20 minutes of visual art — add one piece to your portfolio this month."
          ],
          materials: ["Speaker for music", "Year 3+: instrument + art supplies"], outcome: "Music and art habits maintained on weekends", parentCue: null
        },
        {
          who: "parent", label: "Parent", time: "4:00–5:00 PM",
          title: "Family Learning Time",
          subject: "🌍 Discovery", subjectStyle: "background:#faeeda;color:#92400e",
          activity: "Documentary + discussion",
          steps: [
            "Choose a documentary: David Attenborough (any), National Geographic Kids, How It's Made, Cosmos.",
            "Watch together — everyone. No separate screens.",
            "Pause twice for questions: 'What surprised you? Why does that happen?'",
            "Discuss over dinner what you watched."
          ],
          materials: ["TV", "Netflix or YouTube"], outcome: "Family curiosity modelled, documentary as learning vehicle", parentCue: "Watch with genuine interest yourself. Children mirror their parents' intellectual engagement."
        }
      ]};
    } else {
      return { type: "saturday", label: label, year: year, age: age, season: season, sessions: [
        {
          who: "self", label: "Self-directed", time: "8:00–9:00 AM",
          title: "Competition Math — Deep Session",
          subject: "🏆 Math", subjectStyle: "background:#f5e6e9;color:#a51c30",
          activity: "60 minutes of serious competition math — the most important hour of the week",
          steps: [
            "Year 1–2: AMC 8 past paper — 5 problems timed (8 min each). Show all working. No calculator.",
            "Year 3: Full AMC 8 mock timed test — 25 problems in 40 minutes once per month. Weekly: 8 problems.",
            "Year 4–5: AMC 10 problems — 5 per session. Each wrong answer gets a full written solution.",
            "After: categorise your errors — careless mistake, knowledge gap, or strategy failure. Each needs a different fix."
          ],
          materials: ["AMC past papers printed from artofproblemsolving.com", "Timer", "Graph paper", "No calculator"], outcome: "Competition math trajectory maintained, error pattern identified", parentCue: null
        },
        {
          who: "self", label: "Self-directed", time: "9:00–10:00 AM",
          title: "Writing Workshop — Long Project",
          subject: "✍️ Writing", subjectStyle: "background:#f5f3ff;color:#6d28d9",
          activity: "60 min on the current major writing project — no starting new things",
          steps: [
            "Open your current long project: research paper, literary essay, or creative writing piece.",
            "Today's rule: only move forward. No rewriting what you already wrote.",
            "Minimum: 300 new words or one complete new section.",
            "End: read the last paragraph aloud. Does it make sense? Fix one thing before stopping."
          ],
          materials: ["Writing notebook or laptop", "Current draft"], outcome: "Long-form writing completion muscle built", parentCue: null
        },
        {
          who: "parent", label: "Parent", time: "10:00–11:30 AM",
          title: "Enrichment Class or Club + Parent Check-In",
          subject: "⭐ Enrichment", subjectStyle: "background:#f5e6e9;color:#a51c30",
          activity: "Ongoing enrichment program + 10-min parent debrief",
          steps: [
            "Attend one ongoing weekly program: Ottawa robotics league, debate team, chess club, competitive math club, science olympiad.",
            "After the session (10 min with parent): 'What was the hardest thing today? What strategy did you try? What will you do differently next time?'",
            "Year 4–5: If competing on a team, debrief as a coach, not a parent. Ask about team dynamics too."
          ],
          materials: ["Transport to program", "Gear for activity"], outcome: "External expertise accessed, performance debrief habit built", parentCue: "10 minutes of coaching debrief after every enrichment session is worth more than the session itself."
        },
        {
          who: "self", label: "Self-directed", time: "11:30 AM–1:00 PM",
          title: "Reading and Annotation Block",
          subject: "📖 Reading", subjectStyle: "background:#eff6ff;color:#1d4ed8",
          activity: "90 min of serious reading with annotation",
          steps: [
            "Read 3+ chapters of current book.",
            "Annotate: green sticky for thesis evidence, yellow for technique, pink for questions.",
            "After: write a one-paragraph analysis — not a summary. What is the author doing and why?",
            "Add page count to your yearly reading tracker. How far to the next milestone?"
          ],
          materials: ["Current book", "Sticky notes (3 colours)", "Reading analysis journal"], outcome: "Literary analysis skills practised weekly, reading pace maintained", parentCue: null
        },
        {
          who: "self", label: "Self-directed", time: "2:00–3:00 PM",
          title: "STEM Long Project + Spike Work",
          subject: "🔬 STEM", subjectStyle: "background:#e8f7ee;color:#1b5e38",
          activity: "Science fair or coding project + 30 min spike",
          steps: [
            "STEM PROJECT (30 min): Science fair experiment — run the experiment, collect data, update notebook. OR coding project — one new feature, tested and working.",
            "SPIKE (30 min): Uninterrupted. Phone away. The thing you are becoming extraordinary at."
          ],
          materials: ["Science kit or laptop", "Project log"], outcome: "Long-term project advancing, spike expertise deepening", parentCue: null
        },
        {
          who: "self", label: "Self-directed", time: "3:00–4:00 PM",
          title: "Physical — Team Sport",
          subject: "⚽ Physical", subjectStyle: "background:#e8f7ee;color:#1b5e38",
          activity: "Competitive sport practice or team activity",
          steps: [
            "Attend a team sport practice or play pickup sport with friends.",
            "Physical excellence matters as much as academics — body and mind are not separate.",
            "If no team: 60-min solo run, swim, or skate. Timed. Improve the time each week."
          ],
          materials: ["Sport equipment", "Transport if needed"], outcome: "Physical health, teamwork, resilience — all genuinely valued by top universities and life alike", parentCue: null
        },
        {
          who: "parent", label: "Parent", time: "4:30–5:00 PM",
          title: "Community Service Planning",
          subject: "❤️ Service", subjectStyle: "background:#e8f7ee;color:#1b5e38",
          activity: "Monthly service activity or planning session",
          steps: [
            "Monthly: attend a volunteering session together (Ottawa Food Bank, CHEO events, Community Harvest).",
            "Non-service Saturday: sit together for 10 min. Review service log — current hours vs. year goal.",
            "Ask: 'What impact did your last session have? How do you know?'"
          ],
          materials: ["Service log", "Transport to volunteer site if applicable"], outcome: "Service hours accumulated, impact reflection built", parentCue: "Your presence at the service session matters — it says this is a family value, not a box to check."
        }
      ]};
    }
  }

  if (dayType === "sunday") {
    if (kid === "kinder") {
      return { type: "sunday", label: label, year: year, age: age, season: season, sessions: [
        {
          who: "self", label: "Self-directed", time: "9:00–9:30 AM",
          title: "Discovery Journal",
          subject: "📓 Journal", subjectStyle: "background:#f5f3ff;color:#6d28d9",
          activity: "Free journaling about the week's discoveries",
          steps: ["Open your discovery journal.", "Write today's date.", "Draw something you were curious about this week.", "Write 2–4 sentences about it. Spelling does not need to be perfect.", "Parent does the same in their own journal — model the habit."],
          materials: ["Discovery journal", "Pencils and crayons"], outcome: "Curiosity documented, journaling habit reinforced, self-reflection begun", parentCue: "Do your own journal entry beside them. You modelling the habit is worth 10 instructions."
        },
        {
          who: "self", label: "Self-directed", time: "9:30–10:30 AM",
          title: "Reading + Book Response",
          subject: "📖 Reading", subjectStyle: "background:#eff6ff;color:#1d4ed8",
          activity: "30 min reading, then mini book report",
          steps: [
            "Read silently for 30 minutes.",
            "Mini book report (10 min): Title, author, your rating out of 5 stars, your favourite sentence from the book, one question the book made you wonder about.",
            "Add to reading chart. If book is finished: pick the next one from the library pile."
          ],
          materials: ["Book", "Reading response card (index cards work well)"], outcome: "Reading comprehension and response habit, rating develops taste and opinion", parentCue: null
        },
        {
          who: "self", label: "Self-directed", time: "10:30–11:30 AM",
          title: "Weekly Science Experiment",
          subject: "🔬 Science", subjectStyle: "background:#e8f7ee;color:#1b5e38",
          activity: "Hands-on experiment from the monthly science theme",
          steps: [
            "Pick this week's experiment from the science kit.",
            "Sep: Rain cloud in a jar. Oct: Volcano model. Nov: Grow crystals. Dec: Snow globe. Jan: States of matter with ice, water, steam. Feb: Rainbow with a glass of water in sunlight. Mar: Plant an avocado seed. Apr: Worm farm. May: Solar oven with cardboard box.",
            "Before: write your hypothesis. After: write one sentence about what you observed and whether your hypothesis was right."
          ],
          materials: ["Experiment materials (set up Saturday)", "Science notebook"], outcome: "Consistent scientific method practice, hypothesis habit, weekly hands-on science", parentCue: null
        },
        {
          who: "self", label: "Self-directed", time: "2:00–3:00 PM",
          title: "French Immersion Support + Free Creative Time",
          subject: "🇫🇷 + 🎨", subjectStyle: "background:#faeeda;color:#92400e",
          activity: "Light French media (supporting school EFI) then unstructured creative play",
          steps: [
            "FRENCH (20 min): French children's show, songs (Henri Des, Alain le Lait), or a French card/board game. This is light exposure supporting the school's immersion program — not new instruction, since French science/social studies/arts are already taught at school all week.",
            "FREE PLAY (40 min): No screens. No instructions. LEGO, drawing, costumes, forts, imaginative play. Do not interrupt it."
          ],
          materials: ["French media or card game", "Whatever they choose to play with"], outcome: "Enjoyable reinforcement of French immersion exposure, unstructured time for creativity and executive function", parentCue: "Do not interrupt the free play. Do not suggest activities. Walk away."
        },
        {
          who: "parent", label: "Parent", time: "4:00–4:20 PM",
          title: "Weekly Review and Coming Week Preview",
          subject: "📅 Planning", subjectStyle: "background:#e8f7ee;color:#1b5e38",
          activity: "Achievement review + next week goal-setting",
          steps: [
            "Sit together for 10 minutes: 'What was the best thing about this week?' 'What was something hard?'",
            "Open the achievement log. Did you meet last week's goal? Add any new achievement.",
            "Preview coming week: any special events, competitions, or projects due?",
            "Set ONE goal for the week together. Write it on a sticky note on the fridge."
          ],
          materials: ["Achievement log", "Sticky note"], outcome: "Weekly closure, goal-setting rhythm, accountability without pressure", parentCue: "Keep this to 10 minutes. Quality over duration. End on a positive note every time."
        },
        {
          who: "parent", label: "Parent", time: "7:30–8:00 PM",
          title: "Sunday Bedtime — Week Reflection",
          subject: "📖 Reflect", subjectStyle: "background:#eff6ff;color:#1d4ed8",
          activity: "Extra-long bedtime read + week gratitude + tutor message",
          steps: [
            "Read 2 chapters tonight — Sunday is the generous bedtime reading night.",
            "3 gratitudes — specifically about the week: 'What is one thing from this week you are proud of?'",
            "After lights out: send the tutor a 3-line message about the coming week's focus, what was hard last week, what to push on."
          ],
          materials: ["Chapter book", "Phone for tutor message (after lights out)"], outcome: "Week closed with warmth, tutor prepared for Monday without a long meeting", parentCue: "The tutor message takes 2 minutes and makes Monday's session 3 times more effective."
        }
      ]};
    } else {
      return { type: "sunday", label: label, year: year, age: age, season: season, sessions: [
        {
          who: "self", label: "Self-directed", time: "8:30–10:30 AM",
          title: "Deep Work Block — 2 Uninterrupted Hours",
          subject: "🧠 Deep Work", subjectStyle: "background:#f5f3ff;color:#6d28d9",
          activity: "The most important 2 hours of the week — full focus, no interruption",
          steps: [
            "Phone in another room. Door closed. Timer on for 2 hours.",
            "Hour 1: Passion project or research project — serious, sustained, uninterrupted work.",
            "Hour 2: Advanced reading — a challenging book, annotated. 2+ chapters minimum.",
            "This builds the deep work capacity that elite universities require."
          ],
          materials: ["Project materials", "Challenging book + sticky notes"], outcome: "Deep focus capacity built — the most important cognitive skill for elite academic achievement", parentCue: "Do not interrupt. Do not check in. Trust the plan."
        },
        {
          who: "self", label: "Self-directed", time: "10:30–11:30 AM",
          title: "Essay or Research Paper Writing",
          subject: "✍️ Writing", subjectStyle: "background:#f5f3ff;color:#6d28d9",
          activity: "Sustained writing — current major project",
          steps: [
            "Open your current long-form writing project.",
            "Today's goal: write until you have a complete new section.",
            "Read aloud what you wrote. Fix one thing. Do not rewrite the whole thing.",
            "End: write one sentence about what you need to research or write next."
          ],
          materials: ["Writing notebook or laptop", "Sources"], outcome: "Long-form writing project advancing, editing discipline developed", parentCue: null
        },
        {
          who: "self", label: "Self-directed", time: "11:30 AM–12:00 PM",
          title: "Current Events — Read and Respond",
          subject: "🌍 News", subjectStyle: "background:#faeeda;color:#92400e",
          activity: "2 news articles with written analytical responses",
          steps: [
            "Read 2 articles from CBC News, BBC News, or The Guardian (not social media).",
            "For each: write 3 sentences — what is the issue, who is affected and how, what should happen and why.",
            "Pick the article you found more interesting for dinner discussion tonight."
          ],
          materials: ["Device for news", "Current events notebook"], outcome: "Current events literacy, opinion with reasoning, dinner conversation prepared", parentCue: null
        },
        {
          who: "self", label: "Self-directed", time: "1:00–2:00 PM",
          title: "Music Practice + Theory",
          subject: "🎵 Music", subjectStyle: "background:#f5e6e9;color:#a51c30",
          activity: "Full instrument session + theory workbook",
          steps: [
            "INSTRUMENT (35 min): Full structured session. Sunday: play your full programme straight through as if in a recital.",
            "THEORY (15 min): One page from the RCM Theory workbook at your grade level.",
            "EAR TRAINING (10 min): Teoria.com or Royal Conservatory Ear Training app."
          ],
          materials: ["Instrument", "RCM Theory workbook", "Ear training app or Teoria.com"], outcome: "Performance-mode practice builds stage readiness, theory and ear training systematic", parentCue: null
        },
        {
          who: "self", label: "Self-directed", time: "2:00–3:30 PM",
          title: "Competition Prep — Weekly Session",
          subject: "🏆 Competition", subjectStyle: "background:#f5e6e9;color:#a51c30",
          activity: "Targeted competition preparation",
          steps: [
            "Year 1: 8 AMC 8 problems from a past paper. Timed. Write up solutions to all wrong answers.",
            "Year 2: 10 AMC 8 problems. Identify your weakest category and do 5 extra problems in it.",
            "Year 3: AMC 8 full mock once per month. Otherwise: 8 AMC 8 or GAUSS problems.",
            "Year 4: AMC 10 level — 5 problems, timed, full solution write-up for every wrong answer.",
            "Year 5: AMC 10 — attempt one past paper start to finish. Score it. Compare to previous attempt."
          ],
          materials: ["Printed past papers", "Graph paper", "Timer"], outcome: "Systematic competition improvement — this weekly session separates top competitors from participants", parentCue: null
        },
        {
          who: "self", label: "Self-directed", time: "3:30–5:00 PM",
          title: "Physical + Social",
          subject: "👫 Social", subjectStyle: "background:#e8f7ee;color:#1b5e38",
          activity: "Friend time and outdoor physical activity",
          steps: [
            "Invite a friend over or go out. Physical activity — bikes, skating, sport.",
            "Social time is not wasted time. Emotional intelligence and leadership are built in real peer interactions.",
            "Ottawa Sundays in season: Gatineau Park, Rideau River paths, Mooney's Bay, Petrie Island."
          ],
          materials: ["Outdoor gear", "Transport"], outcome: "Social intelligence built, physical health maintained, mental rest from focused work", parentCue: null
        },
        {
          who: "parent", label: "Parent", time: "7:00–7:20 PM",
          title: "Weekly Review + Tutor Brief",
          subject: "📅 Planning", subjectStyle: "background:#e8f7ee;color:#1b5e38",
          activity: "Achievement log, goal review, tutor message",
          steps: [
            "5 min with child: 'What are you most proud of this week? What was hardest?' Update achievement log together.",
            "Set 3 specific goals for the coming week. Write them where they will see them every day.",
            "After lights out: send 3-line tutor message — what went well, what was hard, what to focus on Monday."
          ],
          materials: ["Achievement log", "Sticky notes or whiteboard", "Phone for tutor message"], outcome: "Week closed, next week set up, tutor ready for Monday", parentCue: "3 lines to the tutor. Never longer. Respects their time and keeps the communication crisp."
        },
        {
          who: "parent", label: "Parent", time: "8:00–8:20 PM",
          title: "Sunday Bedtime Read",
          subject: "📖 Read", subjectStyle: "background:#eff6ff;color:#1d4ed8",
          activity: "Advanced read-aloud + 3 specific gratitudes",
          steps: [
            "Read 1–2 chapters of a university-adjacent book — whichever you are currently on.",
            "Ask: 'What is the single most important idea in what we just read?'",
            "3 gratitudes — must be specific, not generic. Model your own.",
            "Lights out 8:30 PM."
          ],
          materials: ["Read-aloud book"], outcome: "Week ended with ideas and warmth", parentCue: null
        }
      ]};
    }
  }
  return null;
}
