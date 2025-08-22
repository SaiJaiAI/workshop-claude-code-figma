# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` - Runs Next.js development server with Turbopack
- **Build for production**: `npm run build` - Builds the application with Turbopack
- **Start production server**: `npm start` - Starts the production server
- **Lint code**: `npm run lint` - Runs ESLint for code quality checks

## Project Architecture

This is a **Next.js 15.5.0** project using the **App Router** architecture with the following key characteristics:

### Tech Stack
- **Framework**: Next.js 15.5.0 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: Geist Sans and Geist Mono from Google Fonts
- **Build Tool**: Turbopack (enabled by default in dev and build scripts)

### Directory Structure
- `src/app/` - App Router pages and layouts
  - `layout.tsx` - Root layout with font configuration and metadata
  - `page.tsx` - Homepage component
  - `globals.css` - Global styles with Tailwind imports and CSS variables
- `docs/` - Static assets (SVG icons)

### Key Configuration
- **TypeScript**: Strict mode, ES2017 target, path aliases (`@/*` → `src/*`)
- **ESLint**: Next.js core web vitals and TypeScript rules
- **Styling**: Tailwind CSS v4 with custom CSS variables for theming
- **Dark Mode**: Automatic dark mode support via CSS variables and `prefers-color-scheme`

### Development Notes
- The project uses Turbopack for faster builds and development
- Font optimization is handled automatically via `next/font/google`
- Path aliases are configured for clean imports (`@/components`, `@/utils`, etc.)
- Dark/light theme switching is implemented via CSS variables
- Thai typography optimized with Sarabun font family
- Configured for GitHub Pages deployment at `saijaiai.github.io/workshop-claude-code-figma`

### Deployment
- **Build Command**: `npm run build` - Creates static export in `/out` directory
- **Deploy**: Automated via GitHub Actions workflow (`.github/workflows/deploy.yml`)
- **Target URL**: `saijaiai.github.io/workshop-claude-code-figma`
- Static export configuration enables GitHub Pages hosting