# Truth Matrix Showcase

Build a single-page promotional website for Sophia Stewart's book collection, 

styled to match and complement her existing site at truthaboutmatrix.com.

BRAND / TONE

- Dark, cinematic "Matrix code" aesthetic: black background, matrix-green (#00FF41 

  or similar) accent color, monospace/digital font for headers (e.g. "Share Tech Mono" 

  or "Courier New" fallback), clean serif or sans-serif for body copy for readability.

- Subtle animated digital-rain or code-scroll background effect (CSS/JS, lightweight, 

  must not hurt readability or performance).

- Feels authoritative and mysterious, not gimmicky — she is a real author/creator 

  asserting a serious IP story, not a meme page.

STRUCTURE (single page, section-by-section):

1. HERO

   - Headline: "The Truth Behind The Matrix & The Terminator"

   - Subhead: "The original screenplay that inspired one of the biggest franchises 

     in film history — by Sophia Stewart"

   - CTA button: "Explore the Books" (scrolls to Book Store section)

2. ABOUT (short version)

   - 2-3 sentence bio pulled from her site: journalism degree from CUNY, studied 

     cinema at USC, professional writer since early 80s.

   - Link out: "Read the full story" → https://www.truthaboutmatrix.com/about

3. BOOK STORE (main focus — this is the conversion section)

   - 3 book cards, each with: cover image, title, 1-2 sentence hook, "View on 

     Amazon" button (affiliate link placeholder)

   - Books:

     a) The Third Eye — the original manuscript/screenplay

     b) Mother of the Matrix — her story, told directly

     c) The Matrix: Evolution — Cracking the Genetic Code

   - Use responsive card grid (3 across desktop, 1 across mobile)

4. IMPACT / STATS (pull directly from her site — do not alter the numbers)

   - 14,500/month website traffic

   - 650,000/month viral peak traffic

   - 130,000–3 million TikTok viral views

   - 20,000–100,000 YouTube views per interview

   - Display as a 4-stat grid, bold numbers, small caption underneath each

5. SUBSCRIBE / CONTACT

   - Simple email capture form (front-end only, no backend needed for this build)

   - Link to her official contact page: https://www.truthaboutmatrix.com/contact-us

6. FOOTER

   - Small disclosure: "Fan-created promotional page. Not officially affiliated 

     with Sophia Stewart or All Eyes On Me, INC."

   - Link back to her official site

TECHNICAL REQUIREMENTS

- Single self-contained HTML file (inline CSS + JS, no external dependencies 

  except Google Fonts if needed).

- Fully responsive (mobile-first breakpoints).

- Fast load — no heavy animation libraries, keep the code-rain effect lightweight 

  (canvas or CSS only).

- Semantic HTML, accessible contrast ratios despite dark theme.

- Placeholder affiliate links clearly marked as [AFFILIATE_LINK_HERE] so I can 

  swap in real Amazon Associate links later.

GOAL OF THE PAGE

This is being built as a portfolio/pitch piece to show Sophia Stewart's team 

promotional capability — it needs to look professional enough to send directly 

as a link, not like a placeholder page.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://truth-behind-the-code.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4822dcb9-33d2-4b8c-ab00-e3800012f2e0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
