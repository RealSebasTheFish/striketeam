# Strike Team Archives

A small React + Vite site for the Strike Team hidden site

### Quick Start

1) Clone and install dependencies

```sh
git clone https://github.com/ben-petlach/strike-team-archives.git
cd strike-team-archives
npm install
```

2) Run the app (from the project root)

```sh
npm run dev
```

### Scripts

- dev: Start the local dev server
- build: Production build
- build:hostinger: Production build for Hostinger
- preview: Preview the production build locally

```sh
npm run dev
npm run build
npm run build:hostinger
npm run preview
npm run lint
```

### Where to make changes

- Events: Update event images under `src/assets/events/` and metadata in `src/data/events.json`. See the [Events Guide](./docs/EVENTS_GUIDE.md).
- Lore: Add/edit entries in `src/data/lore.json` and optional quick links in `src/pages/Lore.tsx`. See the [Lore Guide](./docs/LORE_GUIDE.md).
- UI/Pages: Most UI lives in `src/pages/` and components in `src/components/`.
- Assets: Images and static assets are in `src/assets/`.
- Utilities/Hooks: Helpers in `src/lib/` and `src/hooks/`.

### Docs

- [Events Guide](./docs/EVENTS_GUIDE.md)
- [Lore Guide](./docs/LORE_GUIDE.md)
- [Deployment (Hostinger)](./docs/DEPLOYMENT.md)

### Tech Stack

- React 18, TypeScript, Vite
- Tailwind CSS, shadcn/ui
- React Router (HashRouter)
