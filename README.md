# yubinex-web

A personal website disguised as a laboratory archive. Each section is a separate
lab file, inspired by the amber terminals and personnel dossiers of my
[GitHub profile](https://github.com/yubinex).

## The archive

A home for my profile, projects, and interests. Navigate between individual lab
files instead of scrolling through one long page.

**Status:** the profile dossier and shared archive design are in place.
Experiments and Interests files are planned; their navigation controls are
marked "Soon" until those files are implemented. Deployment is not configured.

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
scripts/update-github.js     Refreshes the public GitHub snapshot
src/
    App.jsx                  Composes the layout and active file
    components/
        LabLayout.jsx        Shared archive header, navigation, and footer
        FileFrame.jsx        Reusable dossier frame and file title bar
        ProfileFile.jsx      Profile content and internal layout
    data/github.json         Public GitHub profile snapshot
    index.css                Shared theme, archive layout, and profile styles
    main.jsx                 React entry point
```
