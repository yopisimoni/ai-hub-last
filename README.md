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

**Phase 1: GitHub MVP / pre-deployment — BUILD VERIFIED — PAUSED FOR LATER**

- [x] Reposition away from a generic AI tools directory
- [x] Redesign homepage around user goals
- [x] Preserve the AI tool directory under `/tools`
- [x] Create reusable workflow data model
- [x] Create reusable workflow detail route
- [x] Create dedicated workflow library
- [x] Cover all six initial user-goal categories
- [x] Add per-workflow metadata
- [x] Connect featured homepage cards directly to workflow pages
- [x] Add analytics events
- [ ] Add email capture / lead magnet
- [ ] Add affiliate disclosure and link management
- [ ] Add structured data / schema
- [x] Run production build and typecheck in GitHub Actions
- [ ] Complete full browser/mobile route QA
- [ ] Validate user behavior before production deployment
- [ ] Connect `next.myfastoffer4u.com`

## Pause / resume point

Paused on **2026-09-15** after analytics instrumentation was added and verified.

When work resumes, continue with:

1. email capture / lead magnet;
2. conversion-path QA;
3. structured data and affiliate disclosure;
4. browser/mobile route QA;
5. NEXT-specific GA4 property setup;
6. production deployment preparation;
7. connect `next.myfastoffer4u.com` only after the launch gates pass.

## Analytics

Analytics is intentionally project-scoped and does not reuse an ID from another product.

Set this environment variable for NEXT when its own GA4 property is ready:

```text
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

The current MVP records:

- `navigation_click`
- `cta_click`
- `workflow_library_view`
- `workflow_open`
- `workflow_view`

If the environment variable is absent, GA4 is not loaded.

## Verification

The analytics changes were verified through GitHub Actions using the existing **NEXT MVP Verify** workflow:

- dependency install: passed;
- TypeScript typecheck: passed;
- production build: passed;
- verification PR #3 merged.

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
