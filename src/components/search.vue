<template>
    <van-search  show-action v-model="searchValue" shape="round"  placeholder="搜索">
        <template #action>
    <div @click="onClickButton">搜索</div>
    </template>
    </van-search>
   
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Toast } from 'vant';

const searchValue = ref("")
const onClickButton = () => Toast(searchValue.value);
</script>

<style scoped>

</style>