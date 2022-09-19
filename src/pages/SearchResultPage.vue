<template>
  <user-card-list :user-list="userList" />
  <van-empty v-if="!userList || userList.length < 1" description="搜索结果为空" />
</template>

<script setup>
import {onMounted, ref} from 'vue';
import {useRoute} from "vue-router";
import myAxios from "../plugins/myAxios";
import {Toast} from "vant";
import qs from 'qs';
import UserCardList from "../components/UserCardList.vue";

const route = useRoute();
const {tags} = route.query;

// const userList = ref([]);
const userList = [
  {
    id: 12345,
    username: 'coqing',
    userAccount: '12314',
    profile: '一名精神小伙，目前还有头发',
    avatarUrl: 'https://coqing.oss-cn-shenzhen.aliyuncs.com/avatar/default/man.jpg',
    gender: 0,
    phone: '13113113111',
    email: '592342843721987@xzcxzczxcz.com',
    userRole: 0,
    tags: ['java', 'emo', '打工中', 'emo', '打工中'],
    createTime: new Date(),
  },
  {
    id: 12345,
    username: 'coqing',
    userAccount: '12314',
    profile: '一名精神小伙，目前还有头发',
    avatarUrl: 'https://coqing.oss-cn-shenzhen.aliyuncs.com/avatar/default/man.jpg',
    gender: 0,
    phone: '13113113111',
    email: '592342843721987@xzcxzczxcz.com',
    userRole: 0,
    tags: ['java', 'emo', '打工中', 'emo', '打工中'],
    createTime: new Date(),
  },
  {
    id: 12345,
    username: 'coqing',
    userAccount: '12314',
    profile: '一名精神小伙，目前还有头发',
    avatarUrl: 'https://coqing.oss-cn-shenzhen.aliyuncs.com/avatar/default/man.jpg',
    gender: 0,
    phone: '13113113111',
    email: '592342843721987@xzcxzczxcz.com',
    userRole: 0,
    tags: ['java', 'emo', '打工中', 'emo', '打工中'],
    createTime: new Date(),
  },
  {
    id: 12345,
    username: 'coqing',
    userAccount: '12314',
    profile: '一名精神小伙，目前还有头发',
    avatarUrl: 'https://coqing.oss-cn-shenzhen.aliyuncs.com/avatar/default/man.jpg',
    gender: 0,
    phone: '13113113111',
    email: '592342843721987@xzcxzczxcz.com',
    userRole: 0,
    tags: ['java', 'emo', '打工中', 'emo', '打工中'],
    createTime: new Date(),
  }
];

//
// onMounted(async () => {
//   const userListData = await myAxios.get('/user/search/tags', {
//     params: {
//       tagNameList: tags
//     },
//     paramsSerializer: params => {
//       return qs.stringify(params, {indices: false})
//     }
//   })
//       .then(function (response) {
//         console.log('/user/search/tags succeed', response);
//         Toast.success('请求成功');
//         return response?.data;
//       })
//       .catch(function (error) {
//         console.error('/user/search/tags error', error);
//         Toast.fail('请求失败');
//       })
//   console.log(userListData)
//   if (userListData) {
//     userListData.forEach(user => {
//       if (user.tags) {
//         user.tags = JSON.parse(user.tags);
//       }
//     })
//     userList.value = userListData;
//   }
// })


// const mockUser =


</script>

<style scoped>

</style>
