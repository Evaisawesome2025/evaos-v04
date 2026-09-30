# EvaOS v0.4 build — first REAL owner↔Eva Ask loop

**When:** 2026-09-30 ~11:42–11:50 CT  
**Live URL:** https://evaisawesome2025.github.io/evaos-v04/  
**Repo:** https://github.com/Evaisawesome2025/evaos-v04 (public)  
**Prior (kept live):** https://evaisawesome2025.github.io/evaos-v03/ · v02 · v01  
**Cost:** $0. No domain. No new agent. No spend.  
**AUDITOR:** PASS WITH WARNING — `audit/logs/AUDIT-20260930-1155-EVAOS-V04-ASK-LOOP.md`

---

## Chosen loop

**Owner Ask (real)** — see `V04_LOOP_DECISION.md`.

```
OWNER (EvaOS “Open Ask in GitHub”)
  → GitHub Issue labeled owner-ask (owner GitHub session)
  → Eva on box: scripts/process_owner_asks.sh
  → Issue comment + label eva-answered
  → commit outbox/threads.json
  → Pages shows reply
  → Owner verifies on Pages + Issue
```

Honest bridge: one hop off Pages into GitHub to submit. Labeled in UI. Still REAL (not local theater).

---

## What shipped

1. Public `evaos-v04` Pages site (Catch Me Up + pulse preserved from v0.3 facts).  
2. **Ask Eva (real)** section — builds GitHub new-issue URL (title/body/labels); **no secrets in client**.  
3. `outbox/threads.json` fetched by the page.  
4. `control/ALLOWLIST.txt` — bootstrap: `Evaisawesome2025` only; Glen adds his login.  
5. Issue template + labels: `owner-ask`, `eva-answered`, `loop-selftest`.  
6. `scripts/process_owner_asks.sh` — allowlist filter, org-truth answers, refuse credential keywords.  
7. Local snapshot chips kept (still labeled not live Eva).  
8. Approvals still empty / buttons disabled (no theater).  
9. **SELFTEST #1** processed end-to-end (labeled `kind=selftest` — not owner).

---

## How Glen verifies once (end-to-end as owner)

### A. See the selftest already run (no action)

1. Open https://evaisawesome2025.github.io/evaos-v04/  
2. Under **Ask Eva (real) → Replies from Eva**, find the SELFTEST thread (says SELFTEST · issue #1).  
3. Open https://github.com/Evaisawesome2025/evaos-v04/issues/1 — Eva comment present; labels include `eva-answered` + `loop-selftest`.

### B. Run YOUR real Ask (owner loop)

1. Add your GitHub username to `control/ALLOWLIST.txt` on the repo (or tell Eva the login so she commits it). Without this, Eva will SKIP your Issue.  
2. Open EvaOS v0.4 → type a short business question → **Open Ask in GitHub**.  
3. Submit the Issue while logged into GitHub (label `owner-ask` should be set).  
4. Tell Eva / wait for next Eva session to run:  
   `cd /workspace/evaos-v04 && ./scripts/process_owner_asks.sh && git add outbox && git commit -m "outbox: owner ask" && git push`  
5. Refresh EvaOS — your reply appears under Replies. Also check the Issue comment.  
6. **Public channel:** do not put passwords, cards, or private emails in the question.

### C. What would FAIL the experiment

- Page shows a “reply” that was hand-edited into HTML without an Issue.  
- Buttons claim Approve executed.  
- Secrets appear in client JS or public outbox.  
- SELFTEST presented as Glen’s Ask.

---

## REAL / PLACEHOLDER map

| Block | Label |
|-------|--------|
| Catch Me Up / $0 / LL parked facts | **REAL** |
| Ask Eva (real) deep-link → Issue | **REAL** channel |
| Outbox replies after Eva process | **REAL** |
| SELFTEST #1 | **REAL** mechanic · **not** owner Ask |
| Local chips | **REAL facts** · **PLACEHOLDER** as Eva chat |
| Approve / Reject buttons | **PLACEHOLDER** (still disabled) |
| Always-on streaming Eva | **NOT BUILT** (on-demand process — honest) |

---

## Intentionally NOT built

- Approve execute write-back (empty pending online-business queue).  
- Backend / auth product / paid hosting / domain.  
- Cron daemon / new agent.  
- Spend, un-park LL cold, pause OI.  
- Private answers on public Pages.

---

## Manual bridges (honest)

| Step | Who | Notes |
|------|-----|-------|
| Submit Ask | Owner | GitHub login required once |
| Process Issue | Eva | On-demand script (not claimed as always-on) |
| Publish outbox | Eva | git push → Pages |

---

## Constraints honored

Did not un-park ListingLift cold. Did not invent LL channels. Did not pause OI. No spend. No new agent. v01–v03 URLs kept. No secrets in Pages. AUDITOR PASS WITH WARNING filed before consequential public ship.

---

## Companion docs

- `V04_CAPABILITY_AUDIT.md`  
- `V04_LOOP_DECISION.md`  
- `reviews/AUDITOR_V04_ASK_LOOP.md`

---

*— End V04_BUILD.md · 2026-09-30 CT —*
