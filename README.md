# tyler-irving.github.io

Personal portfolio site. Built with Astro, deployed to GitHub Pages via Actions.

## Stack

- Astro 4 (static output)
- GSAP 3 + ScrollTrigger (animations)
- Lenis (smooth scroll)
- Clash Display (Fontshare), Inter + JetBrains Mono (Google Fonts)

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
    Cursor.astro        custom cursor (dot + trailing ring)
    Nav.astro           floating pill nav
    TerminalBoot.astro  boot sequence overlay
    Hero.astro          above-the-fold section
    Projects.astro      project grid
    ProjectCard.astro   expandable case study card
    WorkExperience.astro
    Skills.astro
  layouts/
    Layout.astro
  pages/
    index.astro
  styles/
    global.css
public/
  images/               project screenshots
  assets/               profile photo
```
