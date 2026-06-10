# patrick-munnelly.com

Single-page portfolio. Next.js 16 (App Router, static export), TypeScript strict, Tailwind CSS v4 (design tokens in `tailwind.config.ts`, loaded via `@config`), GA4 with a consent-gated loader. No backend, no CMS.

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
npm test             # Vitest + React Testing Library
npm run lint         # ESLint
npm run build        # static export → out/
```

Content lives in `content/experience.ts` and `content/site.ts` (single source of truth, sourced from the CV). The CV PDF is `public/Patrick_Munnelly_CV.pdf`.

## Environment variables

| Variable | Where | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_GA_ID` | `.env.local` locally, Project → Settings → Environment Variables on Vercel | GA4 Measurement ID (`G-…`). Baked in at build time — redeploy after changing it. If unset, GA is omitted entirely. |

Analytics behaviour: Google Consent Mode v2 defaults everything to `denied`; gtag.js is only loaded after the visitor accepts the banner (choice persisted in `localStorage` under `pm-analytics-consent`). Custom events: `cv_download`, `contact_email_click`, `linkedin_click`.

## Deploy to Vercel

1. Push the repo to GitHub (`Patrick-Munnelly` account).
2. In Vercel: **Add New → Project**, import the repo. Framework preset “Next.js” is auto-detected; no build settings need changing (static export is configured via `output: "export"`).
3. Add `NEXT_PUBLIC_GA_ID` under **Settings → Environment Variables** (Production), then deploy.
4. **Settings → Domains**: add `patrick-munnelly.com` and `www.patrick-munnelly.com`. Set **`www.patrick-munnelly.com` as the primary domain** — Vercel then 308-redirects the apex to www, matching the canonical URL in the metadata.

## DNS (AWS Route 53)

In the hosted zone for `patrick-munnelly.com`, create:

| Type | Name | Value |
| --- | --- | --- |
| A | `patrick-munnelly.com` (apex) | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

Wait for both to resolve (minutes, usually), then confirm in Vercel → Domains that both show as valid and that apex redirects to www.

## Google Search Console

1. [Search Console](https://search.google.com/search-console) → **Add property → Domain** → `patrick-munnelly.com`.
2. Google issues a TXT record — add it in Route 53 (Type `TXT`, name = apex, value = the `google-site-verification=…` string), then click Verify.
3. Once verified: **Sitemaps → Add a new sitemap** → `https://www.patrick-munnelly.com/sitemap.xml`.
4. Optional: **URL Inspection** on `https://www.patrick-munnelly.com/` → Request indexing.

## Launch checks

- OG card: paste the URL into [opengraph.xyz](https://www.opengraph.xyz/) or LinkedIn Post Inspector.
- Structured data: [validator.schema.org](https://validator.schema.org/) (Person + WebSite).
- Lighthouse: run from an incognito window against the production URL (PageSpeed Insights gives the stable lab numbers).
- Click through: CV download, mailto, LinkedIn, GitHub, Lugh link.
