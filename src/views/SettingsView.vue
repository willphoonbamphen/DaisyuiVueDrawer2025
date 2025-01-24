<script setup lang="ts">
import MenuButton from "../components/MenuButton.vue";
import NavbarComponent from "../components/NavbarComponent.vue";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const handleSignOut = () => {
  authStore.signOut();
  router.replace("/sign-in");
};
</script>

<template>
  <div class="min-h-full p-0 flex flex-col gap-4">
    <NavbarComponent title="Settings Page">
      <template #left-button>
        <MenuButton />
      </template>
    </NavbarComponent>
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-xl font-semibold mb-8">Settings Page</h1>
      <button class="btn btn-primary" @click="handleSignOut">Sign Out</button>
    </div>
  </div>
</template>

<style></style>
