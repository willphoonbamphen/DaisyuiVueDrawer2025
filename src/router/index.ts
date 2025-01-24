import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SettingsView from "../views/SettingsView.vue";
import { useAuthStore } from "@/stores/authStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: "/settings",
      name: "settings",
      component: SettingsView,
      meta: { requiresAuth: true },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/contact-us",
      name: "contact-us",
      component: () => import("../views/ContactUsView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: () => import("../views/auth/SignInView.vue"),
    },
  ],
});

export default router;

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const isAuthenticated = authStore.isAuthenticated; // Replace with actual authentication check
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: "sign-in" });
  } else {
    next();
  }
});
