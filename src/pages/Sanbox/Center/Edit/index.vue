<template>
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
  
  <style scoped>
  
  </style>