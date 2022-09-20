import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: "/",
        name: 'Sandbox',
        component: () => import('../pages/Sanbox/index.vue'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import('../pages/Sanbox/Home/index.vue'),
            },
            {
                path: '/team',
                name: 'Team',
                component: () => import('../pages/Sanbox/Team/index.vue'),
            },
            {
                path: '/chat',
                name: 'Chat',
                component: () => import('../pages/Sanbox/Chat/index.vue'),
            },
            {
                path: '/user',
                name: 'Center',
                component: () => import('../pages/Sanbox/Center/index.vue'),
            },
            {
                path: '/search',
                component: import('../pages/Sanbox/SearchPage/index.vue')
            },
            {
                path: '/user/edit',
                name: "UserEdit",
                component: import('../pages/Sanbox/Center/Edit/index.vue')
            },
            {
                path: '/user/list',
                component: import('../pages/Sanbox/SearchResultPage/index.vue')

            },
        ]
    },
    {
        path: '/user/detail',
        name: 'userDetail',
        component: () => import('../pages/Sanbox/Center/Detail/index.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../pages/Register/index.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../pages/Login/index.vue'),
    },
    {
        path: '/:pathMatch(.*)', // 或/:catchAll(.*)
        name: 'NotFound',
        component: () => import('../pages/NotFound/index.vue'),
    },
]
// 3. 创建路由实例并传递 `routes` 配置。
const router = createRouter({
    // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})


export default router;

