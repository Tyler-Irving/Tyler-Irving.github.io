# tyler-irving.github.io

Personal portfolio site for Tyler Irving — Senior RPA Developer & Automation Consultant. Built with Astro, deployed to GitHub Pages via Actions.

Live: [tyler-irving.github.io](https://tyler-irving.github.io)

## Stack

- Astro 4 (static output)
- GSAP 3 (animations, scroll-driven nav, boot sequence)
- Lenis (smooth scroll)
- Clash Display (Fontshare), Inter + JetBrains Mono (Google Fonts)

## Design

HUD/brutalist aesthetic — `#080808` background, `#0ea5e9` cyan accent, sharp edges, corner bracket decorations, monospace section numbers. No custom cursor, no rounded corners.

## Dev

```
npm install
npm run dev
```

## Build

```
npm run build
npm run preview
```

Output goes to `dist/`. The GitHub Actions workflow handles deployment on push to `master`.

## Deployment

GitHub Pages serves from the Actions workflow in `.github/workflows/deploy.yml`. In repo settings, Pages source must be set to **GitHub Actions**.

## Structure

```
src/
  components/
    Nav.astro               HUD-style nav, hides/shows on scroll via GSAP
    TerminalBoot.astro      full-screen boot sequence overlay (skips on return visits)
    Hero.astro              above-the-fold section
    Projects.astro          project grid
    ProjectCard.astro       expandable case study card with shimmer buttons
    WorkExperience.astro    work history with JSON-LD structured data
    Skills.astro            skills section
    EtherealBackground.astro  animated SVG filter background blob
  layouts/
    Layout.astro            base layout with full SEO meta, OG tags, JSON-LD schemas
  pages/
    index.astro             main page
    404.astro               custom 404
  styles/
    global.css              CSS custom properties, shimmer button system, global resets
public/
  favicon.svg               site favicon
  sitemap.xml               XML sitemap for SEO
  images/                   project screenshots
  assets/                   profile photo
```
