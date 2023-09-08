<template>
  <i :class="name" :style="iconStyle" v-bind="bindAttrs"></i>
</template>

<script setup lang="ts">
import {computed, useAttrs} from "vue";

defineOptions({name: "EgIcon"})
const props = defineProps({
  name: {
    type: String,
    default: 'fa-brands fa-napster'
  },
  size: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  }
})

const iconStyle = computed(() => {
  return {
    fontSize: props.size,
    color: props.color
  }
})

const attrs = useAttrs();
const bindAttrs = computed<{ class: string; style: string }>(() => ({
  class: (attrs.class as string) || '',
  style: (attrs.style as string) || ''
}));
</script>


<style scoped>

</style>