<!-- <template>
    <van-form @submit="onSubmit">
      <van-field
          v-model="(editUser.currentValue as any)"
          :name="(editUser.editKey as any)"
          :label="(editUser.editName as any)"
          :placeholder="`请输入${editUser.editName}`"
      />
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </template>
  
  <script setup lang="ts">
  import {useRoute, useRouter} from "vue-router";
  import {onMounted, ref} from "vue";
  
  const route = useRoute();
  const router = useRouter();
  
  const editUser = ref({
    editKey: route.query.editKey,
    currentValue: route.query.currentValue,
    editName: route.query.editName,
  })
  const onSubmit = (values:any) => {
      console.log('submit', values);
    };
  </script>
   -->

<template>
  <van-cell title="昵称" is-link to="/user/edit" :value="user.username"  @click="toEdit('username', '昵称', user.username)"/>
  <van-cell title="头像" is-link to="/user/edit">
  <van-cell title="账号" :value="user.userAccount"/>
    <img style="height: 48px" :src="user.avatarUrl"/>
  </van-cell>
  <van-cell title="性别" is-link :value="user.gender" @click="toEdit('gender', '性别', user.gender)"/>
  <van-cell title="电话" is-link to="/user/edit" :value="user.phone" @click="toEdit('phone', '电话', user.phone)"/>
  <van-cell title="邮箱" is-link to="/user/edit" :value="user.email" @click="toEdit('email', '邮箱', user.email)"/>
  <van-cell title="注册时间" :value="user.createTime.toISOString()"/>
</template>

<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
const router = useRouter();
const user = {
  id: 1,
  username: 'coqing',
  userAccount: 'coqing',
  avatarUrl: 'https://coqing.oss-cn-shenzhen.aliyuncs.com/avatar/default/man.jpg',
  gender: '男',
  phone: '123112312',
  email: '12345@qq.com',
  createTime: new Date(),
}

const toEdit = (editKey: string, editName: string, currentValue: string) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      editName,
      currentValue,
    }
  })
}
</script>

<style scoped>

</style>