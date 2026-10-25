# yubinex-web

A personal website disguised as a laboratory archive. Each section is a separate
lab file, inspired by the amber terminals and personnel dossiers of my
[GitHub profile](https://github.com/yubinex).

## The archive

A home for my profile, projects, and interests. Navigate between individual lab
files instead of scrolling through one long page.

**Status:** early development. The shared layout is in place; file navigation,
profile content, and the visual design are still to come.

## Stack

- React and JavaScript
- Vite
- Plain CSS
- pnpm
- Oxlint for linting

## Development

Use Node.js 24 LTS and pnpm 10.28.1 (the versions used by CI).

```sh
pnpm install
pnpm dev
```

## GitHub profile data

Public profile data is stored in `src/data/github.json`. Refresh it manually with:

```sh
pnpm update:github
```

The Node.js script works without credentials. An optional `GITHUB_TOKEN`
environment variable can increase API limits; never put tokens in frontend code
or use a `VITE_` prefix for them. Only selected public profile fields are saved.
The avatar is stored as a URL, not downloaded as an image.

The snapshot is intended to be committed, so development and builds do not need
API access. A failed API request leaves the existing snapshot unchanged. Updates
are not automatic yet.

## Checks

```sh
pnpm lint
pnpm build
```

Use `pnpm preview` to preview the production build locally.

GitHub Actions runs both checks on pushes and pull requests. Deployment is not
configured yet.

## Project structure

```text
src/
    App.jsx                  Current file content
    components/LabLayout.jsx Shared laboratory frame
    index.css                Global styles and layout
    main.jsx                 React entry point
```
