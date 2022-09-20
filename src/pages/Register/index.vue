<script setup lang="ts">
import { Notify } from 'vant';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { userCreate } from '../../api/usersCurd';
const router = useRouter();
let username = ref("")
let password = ref("")
const patternUsername = /.{4,}/
const validatorPossword = (val: any) => /.{8,}/.test(val);
const onSubmit = (values: any) => {
    createUser(values)
    validatorPossword(values.password)
};
const createUser = async (user: any) => {
    try {
        const res: any = await userCreate(user)
        if (res.code === 1) {
            Notify({ type: 'success', message: '注册成功' });
            router.push({
                path:'/login'
            })
        } else {
            Notify({ type: 'warning', message: res.description });
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
                    注册
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