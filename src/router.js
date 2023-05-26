import { createWebHistory, createRouter } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';


export { router };

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsPage
        }
    ]
});