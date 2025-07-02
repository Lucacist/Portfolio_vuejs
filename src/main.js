import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import MasonryWall from '@yeger/vue-masonry-wall'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(MasonryWall)
app.mount('#app')
