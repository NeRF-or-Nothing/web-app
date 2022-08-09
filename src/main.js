import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import i18n from './i18n'

const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
