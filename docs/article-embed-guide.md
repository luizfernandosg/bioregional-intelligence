# Article-embed guide — RC Program Map

## Recommended: direct link to the article-companion view

Embed the program in the retrospective article via a hyperlink to the article-companion route — a purpose-built minimal-chrome view (no top nav, no footer) designed for exactly this use case:

> Explore the full Regenerant Catalunya program →
> [bioregional.refibcn.cat/programs/regenerant-catalunya/article/](https://bioregional.refibcn.cat/programs/regenerant-catalunya/article/)
>
> _(fallback: [luizfernandosg.github.io/bioregional-intelligence/programs/regenerant-catalunya/article/](https://luizfernandosg.github.io/bioregional-intelligence/programs/regenerant-catalunya/article/))_

Pair the link with one or two screenshots above the fold so the article is readable without leaving the page.

### Why direct link, not iframe

- The `/article/` route is purpose-built for this — no nav, no footer, ready to embed-or-link directly from the RC retrospective article.
- The full dashboard (`/programs/regenerant-catalunya/`) remains publicly browsable in the BIS chrome for visitors who arrive via the BIS homepage.
- Quartz's content layout interacts badly with iframes (height collapsing, scroll capture).
- Updating the dashboard doesn't require re-embedding in the article.

## If you really need an iframe

The `/article/` route is already minimal-chrome, making it much more suitable for iframe embedding than the full dashboard view:

```html
<iframe
  src="https://bioregional.refibcn.cat/programs/regenerant-catalunya/article/"
  width="100%" height="2400" frameborder="0"
  loading="lazy"
  title="Regenerant Catalunya program map">
</iframe>
```

## Screenshots for the article

Recommended captures (1440×900 viewport, full-page):
1. Hero + overview pane (top of page) — primary "above the fold" image.
2. Miceli network grid with cards visible — secondary visual.
3. Inset-map close-up at 100% scale — for territorial context.

Save as PNG, ≤500KB each (compress with `pngquant` or similar).

## URL hygiene

Two canonical URLs:

- **Article-companion view** (recommended for the RC article): `https://bioregional.refibcn.cat/programs/regenerant-catalunya/article/`
- **Full dashboard view** (BIS chrome, for BIS homepage navigation): `https://bioregional.refibcn.cat/programs/regenerant-catalunya/`

Both use directory-format URLs (trailing slash — Astro default). If the custom domain isn't resolving by the article ship date, use the GitHub Pages fallback URLs listed above.
