/* Morfos SCORM adapter — SCORM 1.2 (falls back to SCORM 2004 API if that is what the LMS offers).
   Works standalone too: with no LMS, every call is a silent no-op. */
(function(){
  var api = null, v = null, started = false, finished = false;

  function find(win, name){
    var n = 0;
    while(win && n < 10){
      try{ if(win[name]) return win[name]; }catch(e){ return null; }
      if(win.parent && win.parent !== win) win = win.parent; else break;
      n++;
    }
    return null;
  }
  function locate(){
    var w = [window];
    try{ if(window.opener) w.push(window.opener); }catch(e){}
    for(var i=0;i<w.length;i++){
      var a = find(w[i], "API"); if(a){ v = "1.2"; return a; }
      var b = find(w[i], "API_1484_11"); if(b){ v = "2004"; return b; }
    }
    return null;
  }
  function get(k){ try{ return api ? String(v==="1.2" ? api.LMSGetValue(k) : api.GetValue(k)) : ""; }catch(e){ return ""; } }
  function set(k,val){ try{ if(api) return v==="1.2" ? api.LMSSetValue(k, String(val)) : api.SetValue(k, String(val)); }catch(e){} }
  function commit(){ try{ if(api) v==="1.2" ? api.LMSCommit("") : api.Commit(""); }catch(e){} }

  api = locate();
  if(api){
    try{ started = String(v==="1.2" ? api.LMSInitialize("") : api.Initialize("")) === "true"; }catch(e){}
    if(!started) api = null;
  }
  if(api){
    if(v === "1.2"){
      var st = get("cmi.core.lesson_status");
      if(st === "not attempted" || st === "") set("cmi.core.lesson_status", "incomplete");
    } else {
      if(get("cmi.completion_status") !== "completed") set("cmi.completion_status", "incomplete");
    }
    commit();
  }

  var t0 = Date.now();
  function hhmmss(ms){
    var s = Math.round(ms/1000), h = Math.floor(s/3600), m = Math.floor((s%3600)/60); s = s%60;
    function p(x){ return (x<10?"0":"")+x; }
    return (h<1000?(h<10?"000":h<100?"00":"0"):"")+h+":"+p(m)+":"+p(s);
  }
  function finish(){
    if(!api || finished) return;
    finished = true;
    var ms = Date.now() - t0;
    if(v === "1.2"){
      set("cmi.core.session_time", hhmmss(ms));
      if(get("cmi.core.lesson_status") !== "completed") set("cmi.core.exit", "suspend");
    } else {
      set("cmi.session_time", "PT" + Math.round(ms/1000) + "S");
      set("cmi.exit", get("cmi.completion_status") === "completed" ? "normal" : "suspend");
    }
    commit();
    try{ v==="1.2" ? api.LMSFinish("") : api.Terminate(""); }catch(e){}
  }
  window.addEventListener("pagehide", finish);
  window.addEventListener("beforeunload", finish);

  window.MorfosSCORM = {
    active: function(){ return !!api; },
    getState: function(){ return api ? (get("cmi.suspend_data") || null) : null; },
    setState: function(json, screen){
      if(!api) return;
      set("cmi.suspend_data", json);
      set(v==="1.2" ? "cmi.core.lesson_location" : "cmi.location", screen || "");
      commit();
    },
    complete: function(score, total){
      if(!api) return;
      var pct = Math.round(100 * score / total);
      if(v === "1.2"){
        set("cmi.core.score.min", 0); set("cmi.core.score.max", 100); set("cmi.core.score.raw", pct);
        set("cmi.core.lesson_status", "completed");
      } else {
        set("cmi.score.min", 0); set("cmi.score.max", 100); set("cmi.score.raw", pct);
        set("cmi.score.scaled", (pct/100).toFixed(2));
        set("cmi.completion_status", "completed");
        set("cmi.success_status", "unknown");
      }
      commit();
    }
  };
})();
