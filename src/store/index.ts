import { defineStore } from 'pinia'

export const mainStore = defineStore('main', {
    // persist: true, // 开启全部数据持久化
    state: () => {
        return {
            token: '',
            userInfo:{

            }
        }
    },
    getters: {

    },
    actions: {
        changeUserState(token: any,info:any) {
            this.token = token;
            this.userInfo = {...info}
        },
    },
    persist: {
        // 修改存储中使用的键名称，默认为当前 Store的 id
        key: 'storekey',
        // 修改为 sessionStorage，默认为 localStorage
        storage: window.sessionStorage,
        // 部分持久化状态的点符号路径数组，[]意味着没有状态被持久化(默认为undefined，持久化整个状态)
        paths: ['token','userInfo'],
    },
})