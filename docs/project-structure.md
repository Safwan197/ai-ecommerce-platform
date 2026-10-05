# Project Structure

npm workspaces monorepo.

```
AI Commerce Platform/
├── apps/
│   ├── api/                 # Express + TypeScript backend (port 4000)
│   │   ├── src/
│   │   │   ├── index.ts     # server entry, reads env, starts listening
│   │   │   ├── app.ts       # Express app: CORS, JSON parsing, routes
│   │   │   └── routes/
│   │   │       └── health.ts  # GET /api/health
│   │   ├── .env.example
│   │   ├── tsconfig.json
│   │   └── package.json
│   └── web/                 # Next.js + React + Tailwind (port 3000)
│       ├── src/
│       │   ├── app/         # App Router: layout.tsx, page.tsx, globals.css
│       │   ├── components/  # ApiHealthCheck.tsx (API connection test)
│       │   └── lib/         # api.ts (fetch wrapper)
│       ├── .env.example
│       ├── next.config.ts
│       ├── postcss.config.mjs
│       ├── tsconfig.json
│       └── package.json
├── packages/
│   └── shared/              # shared types only (currently: HealthResponse)
│       ├── index.d.ts
│       └── package.json
├── docs/                    # documentation
├── package.json             # workspace root + dev scripts
├── tsconfig.base.json       # common compiler options
├── .gitignore
└── README.md
```

## How frontend talks to backend

1. Component calls `apiFetch<T>("/api/health")` from `apps/web/src/lib/api.ts`.
2. `apiFetch` prefixes `NEXT_PUBLIC_API_URL` (default `http://localhost:4000`).
3. Express receives the request, CORS allows origin `http://localhost:3000`.
4. Route handler in `apps/api/src/routes/health.ts` returns JSON.
5. Response type is shared via `packages/shared` (`HealthResponse`).

## Conventions

- All backend routes live under `/api/*`.
- `packages/shared` stays minimal: types only, no runtime code yet.
- When `packages/shared` gains runtime code later, add a build step for it.
