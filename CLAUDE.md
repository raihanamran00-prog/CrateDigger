# CLAUDE.md

Guidance for Claude Code (and other AI assistants) working in this repository.

## What this project is

CrateDigger is a website for electronic music lovers to discover and explore deep
crates of vinyl records, with links out to Discogs. See `README.md` for the
product pitch and roadmap features.

## Current state — read this first

**The app builds and runs, but it is still a single-screen scaffold.** Every
tracked file in the repo is listed below; there is nothing else.

```
CrateDigger/
├── CLAUDE.md        # This file
├── README.md        # Product overview + setup instructions
├── package.json     # React 18 + Vite; dev / build / preview scripts
├── vite.config.js   # @vitejs/plugin-react, dev server pinned to port 3000
├── .gitignore       # node_modules, dist, env files, logs
├── index.html       # Vite entry HTML; mounts #root, loads /src/main.jsx
├── public/
│   └── favicon.svg  # Vinyl record mark in the app's accent color
└── src/
    ├── main.jsx     # React 18 root render (React.StrictMode)
    ├── App.jsx      # The entire UI: header, search form, crates grid, footer
    └── App.css      # All styling (CSS custom properties, dark theme)
```

Commands (verified working):

```bash
npm install     # install dependencies
npm run dev     # dev server on http://localhost:3000
npm run build   # production build into dist/
npm run preview # serve the built output
```

What is still **missing**:

- No `.github/workflows/` — the README's claim that "this project is
  automatically deployed on every push to `main` via GitHub Actions" is not yet
  true.
- No `src/components/`, `src/pages/`, `src/styles/`, or `src/utils/` — the
  README's "Project Structure" section describes the intended layout, not the
  current one.
- No tests, linter, formatter, or type checking of any kind.
- No real functionality: search is a stub and the crates grid is always empty.
  See "Application architecture" below.

Treat the README's structure section as a target to grow into. When you add the
missing tooling, update both this file and the README so they stop disagreeing.

The README also lists "Built with Lovable" under Tech Stack, but the committed
source is hand-written plain React — there are no Lovable-generated files,
shadcn/ui components, Tailwind classes, or TypeScript in the tree.

## Build setup

React 18 with Vite 8, plain JavaScript, ES modules (`"type": "module"`).

The README promises the dev server on `http://localhost:3000` while Vite
defaults to `5173`; this is resolved in favor of the README by pinning
`server.port` to 3000 in `vite.config.js`. If you change that, change the README
too.

Node 18+ is the stated prerequisite (the sandbox currently has Node 22, npm 10).

Keep `npm audit` clean. Vite is intentionally on 8.x rather than 5.x because the
5.x line pulled in an esbuild advisory (GHSA-67mh-4wv8-2f99) through its
dependency chain.

## Code conventions

Follow what the existing three source files do:

- **JavaScript, not TypeScript.** `.jsx` extension for files containing JSX.
- **No semicolons.** Single quotes for strings. 2-space indentation.
- **Function components with hooks** (`useState`), declared as
  `function App() { ... }` with a `export default App` at the bottom.
- **Explicit `import React from 'react'`** at the top of every JSX file, even
  though the modern JSX transform makes it optional — stay consistent.
- **Imports include the file extension** for local modules (`./App.jsx`).
- **Plain CSS, no CSS-in-JS and no utility framework.** Class names are
  lowercase kebab-case (`search-input`, `crate-card`, `empty-state`) and are
  applied via `className`.
- Component CSS lives in a sibling file imported by the component
  (`App.jsx` imports `./App.css`).

### Styling

`App.css` defines the whole visual system at `:root` as CSS custom properties.
Use these variables rather than hard-coding colors:

| Variable | Value | Role |
| --- | --- | --- |
| `--primary-color` | `#1a1a2e` | Page background (deep navy) |
| `--secondary-color` | `#16213e` | Cards, inputs, header/footer surfaces |
| `--accent-color` | `#e94560` | Headings, buttons, links, focus/hover borders |
| `--text-color` | `#f5f5f5` | Body text |
| `--border-color` | `#333` | Default borders |
| `--success-color` | `#2ecc71` | Declared, not yet used |

Two conventions worth preserving: the accent hover state is the hard-coded
`#d63447` (a darker variant of the accent), and interactive elements share a
consistent `transform: translateY(...)` lift plus an accent-tinted box-shadow on
hover with `transition: all 0.3s ease`. The file is organized top-to-bottom as
variables → reset → body → layout sections (header, main, search, grid, footer)
→ a single `@media (max-width: 768px)` block at the end. Add new responsive
rules to that existing block rather than creating new breakpoints.

The app is **dark-theme only** — there is no light mode and no
`prefers-color-scheme` handling.

## Application architecture

`App.jsx` is currently the whole application. It holds two pieces of local
state:

- `searchQuery` — controlled value of the search input.
- `crates` — array rendered into `.crates-grid`; empty, so the `.empty-state`
  branch always renders today. Each crate is expected to have `id`, `title`, and
  `description` (that's the shape the `.map()` already reads).

`handleSearch` calls `preventDefault()` and then only `console.log`s — it is
marked `// TODO: Implement search functionality`. There is no router, no data
fetching, no state management library, no API client, and no Discogs
integration yet. When adding real search, keep the crate object shape above or
update the grid rendering alongside it.

Extract components out of `App.jsx` into `src/components/` once it grows past a
single screen — that is the layout the README already anticipates.

## Git workflow

- Default branch is `main`. Work on feature branches
  (`feature/<short-description>` per the README's contributing section) and open
  a pull request; do not commit directly to `main`.
- Commit messages in this repo's history are short imperative sentences that
  describe the change and its purpose, e.g. "Add CSS styling for the app with a
  dark vinyl-inspired theme", "Add React entry point". Match that style.
- Push with `git push -u origin <branch-name>`.
- Only open a pull request when the user explicitly asks for one.

## Practical notes for assistants

- There is no test suite and no lint command. The closest thing to an automated
  check is `npm run build` — run it before committing; it catches syntax errors
  and broken imports.
- You can verify a UI change renders by running `npm run dev`. Be precise about
  what you actually checked: "the build succeeds" and "the page looks right" are
  different claims, and only the second requires actually viewing it.
- Keep `README.md` and this file in sync with reality as the project fills in.
  The largest hazard in this repo has been documentation describing files that
  do not exist.
