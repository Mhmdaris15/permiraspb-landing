<div align="center">

# Permira Saint Petersburg

**ПЕРМИРА** · A scroll-driven digital exhibition for the Saint Petersburg chapter of
*Perhimpunan Mahasiswa Indonesia di Rusia* — under **Kabinet Nevaswara, 2025—2026**,
affiliated with **KBRI Moskow**.

Indonesian warmth, carried across the Neva.

`59.9311° N · 30.3609° E`

[Live → permiraspb.org](https://permiraspb.org) · [Repository](https://github.com/Mhmdaris15/permiraspb-landing)

</div>

---

## About

This is not a generic organisation page — it is an editorial, catalogue-like
experience that bridges Indonesian warmth with Saint Petersburg's cold urban
atmosphere. Eleven thousand kilometres from the equator, told in three alphabets.

The site was designed in [Claude Design](https://claude.ai/design) as an HTML/CSS/JS
prototype, then recreated pixel-perfectly as a React component architecture.

## Tech stack

- **React 19** + **React Router** + **TypeScript**
- **Vite 8** (build tooling)
- **Framer Motion** — lightbox transitions
- **sharp** — image optimisation pipeline (dev only)
- **No CSS framework** — the design system is hand-authored in `src/index.css`
- **Fonts** — Instrument Serif · Bodoni Moda · Inter Tight · JetBrains Mono

## The page

| # | Section | Notes |
|---|---------|-------|
| — | Chrome | Fixed nav, corner ticks, coordinate rails, live Moscow clock |
| 01 | Manifesto | Editorial statement, trilingual code-switching |
| 02 | Chapters | The four departments — PSDMK · Minat & Bakat · Kemahasiswaan · Kominfo |
| — | Bridge | Opposing marquees: *khatulistiwa → север* |
| 03 | Dispatches | Five flagship programs — Summer Camp · AMARTI · PERMUN · 17 Agustus · Kantin Permira |
| 04 | Documentation | Real event galleries with a click-to-open lightbox |
| 05 | Archive | Cabinet calendar, Oct '25 → Oct '26 |
| 06 | Stats | Animated counters (census figures) |
| 07 | Voices | Testimonials from the diaspora |
| 08 | Structure | The full Nevaswara cabinet — 21 member portraits |
| — | Join + Footer | CTA, KBRI Moskow affiliation, socials |

**Atmosphere & interaction:** drifting snow, film grain, vignette, a custom
blend-mode cursor, scroll reveals (`IntersectionObserver`), hero parallax, and a
keyboard-navigable lightbox.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

```bash
npm run build      # type-check + production build → dist/
npm run preview    # serve the built output locally
```

## Project structure

```
src/
├── components/
│   ├── atmosphere/   # snow · grain · vignette · custom cursor
│   ├── layout/       # Chrome (header/ticks/rails) · Footer
│   └── sections/     # Hero · Manifesto · Chapters · Bridge · Dispatches
│                     # · Documentation · Lightbox · Archive · Stats
│                     # · Voices · Structure · Join
├── hooks/            # useReveal · useClock · useHeroParallax
├── assets/
│   ├── permira-members/    # cabinet portraits
│   └── permira-programs/    # event photos
│       └── web/             # optimised WebP (bundled)
├── pages/Home.tsx
├── index.css         # the full design system
└── App.tsx
```

## Images

Event photos are large originals; an optimisation pass converts the usable ones
(JPG) to web-friendly WebP (max 1600px, q80) under `permira-programs/web/`, which
are auto-discovered via `import.meta.glob`. After adding new photos, ensure
`sharp` is installed (`npm i -D sharp`), re-run the optimiser, and commit the
generated `web/*.webp`.

> HEIC / DNG sources are not browser-renderable and are excluded until converted to JPG.

## Deployment

Containerised and deployed on **Coolify** via Docker Compose, with automatic
Let's Encrypt SSL on `permiraspb.org`.

```bash
docker build -t permiraspb .
docker run --rm -p 8099:80 permiraspb   # http://localhost:8099
```

See **[DEPLOY.md](./DEPLOY.md)** for the full Coolify + DNS walkthrough.

## Content

Copy is grounded in the organisation's own records (notulen rapat, AD/ART,
cabinet blueprint). Proper nouns — program names, the cabinet name, department
names — are kept in their original form. The four "Voices" quotes are
illustrative.

## Credits

Designed & built by **Muhammad Aris Septanugroho**
· [Portfolio](https://aris-septanugroho-portfolio.vercel.app/)
· [LinkedIn](https://www.linkedin.com/in/muhammad-aris-septanugroho/)
· [GitHub](https://github.com/Mhmdaris15)

**Permira Saint Petersburg**
· [Instagram](https://www.instagram.com/permiraspb/)
· [Telegram](https://t.me/permiraspb)
· [VK](https://vk.com/permiraspb)

<div align="center">

*Designed for Kabinet Nevaswara, 2025—2026 · under the auspices of KBRI Moskow*

**Sampai jumpa в Петербурге.**

</div>
