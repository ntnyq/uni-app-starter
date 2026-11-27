// @ts-check

import { defineESLintConfig } from '@ntnyq/eslint-config'

export default defineESLintConfig({
  svgo: true,
  ignores: [
    'src/manifest.json',
    'src/pages.json',
    '**/uni-pages.d.ts',
    '**/uni-layouts.d.ts',
  ],
})
