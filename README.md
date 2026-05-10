# Bioregional Intelligence — Catalunya

A static dashboard for understanding the regenerative ecosystem in and around Catalunya as a bioregion. Combines cohort showcases (e.g., Regenerant Catalunya), actor / network maps, and bioregional-health indicators.

**Live:** [bioregional.refibcn.cat](https://bioregional.refibcn.cat) _(provisional — DNS pending)_
**Fallback:** [luizfernandosg.github.io/bioregional-intelligence](https://luizfernandosg.github.io/bioregional-intelligence/)

## Status

V1 (current iteration) — `/cohorts/regenerant-catalunya` shipping for the GG24 retrospective article.

See `docs/north-star.md` for the long-arc direction.

## Quick start

```bash
npm install
npm run dev          # local at http://localhost:4321
npm run build        # static build to ./dist
npm run preview      # preview the production build
```

## Repo layout

- `src/data/rc-cohort.yaml` — canonical cohort data
- `src/components/` — Astro components (`ProjectCard`, `NetworkSection`, `CatalunyaInsetMap`, layout chrome)
- `src/pages/` — routes
- `src/lib/` — TypeScript helpers (projection, initial-tile generation)
- `public/` — static assets (GeoJSON, project images)
- `docs/` — north-star, article-embed-guide, sources, contributor-onboarding, feedback

## License

- Code: MIT
- Content: CC BY-SA 4.0

## Contributing

This is part of the [ReFi Barcelona](https://refibcn.cat) ecosystem. Two ways in:

- **Want to develop directly?** → [`docs/CONTRIBUTOR-ONBOARDING.md`](./docs/CONTRIBUTOR-ONBOARDING.md) — one-pager: setup in ~10 min, common-edit recipes, deploy flow.
- **Just want to leave feedback / corrections / directions?** → [`docs/FEEDBACK.md`](./docs/FEEDBACK.md) — drop entries; Luiz processes the queue (and may spawn agents to act on them) without you needing to operate any agents/code yourself.

Or open an issue / PR on GitHub.
