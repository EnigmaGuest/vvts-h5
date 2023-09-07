<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-button type="success" @click="test">55566</van-button>
  </div>
</template>
<script setup lang="ts">


import {fetchSmsCode} from "@/service";

async function test() {
  const {data, error} = await fetchSmsCode("112")
  console.log(data, error)
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
