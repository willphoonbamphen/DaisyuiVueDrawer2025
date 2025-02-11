// src/stores/authStore.ts
import { defineStore } from "pinia";
import { supabase } from "@/lib/supabase"; // Import Supabase client
import type { User } from "@supabase/supabase-js";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as User | null,
    isAuthenticated: false,
  }),
  actions: {
    async signIn(email: string, password: string) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      this.user = data.user;
      this.isAuthenticated = true;
    },
    async signOut() {
      await supabase.auth.signOut();
      this.user = null;
      this.isAuthenticated = false;
    },
    async signUp(email: string, password: string) {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      this.user = data.user;
      this.isAuthenticated = true;
    },
  },
});
