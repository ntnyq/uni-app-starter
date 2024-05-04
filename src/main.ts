// import 'uno.css'
import '@/styles/style.scss'
import { createSSRApp } from 'vue'
import App from '@/App.vue'
import i18n from '@/locale'
import store from '@/stores'

export function createApp() {
  const app = createSSRApp(App)

  app.use(store)
  app.use(i18n)

  return {
    app,
  }
}
