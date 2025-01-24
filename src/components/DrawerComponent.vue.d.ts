declare module "./components/DrawerComponent.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<
    {
      isOpen: boolean;
    },
    {},
    any
  >;
  export default component;
}
