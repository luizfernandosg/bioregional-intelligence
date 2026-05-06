# Article-embed guide — RC Cohort Map

## Recommended: direct link

Embed the cohort page in the retrospective article via a hyperlink rather than an iframe:

> Explore the full Regenerant Catalunya cohort →
> [bioregional.refibcn.cat/cohorts/regenerant-catalunya](https://bioregional.refibcn.cat/cohorts/regenerant-catalunya/)
>
> _(fallback: [luizfernandosg.github.io/bioregional-intelligence/cohorts/regenerant-catalunya/](https://luizfernandosg.github.io/bioregional-intelligence/cohorts/regenerant-catalunya/))_

Pair the link with one or two screenshots above the fold so the article is readable without leaving the page.

### Why direct link, not iframe

- The dashboard is publicly browsable on its own and reads as a richer artifact than an iframe embed.
- Quartz's content layout interacts badly with iframes (height collapsing, scroll capture).
- Updating the dashboard doesn't require re-embedding in the article.

## If you really need an iframe

A future `?embed=1` mode is planned (lands as a small follow-up if needed). It strips the top nav and footer for clean iframe rendering. **Not implemented in V1.**

If the article timeline forces an iframe before that mode lands, embed with explicit height:

```html
<iframe
  src="https://bioregional.refibcn.cat/cohorts/regenerant-catalunya/"
  width="100%" height="2400" frameborder="0"
  loading="lazy"
  title="Regenerant Catalunya cohort map">
</iframe>
```

…and accept that the chrome will show through. Then file a follow-up issue requesting `?embed=1`.

## Screenshots for the article

Recommended captures (1440×900 viewport, full-page):
1. Hero + overview pane (top of page) — primary "above the fold" image.
2. Miceli network grid with cards visible — secondary visual.
3. Inset-map close-up at 100% scale — for territorial context.

Save as PNG, ≤500KB each (compress with `pngquant` or similar).

## URL hygiene

The canonical URL is **`https://bioregional.refibcn.cat/cohorts/regenerant-catalunya/`** (note trailing slash — Astro emits directory-format URLs).

If the custom domain isn't resolving by the article ship date, use the GitHub Pages URL as a temporary primary link, but plan to swap to the custom domain when it lands.
