
<script setup lang="ts">
import { onMounted, reactive, toRefs } from 'vue'
import Search from '../../../components/search.vue';
import { getUserInfo } from '../../../api/usersCurd';
// const InitInfo = async ()=>{
//      let res = await getUserInfo();
//      console.log(res); 
// }
onMounted(()=>{
   
})

</script>

<template>
    <Search></Search>
    <div>
        主页
    </div>
</template>

<style lang="scss" scoped>

</style>