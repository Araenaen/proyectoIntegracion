import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import BlogPage from '@/views/BlogPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import ServicesPage from '@/views/ServicesPage.vue';
import StorePage from '@/views/StorePage.vue';
import CartPage from '@/views/CartPage.vue';


const routes = [
    {
        path: '/',
        component: AppLayout,
        children: [
            { path: '', component: HomePage },
            { path: 'about', component: AboutPage },
            { path: 'blog', component: BlogPage },
            { path: 'contact', component: ContactPage },
            { path: 'services', component: ServicesPage },
            { path: 'store', component: StorePage },
            { path: 'cart', component: CartPage },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;