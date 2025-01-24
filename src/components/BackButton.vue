<script setup lang="ts">
import { ArrowLeftIcon } from "@heroicons/vue/24/outline";
import { useRouter } from "vue-router";

const router = useRouter();

const handleBack = () => {
  router.back();
};
</script>

<template>
  <button @click="handleBack" class="btn btn-ghost border" aria-label="Go back">
    <ArrowLeftIcon class="h-6 w-6" />
  </button>
</template>
