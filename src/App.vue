<script setup lang="ts">
import { RouterView } from "vue-router";
import DrawerComponent from "./components/DrawerComponent.vue";
import { useDrawer } from "./composables/useDrawer";

// Get drawer state and controls from the composable
const { isOpen, toggle, open, close } = useDrawer();
</script>

<template>
  <DrawerComponent
    :is-open="isOpen"
    @toggle="toggle"
    @open="open"
    @close="close"
  >
    <RouterView />
  </DrawerComponent>
</template>

<style scoped></style>
