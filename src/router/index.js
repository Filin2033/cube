import { createRouter, createWebHistory } from 'vue-router';
import Hello from '@/pages/Hello.vue';
import ToDo from '@/pages/ToDo.vue'; 

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/todo',
    name: 'ToDo',
    component: ToDo
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;