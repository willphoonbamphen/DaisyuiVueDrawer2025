import {
  HomeIcon,
  Cog6ToothIcon,
  InformationCircleIcon,
} from "@heroicons/vue/24/outline";

export interface DrawerEntry {
  path: string;
  label: string;
  className?: string;
  icon?: any;
}

export const drawerEntries: DrawerEntry[] = [
  {
    path: "/",
    label: "Home",
    className: "",
    icon: HomeIcon,
  },
  {
    path: "/settings",
    label: "Settings",
    className: "",
    icon: Cog6ToothIcon,
  },
  {
    path: "/about",
    label: "About",
    icon: InformationCircleIcon,
  },
];
