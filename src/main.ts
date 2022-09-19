import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css';
import { ConfigProvider } from 'vant';
const app = createApp(App);

app.use(ConfigProvider);
app.use(Vant)
app.use(router)
app.mount('#app')


