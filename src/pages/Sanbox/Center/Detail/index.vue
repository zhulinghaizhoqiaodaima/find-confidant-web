<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { updateUser } from "../../../../api/usersCurd";
import { UserInfo } from "../../../../common/storeUser";
const { avatarUrl } = UserInfo;

let userName = ref(UserInfo.userName)
let email = ref(UserInfo.email)
let phone = ref(UserInfo.phone)
const router = useRouter();
const patternUsername = /.{4,}/
const onSubmit = (values: any) => {
  updateUserInfo(values)
};
const updateUserInfo = async (forms:any)=>{
  try {
    let data = {
      id:UserInfo.id,
      userName:forms.userName,
      phone:forms.phone || '',
      email:forms.email || '',
    }
    console.log(data);
    
    let res = await updateUser(data);
    console.log(res);
    
  } catch (error) {
    
  }
}
</script>

<template>
  <div class="wrap">
    <van-form class="submit" @submit="onSubmit">
      <div class="avatar">
        <van-image lazy-load round width="69" height="69" :src="avatarUrl" />
      </div>
      <div class="formInfo">
        <van-cell-group inset>
          <van-field v-model="userName" name="userName" label="昵称" placeholder="昵称"
            :rules="[{ pattern:patternUsername , message: '账号长度限制4以上' }]" />
          <van-field v-model="phone" name="phone" label="电话" placeholder="电话" />
          <van-field v-model="email" name="email" label="邮箱" placeholder="邮箱" />
        </van-cell-group>
      </div>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          修改
        </van-button>
      </div>
    </van-form>
  </div>
</template>
  
<style scoped lang="scss">
.wrap {
  width: 100vw;
  height: 100vh;
  background-color: #F7F8FA;
  overflow: hidden;
  .submit {
    margin-top: 20%;
    .avatar {
      text-align: center;
    }
    .formInfo {
      margin-top: 20px;
    }
  }

}
</style>