import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// import 'virtual:uno.css'
import 'uno.css'
import 'virtual:unocss-devtools'

import router from './router/index'

const app = createApp(App)

app.use(router)

const pinia = createPinia()

app.use(pinia)

app.mount('#app')
