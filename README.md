# tyler-irving.github.io

Personal portfolio site for Tyler Irving — Full-Stack Software Engineer (currently a Senior Consultant doing U.S. Navy RPA work at Baker Tilly). Built with Astro, deployed to GitHub Pages via Actions.

Live: [tyler-irving.github.io](https://tyler-irving.github.io)

## Stack

- **Astro 4** (static output)
- **GSAP 3** + ScrollTrigger (boot sequence, scroll-driven nav, scroll reveals, expandable cards)
- **Lenis** (smooth scroll, wired into the GSAP ticker)
- **Archivo** (display) + **Space Grotesk** (body) + **JetBrains Mono** (mono) — Google Fonts

## Design

Editorial / off-white aesthetic (Off-White × Apple × Nike direction). Light by default with a full dark mode; all design tokens live as CSS custom properties in `src/styles/global.css`.

- Background `#FAFAFA` light / `#0A0A0A` dark, accent `#2563EB`
- Sharp edges everywhere (`border-radius: 0`), monospace section numbers, a diagonal-stripe signature rule
- Dark mode toggled from the nav and persisted in `localStorage`; an inline script in `Layout.astro` sets the theme pre-paint to avoid a flash
- Respects `prefers-reduced-motion` (collapses the GSAP reveals)

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
    Nav.astro               sticky nav; hides on scroll-down / shows on scroll-up (GSAP),
                            active-section tracking (IntersectionObserver), dark-mode toggle
    TerminalBoot.astro      full-screen boot overlay; staggers "IRVING" in, then dispatches
                            `bootComplete` (skips on return visits via sessionStorage)
    Hero.astro              above-the-fold; also owns Lenis + scroll-reveal setup
    Projects.astro          "Selected Work" grid + project data
    ProjectCard.astro       expandable case-study card (the numbers, write-up, key decisions);
                            single-open accordion via GSAP height animation
    WorkExperience.astro    work history + JSON-LD (OrganizationRole ItemList)
    Skills.astro            "Capabilities" cards
    Education.astro         education list
    EtherealBackground.astro  animated SVG-filter blob (present but not currently mounted)
  layouts/
    Layout.astro            document shell: SEO meta, OG/Twitter, fonts, dark-mode init,
                            JSON-LD (Person + portfolio ItemList)
  pages/
    index.astro             single-page site (assembles all sections in order)
    404.astro               custom 404
  styles/
    global.css              design tokens (light/dark), resets, buttons, section + badge styles
public/
  favicon.svg               site favicon (TI monogram)
  images/og-image.png       social share image
  assets/tyler-irving.jpg   profile photo
  sitemap.xml, robots.txt   SEO
```
