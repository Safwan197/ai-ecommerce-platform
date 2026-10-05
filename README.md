# AI Commerce Platform

B2C + B2B e-commerce platform (foundation only).

- **Frontend:** Next.js + React + TypeScript + Tailwind CSS (`apps/web`, port 3000)
- **Backend:** Node.js + Express + TypeScript (`apps/api`, port 4000)
- **Shared:** minimal shared types (`packages/shared`)
- **Docs:** `docs/`

## Setup

```bash
npm install
```

## Development

```bash
npm run dev        # starts API (4000) and web (3000) together
npm run dev:api    # API only
npm run dev:web    # Web only
```

Then open http://localhost:3000 — the page shows whether the API is connected.

## Other commands

```bash
npm run build      # build both apps
npm run start      # run both apps in production mode (after build)
npm run typecheck  # TypeScript check for all workspaces
```

## Environment variables

Copy the example files and adjust values if needed:

- `apps/api/.env.example` → `apps/api/.env` (API_PORT, CORS_ORIGIN)
- `apps/web/.env.example` → `apps/web/.env.local` (NEXT_PUBLIC_API_URL)

Defaults work out of the box for local development.

## Test the health endpoint

```bash
curl http://localhost:4000/api/health
```

Expected response:

```json
{ "status": "ok", "message": "API is healthy", "timestamp": "..." }
```

See `docs/project-structure.md` for the full folder layout.
