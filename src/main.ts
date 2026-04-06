// import 'uno.css'
import '@/styles/style.scss'
import { createSSRApp } from 'vue'
import App from '@/App.vue'
import store from '@/stores'

export function createApp() {
  const app = createSSRApp(App)

  app.use(store)

  return {
    app,
  }
}
