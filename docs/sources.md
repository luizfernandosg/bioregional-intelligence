# Data sources

## Catalunya comarques GeoJSON

- **File:** `public/geo/catalunya-comarques.geojson`
- **Source:** `aariste/GeoJSON-Mapas` (50 features at comarca granularity)
- **License:** ODbL (verified upstream)
- **Simplification:** mapshaper `-simplify 5% keep-shapes`
- **Ported from:** `refi-bcn-os/packages/maps/catalunya-actor-map/v0/catalunya-comarques.geojson` (committed 2026-04-29 via `feat(map): add Catalunya comarques GeoJSON for v0`)

## Project images

Project photos for the Regenerant Catalunya cohort are sourced from `repos/Regenerant-Catalunya/static/projects/` (CC BY-SA 4.0 per the RC repo's content license). Five projects have images at time of import:

- `laurel-31.png`
- `la-marmita.png`
- `les-juntes.png`
- `la-suculenta.png`
- `la-granja-del-tilo.png`

The remaining 6 projects use a generated initial-tile fallback (see `src/lib/initial-tile.ts`).

## Project descriptions

Cohort descriptions (`src/data/rc-cohort.yaml` `summary` fields) are trimmed and lightly edited from `repos/Regenerant-Catalunya/content/program/partners-projects.md`. Each project's full description, network attribution, and locality should be cross-checked against the canonical RC partners-projects doc before publication.
