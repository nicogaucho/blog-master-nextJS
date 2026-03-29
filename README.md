# The Ocean Affairs Blog

A full‑stack blog application built with **Next.js** (App Router) and **TypeScript**.
This repository demonstrates a modern web stack and includes:

- **Frontend**
  - Next.js (App Router)
  - React (client & server components)
  - Tailwind CSS (with `@tailwindcss/postcss`, `tw-animate-css`)
  - Radix‑UI primitives (`@radix-ui/react-navigation-menu`, `@radix-ui/react-slot`, …)
  - `class-variance-authority` (cva) for UI variants
  - Lucide icons
  - Custom UI component library (`button`, `card`, `badge`, `navigation-menu`, etc.)
  - Markdown editor/viewer (`@uiw/react-md-editor`, `react-markdown`)
  - Stackframe authentication (`@stackframe/stack`)
  - Vercel Blob for file uploads
  - Google fonts via `next/font` (Geist & Geist Mono)

- **Backend / Server**
  - Next.js server actions
  - Drizzle ORM (PostgreSQL) with Neon serverless (`@neondatabase/serverless`)
  - Schema defined in `src/db/schema.ts`
  - Seed data using `drizzle-seed`
  - Redis caching via Upstash (`@upstash/redis`)
  - AI summarization with `ai` (OpenAI `gpt-5-nano` model)
  - Email notifications via Resend
  - Authorization helpers (`src/db/authz.ts`)
  - Stackframe server app for user/session management

- **Miscellaneous**
  - PostCSS configuration
  - ESLint/Biome support (workspace hints)
  - Vercel configuration for remote image patterns
  - Typescript types in `src/types/api.ts`
  - Environment variables in `.env`