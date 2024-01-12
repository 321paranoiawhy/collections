import { nextTick } from "vue"
import $scrollIntoView from "smooth-scroll-into-view-if-needed"

export type T_ElConfig = {
    elSelector: string
    elRef: HTMLElement | null

    scrollWrapperSelector: string
    scrollWrapperRef: HTMLElement | null
}

export type T_Options = {
    scrollBehavior: "auto" | "smooth"
    // scrollBehavior: "auto" | "instant" | "smooth"
}

const defaultElConfig: T_ElConfig = Object.freeze({
    /**
     * dom 选择器
     */
    elSelector: ".el-table",

    /**
     * dom ref
     *
     * take precedence over elSelector (优先级高于 elSelector)
     */
    elRef: null,

    scrollWrapperSelector: ".el-scrollbar__wrap",

    scrollWrapperRef: null
})

const defaultOptions: T_Options = Object.freeze({
    scrollBehavior: "smooth"
})

/**
 * 滚动复位, 多用于表格 (重置搜索/切换页码/切换页大小)
 *
 * @param elConfig
 * @param options
 */
export const useResetScroll = (
    elConfig: Partial<T_ElConfig> = defaultElConfig,
    options: Partial<T_Options> = defaultOptions
) => {
    const _elConfig = { ...defaultElConfig, ...elConfig }
    const _options = { ...defaultOptions, ...options }

    nextTick(() => {
        const el =
            _elConfig.elRef
                ? _elConfig.elRef
                : document.querySelector(_elConfig.elSelector)


        if (el) {
            // https://www.npmjs.com/package/smooth-scroll-into-view-if-needed
            $scrollIntoView(el, {
                scrollMode: "if-needed",
                behavior: _options.scrollBehavior
            })

            const scrollWrapper =
                _elConfig.scrollWrapperRef
                    ? _elConfig.scrollWrapperRef
                    : el.querySelector(_elConfig.scrollWrapperSelector)

            if (scrollWrapper) {
                scrollWrapper.scrollTo({
                    // 横向(水平方向)滚动复位
                    top: 0,
                    // 纵向(垂直方向)滚动复位
                    left: 0,
                    behavior: _options.scrollBehavior
                })
            }
        }
    })
}
