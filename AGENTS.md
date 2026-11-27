# Repository Guidelines

## Project Structure

- `src/main.ts` bootstraps the Vue app, and `src/App.vue` defines the root component. Put screens in `src/pages/<name>/index.vue` and shared layouts in `src/layouts/`.
- Keep Pinia stores in `src/stores/`, shared helpers in `src/utils/`, constants in `src/constants/`, and shared types in `src/types/`.
- Global SCSS lives in `src/styles/`. Put app assets such as tab bar icons in `src/static/`. The public logo lives in `public/`.
- Edit `pages.config.mts` for global page and tab bar settings and `manifest.config.mts` for platform settings. The Vite plugins generate `src/pages.json` and `src/manifest.json` from the source configuration.

## Build and Development

Use the Node.js LTS version indicated by `.node-version` and the pnpm version pinned in `package.json`.

- `pnpm install --frozen-lockfile` installs the locked dependencies and applies the patches configured in `pnpm-workspace.yaml`.
- `pnpm dev` starts the H5 development server. `pnpm build` creates the production H5 build.
- `pnpm build:mp` builds for WeChat Mini Program. Use `pnpm build:app-android` or `pnpm build:app-ios` for native targets.
- `pnpm lint` runs ESLint. `pnpm typecheck` runs `vue-tsc --build`. Run type-check scripts and TypeScript compiler commands directly to preserve their output and exit status.

## Coding Style

Use two-space indentation, LF line endings, and a final newline. Follow existing Vue 3 Composition API patterns with `<script lang="ts" setup>`, PascalCase component tags such as `WdButton`, and the `@/` alias for imports from `src/`. The Husky pre-commit hook runs ESLint fixes and Prettier on the configured staged file types.

## Testing

CI runs lint and the H5 build. For behavior changes, run the type check locally and smoke-test the affected flow on each affected platform. The repository has no configured automated test suite or coverage threshold.

## Commits and Pull Requests

Follow the Conventional Commits style used in history, such as `feat: add echarts examples`, `fix: update dependencies and restore Vite 8 builds`, or `chore(deps): update dependencies`. In pull requests, summarize the change, link relevant issues, list the checks and platforms you verified, and include screenshots for visible changes.
