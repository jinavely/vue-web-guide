import Vue from 'vue';
import VueRouter from 'vue-router';
import defaultLayout from '../layouts/default/index.vue';
import authLayout from '../layouts/authentication/index.vue';

import Home from '../pages/Home.vue';
import Environment from '../pages/Environment.vue';
import Templete from '../pages/Templete.vue';
import Dashboard from '../pages/Dashboard.vue';
import Transition from '../pages/Transition.vue';
import NotFound from '../pages/NotFound.vue';

import Main from '../pages/Main.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/main',
            component: authLayout,
            children: [
                {
                    path: '/main',
                    component: Main,
                },
            ],
        },
        {
            path: '/',
            component: defaultLayout,
            children: [
                {
                    path: '/',
                    component: Home,
                },
                {
                    path: '/environment',
                    component: Environment,
                },
                {
                    path: '/templete',
                    component: Templete,
                },
                {
                    path: '/dashboard',
                    component: Dashboard,
                },
                {
                    path: '/transition',
                    component: Transition,
                },
                {
                    path: '/*',
                    name: 'NotFound',
                    component: NotFound,
                },
            ],
        },
    ],
});
