import $scrollIntoView from 'scroll-into-view-if-needed'

/**
 * 判断元素是否可纵向滚动
 * @param {HTMLElement} element
 * @param debug 是否打印参数错误信息
 */
export const isElementVerticalScrollable = (element: HTMLElement | null, debug = false) => {
    if (!(element instanceof HTMLElement)) {
        debug && console.warn("请传入 DOM 元素", element)
        return false
    }

    if (element.scrollTop > 0) {
        return true
    } else {
        element.scrollTop++
        // 元素不能滚动的话，scrollTop 设置不会生效，scrollTop 仍为 0
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop
        const top = element.scrollTop
        // 可滚动, 重置滚动位置
        top && (element.scrollTop = 0)
        return top > 0
    }
}

/**
 * 判断元素是否可横向滚动
 * @param {HTMLElement} element
 * @param debug 是否打印参数错误信息
 */
export const isElementHorizontalScrollable = (element: HTMLElement | null, debug = false) => {
    if (!(element instanceof HTMLElement)) {
        debug && console.warn("请传入 DOM 元素", element)
        return false
    }

    if (element.scrollLeft > 0) {
        return true
    } else {
        element.scrollLeft++
        // 元素不能滚动的话，scrollLeft 设置不会生效，scrollLeft 仍为 0
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
        const left = element.scrollLeft
        // 可滚动, 重置滚动位置
        left && (element.scrollLeft = 0)
        return left > 0
    }
}

export const scrollElementIntoView = () => {
    $scrollIntoView(node, {behavior: 'smooth', scrollMode: 'if-needed'})
}