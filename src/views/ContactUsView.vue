<script setup lang="ts">
import BackButton from "../components/BackButton.vue";
import NavbarComponent from "../components/NavbarComponent.vue";
</script>

<template>
  <div class="min-h-full p-0 flex flex-col gap-4">
    <NavbarComponent title="Contact Us">
      <template #left-button>
        <BackButton />
      </template>
    </NavbarComponent>
  </div>
</template>

<style></style>
