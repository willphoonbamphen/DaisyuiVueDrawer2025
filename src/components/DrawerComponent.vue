<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { Capacitor } from "@capacitor/core";
import { drawerEntries } from "../config/navigation";

/**
 * Props for the DrawerComponent
 * @typedef {Object} Props
 * @property {boolean} isOpen - Indicates whether the drawer is open or closed.
 */
interface Props {
  isOpen: boolean;
}

/**
 * Define props for the component
 */
const props = defineProps<Props>();

/**
 * Define emitted events for the component
 */
const emit = defineEmits<{
  toggle: []; // Event emitted when the drawer is toggled
  open: []; // Event emitted when the drawer is opened
  close: []; // Event emitted when the drawer is closed
}>();

const drawerRef = ref<HTMLInputElement | null>(null);
const router = useRouter();
const route = useRoute();

/**
 * Check if the platform is web
 */
const isWeb = Capacitor.getPlatform() === "web";
// const isWeb = true;
const topPadding = computed(() => (isWeb ? "pt-1" : "pt-12"));

/**
 * Handle link click and emit toggle event
 * @param {string} to - The path to navigate to
 */
const handleLinkClick = (to: string) => {
  emit("toggle"); // Emit toggle event
  router.push(to); // Navigate to the specified path
};

/**
 * Watch for changes in props.isOpen and update the drawerRef accordingly
 */
watch(
  () => props.isOpen,
  (newVal) => {
    if (drawerRef.value) {
      drawerRef.value.checked = newVal; // Update the checkbox state
    }
  },
  { immediate: true }
);
</script>

<template>
  <div class="drawer" :class="topPadding">
    <input
      ref="drawerRef"
      id="drawer"
      type="checkbox"
      class="drawer-toggle"
      :checked="props.isOpen"
      @change="emit('toggle')"
    />
    <div class="drawer-content">
      <slot></slot>
    </div>
    <div class="drawer-side" :class="topPadding">
      <label for="drawer" class="drawer-overlay" @click="emit('close')"></label>
      <div
        class="flex flex-col h-full bg-base-200 text-base-content w-80 relative z-[9999]"
      >
        <div class="p-4 border-b border-base-300">
          <div class="text-xl font-semibold">Menu App</div>
        </div>
        <ul class="menu menu-lg p-2 w-80">
          <li v-for="entry in drawerEntries" :key="entry.path" class="mb-2">
            <button
              class="w-full flex items-center gap-3"
              :class="{
                'bg-primary text-primary-content': route.path === entry.path,
              }"
              @click="() => handleLinkClick(entry.path)"
            >
              <component :is="entry.icon" class="h-6 w-6" />
              <span class="text-base" :class="entry.className || ''">
                {{ entry.label }}
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
