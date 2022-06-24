import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/explain",
      name: "explain",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
<<<<<<< HEAD
      component: () => import('../views/ExplainView.vue')
    },
    {
      path: '/waitingroom',
      name: 'waitingroom',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WaitingRoom.vue')
    }
  ]
})
=======
      component: () => import("../views/ExplainView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/OurTeam.vue"),
    },
>>>>>>> 1dd2a901fe59f5d71fd8162166b8a8c971a2bbe0

    
  ],
});

export default router;
