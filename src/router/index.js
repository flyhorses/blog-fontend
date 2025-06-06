import HomePage from "@/components/Home/HomePage.vue";
import LoginPage from "@/components/Login/LoginPage.vue";
import {createRouter, createWebHashHistory} from "vue-router";

const routes=[
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/Login',
        name: 'Login',
        component: LoginPage
    }
]

const router =createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;

