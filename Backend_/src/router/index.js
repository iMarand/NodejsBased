import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";

const app = {
    router: createRouter({
        history: createRouter(), 
        routes: [{route: "/", component: Home}]
    })
}

export default app.router;