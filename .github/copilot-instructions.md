## Purpose
Provide concise, repository-specific guidance for AI coding agents working on this Next.js app.

## Quick Overview
- Framework: Next.js (App Router) — app/ directory contains route folders using `page.tsx` and `layout.tsx`.
- Language: TypeScript. See `tsconfig.json` for compiler settings.

## Key Files
- Root layout and font setup: app/layout.tsx
- Main entry: app/page.tsx
- Auth area: app/auth/page.tsx and styles at app/auth/auth.module.css
- Login area: app/login/login.tsx and app/login/login.module.css
- Global styles: app/globals.css and app/font.css
- Build & scripts: package.json (`dev`, `build`, `start`, `lint`)

## How to run
Use the npm scripts defined in `package.json`:

```bash
npm run dev    # local dev server (next dev)
npm run build  # production build
npm run start  # run built app
npm run lint   # run eslint
```

## Architecture notes (what to expect)
- App Router routing: each folder under `app/` is a route. Components and styles are colocated (e.g. `app/auth/*`).
- Styling: mixture of CSS Modules (`*.module.css`) for component scope and global styles in `globals.css`.
- Fonts: `next/font` (see `app/layout.tsx`) — prefer using `next/font` for performance.
- Icons: `lucide-react` is included as the icon library dependency.
- Dev dependencies include `tailwindcss`, `postcss`, and `autoprefixer` — confirm whether Tailwind is configured before introducing Tailwind-specific edits.

## Project-specific conventions
- Route folders contain `page.tsx` for the route and a sibling `*.module.css` when styles are local.
- Keep global CSS limited to `globals.css` and `font.css`; prefer CSS Modules for route-local styles.
- Use `app/layout.tsx` for persistent providers (fonts, global wrappers).

## Common tasks & patterns
- To add a new route: create `app/<name>/page.tsx` and optional `app/<name>/<name>.module.css`.
- To change layout-wide concerns (fonts, wrappers, metadata): edit `app/layout.tsx`.
- To update scripts or CI behavior: edit `package.json` scripts and add config files at repo root.

## When to ask the human
- Unclear design intent for a route or component (ask which UX to implement).
- If Tailwind or PostCSS changes are required — confirm whether the team intends to use Tailwind (devDependencies exist).
- Before adding global CSS or changing `app/layout.tsx` structure.

## References
- Homepage: app/page.tsx
- Layout: app/layout.tsx
- Auth example: app/auth/page.tsx and app/auth/auth.module.css
- Scripts: package.json

If anything here looks incomplete or you want more examples (component-level patterns or preferred commit message style), tell me what to expand.
