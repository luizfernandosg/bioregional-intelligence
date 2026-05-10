# Contributor onboarding — one-pager

For team members who want to **develop the visual map themselves**. If you'd rather just leave feedback or directions and have someone else operate the agents/code, see [`FEEDBACK.md`](./FEEDBACK.md) instead.

> **Audience:** Giulio + Andrea + future contributors. Assumes you're comfortable with terminal + git. **Time to first local edit: ~10 min.** Time to ship a real change: ~30 min.

---

## 1. Where the project lives

| | URL / path |
|---|---|
| **GitHub repo** | `github.com/luizfernandosg/bioregional-intelligence` _(transfer to ReFi BCN org pending)_ |
| **Local clone (canonical, inside refi-bcn-os)** | `repos/bioregional-intelligence/` |
| **Live URL** | [bioregional.refibcn.cat](https://bioregional.refibcn.cat) — DNS pending |
| **Fallback URL** | [luizfernandosg.github.io/bioregional-intelligence/](https://luizfernandosg.github.io/bioregional-intelligence/) |
| **Auto-deploy** | Push to `main` → GitHub Pages CI builds + deploys (`.github/workflows/deploy.yml`) |

The local clone inside `refi-bcn-os/repos/` is treated as the canonical working copy. Develop there, push to GitHub, deploy is automatic.

---

## 2. First-time setup (~10 min)

Assuming you already have the `refi-bcn-os` workspace:

```bash
cd refi-bcn-os/repos/bioregional-intelligence
npm install
npm run dev          # opens at http://localhost:4321
```

That's it. Edit any file under `src/` and the dev server hot-reloads.

If the repo isn't there yet (fresh refi-bcn-os checkout):
```bash
cd refi-bcn-os/repos
git clone https://github.com/luizfernandosg/bioregional-intelligence.git
cd bioregional-intelligence && npm install && npm run dev
```

---

## 3. Repo layout (the 80% you'll touch)

```
src/
├── data/
│   └── rc-cohort.yaml         ← canonical cohort data (networks + projects)
├── components/
│   ├── CatalunyaProgramMap.astro   ← MapLibre map (article view)
│   ├── CatalunyaInsetMap.astro     ← D3 inset map (dashboard view)
│   ├── ProjectCard.astro
│   ├── NetworkSection.astro
│   ├── Layout.astro / Nav.astro / Footer.astro   ← chrome
├── pages/
│   ├── index.astro            ← /
│   ├── programs/regenerant-catalunya/
│   │   ├── index.astro        ← dashboard view
│   │   └── article.astro      ← minimal-chrome article companion
│   ├── about.astro · actors.astro · indicators.astro
├── lib/                       ← TS helpers (projection, tile generation)
└── styles/
public/                        ← static assets (GeoJSON boundaries, project images)
docs/
├── north-star.md              ← long-arc framing — read first if curious
├── article-embed-guide.md     ← how the retrospective article links the map
├── sources.md                 ← data provenance
├── CONTRIBUTOR-ONBOARDING.md  ← this file
└── FEEDBACK.md                ← drop feedback / directions / corrections here
```

---

## 4. Common edits — recipes

### Add or correct a project in the cohort
Edit `src/data/rc-cohort.yaml`. Each project entry:
```yaml
- id: my-project-id              # kebab-case, stable; used in URLs/refs
  name: "My Project"
  network: miceli                # or "keras-buti"
  theme: river                   # see existing themes for vocab
  locality: "La Garrotxa"
  geo: { lat: 42.18, lng: 2.49 } # WGS84
  image: "/images/projects/my-project-id.png"   # drop image into public/images/projects/
  summary: >
    Two-line plain prose. No marketing voice.
  links:
    web: null                    # or "https://..."
    karma: null
    rc_page: null
  status: confirmed              # or "pending"
```
Save → dev server reloads → check the map + cards. Commit + push when happy.

### Change network color (e.g., Miceli accent)
Network accents are defined inline in `rc-cohort.yaml` (`accent: forest | rust | …`) and mapped to CSS variables in `src/styles/`. Grep for the network's accent token to find render sites.

### Add a new map view (different region / different cohort)
1. Duplicate `src/pages/programs/regenerant-catalunya/` → rename folder.
2. Add a new YAML in `src/data/` (use `rc-cohort.yaml` as template).
3. Update the new pages' import to point at your YAML.
4. The map components are reusable — pass them the new data set.

### Tweak copy (titles, summaries, footer text)
Most strings live in the page files (`src/pages/...`) or in `Footer.astro` / `Nav.astro`. No CMS — edit and commit.

### Replace project images
Drop a new file at `public/images/projects/<project-id>.png` (any reasonable size; the cards crop). Update `image:` field in YAML if path changed.

---

## 5. Two ways to develop

### A) Direct dev (you write the code)
Edit files in your editor → dev server hot-reloads → commit + push. Standard Astro workflow.

### B) Agent-assisted (Claude Code in `refi-bcn-os`)
From the `refi-bcn-os` workspace, open Claude Code and instruct natural-language changes scoped to the BIS repo:

> _"In `repos/bioregional-intelligence/`, add a new project entry for Cooperativa X under the keras-buti network with theme=narrative, locality=L'Hospitalet, lat 41.36 lng 2.10. Drop image at public/images/projects/coop-x.png — I'll add the actual file later. Confirm it renders."_

Agent reads the YAML schema, writes the entry, runs the dev server, confirms render. You review + push. Useful when you don't want to context-switch into Astro syntax.

---

## 6. Deploy flow

- `git push origin main` → GitHub Actions (`.github/workflows/deploy.yml`) builds Astro → deploys to GitHub Pages.
- ~2-3 min from push to live.
- DNS at `bioregional.refibcn.cat` → `luizfernandosg.github.io` (pending). Until DNS lands, use the fallback URL.

---

## 7. Conventions

- **Branching:** trunk-based on `main` for now. If a change is risky, open a feature branch + PR.
- **Commits:** plain, descriptive imperative ("Add Cooperativa X to keras-buti network", "Fix Comarca outline at zoom 6").
- **Data first.** When in doubt, reach for the YAML before reaching for components.
- **Static-first.** No DB, no auth, no runtime fetches. If you find yourself needing one, post in `FEEDBACK.md` first.
- **Editorial voice.** Match the existing tone (plain, grounded, no hype). See `north-star.md` §Principles.

---

## 8. Where to ask / where to leave directions

- **Quick clarification while developing** — Telegram group, ping Luiz.
- **Feature requests / corrections / questions you don't want to develop yourself** — drop them in [`FEEDBACK.md`](./FEEDBACK.md). Luiz processes the file periodically (and may spawn agents to act on entries).
- **Bigger architecture decisions** — surface at the next ReFi BCN Tuesday ops sync or strategy session.
- **Bug or breakage in production** — open a GitHub issue + flag in Telegram.

---

## 9. Tomorrow's session (Mon 2026-05-11 15:00 CET)

If you're reading this for the Mon 2026-05-11 walkthrough call (Luiz + Andrea + Giulio):

- We'll do steps **1 → 3 → 4** together live (where things live, repo layout, one common edit end-to-end).
- Section **5A vs 5B** (direct dev vs. agent-assisted) — pick what fits your style; both are first-class.
- We'll set up the **feedback flow** (FEEDBACK.md) so anyone can drop directions without operating the agents.

---

_Last updated: 2026-05-10. Maintained by Luiz; PRs welcome._
