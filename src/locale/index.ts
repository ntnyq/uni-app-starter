/**
 * @file i18n
 */

import { createI18n } from 'vue-i18n'
import zhHans from './zh-Hans.json'

const i18n = createI18n({
  legacy: false,
  locale: 'zh-Hans',
  messages: {
    'zh-Hans': zhHans,
  },
})

export default i18n
