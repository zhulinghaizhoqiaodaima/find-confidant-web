<template>
  <div class="center">
    <div class="personBg">
    </div>
    <div class="personInfo">
      <van-image class="avtar"  lazy-load round width="69" height="69"
        :src="centerInfo.avatarUrl" />
        <div class="editInfo" @click="goToInfoDetail">
            <span>编辑资料</span>
        </div>
    </div>

  </div>
</template>
  
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { mainStore } from "../../../store";
const store = mainStore()
const router = useRouter();
const { userInfo } =storeToRefs(store);
const centerInfo:any = userInfo.value;

const goToInfoDetail = ()=>{
  router.push({
    path: '/user/detail',
  })
}




</script>
  
<style scoped lang="scss">
.center {
  background: url('./file .png');
  background-size: cover;
  width: 100vw;
  height: 100vh;

  .personBg {
    height: 35%;
    // background-color: aqua;
  }
  .personInfo {
    position: relative;
    height: 26%;
    // background-color: antiquewhite;
    margin: 0 10px;
    border-radius: 10px;
    margin-top: -31%;
    box-shadow:0 10px 6px -6px rgba(30, 30, 30, 0.1), 12px 0 8px -8px rgba(50, 50, 50, 0.1); // 水平阴影 垂直阴影 模糊距离 阴影的大小 阴影的颜色;
    transition: all .2s ease-in-out;
    .avtar {
      position: absolute;
      top: -19%;
      left: 7%;
    }
    .editInfo{
      width: 17%;
      text-align: center;
      position: absolute;
      right: 6%;
      top: 11%;
      font-size: 12px;
      border-radius: 10px;
      border: 1px solid black;
    }
  }
}
</style>