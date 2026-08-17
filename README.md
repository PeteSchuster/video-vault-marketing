# VideoVault — Marketing Site

Static landing page for the VideoVault iOS app. Vite + React + TypeScript + Tailwind v4, deployed to GitHub Pages.

Live URL: **https://video-vault.app/**

## Run locally

```bash
npm install
npm run dev          # http://localhost:5173/
npm run build        # outputs dist/
npm run preview      # serves the production build locally
```

## How deploy works

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes the `dist/` folder via `actions/deploy-pages`. There is no `gh-pages` branch.

**One-time setup** in the GitHub repo:

1. **Settings → Pages → Source: GitHub Actions**
2. **Settings → Pages → Custom domain: `video-vault.app`** (the [`public/CNAME`](public/CNAME) file is committed, so this should be picked up automatically on the first deploy; the field just needs to be saved once)
3. At your DNS host, add either an `ALIAS`/`ANAME` for the apex record pointing to `peteschuster.github.io.`, or four `A` records pointing to GitHub's Pages IPs (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`). Add `www` as a `CNAME` to `peteschuster.github.io.` if you want www → apex redirect.
4. Wait for DNS to resolve, then check **Enforce HTTPS** in the Pages settings.

## Links and pages

Outbound URLs live in [`src/content/links.ts`](src/content/links.ts). `PRIVACY_URL` points at
[`public/privacy/index.html`](public/privacy/index.html) — a standalone page (no React, no build step)
served at `/privacy/`. The App Store listing and the app's Settings link should point there too.

## Screenshots

`public/screenshots/` holds **cropped, downscaled** assets sized for their slots (roughly 2× display
width). The full-resolution simulator captures stay in `assets/screenshots-raw/`, which is outside
`public/` so it never ships — a full iPad capture is ~1.4 MB and renders into a 300–420px box.

To re-crop after a fresh capture: drop the new full-size PNGs in `assets/screenshots-raw/` and run
`bash assets/crop-screenshots.sh`, adjusting that script's crop bounds per shot (headless Chrome renders
each source into a fixed-size frame at a negative offset — this machine has no ImageMagick, and `sips`
can't do offset crops). Then update the `width`/`height` props where the shot is used;
`<Screenshot>` requires them so the browser reserves space instead of reflowing.

The hero shot must pass `priority` — it's the LCP element and must not be lazy-loaded.

### Capturing

Shot on an iPad Air 13-inch simulator (1024×1366pt → 2048×2732px). Before capturing:

```bash
xcrun simctl status_bar <udid> override --time "9:41" --wifiBars 3 --batteryState charged --batteryLevel 100
xcrun simctl spawn <udid> notifyutil -s com.apple.BiometricKit.enrollmentChanged 1
xcrun simctl spawn <udid> notifyutil -p com.apple.BiometricKit.enrollmentChanged
```

The status-bar override kills the capture-date tell (the 1.0 assets were stamped "Mon May 4" for
months). Enrolling biometrics is what makes the PIN sheet show its Face ID button.

Parent mode is reached by **long-pressing** the kid-home lock for 1.5s, not tapping it.

### Missing shot

`library.png` currently stands in for step 2 of How It Works, which wants the **Review queue**. The
queue is empty whenever every source has auto-approve on — to stage it, turn auto-approve off for a
source and use "Import more older videos", capture, then clear the pending items.

## Open Graph image

`public/og-image.png` (1200×630) is generated from [`assets/og-image.template.html`](assets/og-image.template.html):

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu \
  --force-device-scale-factor=1 --allow-file-access-from-files --window-size=1200,630 \
  --screenshot=public/og-image.png assets/og-image.template.html
```

`og:image` must stay an **absolute** URL in `index.html` — most crawlers won't resolve a relative one.

## Brand tokens

Defined in [`src/index.css`](src/index.css) under `@theme`:

- `--color-coral` `#FF8B6B` — primary, **fills only**
- `--color-coral-deep` `#A9502F` — coral for *text*: links, hovers, accent type. Plain coral is 2.18:1
  on cream and fails WCAG AA, so never use `text-coral` on a light background
- `--color-teal`, `--color-butter`, `--color-lavender`, `--color-sage`, `--color-sky`, `--color-rose`, `--color-terracotta` — secondary palette, icons and fills
- `--color-ink` — body text, `--color-cream` — page background

Use as Tailwind classes: `bg-coral`, `text-coral-deep`, `border-lavender`, etc.

## Section layout

`src/App.tsx` composes the page in this order: Nav → Hero → HowItWorks → WhyVideoVault → Tags →
ApiKeySetup → Privacy → Community → Footer. Each section component lives in `src/components/`.

The comparison table in `WhyVideoVault` is deliberately built twice: a 4-column grid at `md`+ and a
card-per-row list below it. A single collapsing grid drops the column headers on mobile and leaves
three unattributed values stacked.
# video-vault-marketing
