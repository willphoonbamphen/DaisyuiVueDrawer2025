<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/24/outline";
import { useDrawer } from "../composables/useDrawer";

const { toggle } = useDrawer();
</script>

<template>
  <button @click="toggle" class="btn btn-ghost h-8 w-8 p-0" aria-label="Open menu">
    <Bars3Icon class="h-6 w-6" />
  </button>
</template>
