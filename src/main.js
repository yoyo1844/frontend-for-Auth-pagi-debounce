import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router'
import Vuesax from 'vuesax3'

createApp(App).use(Vuesax).use(router).mount('#app')
