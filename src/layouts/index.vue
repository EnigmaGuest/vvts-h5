<template>
  <van-nav-bar :title="title" @click-left="onBack"  :left-arrow="isBack" fixed placeholder safe-area-inset-top v-if="showNavBar" ></van-nav-bar>
  <div class="content">
    <slot></slot>
  </div>
  <van-tabbar placeholder route v-if="ut.isTabBarRoute()" safe-area-inset-bottom>
    <van-tabbar-item replace :to="item.path" icon="home-o" v-for="item in ut.routes" :key="item.path"  v-if="ut.routes">
      <span>{{item.text}}</span>
      <template #icon="props">
        <img :src="props.active ? item.activeImg : item.inactiveImg" v-if="item.type === 'img'"  :alt="item.text"/>
        <eg-icon :color="props.active ? item.activeColor : item.color" :name="item.icon" size="22" v-else-if="item.icon?.startsWith('fa-')" ></eg-icon>
        <van-icon :name="item.icon" :color="props.active ? item.activeColor : item.color"   v-else/>
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="tsx">
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
// 判断当前路由不在tabbar中
const isBack = computed(() => {
  return !ut.routes?.find(item => item.path === route.path)
})
function onBack() {
  history.back()
}
// todo 优化 标题颜色



console.log(route)
</script>

<style>
#app{
  background: #f5f5f5;
}
</style>
<style scoped>

.content{
  display: flex;
  box-sizing: border-box;
  position: relative;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  padding: 12px 12px;

}
</style>