import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("./views/ethereum.vue"),
  },
  {
    path: "/ontology",
    component: () => import("./views/ontology.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
