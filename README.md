# Drive Thru Deals

Static site for an independent used-car dealership. No build step, no dependencies —
`index.html` plus a folder of images.

## Structure

- `index.html` — the whole page (36 KB): head, inline CSS, markup, JSON-LD
- `img/` — vehicle photography, 700w and 1400w variants served via `srcset`
- `og-image.jpg` — 1200×630 link-preview card
- `favicon.*`, `icon-*.png`, `apple-touch-icon.png`, `site.webmanifest` — icon set
- `robots.txt`, `sitemap.xml`

All vehicle photography is public domain or CC0, so no attribution is required.

## Adapting for a dealership

1. Replace `img/*` with the dealer's own photography (8:5 crop, 1400w and 700w)
2. Update the six `<article class="car">` blocks and the matching JSON-LD entries
3. Add address, phone and NJ dealer licence number — the `LocalBusiness` schema has
   fields waiting for them, and NJ requires the licence number on dealer advertising
4. Swap every absolute `https://drivethrudeals.online` URL for the live domain:
   canonical, `og:url`, `og:image`, `twitter:image`, sitemap, robots and JSON-LD
5. Regenerate `og-image.jpg` with the dealer's name
