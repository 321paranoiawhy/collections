import { RouteRecordRaw } from 'vue-router'

export const constantRoutes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'login',
        // component: () => import('@/pages/login.vue'),
    },
    {
        path: '/401',
        name: '401',
        // component: () => import('@/pages/401.vue'),
    },
    {
        path: '/404',
        name: '404',
        // component: () => import('@/pages/404.vue'),
    },
    {
        path: '/:pathMatch(.*)',
        name: 'redirect',
        // component: () => import('@/pages/redirect.vue'),
    },
]