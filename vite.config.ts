/**
 * @file Vite config
 *
 * @see https://vitejs.dev/config
 */

import { defineConfig } from 'vite'
// import UnoCSS from 'unocss/vite'
import Uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'
import UniPlatform from '@uni-helper/vite-plugin-uni-platform'
import UniManifest from '@uni-helper/vite-plugin-uni-manifest'
import UniComponents from '@uni-helper/vite-plugin-uni-components'
import { resolve } from './scripts/utils'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },

  build: {
    target: 'es2015',
    minify: 'terser',
  },

  plugins: [
    UniPages({
      exclude: ['**/components/**/**.*'],
      routeBlockLang: 'yaml',
      homePage: 'pages/index/index',
      subPackages: [],
    }),

    UniLayouts(),

    UniPlatform(),

    UniManifest(),

    UniComponents(),

    // 置于 Uni* 之后
    Uni(),

    // UnoCSS(),

    AutoImport({
      dts: 'src/auto-imports.d.ts',
      imports: ['vue', 'pinia', 'uni-app'],
      dirs: [],
    }),
  ],
})
