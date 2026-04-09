# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Frontend**: React + Vite + Tailwind CSS + Framer Motion
- **UI**: shadcn/ui components + Lucide icons

## Artifacts

### The Red Hen Café & Bakery (`artifacts/red-hen-cafe`)
- Presentation-first single-page website for a local café in Plain City, Ohio
- No backend — purely frontend with Framer Motion animations
- Features: Hero with parallax, About, Menu highlights, Gallery, Reviews, Location with Google Maps embed, Newsletter/Footer
- SEO optimized with meta tags, Open Graph, and JSON-LD LocalBusiness schema
- 6 AI-generated photorealistic images (latte, cinnamon rolls, quiche, interior, display case, storefront)
- Typography: Playfair Display (headings) + Inter (body)
- Color palette: warm cream, beige, muted earthy red

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/red-hen-cafe run dev` — run café website locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
