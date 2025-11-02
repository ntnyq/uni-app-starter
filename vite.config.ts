/**
 * @file Vite config
 * @see https://vitejs.dev/config
 */

import Uni from '@dcloudio/vite-plugin-uni'
import { interopDefault } from '@ntnyq/utils'
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
import type { UserConfig } from 'vite'

export default defineConfig(async () => {
  const UnoCSS = await interopDefault(import('unocss/vite'))
  return {
    build: {
      /**
       * https://github.com/uni-helper/uni-use#%E6%9E%84%E5%BB%BA
       */
      cssTarget: 'chrome61',
      minify: 'terser',
      target: 'es2015',
    },

    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['import', 'legacy-js-api', 'global-builtin'],
        },
      },
    },

    optimizeDeps: {
      exclude: ['vue-demi'],
    },

    plugins: [
      UniPages({
        dts: 'src/uni-pages.d.ts',
        exclude: ['**/components/**/**.*'],
        homePage: 'pages/index/index',
        routeBlockLang: 'yaml',
        subPackages: [],
      }),

      UniLayouts(),

      UniPlatform(),

      UniManifest(),

      UniComponents({
        dts: 'src/components.d.ts',
        resolvers: [
          // Wot Design Uni
          WotResolver(),
        ],
      }),

      UniPolyfill(),

      // 置于 Uni* 之后
      Uni(),

      UnoCSS({
        inspector: false,
      }),

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
  } satisfies UserConfig
})
