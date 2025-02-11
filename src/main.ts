import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { supabase } from "./lib/supabase";
import { useAuthStore } from "@/stores/authStore";

const app = createApp(App);

const pinia = createPinia();

app.use(pinia);


supabase.auth.onAuthStateChange((event, session) => {
  const authStore = useAuthStore();
  if (session) {
    authStore.user = session.user;
    authStore.isAuthenticated = true;
  } else {
    authStore.user = null;
    authStore.isAuthenticated = false;
  }
});

const {
  data: { session },
} = await supabase.auth.getSession();
if (session) {
  const authStore = useAuthStore();
  authStore.user = session.user;
  authStore.isAuthenticated = true;
}

app.use(router);
app.mount("#app");
