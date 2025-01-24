<template>
  <div class="flex items-center gap-2 p-2">
    <slot name="left-button"></slot>
    <div class="text-xl font-semibold">{{ title }}</div>
    <slot name="right-button"></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

interface Props {
  title: string;
}

const props = defineProps<Props>();

</script>

<style scoped>
.navbar {
  /* Add any additional styles for your navbar here */
}
</style>
