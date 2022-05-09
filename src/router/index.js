import { createRouter, createWebHistory } from "vue-router";
import ChatView from "../views/ChatView.vue";
import LoginView from "../views/LoginView.vue";
import PageNotFound from "../views/PageNotFound.vue";
const routes = [
  {
    path: "/",
    name: "ChatView",
    component: ChatView,
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: LoginView,
  },
  { path: '/:pathMatch(.*)*', component: PageNotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
