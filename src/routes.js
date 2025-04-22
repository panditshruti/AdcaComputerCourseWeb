import { createRouter, createWebHistory } from 'vue-router';

import HelloWorld from './components/HelloWorld.vue';
import CourseDetail from './components/CourseDetail.vue';
import HelpCenter from './components/HelpCenter.vue';
import About from './components/About.vue';


const routes = [
    {
        name: 'HelloWorld',
        component: HelloWorld,
        path: '/',
    },
    {
        name: 'CourseDetail',
        component: CourseDetail,
        path: '/CourseDetail',
    },
   
    {
        name: 'HelpCenter',
        component: HelpCenter,
        path: '/HelpCenter',
    },
    {
        name: 'About',
        component: About,
        path : '/About'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
