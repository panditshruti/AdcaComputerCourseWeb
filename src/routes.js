import { createRouter, createWebHistory } from 'vue-router';

import HelloWorld from './components/HelloWorld.vue';
import CourseDetail from './components/CourseDetail.vue';


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
   
   
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
