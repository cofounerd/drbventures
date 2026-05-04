# Choosing Joy landing page

Next.js landing page for the book launch, built with Tailwind, Sanity, ConvertKit, and Vercel.

## Setup

1. Copy `.env.example` to `.env.local`.
2. Fill in the Sanity and ConvertKit values.
3. Install dependencies and run `npm run dev`.

## Content model

- `sanity/schemaTypes/landingPage.ts` defines the editable landing page singleton.
- `lib/sanity.ts` falls back to local defaults if Sanity is not configured yet.

## Form flow

- The newsletter form posts to `app/api/subscribe/route.ts`.
- That route relays to ConvertKit when the API key and form ID are available.

## Deployment

- Push to GitHub and deploy on Vercel.
- Add the same environment variables in Vercel project settings.
