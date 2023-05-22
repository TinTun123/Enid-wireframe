import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/index'

import './assets/main.css'
import vRipple from './directive/vRipple'


const app = createApp(App)
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.directive('ripple', vRipple);
app.mount('#app');
