(function () {
  "use strict";

  var C = window.COURSE, CFG = window.COURSE_CONFIG, S = window.Scorm;
  var DAYS = C.days, DAY_IDS = DAYS.map(function (d) { return d.id; });
  var LETTERS = "ABCDEF";
  var L = 0;            // 0 = English, 1 = Swedish
  var state, inLms, pendingFocus = null;
  var main = document.getElementById("main");

  /* ------------------------------------------------------------ helpers */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function fill(s) {
    return String(s).replace(/\{\{(\w+)\}\}/g, function (m, k) {
      return CFG.contacts[k] ? CFG.contacts[k][L] : m;
    });
  }
  function t(pair) { if (!pair) return ""; return fill(Array.isArray(pair) ? (pair[L] || pair[0]) : pair); }
  function T(pair) { return esc(t(pair)); }                 // escaped
  function U(key, vars) {                                   // UI string
    var s = t(C.ui[key]);
    if (vars) s = s.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] != null ? vars[k] : m; });
    return esc(s);
  }
  function hash(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function shuffled(arr, seed) {
    var a = arr.slice(), r = hash(seed) || 1;
    for (var i = a.length - 1; i > 0; i--) {
      r = (Math.imul(r, 1664525) + 1013904223) >>> 0;
      var j = r % (i + 1), tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }
  function day(id) { for (var i = 0; i < DAYS.length; i++) if (DAYS[i].id === id) return DAYS[i]; return null; }
  function correctOpt(step) { for (var i = 0; i < step.options.length; i++) if (step.options[i].correct) return step.options[i]; }
  function findOpt(step, id) { for (var i = 0; i < step.options.length; i++) if (step.options[i].id === id) return step.options[i]; }
  function finalQ(id) { for (var i = 0; i < C.final.length; i++) if (C.final[i].id === id) return C.final[i]; }

  /* ------------------------------------------------------------ state */
  function fresh() {
    return { v: 1, lang: L ? "sv" : "en", name: "", screen: "welcome", ans: {}, seen: {}, done: {},
             fin: { n: 0, order: [], a: {}, i: 0 }, best: null };
  }
  function save() {
    var loc = state.screen === "exited" ? "" : state.screen;
    S.save(state, loc);
  }

  function solved(step) {
    var a = state.ans[step.id];
    if (!a) return false;
    if (step.type === "choice") return a.indexOf(correctOpt(step).id) > -1;
    if (step.type === "sort") return step.items.every(function (it) { return a[it.id] != null; });
    if (step.type === "fields") return !!a.x;
    return false;
  }
  function allDaysDone() { return DAY_IDS.every(function (id) { return state.done[id]; }); }

  /* ------------------------------------------------------------ chrome */
  function renderChrome() {
    document.documentElement.lang = L ? "sv" : "en";
    document.title = t(C.title) + " · Morfos Edtech Akademi";
    document.getElementById("courseTitle").textContent = t(C.title);
    document.getElementById("langGroup").setAttribute("aria-label", t(C.ui.langLabel));
    Array.prototype.forEach.call(document.querySelectorAll("#langGroup button"), function (b) {
      b.setAttribute("aria-pressed", String((b.getAttribute("data-lang") === "sv") === !!L));
    });
    var exitBtn = document.getElementById("exitBtn");
    exitBtn.textContent = t(C.ui.exit);
    exitBtn.hidden = state.screen === "exited";

    var nav = document.getElementById("week");
    nav.setAttribute("aria-label", t(C.ui.weekNav));
    nav.hidden = state.screen === "exited" || (state.screen === "welcome" && !Object.keys(state.ans).length);
    var finalScreens = ["final", "result", "cert"];
    var html = "<ol>";
    DAYS.forEach(function (d) {
      var cur = state.screen === d.id ? ' aria-current="step"' : "";
      html += '<li><button type="button" data-go="' + d.id + '" data-key="nav-' + d.id + '"' + cur +
        ' class="' + (state.done[d.id] ? "done" : "") + '"><span class="dot" aria-hidden="true"></span>' +
        '<span aria-hidden="true">' + T(d.short) + '</span><span class="sr-only">' + T(d.name) +
        (state.done[d.id] ? " ✓" : "") + "</span></button></li>";
    });
    var fCur = finalScreens.indexOf(state.screen) > -1 ? ' aria-current="step"' : "";
    var fDone = state.best && state.best.passed;
    html += '<li><button type="button" data-go="final" data-key="nav-final"' + fCur + (allDaysDone() ? "" : " disabled") +
      ' class="' + (fDone ? "done" : "") + '"><span class="dot" aria-hidden="true"></span>' + U("finalShort") + "</button></li>";
    nav.innerHTML = html + "</ol>";
  }

  /* ------------------------------------------------------------ screens */
  function screenWelcome() {
    var started = Object.keys(state.ans).length > 0;
    var habits = C.ui.habits.map(function (h, i) {
      return "<li><div><span class=\"day\">" + T(DAYS[i].name) + "</span>" + T(h) + "</div></li>";
    }).join("");
    var nameField = inLms ? "" :
      '<div class="field"><label for="learnerName">' + U("nameLabel") + '</label>' +
      '<input id="learnerName" autocomplete="name" placeholder="' + U("namePlaceholder") + '" value="' + esc(state.name || "") + '"></div>';
    var firstOpen = DAY_IDS.filter(function (id) { return !state.done[id]; })[0] || (allDaysDone() ? "final" : "mon");
    var buttons = started
      ? '<button type="button" class="btn btn-gold" data-go="' + firstOpen + '" data-key="start">' + U("continueWeek") + "</button>" +
        '<button type="button" class="btn btn-ghost" data-act="restart" data-key="restart">' + U("restart") + "</button>"
      : '<button type="button" class="btn btn-gold" data-go="mon" data-key="start">' + U("start") + " →</button>";
    return '<div class="stack slide-in">' +
      '<img class="hero-art" src="assets/caterpillar.svg" alt="">' +
      '<p class="eyebrow">' + U("eyebrow") + "</p>" +
      '<h1 class="h1" tabindex="-1">' + U("welcomeTitle") + "</h1>" +
      '<p class="lead">' + U("welcomeLead") + "</p>" +
      '<section class="card"><h2>' + U("habitsTitle") + '</h2><ol class="habits">' + habits + "</ol></section>" +
      '<section class="card"><h2>' + U("contactsTitle") + '</h2><dl class="contacts">' +
        "<div><dt>" + T(CFG.contacts.role) + "</dt><dd>" + T(CFG.contacts.dp) + "</dd></div>" +
        "<div><dt>" + U("reportVia") + "</dt><dd>" + T(CFG.contacts.channel) + "</dd></div>" +
        "<div><dt>" + U("approvedTools") + "</dt><dd>" + T(CFG.contacts.tools) + "</dd></div>" +
      "</dl></section>" +
      nameField +
      '<p class="muted">' + U("endNote") + "</p>" +
      '<div class="actions">' + buttons + "</div></div>";
  }

  function stepHead(step, i, n, d) {
    var label = d.inbox ? U("msgOf", { n: i + 1, m: n }) : (n > 1 ? U("stepOf", { n: i + 1, m: n }) : "");
    return '<div class="step-head">' + (step.time ? '<span class="chip chip-gold">' + esc(step.time) + "</span>" : "") +
      '<h2 class="count" tabindex="-1" data-key="head-' + step.id + '">' + label + "</h2></div>";
  }

  function renderChoice(step, scoredPick) {
    var picked = state.ans[step.id] || [];
    var right = correctOpt(step).id;
    var isSolved = picked.indexOf(right) > -1;
    var order = shuffled(step.options, step.id);
    var html = '<ul class="options" role="list">';
    order.forEach(function (o, k) {
      var was = picked.indexOf(o.id) > -1;
      var cls = was ? (o.correct ? " is-right" : " is-wrong") : (isSolved ? " is-dim" : "");
      var locked = isSolved || was;
      html += "<li><button type=\"button\" class=\"opt" + cls + "\" data-pick=\"" + step.id + "|" + o.id + "\" data-key=\"opt-" + step.id + "-" + o.id + "\"" +
        (locked ? ' aria-disabled="true"' : "") + (was ? ' aria-pressed="true"' : "") + ">" +
        '<span class="letter" aria-hidden="true">' + LETTERS[k] + "</span><span>" + T(o.text) + "</span></button>";
      if (was) {
        html += '<p class="fb ' + (o.correct ? "good" : "bad") + '" role="status"><strong>' +
          (o.correct ? U("rightAnswer") : U("tryAgain")) + "</strong> " + T(o.fb) + "</p>";
      }
      html += "</li>";
    });
    return html + "</ul>";
  }

  function renderStepBody(step, d) {
    var html = "";
    if (step.type === "choice") {
      if (step.message) {
        html += '<div class="mail"><div class="mail-head"><span><b>' + U("from") + ":</b> " + T(step.from) + "</span>" +
          "<span><b>" + T(step.subject) + "</b></span></div><div class=\"mail-body\">" + T(step.prompt) + "</div></div>" +
          '<p class="ask">' + U("whatDo") + "</p>";
      } else if (step.speaker) {
        html += '<div class="bubble"><span class="who">' + T(step.speaker) + "</span>" + T(step.prompt) + "</div>" +
          '<p class="ask">' + (step.ask ? T(step.ask) : U("whatDo")) + "</p>";
      } else {
        html += '<p class="prompt">' + T(step.prompt) + "</p>" +
          (/\?\s*$/.test(t(step.prompt)) ? "" : '<p class="ask">' + U("whatDo") + "</p>");
      }
      html += renderChoice(step);
    } else if (step.type === "sort") {
      var a = state.ans[step.id] || {};
      var count = 0;
      html += '<p class="prompt">' + T(step.prompt) + '</p><ul class="sort-list" role="list">';
      step.items.forEach(function (it) {
        var chosen = a[it.id];
        if (chosen != null) count++;
        if (chosen == null) {
          html += '<li class="sort-item"><p class="text" id="si-' + it.id + '">' + T(it.text) + '</p><div class="sort-btns" role="group" aria-labelledby="si-' + it.id + '">' +
            step.boxes.map(function (b, bi) {
              return '<button type="button" data-sort="' + step.id + "|" + it.id + "|" + bi + '" data-key="sort-' + it.id + "-" + bi + '">' + T(b) + "</button>";
            }).join("") + "</div></li>";
        } else {
          var ok = chosen === it.answer;
          html += '<li class="sort-item ' + (ok ? "ok" : "no") + '" tabindex="-1" data-key="sorted-' + it.id + '"><p class="text">' + T(it.text) + "</p>" +
            '<p class="fb ' + (ok ? "good" : "bad") + '" role="status"><strong>' +
            (ok ? U("sortCorrect") + " " + T(step.boxes[it.answer]) + "." : U("sortWrong") + " " + T(step.boxes[it.answer]) + ".") +
            "</strong> " + T(it.fb) + "</p></li>";
        }
      });
      html += '</ul><p class="progress-line" aria-live="polite">' + U("sortedOf", { n: count, m: step.items.length }) + "</p>";
    } else if (step.type === "fields") {
      var f = state.ans[step.id] || { c: [] };
      var checked = !!f.x, right = 0;
      html += '<p class="prompt">' + T(step.prompt) + '</p><div class="form-mock"><h3>' + T(step.formTitle) + '</h3><ul class="fields" role="list">';
      step.fields.forEach(function (fl) {
        var on = f.c.indexOf(fl.id) > -1, ok = on === fl.need;
        if (ok) right++;
        html += "<li" + (checked ? ' class="' + (ok ? "ok" : "no") + '"' : "") + "><label><input type=\"checkbox\" data-field=\"" + step.id + "|" + fl.id + "\" data-key=\"field-" + fl.id + "\"" +
          (on ? " checked" : "") + (checked ? " disabled" : "") + "><span>" + T(fl.label) + "</span>" +
          (checked ? '<span class="verdict">' + (fl.need ? U("fieldsNeeded") : U("fieldsNotNeeded")) + "</span>" : "") + "</label>" +
          (checked ? '<p class="fb">' + T(fl.fb) + "</p>" : "") + "</li>";
      });
      html += "</ul></div>";
      if (!checked) {
        html += '<div class="actions" style="margin-top:16px"><button type="button" class="btn btn-primary" data-check="' + step.id + '" data-key="check-' + step.id + '">' + U("checkFields") + "</button></div>";
      } else {
        html += '<div class="card" role="status" style="margin-top:16px" tabindex="-1" data-key="fsum-' + step.id + '"><p><strong>' + U("fieldsScore", { n: right, m: step.fields.length }) + "</strong></p><p style=\"margin-top:8px\">" + T(step.summary) + "</p></div>";
      }
    }
    return html;
  }

  function screenDay(d) {
    var seen = state.seen[d.id] || 0;
    var n = d.steps.length;
    var html = '<div class="stack slide-in">' +
      '<div class="meta"><span class="chip">' + T(d.name) + '</span><span class="chip">' + U("behaviour") + " " + d.habit + '</span><span class="chip">3 ' + U("minutes") + "</span></div>" +
      '<h1 class="h1" tabindex="-1">' + T(d.title) + "</h1>" +
      '<p class="habit-line">' + T(C.ui.habits[d.habit - 1]) + "</p>" +
      '<section class="setup"><h2>' + U("setup") + "</h2><p>" + T(d.setup) + "</p></section>";

    if (d.inbox) {
      html += '<div><p class="inbox-title">' + U("inbox") + '</p><ul class="inbox" role="list">';
      d.steps.forEach(function (s, i) {
        var isDone = solved(s), cur = i === Math.min(seen, n - 1) && !isDone;
        html += '<li class="' + (cur ? "current" : "") + '"><span class="who">' + T(s.from) + "<span>" + T(s.subject) + "</span></span>" +
          '<span class="status' + (isDone ? " ok" : "") + '">' + (isDone ? U("handled") : U("unread")) + "</span></li>";
      });
      html += "</ul></div>";
    }

    for (var i = 0; i <= Math.min(seen, n - 1); i++) {
      var step = d.steps[i];
      html += '<section class="step slide-in">' + stepHead(step, i, n, d) + renderStepBody(step, d);
      if (solved(step) && i === seen) {
        html += '<div class="actions" style="margin-top:20px"><button type="button" class="btn btn-primary" data-act="continue" data-day="' + d.id + '" data-key="cont-' + step.id + '">' +
          U("next") + " →</button></div>";
      }
      html += "</section>";
    }

    if (seen >= n) {
      var idx = DAY_IDS.indexOf(d.id), nextId = DAY_IDS[idx + 1];
      html += '<details class="why slide-in"><summary data-key="why-' + d.id + '">' + U("whyTitle") + "</summary><p>" + T(d.why) + "</p></details>" +
        '<section class="takeaway slide-in" tabindex="-1" data-key="take-' + d.id + '"><h2>' + U("takeaway") + "</h2><p>" + T(d.takeaway) + "</p></section>" +
        '<div class="actions">' + (nextId
          ? '<button type="button" class="btn btn-gold" data-go="' + nextId + '" data-key="nextday">' + U("nextDay") + ": " + T(day(nextId).name) + " →</button>"
          : '<button type="button" class="btn btn-gold" data-go="final" data-key="nextday"' + (allDaysDone() ? "" : " disabled") + ">" + U("toFinal") + " →</button>") +
        "</div>";
    }
    return html + "</div>";
  }

  function screenFinal() {
    var F = state.fin;
    var intro = '<div class="stack slide-in"><p class="eyebrow">' + U("finalShort") + '</p><h1 class="h1" tabindex="-1">' + U("finalTitle") + "</h1>";
    if (!F.order.length) {
      return intro + '<p class="lead">' + U("finalLead") + '</p><div class="actions"><button type="button" class="btn btn-gold" data-act="startFinal" data-key="startFinal">' +
        U("startFinal") + " →</button></div></div>";
    }
    var qid = F.order[F.i], q = finalQ(qid), m = F.order.length;
    var pick = F.a[qid];
    var order = shuffled(q.options, qid + "#" + F.n);
    var html = intro + '<section class="step" style="border-top:0;padding-top:0"><div class="step-head"><h2 class="count" tabindex="-1" data-key="fq-' + qid + '">' +
      U("question", { n: F.i + 1, m: m }) + '</h2></div><p class="prompt">' + T(q.prompt) + '</p><ul class="options" role="list">';
    order.forEach(function (o, k) {
      var was = pick === o.id, show = pick != null;
      var cls = show ? (o.correct ? " is-right" : (was ? " is-wrong" : " is-dim")) : "";
      html += '<li><button type="button" class="opt' + cls + '" data-fpick="' + qid + "|" + o.id + '" data-key="fopt-' + qid + "-" + o.id + '"' +
        (show ? ' aria-disabled="true"' : "") + (was ? ' aria-pressed="true"' : "") + '><span class="letter" aria-hidden="true">' + LETTERS[k] + "</span><span>" + T(o.text) + "</span></button>";
      if (show && was) {
        html += '<p class="fb ' + (o.correct ? "good" : "bad") + '" role="status"><strong>' + (o.correct ? U("correct") : U("incorrect")) + "</strong> " + T(o.fb) + "</p>";
      }
      if (show && !was && o.correct) {
        html += '<p class="fb good"><strong>' + U("bestAnswer") + "</strong> " + T(o.fb) + "</p>";
      }
      html += "</li>";
    });
    html += "</ul>";
    if (pick != null) {
      var lastQ = F.i === m - 1;
      html += '<div class="actions" style="margin-top:20px"><button type="button" class="btn ' + (lastQ ? "btn-gold" : "btn-primary") + '" data-act="finalNext" data-key="fnext">' +
        (lastQ ? U("seeResult") : U("next")) + " →</button></div>";
    }
    return html + "</section></div>";
  }

  function lastAttempt() {
    var F = state.fin, right = 0;
    F.order.forEach(function (qid) { var q = finalQ(qid); if (F.a[qid] === correctOpt(q).id) right++; });
    return { right: right, total: F.order.length };
  }

  function screenResult() {
    var r = lastAttempt(), pct = Math.round(r.right / r.total * 100), passed = pct >= CFG.passMark;
    var F = state.fin;
    var list = F.order.map(function (qid) {
      var q = finalQ(qid), ok = F.a[qid] === correctOpt(q).id, d = DAYS[q.habit - 1];
      return '<li><span class="mark ' + (ok ? "ok" : "no") + '" aria-hidden="true">' + (ok ? "✓" : "✕") + "</span><div><span class=\"sr-only\">" + (ok ? U("correct") : U("incorrect")) + " </span>" +
        T(C.ui.habits[q.habit - 1]) + (ok ? "" : ' <button type="button" class="btn btn-ghost btn-small" style="margin-left:6px" data-go="' + d.id + '">' + U("reviewDay") + ": " + T(d.name) + "</button>") + "</div></li>";
    }).join("");
    return '<div class="stack slide-in"><p class="eyebrow">' + U("finalShort") + "</p>" +
      '<div class="actions" style="gap:24px"><div class="score-ring' + (passed ? " pass" : "") + '" aria-hidden="true">' + r.right + "/" + r.total + "</div>" +
      '<div><h1 class="h1" tabindex="-1">' + (passed ? U("passedTitle") : U("failedTitle")) + '</h1><p class="lead" style="margin-top:8px">' + U("scoreLine", { n: r.right, m: r.total }) + "</p></div></div>" +
      "<p>" + (passed ? U("passedBody") : U("failedBody")) + "</p>" +
      '<section class="card"><h2>' + U("habitsLearned") + '</h2><ul class="review-list" role="list">' + list + "</ul></section>" +
      '<p class="muted">' + (inLms ? U("savedLms") : U("savedWeb")) + "</p>" +
      '<div class="actions">' + (passed
        ? '<button type="button" class="btn btn-gold" data-go="cert" data-key="tocert">' + U("certificate") + " →</button>"
        : '<button type="button" class="btn btn-gold" data-act="startFinal" data-key="retake">' + U("retake") + "</button>") +
      "</div></div>";
  }

  function screenCert() {
    var b = state.best || {};
    var name = (inLms ? S.learnerName() : "") || state.name || "";
    var date = b.date ? new Date(b.date) : new Date();
    var dateStr = date.toLocaleDateString(L ? "sv-SE" : "en-GB", { year: "numeric", month: "long", day: "numeric" });
    var nameBlock = name ? '<p class="who">' + esc(name) + "</p>"
      : '<div class="no-print field" style="margin:20px auto 0"><label for="certName">' + U("nameLabel") + '</label><input id="certName" data-key="certName" placeholder="' + U("namePlaceholder") + '"></div><p class="who" id="certWho" aria-live="polite"></p>';
    return '<div class="stack slide-in"><section class="cert" aria-labelledby="certH">' +
      '<img src="assets/morfos-mark.svg" alt="Morfos Edtech Akademi"><p class="eyebrow">Morfos Edtech Akademi</p>' +
      '<h1 class="h1" id="certH" tabindex="-1" style="font-size:30px;margin-top:10px">' + U("certTitle") + "</h1>" +
      nameBlock + "<p>" + U("certText") + '</p><p class="course">' + T(C.title) + "</p>" +
      '<div class="details"><span>' + U("certScore", { n: b.right || 0, m: b.total || 5 }) + "</span><span>" + U("certDate") + ": " + esc(dateStr) + "</span></div>" +
      '<p class="sig">Morfos Edtech Akademi · morfos.se</p></section>' +
      '<div class="actions no-print"><button type="button" class="btn btn-primary" data-act="print" data-key="print">' + U("print") + "</button></div></div>";
  }

  function screenExited() {
    return '<div class="exited slide-in"><img src="assets/morfos-mark.svg" alt=""><h1 class="h1" tabindex="-1">' + U("exitedTitle") + '</h1><p class="lead" style="margin-top:12px">' +
      (inLms ? U("exitedLms") : U("exitedWeb")) + "</p>" +
      (inLms ? "" : '<div class="actions"><button type="button" class="btn btn-primary" data-act="resume" data-key="resume">' + U("resume") + '</button><a class="btn btn-ghost" href="' + esc(CFG.exitUrl) + '" target="_top">' + T(CFG.exitLabel || C.ui.backToMorfos) + "</a></div>") +
      "</div>";
  }

  /* ------------------------------------------------------------ render */
  function render(opts) {
    opts = opts || {};
    var active = document.activeElement, key = active && active.getAttribute && active.getAttribute("data-key");
    var y = window.scrollY;
    renderChrome();
    var s = state.screen, html;
    if (s === "welcome") html = screenWelcome();
    else if (day(s)) html = screenDay(day(s));
    else if (s === "final") html = screenFinal();
    else if (s === "result") html = screenResult();
    else if (s === "cert") html = screenCert();
    else if (s === "exited") html = screenExited();
    else { state.screen = "welcome"; html = screenWelcome(); }
    main.innerHTML = html;
    if (!opts.quiet) main.querySelectorAll(".slide-in").forEach(function (el) { if (!opts.newScreen) el.classList.remove("slide-in"); });

    if (opts.newScreen) {
      window.scrollTo(0, 0);
      var h = main.querySelector("h1");
      if (h) h.focus({ preventScroll: true });
      return;
    }
    window.scrollTo(0, y);
    var want = pendingFocus || key;
    pendingFocus = null;
    if (want) {
      var el = document.querySelector('[data-key="' + want + '"]');
      if (el) {
        el.focus({ preventScroll: true });
        if (opts.scrollToFocus) el.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
      }
    }
  }

  function go(screen) {
    if (screen === "final" && !allDaysDone()) return;
    var F = state.fin;
    if (screen === "final" && F.order.length && Object.keys(F.a).length === F.order.length) screen = "result";
    state.screen = screen;
    save();
    render({ newScreen: true });
  }

  /* ------------------------------------------------------------ actions */
  function onClick(e) {
    var el = e.target.closest("button, a");
    if (!el) return;
    if (el.getAttribute("aria-disabled") === "true") { e.preventDefault(); return; }

    var lang = el.getAttribute("data-lang");
    if (lang) { L = lang === "sv" ? 1 : 0; state.lang = lang; save(); render(); return; }
    if (el.id === "exitBtn") { openExit(); return; }

    var goTo = el.getAttribute("data-go");
    if (goTo) { if (!el.disabled) go(goTo); return; }

    var pick = el.getAttribute("data-pick");
    if (pick) {
      var p = pick.split("|"), stepId = p[0], optId = p[1];
      var a = state.ans[stepId] || (state.ans[stepId] = []);
      if (a.indexOf(optId) === -1) a.push(optId);
      markDayIfDone();
      save(); render();
      return;
    }
    var srt = el.getAttribute("data-sort");
    if (srt) {
      var q = srt.split("|"), sa = state.ans[q[0]] || (state.ans[q[0]] = {});
      sa[q[1]] = +q[2];
      pendingFocus = "sorted-" + q[1];
      markDayIfDone();
      save(); render();
      return;
    }
    var chk = el.getAttribute("data-check");
    if (chk) {
      var f = state.ans[chk] || (state.ans[chk] = { c: [] });
      f.x = 1;
      pendingFocus = "fsum-" + chk;
      markDayIfDone();
      save(); render({ scrollToFocus: true });
      return;
    }
    var fp = el.getAttribute("data-fpick");
    if (fp) {
      var r = fp.split("|"), F = state.fin;
      if (F.a[r[0]] == null) {
        F.a[r[0]] = r[1];
        var fq = finalQ(r[0]), right = correctOpt(fq).id;
        var count = parseInt(S.get("cmi.interactions._count"), 10) || 0;
        S.interaction(count, "final_" + r[0] + "_try" + F.n, r[1], right, r[1] === right);
        save();
      }
      render();
      return;
    }

    var act = el.getAttribute("data-act");
    if (act === "continue") {
      var dId = el.getAttribute("data-day"), d = day(dId);
      state.seen[dId] = (state.seen[dId] || 0) + 1;
      var nextKey = state.seen[dId] < d.steps.length ? "head-" + d.steps[state.seen[dId]].id : "take-" + dId;
      pendingFocus = nextKey;
      save(); render({ scrollToFocus: true });
    } else if (act === "startFinal") {
      state.fin = { n: state.fin.n + 1, order: shuffled(C.final.map(function (q) { return q.id; }), "final#" + (state.fin.n + 1)), a: {}, i: 0 };
      state.screen = "final";
      save(); render({ newScreen: true });
    } else if (act === "finalNext") {
      if (state.fin.i < state.fin.order.length - 1) { state.fin.i++; save(); render({ newScreen: true }); }
      else finishFinal();
    } else if (act === "restart") {
      var keepBest = state.best, keepName = state.name;
      state = fresh(); state.best = keepBest; state.name = keepName;
      save(); render({ newScreen: true });
    } else if (act === "print") {
      window.print();
    } else if (act === "resume") {
      state.screen = state.lastScreen || "welcome";
      save(); render({ newScreen: true });
    }
  }

  function markDayIfDone() {
    var d = day(state.screen);
    if (d && d.steps.every(solved)) state.done[d.id] = true;
  }

  function finishFinal() {
    var r = lastAttempt(), pct = Math.round(r.right / r.total * 100), passed = pct >= CFG.passMark;
    var prev = state.best;
    if (!prev || (passed && !prev.passed) || (passed === prev.passed && r.right > prev.right)) {
      state.best = { right: r.right, total: r.total, pct: pct, passed: passed, date: new Date().toISOString().slice(0, 10) };
    }
    S.result(state.best.pct, state.best.passed);
    state.screen = "result";
    save();
    render({ newScreen: true });
  }

  function onInput(e) {
    if (e.target.id === "learnerName") { state.name = e.target.value.slice(0, 80); save(); }
    if (e.target.id === "certName") {
      state.name = e.target.value.slice(0, 80);
      document.getElementById("certWho").textContent = state.name;
      save();
    }
    var fld = e.target.getAttribute && e.target.getAttribute("data-field");
    if (fld) {
      var p = fld.split("|"), f = state.ans[p[0]] || (state.ans[p[0]] = { c: [] });
      var i = f.c.indexOf(p[1]);
      if (e.target.checked && i === -1) f.c.push(p[1]);
      if (!e.target.checked && i > -1) f.c.splice(i, 1);
      save();
    }
  }

  /* ------------------------------------------------------------ exit */
  var dlg = document.getElementById("exitDialog");
  function openExit() {
    document.getElementById("exitTitle").textContent = t(C.ui.exitTitle);
    document.getElementById("exitBody").textContent = t(inLms ? C.ui.exitBodyLms : C.ui.exitBodyWeb);
    document.getElementById("exitConfirm").textContent = t(C.ui.exitConfirm);
    document.getElementById("exitCancel").textContent = t(C.ui.stay);
    if (dlg.showModal) dlg.showModal(); else doExit();
  }
  function doExit() {
    if (dlg.open) dlg.close();
    if (state.screen !== "exited") state.lastScreen = state.screen;
    state.screen = "exited";
    save();
    if (inLms) S.finish(!!(state.best && state.best.passed));
    render({ newScreen: true });
    if (inLms) { try { if (window.opener) window.close(); } catch (e) {} }
  }
  document.getElementById("exitConfirm").addEventListener("click", doExit);
  document.getElementById("exitCancel").addEventListener("click", function () { dlg.close(); });

  /* ------------------------------------------------------------ start */
  inLms = S.init();
  var saved = S.load();
  var urlLang = (/[?&]lang=(sv|en)/.exec(location.search) || [])[1];
  state = saved && saved.v === 1 ? saved : fresh();
  if (!saved) state.lang = urlLang || CFG.defaultLang || ((navigator.language || "").toLowerCase().indexOf("sv") === 0 ? "sv" : "en");
  L = state.lang === "sv" ? 1 : 0;
  if (state.screen === "exited") state.screen = state.lastScreen || "welcome";
  if (inLms && !state.name) state.name = S.learnerName();

  document.addEventListener("click", onClick);
  document.addEventListener("input", onInput);
  document.addEventListener("change", onInput);
  window.addEventListener("pagehide", function () {
    if (state.screen !== "exited") { save(); if (inLms) S.finish(!!(state.best && state.best.passed)); }
  });

  render({ newScreen: true });
})();
