# Hey Haiku

A social platform for creating and sharing haikus — rebuilt from the ground up.

## About

Hey Haiku was originally created as a final project for the **Ironhack Web Development Bootcamp**. It was a place where people could write haikus following the traditional 5-7-5 syllable structure, share them with a community, and discover poetry from other users.

This is the **2026 rebuild** — same spirit, modern stack.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router, Server Components, Server Actions) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Database | [Turso](https://turso.tech/) (cloud SQLite powered by libSQL) |
| ORM | [Drizzle ORM](https://orm.drizzle.team/) |
| Auth | [Better Auth](https://www.better-auth.com/) |
| Deployment | [Vercel](https://vercel.com/) |

## Features

- **Create haikus** with real-time syllable validation (5-7-5)
- **Community feed** — browse all haikus from every user
- **Personal collection** — view and manage your own haikus
- **Inspiration** — writing prompts and haikus from the masters (Bashō, Buson, Issa, Shiki)
- **Random poem** — a random poem fetched from PoetryDB on every visit
- **About haikus** — the history of the form, from the Tokugawa period to today

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Fill in TURSO_DATABASE_URL, TURSO_AUTH_TOKEN, BETTER_AUTH_SECRET, BETTER_AUTH_URL

# Push database schema
npx drizzle-kit push

# Seed demo data (optional, requires dev server running)
npm run dev &
node seed.mjs
node seed-more.mjs

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Original Version

The original 2019 version (React class components + Express + MongoDB) is preserved at [HeyHaiku-deprecated](https://github.com/Juhume/HeyHaiku-deprecated).

---

*Hey Haiku, a project made with ♥ by [@juhume](https://github.com/Juhume)*
