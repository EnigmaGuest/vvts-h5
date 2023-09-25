<template>
<div class="flex-col">
  <div class="flex-col bg-white rounded m-[10px]">
    <div class="flex p-[12px]">
      <eg-icon name="fa-regular fa-font-awesome" size="60px" />
      <div class="flex-col ml-[12px] justify-between">
        <p class="text-[18px]">fontawesome使用</p>
        <div class="flex">
          <p class="text-[14px]">图标地址：</p>
          <p class="text-blue-500 text-[14px]">https://fontawesome.com</p>
        </div>
      </div>
    </div>
  </div>
  <van-grid :column-num="3" :gutter="10" :border="false" square >
    <van-grid-item v-for="item in iconList" :key="item.name"  :text="item.name" class="rounded">
      <template #icon>
        <eg-icon :name="item.name" size="22px" />
      </template>
    </van-grid-item>
  </van-grid>
</div>
</template>

<script setup lang="ts">

import {reactive} from "vue";
const iconList = reactive<{name:string}[]>([
  {name: "fa-solid fa-house"},
  {name: "fa-brands fa-fort-awesome-alt"},
  {name: "fa-solid fa-user"},
  {name: "fa-brands fa-facebook"},
  {name: "fa-solid fa-check"},
  {name: "fa-solid fa-download"},
  {name: "fa-brands fa-twitter"},
  {name: "fa-regular fa-image"},
  {name: "fa-brands fa-instagram"},
  {name: "fa-solid fa-phone"},
  {name: "fa-brands fa-tiktok"},
  {name: "fa-brands fa-github"},
  {name: "fa-solid fa-music"},
  {name: "fa-solid fa-wand-magic-sparkles"},
  {name: "fa-solid fa-bomb"},
  {name: "fa-solid fa-poo"},
  {name: "fa-solid fa-camera-retro"},
  {name: "fa-solid fa-cloud"},
  {name: "fa-brands fa-slack"},
])
</script>


<style scoped>

</style>