<script setup lang="ts">
import { ref } from 'vue';
import { Notify } from 'vant';
import { isLoginApi } from '../../api/usersCurd';
import { useRouter } from 'vue-router';
import {mainStore} from '../../store/index'
import {storeToRefs} from 'pinia'
const store = mainStore();
// let {token} = storeToRefs(store);

const router = useRouter();
let username = ref("")
let password = ref("")
const patternUsername = /.{4,}/
const validatorPossword = (val: any) => /.{8,}/.test(val);

const onSubmit = (values: any) => {
    isLogin(values)
};
const isLogin = async (user: any) => {
    try {
        const res: any = await isLoginApi(user)
        console.log(res);
        store.changeUserState(res.data.token,res.data.user)
        if (res.code === 1) {
            Notify({ type: 'success', message: '登录成功' });
            router.push({
                path:'/home'
            })
        } else {
            Notify({ type: 'warning', message: res.description || '登录失败' });
        }
    } catch (err: any) {
        Notify({ type: 'danger', message: err })
    }
}
</script>

<template>
    <div class="wrap">
        <van-form @submit="onSubmit" class="form">
            <van-cell-group inset>
                <van-field v-model="username" name="userAccount" label="用户名" placeholder="账号"
                    :rules="[{ pattern:patternUsername , message: '账号长度限制4以上' }]" />
                <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
                    :rules="[{ validator:validatorPossword, message: '密码长度限制8以上' }]" />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit">
                    登录
                </van-button>
            </div>
        </van-form>

    </div>
</template>

<style scoped lang="scss">
.wrap {
    position: relative;
    display: flex;
    justify-content: center;

    .form {
        position: fixed;
        bottom: 25%;

    }
}
</style>