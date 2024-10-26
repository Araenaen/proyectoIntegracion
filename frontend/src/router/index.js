import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import BlogPage from '@/views/BlogPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import NewsPage from '@/views/NewsPage.vue';
import ServicesPage from '@/views/ServicesPage.vue';
import StorePage from '@/views/StorePage.vue';


const routes = [
    {
        path: '/',
        component: AppLayout,
        children: [
            { path: '', component: HomePage },
            { path: 'about', component: AboutPage },
            { path: 'blog', component: BlogPage },
            { path: 'contact', component: ContactPage },
            { path: 'news', component: NewsPage },
            { path: 'services', component: ServicesPage },
            { path: 'store', component: StorePage },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;