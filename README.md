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

## Where to swap placeholders

All swappable URLs live in [`src/content/links.ts`](src/content/links.ts):

- `APP_STORE_URL` — replace post-App-Store-approval
- `DISCORD_URL` — replace with the real Discord invite

Screenshot placeholders are rendered by `<Placeholder>` components inside the section files. Drop real images into `public/screenshots/` and replace the `<Placeholder>` JSX with `<img src="./screenshots/your-file.png" alt="…" />` (note the `./` so Vite resolves it against the `base` path).

Open Graph / Twitter card image: replace `public/og-image.png` (1200×630).

## Brand tokens

Defined in [`src/index.css`](src/index.css) under `@theme`:

- `--color-coral` `#FF8B6B` — primary
- `--color-teal`, `--color-butter`, `--color-lavender`, `--color-sage`, `--color-sky`, `--color-rose`, `--color-terracotta` — secondary palette
- `--color-ink` — body text, `--color-cream` — page background

Use as Tailwind classes: `bg-coral`, `text-teal`, `border-lavender`, etc.

## Section layout

`src/App.tsx` composes the page in this order: Nav → Hero → HowItWorks → WhyVideoVault → ApiKeySetup → Privacy → Community → Footer. Each section component lives in `src/components/`.
# video-vault-marketing
