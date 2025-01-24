import { ref } from "vue";

// Make the state shared between component instances
const isOpen = ref(false);

/**
 * Composable for managing drawer state
 * @returns {Object} Drawer state and methods
 */
export function useDrawer() {
  /**
   * Toggle drawer state
   */
  const toggle = () => {
    isOpen.value = !isOpen.value;
  };

  /**
   * Open drawer
   */
  const open = () => {
    isOpen.value = true;
  };

  /**
   * Close drawer
   */
  const close = () => {
    isOpen.value = false;
  };

  return {
    isOpen,
    toggle,
    open,
    close,
  };
}
