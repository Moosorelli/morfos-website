/*
 * Small SCORM 1.2 wrapper. If no LMS is found (for example on the public demo site),
 * every call quietly does nothing and progress is kept in localStorage instead.
 */
(function (global) {
  "use strict";

  function findAPI(win) {
    var tries = 0;
    while (win && tries < 10) {
      try { if (win.API) return win.API; } catch (e) { return null; }
      if (win.parent && win.parent !== win) { win = win.parent; tries++; } else break;
    }
    return null;
  }

  function locate() {
    var api = findAPI(global);
    if (!api) { try { if (global.opener) api = findAPI(global.opener); } catch (e) { api = null; } }
    return api;
  }

  var api = null, active = false, finished = false, startedAt = Date.now();
  var STORE_KEY = "morfos-gdpr-core-v1";

  function pad(n, w) { n = String(n); while (n.length < w) n = "0" + n; return n; }
  function sessionTime() {
    var s = Math.max(0, Math.round((Date.now() - startedAt) / 1000));
    return pad(Math.floor(s / 3600), 4) + ":" + pad(Math.floor(s / 60) % 60, 2) + ":" + pad(s % 60, 2);
  }

  var Scorm = {
    init: function () {
      api = locate();
      if (api) {
        try { active = String(api.LMSInitialize("")) === "true"; } catch (e) { active = false; }
      }
      if (active && /^(not attempted|)$/.test(this.get("cmi.core.lesson_status"))) {
        this.set("cmi.core.lesson_status", "incomplete");
        this.commit();
      }
      return active;
    },
    inLms: function () { return active; },
    get: function (k) {
      if (!active) return "";
      try { return String(api.LMSGetValue(k) || ""); } catch (e) { return ""; }
    },
    set: function (k, v) {
      if (!active || finished) return false;
      try { return String(api.LMSSetValue(k, String(v))) === "true"; } catch (e) { return false; }
    },
    commit: function () {
      if (!active || finished) return false;
      try { return String(api.LMSCommit("")) === "true"; } catch (e) { return false; }
    },
    learnerName: function () {
      var n = this.get("cmi.core.student_name");
      // SCORM 1.2 usually gives "Last, First"
      if (n.indexOf(",") > -1) { var p = n.split(","); n = (p[1] || "").trim() + " " + (p[0] || "").trim(); }
      return n.trim();
    },
    /* state is the course's own object; it is saved as suspend_data (LMS) or localStorage (web) */
    load: function () {
      var raw = active ? this.get("cmi.suspend_data") : (function () {
        try { return global.localStorage.getItem(STORE_KEY) || ""; } catch (e) { return ""; }
      })();
      if (!raw) return null;
      try { return JSON.parse(raw); } catch (e) { return null; }
    },
    save: function (state, location) {
      var raw = JSON.stringify(state);
      if (active) {
        this.set("cmi.suspend_data", raw.slice(0, 4096));
        if (location) this.set("cmi.core.lesson_location", location);
        this.commit();
      } else {
        try { global.localStorage.setItem(STORE_KEY, raw); } catch (e) { /* storage off: fine */ }
      }
    },
    clearLocal: function () { try { global.localStorage.removeItem(STORE_KEY); } catch (e) {} },
    result: function (scorePct, passed) {
      this.set("cmi.core.score.min", 0);
      this.set("cmi.core.score.max", 100);
      this.set("cmi.core.score.raw", Math.round(scorePct));
      this.set("cmi.core.lesson_status", passed ? "passed" : "failed");
      this.commit();
    },
    interaction: function (index, id, response, correctPattern, isCorrect) {
      var p = "cmi.interactions." + index + ".";
      this.set(p + "id", id);
      this.set(p + "type", "choice");
      this.set(p + "student_response", response);
      this.set(p + "correct_responses.0.pattern", correctPattern);
      this.set(p + "result", isCorrect ? "correct" : "wrong");
    },
    finish: function (complete) {
      if (!active || finished) return;
      this.set("cmi.core.session_time", sessionTime());
      this.set("cmi.core.exit", complete ? "" : "suspend");
      this.commit();
      try { api.LMSFinish(""); } catch (e) {}
      finished = true;
    }
  };

  global.Scorm = Scorm;
})(window);
