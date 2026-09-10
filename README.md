# Aditya Kumar Portfolio

A polished, responsive personal portfolio for Aditya Kumar, built with React, TypeScript, and Vite.

## Highlights

- Reference-inspired editorial portfolio design
- Responsive layout for desktop, tablet, and mobile
- Sticky navigation with smooth scrolling
- Hero, About, Experience, Skills, Projects, and Contact sections
- Subtle reveal animations and hover interactions
- Reduced-motion support
- SEO and Open Graph metadata
- Local professional portrait asset

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- Lucide React

## Getting Started

Requirements:

- Node.js 18+
- npm

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the portfolio whenever changes are pushed to `main`. It can also be started manually from the GitHub Actions tab.

In the repository settings, set **Pages** > **Build and deployment** > **Source** to **GitHub Actions**. The workflow configures the Vite base path from the repository name, so this project is served correctly at `https://adityaxsahni.github.io/my-portfolio/`.

## Project Structure

```text
src/
  App.tsx                  Main portfolio page and content data
  main.tsx                 React entry point
  styles.css               Main visual system
  reference-overrides.css  Reference-inspired visual overrides
public/
  profile.png              Profile portrait
```

## Repository

[github.com/Adityaxsahni/my-portfolio](https://github.com/Adityaxsahni/my-portfolio)
