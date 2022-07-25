import { createApp } from "vue";
import App from "./App.vue";
import './assets/tailwind.css'
import { router as setupRouter } from "@/router";

const init = async () => {
    const router = await setupRouter;
    const app = createApp(App);
    // await router.isReady()

    app.use(router).mount("#app");
};

init();
