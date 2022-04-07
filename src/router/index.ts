import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      redirect: "/home",
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("@/views/home/index.vue"),
        },
      ],
    },
    {
      path: "/schedule",
      component: Layout,
      children: [
        {
          path: "",
          name: "schedule",
          component: () => import("@/views/schedule/index.vue"),
        },
      ],
    },
    {
      path: "/data",
      component: Layout,
      children: [
        {
          path: "",
          name: "data",
          component: () => import("@/views/data/index.vue"),
        },
        {
          path: "driver",
          name: "driver",
          component: () => import("@/views/data/driver/index.vue"),
        },
        {
          path: "team",
          name: "team",
          component: () => import("@/views/data/team/index.vue"),
        },
      ],
    },
  ],
});

export default router;
