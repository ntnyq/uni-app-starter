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
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        silenceDeprecations: ['import', 'legacy-js-api'],
      },
    },
  },

  server: {
    hmr: true,
  },

  build: {
    target: 'es2015',
    minify: 'terser',
    cssTarget: 'chrome61',
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
      dts: 'src/auto-imports.d.ts',
      imports: ['vue', 'pinia', 'uni-app', uniuseAutoImports()],
      dirs: [],
      resolvers: [],
    }),
  ],
})
