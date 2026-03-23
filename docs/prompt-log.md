# Prompt Log

A running record of all AI-assisted prompts and actions taken in this project.

---

### 2026-03-23 09:24 — Configure prompt documentation

**Prompt:** "configure the repo such that all my prompts will be documented"

**What was done:**
- Created `.cursor/rules/document-prompts.mdc` — always-on rule to log every prompt
- Created `docs/prompt-log.md` — this file, the running prompt log

---

### 2026-03-23 09:30 — Make the layout mobile friendly

**Prompt:** "make the layout mobile friendly"

**What was done:**
- `style.css`: expanded `max-width: 600px` breakpoint with safe-area insets, 44px touch targets, left-aligned English text, tighter spacing, reduced ornament letter-spacing

---

### 2026-03-23 09:35 — Move title from top to bottom

**Prompt:** "move the title from top to bottom"

**What was done:**
- `index.html`: moved `<header>` from above `<main>` to below `<nav class="controls">`
- `style.css`: updated `.header` to use `margin-top`, `padding-top`, `border-top`

---

### 2026-03-23 09:40 — Use prompts as changelog when pushing

**Prompt:** "when pushing changes, use my prompts as changelog"

**What was done:**
- `.cursor/rules/document-prompts.mdc`: added commit/push instructions to the rule

---

### 2026-03-23 09:45 — Keep only prompts in log, no details

**Prompt:** "I only want to keep prompts, and not the details"

**What was done:**
- `docs/prompt-log.md`: stripped to flat one-line-per-prompt format
- `.cursor/rules/document-prompts.mdc`: updated entry format to match

---

### 2026-03-23 09:50 — Make the layout mobile friendly (re-apply)

**Prompt:** "make the layout mobile friendly"

**What was done:**
- `style.css`: re-applied mobile breakpoint improvements lost due to unpushed changes

---

### 2026-03-23 09:55 — Keep details in log but exclude from commit messages

**Prompt:** "keep the details in prompt log, but when commiting a git change don't include them"

**What was done:**
- `docs/prompt-log.md`: restored detailed entry format with all past entries
- `.cursor/rules/document-prompts.mdc`: updated commit rule to use titles only, not "What was done" details
