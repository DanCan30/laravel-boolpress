import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SingleCard from "./pages/SingleCard";
import CategoriesIndexPage from "./pages/CategoriesIndexPage";
import TagsIndexPage from "./pages/TagsIndexPage";
import CategoryPostsPage from "./pages/CategoryPostsPage";

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
        },
        {
            path: "/categories",
            name: "categories",
            component: CategoriesIndexPage,
        },
        {
            path: "/categories/:slug",
            name: "categoryPostsPage",
            component: CategoryPostsPage,
        },
        {
            path: "/tags",
            name: "tags",
            component: TagsIndexPage,
        }
    ],
});

export default router;
