import { routes } from '@/router/routes';
import { createRouter, createWebHistory } from 'vue-router';

export const setupRouter = async () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: await Promise.all(routes),
  });

  router.afterEach(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });

  return router;
};

export const router = setupRouter();
