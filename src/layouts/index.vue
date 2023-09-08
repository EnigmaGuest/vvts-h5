<template>
  <van-nav-bar :title="title" fixed placeholder safe-area-inset-top v-if="showNavBar"></van-nav-bar>
  <div class="content">
    <slot></slot>
  </div>
  <van-tabbar placeholder route v-if="ut.isTabBarRoute()">
    <van-tabbar-item replace :to="item.path" icon="home-o" v-for="item in ut.routes" :key="item.path"  v-if="ut.routes">{{item.text}}</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import {useTabBarStore} from "@/store";
import { useRoute} from "vue-router";
import {computed} from "vue";
import {RouteMetaStyle} from "@/typings/route";
const ut =useTabBarStore()
const route = useRoute()
const routeMate = computed(() => {
  return route.meta as RouteMetaStyle
})
const title = computed(() => {
  return route.meta?.title as string || "标题"
})
const showNavBar = computed(() => {
  return routeMate.value.navigationStyle === "default"
})
// todo 优化 返回
// todo 优化 标题颜色



console.log(route)
</script>


<style scoped>
.content{
  display: flex;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding: 0 16px;
}
</style>