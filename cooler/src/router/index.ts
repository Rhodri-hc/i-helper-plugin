import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/airConditioner',
    name: 'airConditioner',
    component: () => import(/* webpackChunkName: "Home" */ '../views/airConditioner/index.vue'),
  },
  { path: '/', redirect: { name: 'airConditioner' } },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
