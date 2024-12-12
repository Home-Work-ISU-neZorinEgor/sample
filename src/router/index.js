import { createRouter, createWebHistory } from 'vue-router';
import HomeBase from '../components/HomeBase.vue';
import AboutBase from '../components/AboutBase.vue';
import ContactBase from '../components/ContactBase.vue';

const routes = [
  { path: '/', component: HomeBase },
  { path: '/about', component: AboutBase },
  { path: '/contact', component: ContactBase },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
