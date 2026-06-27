"use strict";

function renderYearCard(kid, y) {
  var data = yearPlans[kid][y - 1];
  var ageBase = kid === "kinder" ? 5 : 8;
  var age = ageBase + (y - 1);
  var containerId = kid + "-content";
  var gradeNum = kid === "kinder" ? y : y + 2;

  var rhythmHtml = data.weeklyRhythm.map(function(r) {
    return '<div class="rhythm-row">' +
      '<div class="rhythm-day">' + r.day + '</div>' +
      '<div class="rhythm-focus">' + r.focus + '</div>' +
      '<div class="rhythm-secondary">' + r.secondary + '</div>' +
    '</div>';
  }).join('');

  var booksHtml = data.books.map(function(b) { return '<span class="book-chip">' + b + '</span>'; }).join('');
  var milestonesHtml = data.milestones.map(function(m) {
    return '<div class="mile-item"><div class="mile-box"></div><span>' + m + '</span></div>';
  }).join('');

  document.getElementById(containerId).innerHTML =
    '<div class="plan-card">' +
      '<div class="plan-header">' +
        '<div class="plan-tag">Grade ' + gradeNum + ' &middot; Age ' + age + '&ndash;' + (age + 1) + '</div>' +
        '<div class="plan-title">' + data.label + '</div>' +
        '<div class="plan-theme">' + data.theme + '</div>' +
      '</div>' +
      (data.curriculumNote ? '<div class="curriculum-note">📋 Ontario curriculum context: ' + data.curriculumNote + '</div>' : '') +
      '<div class="coach-tip">Coach note: ' + data.tip + '</div>' +
      '<div class="sched-section">' +
        '<div class="sched-label">This year&rsquo;s weekly rhythm &mdash; each weekday has a different focus so nothing gets crammed</div>' +
        '<div class="rhythm-table">' + rhythmHtml + '</div>' +
        '<div class="rhythm-note">Open the <strong>Day-by-Day Explorer</strong> below to see every session, every step, and every resource for any specific day of this year.</div>' +
      '</div>' +
      '<div class="books-row">' +
        '<div class="sched-label">Essential reading this year</div>' +
        '<div class="books-inner">' + booksHtml + '</div>' +
      '</div>' +
      '<div class="mile-row">' +
        '<div class="sched-label">Grade ' + gradeNum + ' milestones &mdash; check these off by June</div>' +
        '<div class="mile-grid">' + milestonesHtml + '</div>' +
      '</div>' +
    '</div>';
}

function showYear(kid, y, btn) {
  var container = kid === "kinder" ? "kinder-years" : "grade3-years";
  var btns = document.getElementById(container).querySelectorAll(".year-btn");
  for (var i = 0; i < btns.length; i++) { btns[i].classList.remove("active"); }
  btn.classList.add("active");
  renderYearCard(kid, y);
}

function switchKid(kid) {
  var sections = document.querySelectorAll(".kid-section");
  for (var i = 0; i < sections.length; i++) { sections[i].classList.remove("active"); }
  var tabs = document.querySelectorAll(".kid-tab");
  for (var j = 0; j < tabs.length; j++) { tabs[j].classList.remove("active"); }
  document.getElementById("kid-" + kid).classList.add("active");
  document.getElementById("tab-" + kid).classList.add("active");
  document.getElementById("sel-kid").value = kid;
  renderDay();
}

function renderDay() {
  var kid = document.getElementById("sel-kid").value;
  var year = document.getElementById("sel-year").value;
  var dayName = document.getElementById("sel-day").value;
  var season = document.getElementById("sel-season").value;

  var plan = buildDayPlan(kid, year, dayName, season);
  if (!plan) {
    document.getElementById("day-output").innerHTML = '<p style="color:var(--ink-muted);padding:1rem 0">No data for this combination.</p>';
    return;
  }

  var dayNames = { monday: "Monday", tuesday: "Tuesday", wednesday: "Wednesday", thursday: "Thursday", friday: "Friday", saturday: "Saturday", sunday: "Sunday" };
  var seasonNames = { fall: "Fall (Sep&ndash;Dec)", winter: "Winter (Jan&ndash;Mar)", spring: "Spring (Apr&ndash;Jun)", summer: "Summer (Jul&ndash;Aug)" };
  var isWeekend = (dayName === "saturday" || dayName === "sunday");
  var gradeNum = kid === "kinder" ? parseInt(year) : parseInt(year) + 2;

  var sessionsHtml = plan.sessions.map(function(s) {
    return '<div class="session-block">' +
      '<div class="session-top">' +
        '<span class="session-time">' + s.time + '</span>' +
        '<span class="session-who s-' + s.who + '">' + s.label + '</span>' +
        '<span class="session-title">' + s.title + '</span>' +
        '<span class="session-tag" style="' + s.subjectStyle + '">' + s.subject + '</span>' +
      '</div>' +
      '<div class="session-activity">' + s.activity + '</div>' +
      '<ul class="session-steps">' + s.steps.map(function(st) { return '<li>' + st + '</li>'; }).join('') + '</ul>' +
      '<div class="session-materials"><strong>Materials:</strong> ' + s.materials.map(function(m) { return '<span class="mat">' + m + '</span>'; }).join(' ') + '</div>' +
      '<div class="session-outcome">&#10003; ' + s.outcome + '</div>' +
      (s.parentCue ? '<div class="session-parent-cue">Parent: ' + s.parentCue + '</div>' : '') +
    '</div>';
  }).join('');

  document.getElementById("day-output").innerHTML =
    '<div class="detail-card">' +
      '<div class="detail-header">' +
        '<div>' +
          '<div class="detail-day">' + dayNames[dayName] + ' &middot; ' + seasonNames[season] + '</div>' +
          '<div class="detail-meta">' + plan.label + ' &middot; Grade ' + gradeNum + ' &middot; Age ' + plan.age + ' &middot; Ottawa, Canada</div>' +
        '</div>' +
        '<span class="detail-badge ' + (isWeekend ? "badge-weekend" : "badge-school") + '">' + (isWeekend ? "Enrichment day" : "School day") + '</span>' +
      '</div>' +
      sessionsHtml +
    '</div>';
}

function showRes(key, btn) {
  var btns = document.getElementById("res-tabs").querySelectorAll(".year-btn");
  for (var i = 0; i < btns.length; i++) { btns[i].classList.remove("active"); }
  btn.classList.add("active");
  var data = resources[key];
  if (!data) return;
  var cardsHtml = data.cards.map(function(c) {
    return '<div class="res-card">' +
      '<div class="res-type">' + c.type + '</div>' +
      '<div class="res-title">' + c.title + '</div>' +
      '<ul class="res-list">' + c.items.map(function(i) { return '<li>' + i + '</li>'; }).join('') + '</ul>' +
    '</div>';
  }).join('');
  document.getElementById("res-output").innerHTML =
    '<div style="margin-bottom:1rem;font-size:14px;font-weight:600;color:var(--ink-muted);">' + data.label + '</div>' +
    '<div class="res-grid">' + cardsHtml + '</div>';
}

document.addEventListener("DOMContentLoaded", function() {
  renderYearCard("kinder", 1);
  renderYearCard("grade3", 1);
  renderDay();
  var firstResBtn = document.querySelector("#res-tabs .year-btn");
  if (firstResBtn) { showRes("ke", firstResBtn); }
});
