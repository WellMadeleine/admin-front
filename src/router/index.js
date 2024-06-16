import { createWebHashHistory, createRouter } from "vue-router";

import Index from "~/pages/index.vue";
import Login from "~/pages/login.vue";
import NotFound from "~/pages/404.vue";
import Admin from "~/layouts/admin.vue";

// 路由配置
const routes = [
  {
    path: "/",
    component: Admin,
    // 子路由
    children:[{
        path:"/",
        component: Index,
        meta: {
            title: "后台首页",
        }
    }]
  },
  {
    path: "/login",
    component: Login,
    meta: {
      title: "登录页",
    },
  },
  {
    // 官网上的动态路由配置 NotFound 路由 https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E6%8D%95%E8%8E%B7%E6%89%80%E6%9C%89%E8%B7%AF%E7%94%B1%E6%88%96-404-Not-found-%E8%B7%AF%E7%94%B1
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
