<script setup lang="ts">
import BasicLayout from "@/layouts/index.vue";
import {onMounted} from "vue";
import {tabBarRoutes} from "@/tab-bar";
import {useTabBarStore} from "@/store";

onMounted(() => {
  // 注册tabbar路由
  const ut = useTabBarStore();
  ut.initTabBarRoutes(tabBarRoutes);
});
</script>
<template>
  <BasicLayout>
    <router-view/>
  </BasicLayout>
</template>
<style lang="scss" scoped>

</style>