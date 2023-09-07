<template>
  <van-nav-bar title="title" fixed placeholder safe-area-inset-top></van-nav-bar>
  <div class="content">
    <slot></slot>
  </div>
  <van-tabbar placeholder route>
    <van-tabbar-item replace :to="item.path" icon="home-o" v-for="item in ut.routes" :key="item.path"  v-if="ut.routes">{{item.text}}</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import {useTabBarStore} from "@/store";

const ut =useTabBarStore()

</script>


<style scoped>

</style>