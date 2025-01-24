<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { Capacitor } from "@capacitor/core";
import { drawerEntries } from "../config/navigation";

interface Props {
  isOpen: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  toggle: [];
  open: [];
  close: [];
}>();

const drawerRef = ref<HTMLInputElement | null>(null);
const router = useRouter();
const route = useRoute();

const isWeb = Capacitor.getPlatform() === "web";
// const isWeb = true;
const topPadding = computed(() => (isWeb ? "pt-1" : "pt-12"));

const handleLinkClick = (to: string) => {
  emit("toggle");
  router.push(to);
};

watch(
  () => props.isOpen,
  (newVal) => {
    if (drawerRef.value) {
      drawerRef.value.checked = newVal;
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
