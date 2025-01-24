   // src/stores/authStore.ts
   import { defineStore } from 'pinia';

   export const useAuthStore = defineStore('auth', {
     state: () => ({
       user: null,
       isAuthenticated: false,
     }),
     actions: {
       signIn(user: any) {
         this.user = user;
         this.isAuthenticated = true;
         // Optionally, save user info to local storage
       },
       signOut() {
         this.user = null;
         this.isAuthenticated = false;
         // Optionally, clear user info from local storage
       },
     },
   });