# AI Hub — AI Problem Solver

AI Hub is a problem-first AI workflow platform being prepared for the future `next.myfastoffer4u.com` subdomain.

## Core idea

Instead of asking visitors to browse hundreds of AI tools, AI Hub starts with a simpler question:

> **What are you trying to accomplish?**

The product then shows a practical workflow, the best-fit AI tools, alternatives, a completion checklist, and next actions.

## Canonical repository

This repository — `yopisimoni/ai-hub-last` — is the source of truth for the NEXT project.

Older AI Hub repositories are historical prototypes and should not be used for current implementation work.

## Current workflow library

The MVP now covers six problem areas:

- Create content
- Grow social media
- Build a website
- Run a small business
- Study and learn
- Make money online

The workflow layer is intentionally independent from the legacy AI-tool database so the core product stays usable while tool-directory infrastructure is being cleaned up.

## Product model

Traffic → useful workflow pages → email capture → trusted tool recommendations → affiliate revenue and digital products.

The priority is usefulness first. Affiliate links and paid products should only appear where they genuinely fit the workflow and should always be disclosed.

## Current phase

**Phase 1: GitHub MVP / pre-deployment**

- [x] Reposition away from a generic AI tools directory
- [x] Redesign homepage around user goals
- [x] Preserve the AI tool directory under `/tools`
- [x] Create reusable workflow data model
- [x] Create reusable workflow detail route
- [x] Create dedicated workflow library
- [x] Cover all six initial user-goal categories
- [x] Add per-workflow metadata
- [x] Connect featured homepage cards directly to workflow pages
- [ ] Add analytics events
- [ ] Add email capture / lead magnet
- [ ] Add affiliate disclosure and link management
- [ ] Add structured data / schema
- [ ] Run production build and full route QA
- [ ] Validate user behavior before production deployment
- [ ] Connect `next.myfastoffer4u.com`

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- React
- Existing Firebase/Genkit code retained for review before deciding what remains in the production MVP

## Deployment rule

Do **not** point `next.myfastoffer4u.com` at this application until the MVP passes build, route, content, analytics, and conversion QA.

---

Built and maintained in `yopisimoni/ai-hub-last`.
