import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { CodeInspectorPlugin } from 'code-inspector-plugin'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            script: {
                // vue 3.3 引入 defineModel
                // https://blog.vuejs.org/posts/vue-3-3
                // VueUse useVModel
                // https://vueuse.org/core/useVModel/
                defineModel: true,
            },
        }),
        // https://inspector.fe-dev.cn/guide/start.html
        CodeInspectorPlugin({
            bundler: 'vite',
        }),
        UnoCSS(),
    ],
    css: {
        preprocessorOptions: {
            sass: {
                prependData: `
                @import '@/assets/styles/mixin.g.scss';
                @import '@/assets/styles/variables.g.scss';
                `,
                additionalData: `@import ''`,
            }
        }
    },
    resolve: {
        alias:
            [
                {find: '@', replacement: '/src'},
                {find: '@comp', replacement: '/src/components'},
                {find: '@img', replacement: '/src/assets/img'},
                {find: '@styles', replacement: '/src/assets/styles'},
                {find: '@assets', replacement: '/src/assets'},
            ]
    },
})
