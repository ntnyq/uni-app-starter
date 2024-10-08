import { defineESLintConfig } from '@ntnyq/eslint-config'

export default defineESLintConfig({
  ignores: ['src/manifest.json', 'src/pages.json', 'uni-pages.d.ts'],
})
