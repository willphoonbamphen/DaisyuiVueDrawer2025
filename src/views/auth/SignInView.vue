<!-- src/views/SignInView.vue -->
<template>
  <div class="min-h-full p-4 flex flex-col items-center mt-14">
    <h1 class="text-xl font-semibold mb-8">Sign In</h1>
    <form
      @submit.prevent="handleSignIn"
      class="flex flex-col gap-4 w-full max-w-sm justify-center items-center"
    >
      <input
        type="email"
        v-model="email"
        placeholder="Email"
        required
        class="input input-bordered"
      />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        required
        class="input input-bordered"
      />
      <button type="submit" class="btn btn-primary w-42 mt-4">Sign In</button>
    </form>
    <p class="mt-4">
      Don't have an account? <RouterLink to="/sign-up">Sign Up</RouterLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";

const email = ref("");
const password = ref("");
const router = useRouter();
const authStore = useAuthStore();

const handleSignIn = async () => {
  try {
    await authStore.signIn(email.value, password.value);
    router.push("/");
  } catch (error) {
    console.error("Sign In Error:", error);
  }
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
