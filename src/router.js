import { createWebHistory, createRouter } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import ProjectDetailPage from './pages/ProjectDetailPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import TypesPage from './pages/TypesPage.vue';
import ContactsPage from './pages/ContactsPage.vue';
import TechnologiesPage from './pages/TechnologiesPage.vue';

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
        },
        {
            path: '/projects/project-:id',
            name: 'projectDetail',
            component: ProjectDetailPage
        },
        {
            path: '/types',
            name: 'types',
            component: TypesPage
        },
        {
            path: '/technologies',
            name: 'technologies',
            component: TechnologiesPage
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsPage
        },
        { 
            path: '/:pathMatch(.*)*', 
            name: 'not-found',
            component: NotFoundPage 
        }
    ]
});