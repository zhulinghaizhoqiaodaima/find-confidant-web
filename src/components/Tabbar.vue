<template>
    <van-tabbar route class="tabbar">
        <van-tabbar-item to="/home" icon="home-o" name="home">主页</van-tabbar-item>
        <van-tabbar-item to="/team" icon="friends-o" name="team">队伍</van-tabbar-item>
        <van-tabbar-item to="/user" icon="user-o" name="user">个人</van-tabbar-item>
    </van-tabbar>
</template>

<script setup lang="ts">

</script>

<style scoped lang="css">
.tabbar{
    position: fixed;
    bottom: 0;
}
</style>