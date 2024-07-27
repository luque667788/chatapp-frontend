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
    component: LoginView,
  },
  { path: '/:pathMatch(.*)*', component: PageNotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
