/* EvaOS v0.4 — local snapshot Q&A + real Ask deep-link to GitHub Issues. No secrets. */
(function () {
  "use strict";

  var ANSWERS = {
    working: {
      q: "What are you working on?",
      html:
        "<p><strong>Doing now</strong></p>" +
        "<ul>" +
        "<li>Passive watch on ListingLift through about Oct 13 — partner reply if any, the emails that already arrived, whether anyone pays $39.</li>" +
        "<li>Keeping the public page and checkout up.</li>" +
        "<li>Searching for the next honest business bet in the background. That search did not pause when ListingLift parked.</li>" +
        "</ul>" +
        "<p><strong>Not doing</strong></p>" +
        "<ul>" +
        "<li>No new cold email. No second channel invented to rescue ListingLift. No spend.</li>" +
        "</ul>"
    },
    money: {
      q: "Why no money yet?",
      html:
        "<p>Collected from strangers: <strong>$0</strong>. Customers: <strong>0</strong>. First goal is $100. Not there.</p>" +
        "<p>ListingLift is live at $39 with <strong>0</strong> paid orders. Cold email mostly failed delivery (spam / send limits), so that wave was not a clean demand test. A Reddit post was removed by Reddit. One partner soft-intro was sent this morning — still waiting on a reply, a share, or silence.</p>" +
        "<p>We do not invent a forecast or a “time to $100” chart. Strangers paying is the evidence. Until then the honest number is zero.</p>"
    },
    park: {
      q: "Why park ListingLift?",
      html:
        "<p>After one last cheap, approved test (a soft partner introduction, sent 2026-09-30), active investment stopped. Park means: keep the page and checkout up, watch quietly, do not invent new channels, do not spend to “save” it.</p>" +
        "<p>It is <strong>not</strong> a kill yet. Killing needs a clearer “nobody wants this” signal than we have. Acquisition failure (mail not landing, post removed) is not the same as demand failure.</p>" +
        "<p>Window for passive watch runs to about Oct 13.</p>"
    },
    approve: {
      q: "What if I approve?",
      html:
        "<p>Right now there is <strong>nothing waiting for a yes or no</strong> on the online business. If an approval card appeared, it would say: what Eva wants to do, why, max cost, risk, and what happens if you approve.</p>" +
        "<p><strong>If you approved:</strong> Eva would do that one consequential thing. You would not operate the tools. The card’s “if approved” line is the promise.</p>" +
        "<p><strong>On this page:</strong> Approve / Reject buttons are sample-only. They do not execute. Real decisions still happen with Eva until this surface is wired.</p>" +
        "<p>Last real yes: one soft partner introduction for ListingLift ($0). Sent 2026-09-30. Done.</p>"
    },
    risks: {
      q: "What are the risks right now?",
      html:
        "<ul>" +
        "<li><strong>Zero revenue:</strong> still $0 stranger cash. The business has not proven strangers will pay.</li>" +
        "<li><strong>Confusing delivery with demand:</strong> counting spam or removed posts as “market said no” would kill the wrong thing.</li>" +
        "<li><strong>Rescue theater:</strong> inventing new ListingLift channels or spending to force a win would burn attention that should find the next honest bet.</li>" +
        "<li><strong>Wrong checkout:</strong> already caught once (working link, wrong product). Independent checks stay mandatory before consequential sends.</li>" +
        "</ul>" +
        "<p>Nothing on this page needs your decision today. The quiet risk is over-managing a parked bet.</p>"
    },
    next: {
      q: "What’s next?",
      html:
        "<p>Passive watch on ListingLift to about <strong>Oct 13</strong>. Read the partner note honestly. Watch for a $39 purchase. Keep searching for the next business in the background.</p>" +
        "<p>On the shelf (not started): help small food manufacturers assemble audit paperwork — records check, not food-safety advice. No contact. No spend. Waits until ListingLift’s window is read honestly.</p>" +
        "<p>You do not need to do anything for the online business unless something here turns amber.</p>"
    },
    kill: {
      q: "Why kill those earlier ideas?",
      html:
        "<p>Several ideas were stopped because <strong>category spend ≠ people paying us</strong>, or the beachhead was too weak to burn outreach:</p>" +
        "<ul>" +
        "<li>Contractor quote-follow-up — killed before outreach (weak beachhead).</li>" +
        "<li>Backer-update pack, escape-room weekday pack, bid-watch PDF — killed (category WTP ≠ our SKU).</li>" +
        "<li>Free Gmail as the stranger channel — killed as a capability (not a product).</li>" +
        "<li>ListingLift cold — parked for delivery, not killed for demand.</li>" +
        "</ul>" +
        "<p>Kill early when evidence says so. Do not polish a thin wrapper hoping strangers will appear.</p>"
    },
    needme: {
      q: "Do you need me?",
      html:
        "<p><strong>For the online business: no.</strong> Nothing needs an owner yes/no right now.</p>" +
        "<p>Eva keeps watching ListingLift and searching for the next bet. Come back for the next Catch Me Up, or when an approval card appears.</p>" +
        "<p>Older items still blank in the approval file (VA hiring, small sandbox credit, deferred tools) are behind the “More detail” section — they are the file, not a fresh ask about today’s online bet. This page is not asking you to spend.</p>"
    },
    catchup: {
      q: "Catch me up",
      html:
        "<p>Scroll to the letter above — that is the full Catch Me Up. Short version:</p>" +
        "<ul>" +
        "<li>Partner soft-intro for ListingLift <strong>sent</strong> this morning.</li>" +
        "<li>Active ListingLift investment <strong>parked</strong>; page + $39 checkout stay up.</li>" +
        "<li>Still <strong>$0</strong> from strangers. Searching for the next honest bet continues.</li>" +
        "<li>You are clear — nothing needs you on the online business right now.</li>" +
        "</ul>"
    },
    direction: {
      q: "I don’t like this direction",
      html:
        "<p>This page cannot change course. It only explains the current snapshot.</p>" +
        "<p>If you want a different direction — pause the search, un-park cold, kill ListingLift, or start the shelf idea — say so to Eva the usual way. That becomes an owner decision with a clear packet (what / why / cost / risk), not a chat guess on a public page.</p>" +
        "<p>Right now Eva’s operating assumption is: park ListingLift after the partner note, watch to ~Oct 13, keep Opportunity Intelligence running, spend $0.</p>"
    },
    spend: {
      q: "Spend / caps",
      html:
        "<p>Ads spent: <strong>$0</strong>. Refunds: <strong>$0</strong>. Last consequential yes cost <strong>$0</strong> (partner note).</p>" +
        "<p>This page does not spend money and is not asking you to. Nonessential purchases were paused Sep 29. Caps and Pay gates stay with you and Eva — not with this static site.</p>"
    }
  };

  var KEYWORDS = [
    { keys: ["catch", "catch me up", "summary", "brief", "what happened"], id: "catchup" },
    { keys: ["working", "doing", "what are you", "activity", "busy"], id: "working" },
    { keys: ["money", "revenue", "paid", "customers", "sales", "$0", "cash", "why no"], id: "money" },
    { keys: ["park", "listinglift", "listing lift", "why park", "paused"], id: "park" },
    { keys: ["approve", "approval", "what if", "reject", "yes or no"], id: "approve" },
    { keys: ["risk", "risks", "danger", "worry", "afraid"], id: "risks" },
    { keys: ["next", "what next", "then", "upcoming", "plan"], id: "next" },
    { keys: ["kill", "killed", "stop", "graveyard", "earlier ideas"], id: "kill" },
    { keys: ["need me", "need you", "do i", "anything", "clear"], id: "needme" },
    { keys: ["direction", "don't like", "dont like", "hate", "wrong", "another"], id: "direction" },
    { keys: ["spend", "cap", "budget", "ads", "cost", "pay"], id: "spend" }
  ];

  function matchIntent(text) {
    var t = (text || "").toLowerCase().trim();
    if (!t) return null;
    for (var i = 0; i < KEYWORDS.length; i++) {
      var row = KEYWORDS[i];
      for (var j = 0; j < row.keys.length; j++) {
        if (t.indexOf(row.keys[j]) !== -1) return row.id;
      }
    }
    return null;
  }

  function showAnswer(id) {
    var entry = ANSWERS[id];
    if (!entry) return;
    var box = document.getElementById("answer");
    document.getElementById("answer-q").textContent = entry.q;
    document.getElementById("answer-a").innerHTML = entry.html;
    box.classList.add("show");
    document.querySelectorAll(".chip").forEach(function (c) {
      c.classList.toggle("active", c.getAttribute("data-intent") === id);
    });
    if (id === "catchup") {
      var letter = document.getElementById("catch-me-up");
      if (letter) letter.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function showUnknown(raw) {
    var box = document.getElementById("answer");
    document.getElementById("answer-q").textContent = raw ? 'About “‘ + raw.slice(0, 80) + '”' : "No match";
    document.getElementById("answer-a").innerHTML =
      "<p>I only answer from this snapshot’s facts. Try a chip above, or ask about: what Eva is doing, money, why park, approvals, risks, what’s next, kills, or whether you are needed.</p>" +
      "<p>This is not live Eva. For a real decision or a new direction, talk to Eva the usual way.</p>";
    box.classList.add("show");
    document.querySelectorAll(".chip").forEach(function (c) {
      c.classList.remove("active");
    });
  }

  document.querySelectorAll(".chip").forEach(function (btn) {
    btn.addEventListener("click", function () {
      showAnswer(btn.getAttribute("data-intent"));
    });
  });

  var form = document.getElementById("ask-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var input = document.getElementById("ask-input");
    var raw = (input.value || "").trim();
    var id = matchIntent(raw);
    if (id) showAnswer(id);
    else showUnknown(raw);
  });


  /* --- Real Ask: deep-link to GitHub new issue (no secrets in client) --- */
  var REPO_NEW_ISSUE = "https://github.com/Evaisawesome2025/evaos-v04/issues/new";
  var OUTBOX_URL = "outbox/threads.json";

  function buildIssueUrl(question) {
    var title = "Owner ask: " + question.slice(0, 80);
    var body =
      "## Owner question\n\n" +
      question +
      "\n\n---\n" +
      "<!-- evaos-v04 owner-ask -->\n" +
      "**Source:** EvaOS v0.4 Ask (real)\n" +
      "**Rules:** Public channel. No passwords, cards, private emails, or secrets.\n" +
      "**Label:** owner-ask (apply if missing)\n";
    var params = new URLSearchParams();
    params.set("title", title);
    params.set("body", body);
    params.set("labels", "owner-ask");
    return REPO_NEW_ISSUE + "?" + params.toString();
  }

  var realForm = document.getElementById("real-ask-form");
  var realInput = document.getElementById("real-ask-input");
  if (realForm && realInput) {
    realForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var q = (realInput.value || "").trim();
      if (!q) return;
      var url = buildIssueUrl(q);
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderThreads(data) {
    var root = document.getElementById("threads");
    var empty = document.getElementById("threads-empty");
    if (!root) return;
    var threads = (data && data.threads) || [];
    if (!threads.length) {
      root.innerHTML = '<p class="threads-empty" id="threads-empty">No real replies yet. Submit an Ask above (GitHub), then Eva processes it — the answer lands here.</p>';
      return;
    }
    var html = "";
    threads.forEach(function (t) {
      var kind = t.kind === "selftest" ? " · SELFTEST (not owner)" : "";
      var issue = t.issue_url
        ? ' · <a href="' + esc(t.issue_url) + '" target="_blank" rel="noopener">issue #' + esc(String(t.issue_number || "")) + "</a>"
        : "";
      var answerHtml = (t.answer_html || esc(t.answer_text || "")).trim();
      html +=
        '<article class="thread">' +
        '<p class="meta">' +
        esc(t.answered_ct || "") +
        kind +
        issue +
        (t.author ? " · from @" + esc(t.author) : "") +
        "</p>" +
        '<p class="q">' +
        esc(t.question || "") +
        "</p>" +
        '<div class="a">' +
        answerHtml +
        "</div>" +
        "</article>";
    });
    root.innerHTML = html;
  }

  fetch(OUTBOX_URL + "?t=" + Date.now())
    .then(function (r) {
      if (!r.ok) throw new Error("outbox " + r.status);
      return r.json();
    })
    .then(renderThreads)
    .catch(function () {
      var root = document.getElementById("threads");
      if (root) {
        root.innerHTML =
          '<p class="threads-empty">Could not load outbox yet (Pages may still be building). Refresh in a minute.</p>';
      }
    });

})();
