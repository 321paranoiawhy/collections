// This can be directly added to any of your `.ts` files like `router.ts`
// It can also be added to a `.d.ts` file. Make sure it's included in
// project's tsconfig.json "files"
import 'vue-router'

// To ensure it is treated as a module, add at least one `export` statement
export {}

// https://router.vuejs.org/guide/advanced/meta.html#TypeScript
declare module 'vue-router' {
    interface RouteMeta {
        /**
         * 是否需要鉴权
         */
        noAuth?: boolean
        /**
         * 是否需要缓存
         *
         * router 中配置的 name 属性值须与 component name 一致路由缓存方可生效
         */
        noCache?: boolean
        /**
         * 是否需要在左侧边栏中隐藏
         */
        hidden?: boolean
    }
}