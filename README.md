# Wunschbiber Hilfe

The source for the Wunschbiber manual at
[hilfe.wunschbiber.com](https://hilfe.wunschbiber.com), built with Docusaurus.

## Requirements

- Node.js 24 LTS
- npm

## Local development

```bash
npm ci
npm start
```

## Validation

```bash
npm run typecheck
npm run build
```

The production build is written to `build/`. Pushes to `main` are deployed to
GitHub Pages by the workflow in `.github/workflows/deploy.yml`.
