<script setup lang="ts">
import MenuButton from "../components/MenuButton.vue";
import NavbarComponent from "../components/NavbarComponent.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="min-h-full p-0 flex flex-col gap-4">
    <NavbarComponent title="About Page">
      <template #left-button>
        <MenuButton />
      </template>
    </NavbarComponent>
    <div class="flex items-center gap-2 p-6 pt-2">
      <button class="btn btn-secondary border">
        <RouterLink to="/contact-us">Contact Us</RouterLink>
      </button>
    </div>
  </div>
</template>

<style></style>
