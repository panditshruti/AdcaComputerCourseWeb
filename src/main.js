import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes'
import './assets/style.css'

createApp(App).use(routes).mount('#app')
