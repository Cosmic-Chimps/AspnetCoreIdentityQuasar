import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'home', path: '', component: () => import('pages/Index.vue') },
      { name: 'login', path: '/login', component: () => import('pages/Login.vue') },
      { name: 'register', path: '/register', component: () => import('pages/Register.vue') },
      { name: 'logout', path: '/logout', component: () => import('pages/Logout.vue') },
      { name: 'authLogoutCallback', path: '/authentication/logout-callback', redirect: '/' },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
