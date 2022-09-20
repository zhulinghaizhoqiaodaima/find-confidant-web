import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import Vant from 'vant'
import 'vant/lib/index.css';
import { ConfigProvider } from 'vant';
import { Lazyload } from 'vant';
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App);
app.use(pinia)
app.use(ConfigProvider);
app.use(Vant)
app.use(Lazyload);
app.use(router)
app.mount('#app')


