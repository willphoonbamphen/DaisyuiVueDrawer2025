<script setup lang="ts">
import MenuButton from "../components/MenuButton.vue";
import NavbarComponent from "../components/NavbarComponent.vue";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "vue-router";
import { computed } from "vue";

const authStore = useAuthStore();
const router = useRouter();


const handleSignOut = () => {
  authStore.signOut();
  router.replace("/sign-in");
};

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
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
      <div class="flex flex-col items-center justify-center mb-8">
        <p>User: {{ authStore.user?.email }}</p>
        <p>Name: {{ authStore.user?.user_metadata?.name || "No name" }}</p>
        <p>
          Last Login: {{ formatDate(authStore.user?.last_sign_in_at || "") }}
        </p>
      </div>
      <button class="btn btn-primary" @click="handleSignOut">Sign Out</button>
    </div>
  </div>
</template>

<style></style>
