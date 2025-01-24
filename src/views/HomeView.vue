<script setup lang="ts">
import MenuButton from "../components/MenuButton.vue";
import NavbarComponent from "../components/NavbarComponent.vue";

/**
 * HomeView component
 * This component serves as the home page of the application.
 */
</script>

<template>
  <NavbarComponent title="Home Page">
    <template #left-button>
      <MenuButton />
    </template>
  </NavbarComponent>
  <div class="min-h-full p-0 flex flex-col gap-4">
    <div class="flex items-center justify-center gap-2 p-4">
      <div class="w-full bg-white rounded-xl p-2">
        <img src="../assets/images/logo.png" alt="Application Logo" class="" />
      </div>
    </div>
  </div>
</template>
