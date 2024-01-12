import { createRouter, createWebHistory } from 'vue-router'
import constantRoutes from './constant-routes.ts'

// 自动导入 router/modules 中的 *.module.ts 路由
// https://vitejs.dev/guide/features#glob-import
// 实现原理: https://github.com/mrmlnc/fast-glob
const lazyModules = import.meta.glob('./modules/*.module.ts')
// const eagerModules = import.meta.glob('./modules/*.module.ts', { eager: true })
// const eagerModules = import.meta.globEager('./modules/*.module.ts')

const routes = [...constantRoutes]

for (const path in lazyModules) {
    lazyModules[path]().then((module) => {
        // './modules/example.module.ts' => example
        const fileName = path.replace('./modules/', '').replace('.module.ts', '')

        console.log(path, fileName, module)
        // console.log(path, fileName, module.default)

        routes.push(...module.default)
    })
}

const router = createRouter({
    // history: createWebHistory()
    // hash: createWebHashHistory()
    // abstract: createMemoryHistory()
    history: createWebHistory(),
    routes, // short for `routes: routes`
    scrollBehavior(to, from, savedPosition) {
        return savedPosition ? savedPosition : { top: 0 }
    },
})

export default router
