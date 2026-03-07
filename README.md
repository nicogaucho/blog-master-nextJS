# WikiFlow / The Ocean Affairs

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

## Local development

1. **Clone the repo**

   ```bash
   git clone <repo-url> fullstack-next-app-01
   cd fullstack-next-app-01This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
