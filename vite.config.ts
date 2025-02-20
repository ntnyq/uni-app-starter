/**
 * @file Vite config
 *
 * @see https://vitejs.dev/config
 */

// import UnoCSS from 'unocss/vite'
import Uni from '@dcloudio/vite-plugin-uni'
import { uniuseAutoImports } from '@uni-helper/uni-use'
import UniComponents from '@uni-helper/vite-plugin-uni-components'
import { WotResolver } from '@uni-helper/vite-plugin-uni-components/resolvers'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'
import UniManifest from '@uni-helper/vite-plugin-uni-manifest'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import UniPlatform from '@uni-helper/vite-plugin-uni-platform'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import { UniPolyfill } from './plugins/uniPolyfill'
import { resolve } from './scripts/utils'

export default defineConfig({
  build: {
    cssTarget: 'chrome61',
    minify: 'terser',
    target: 'es2015',
  },

  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        silenceDeprecations: ['import', 'legacy-js-api', 'global-builtin'],
      },
    },
  },

  plugins: [
    UniPages({
      exclude: ['**/components/**/**.*'],
      homePage: 'pages/index/index',
      routeBlockLang: 'yaml',
      subPackages: [],
    }),

    UniLayouts(),

    UniPlatform(),

    UniManifest(),

    UniComponents({
      resolvers: [
        // Wot Design Uni
        WotResolver(),
      ],
    }),

    UniPolyfill(),

    // 置于 Uni* 之后
    Uni(),

    // UnoCSS(),

    AutoImport({
      dirs: [],
      dts: 'src/auto-imports.d.ts',
      imports: ['vue', 'uni-app', uniuseAutoImports()],
      resolvers: [],
    }),
  ],

  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },

  server: {
    hmr: true,
  },
})
