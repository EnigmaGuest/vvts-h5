<template>
  <van-nav-bar title="title" fixed placeholder safe-area-inset-top></van-nav-bar>
  <div class="content">
    <slot></slot>
  </div>
  <van-tabbar v-model="tabState.active" placeholder>
    <van-tabbar-item name="home" icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item name="search" icon="search">标签</van-tabbar-item>
    <van-tabbar-item name="friends" icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import {reactive} from "vue";

const tabState = reactive({
  active: "home"
})
</script>


<style scoped>

</style>