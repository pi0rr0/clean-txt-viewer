# Clean TXT Viewer

A polished, private Markdown reader for `.txt` and `.md` files. Files are read and rendered entirely in the browser: nothing is uploaded, saved, or persisted.

## Features

- Drag-and-drop and file picker support
- GitHub-flavored Markdown, including tables
- Syntax highlighting for fenced code blocks
- Sanitized output using DOMPurify
- Responsive, keyboard-accessible interface
- No backend, accounts, cookies, analytics, or external storage
- No runtime calls to third-party services

## Run locally

Install [Node.js 22 or newer](https://nodejs.org/) and [pnpm](https://pnpm.io/), then run:

```bash
pnpm install
pnpm dev
```

Open the local address shown in the terminal. For a production check, run:

```bash
pnpm build
```

## Deploy to GitHub Pages

An automatic Pages workflow is included in `.github/workflows/deploy-pages.yml`.

1. Push this project to a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to the `main` branch, or run the workflow manually from the **Actions** tab.

The workflow builds a fully static export and publishes it to GitHub Pages. For a custom domain hosted at the domain root, remove the `NEXT_PUBLIC_BASE_PATH` line from the workflow before deploying.

## Privacy and security

The browser's `File.text()` API reads the selected file into the current page only. The app does not use `fetch`, form submission, browser storage, service workers, or server APIs. Rendered Markdown is sanitized before it is added to the document. Closing or refreshing the tab clears the file and rendered content from the page.

The installed libraries are bundled into the static site at build time, so visitors do not make runtime requests to a CDN.
