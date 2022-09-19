import { createApp } from 'vue'
import App from './App.vue'

import * as VueRouter from 'vue-router';
import routes from "./routes/index";

import Vant from 'vant'
import 'vant/lib/index.css';
const app = createApp(App);

// 创建路由实例并传递 `routes` 配置
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
app.use(router);


app.use(Vant)


app.mount('#app')


