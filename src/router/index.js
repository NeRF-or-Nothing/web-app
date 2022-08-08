import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('../views/Home.vue')
      
    },
    {
      path: "/explain",
      name: "explain",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ExplainView.vue')
    },
    {
      path: '/waitingroom',
      name: 'waitingroom',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WaitingRoom.vue')
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/OurTeam.vue"),
    },
    {
      path: "/upload",
      name: "upload",
      component: () => import("../views/UploadView.vue"),
    }
  ],
});

export default router;
