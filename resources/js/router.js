import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SingleCard from "./pages/SingleCard";

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/about",
            name: "about",
            component: AboutPage,
        },
        {
            path: "/contact",
            name: "contact",
            component: ContactPage,
        },
        {
            path: "/posts/:id",
            name: "posts",
            component: SingleCard,
        }
    ],
});

export default router;
