"use strict";

function renderYearCard(kid, y) {
  var data = yearPlans[kid][y - 1];
  var ageBase = kid === "kinder" ? 5 : 8;
  var age = ageBase + (y - 1);
  var containerId = kid + "-content";

  var schedHtml = data.schedule.map(function(s) {
    return '<div class="sched-block">' +
      '<div class="sched-block-header">' +
        '<span class="sched-who ' + s.who + '">' + s.label + '</span>' +
        '<span class="sched-time">' + s.time + '</span>' +
        '<span class="sched-title">' + s.title + '</span>' +
        '<span class="sched-subject" style="' + s.subjectStyle + '">' + s.subject + '</span>' +
      '</div>' +
      '<div class="sched-body">' +
        '<div class="sched-activity">' + s.activity + '</div>' +
        '<ul class="sched-steps">' + s.steps.map(function(st) { return '<li>' + st + '</li>'; }).join('') + '</ul>' +
        '<div class="sched-materials"><span style="margin-right:4px;color:var(--ink-muted);font-weight:600;">Materials:</span>' + s.materials.map(function(m) { return '<span class="mat-chip">' + m + '</span>'; }).join('') + '</div>' +
        '<div class="sched-outcome">&#10003; Session outcome: ' + s.outcome + '</div>' +
        (s.parentCue ? '<div style="font-size:12px;background:#fff8f8;border-left:3px solid #f5c0c8;padding:6px 10px;border-radius:0 5px 5px 0;margin-top:.6rem;color:#7a1422;">Parent note: ' + s.parentCue + '</div>' : '') +
      '</div>' +
    '</div>';
  }).join('');

  var booksHtml = data.books.map(function(b) { return '<span class="book-chip">' + b + '</span>'; }).join('');
  var milestonesHtml = data.milestones.map(function(m) {
    return '<div class="mile-item"><div class="mile-box"></div><span>' + m + '</span></div>';
  }).join('');

  document.getElementById(containerId).innerHTML =
    '<div class="plan-card">' +
      '<div class="plan-header">' +
        '<div class="plan-tag">' + (kid === "kinder" ? "Grade " + y : "Grade " + (y + 2)) + ' &middot; Age ' + age + '&ndash;' + (age + 1) + '</div>' +
        '<div class="plan-title">' + data.label + '</div>' +
        '<div class="plan-theme">' + data.theme + '</div>' +
      '</div>' +
      (data.curriculumNote ? '<div class="curriculum-note">📋 Ontario curriculum context: ' + data.curriculumNote + '</div>' : '') +
      '<div class="coach-tip">Coach note: ' + data.tip + '</div>' +
      '<div class="sched-section">' +
        '<div class="sched-label">Sample weekday schedule &mdash; every session detailed</div>' +
        schedHtml +
      '</div>' +
      '<div class="books-row">' +
        '<div class="sched-label">Essential reading this year</div>' +
        '<div class="books-inner">' + booksHtml + '</div>' +
      '</div>' +
      '<div class="mile-row">' +
        '<div class="sched-label">' + (kid === "kinder" ? "Grade " + y : "Grade " + (y + 2)) + ' milestones &mdash; check these off by June</div>' +
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
  var dayType = document.getElementById("sel-day").value;
  var season = document.getElementById("sel-season").value;

  var plan = buildDayPlan(kid, year, dayType, season);
  if (!plan) {
    document.getElementById("day-output").innerHTML = '<p style="color:var(--ink-muted);padding:1rem 0">No data for this combination.</p>';
    return;
  }

  var dayNames = { weekday: "Weekday", saturday: "Saturday", sunday: "Sunday" };
  var seasonNames = { fall: "Fall (Sep&ndash;Dec)", winter: "Winter (Jan&ndash;Mar)", spring: "Spring (Apr&ndash;Jun)", summer: "Summer (Jul&ndash;Aug)" };
  var isWeekend = dayType !== "weekday";

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
          '<div class="detail-day">' + dayNames[dayType] + ' &middot; ' + seasonNames[season] + '</div>' +
          '<div class="detail-meta">' + plan.label + ' &middot; ' + (kid === "kinder" ? "Grade " + year : "Grade " + (parseInt(year) + 2)) + ' &middot; Age ' + plan.age + ' &middot; Ottawa, Canada</div>' +
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
