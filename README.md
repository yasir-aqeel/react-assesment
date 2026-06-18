# RemoteRecruit Landing Page

A responsive landing page for **RemoteRecruit**, built from the provided Figma design references. The page highlights global job search, fee-free membership, custom profiles, and an FAQ section.

## Live Demo

Deploy this project to Vercel, Netlify, or a similar host and add your live URL here.

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 8](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- Intersection Observer for scroll reveal animations

## Features

- Fully responsive layout (mobile, tablet, desktop)
- Reusable components for header, footer, badges, buttons, and sections
- Scroll-triggered fade/slide animations
- Hover and transition states on interactive elements
- Lazy-loaded images with loading placeholders
- Scroll-to-top button
- Accessible landmarks, labels, and semantic HTML

## Project Setup

### Prerequisites

- Node.js 18+
- npm 9+

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repo in [Vercel](https://vercel.com/).
3. Use the default settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Deploy and copy the generated URL into this README.

## Project Structure

```text
src/
  components/
    layout/       Header, Footer, ScrollToTop
    sections/     Hero, Difference, FeeFree, Showcase, SignUpAd, FAQ
    ui/           Badge, Button, LazyImage, SectionReveal
  data/           FAQ mock content
  hooks/          Scroll reveal and scroll-to-top logic
  assets/images/  Exported design assets from Figma
```

## Design Assets

Design reference images were taken from the `picturs` folder and copied into `src/assets/images/` for use in the build.

## Known Issues / Limitations

- Complex UI mockups (hero dashboard, profile card, sign-up ad, footer) are rendered from exported PNG assets rather than fully rebuilt HTML/CSS for pixel-perfect fidelity.
- FAQ answers use placeholder lorem-style copy from the design mock.
- Footer and sign-up sections rely on raster images, which may be less flexible on very small screens than fully vector/HTML layouts.
- Figma MCP access was unavailable during development, so implementation follows the provided screenshot assets.
- Live deployment URL must be added after hosting the project.

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Production build         |
| `npm run preview` | Preview production build |
| `npm run lint`  | Run ESLint               |
