<script setup lang="ts">
import MenuButton from "../components/MenuButton.vue";
import NavbarComponent from "../components/NavbarComponent.vue";
</script>

<template>
  <div class="min-h-full p-0 flex flex-col gap-4">
    <NavbarComponent title="Settings Page">
      <template #left-button>
        <MenuButton />
      </template>
    </NavbarComponent>
  </div>
</template>

<style></style>
