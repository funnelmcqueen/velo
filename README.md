# FunnelMcQueen Marketing Site

Single-page, scroll-based marketing site for FunnelMcQueen (HVAC website design,
ads, and lead follow-up). Built with Next.js App Router, TypeScript, Tailwind
CSS, and Framer Motion.

## Getting started

```bash
npm install
cp .env.local.example .env.local   # then set your real Calendly URL
npm run dev
```

Open http://localhost:3000.

## Calendly

Set `NEXT_PUBLIC_CALENDLY_URL` in `.env.local` to your real scheduling link.
Every "Book a Free Call" button links to it, and the Final CTA section embeds
it inline via iframe.

## Logo

`components/Logo.tsx` is a placeholder text wordmark. Swap it for the real
logo file once it's ready (Canva, per the brief).
