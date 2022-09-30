import { useRouter } from "vue-router";
import { mainStore } from "../store";
import { storeToRefs } from "pinia";

const store = mainStore()
let { userInfo, token } = storeToRefs(store);
let UserInfo:any = userInfo.value;
let Token:any = token.value
export {
    UserInfo,
    Token
}