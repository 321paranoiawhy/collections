// export const getCookie = (key) => {
//     return document.cookie.match(new RegExp(`${key}=(?<key>\\w+)`))?.groups?.key
// }

// https://zh.javascript.info/cookie#fu-lu-cookie-han-shu

/**
 * 读取 cookie
 * @param key
 */
export const getCookie = (key) => {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + key.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}

/**
 * 设置 cookie
 * @param key
 * @param value
 * @param options
 * @example setCookie('user', 'John', {secure: true, 'max-age': 3600})
 */
export const setCookie = (key, value, options = {}) => {
    options = {
        path: '/',
        // 如果需要，可以在这里添加其他默认值
        ...options
    }

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString()
    }

    let updatedCookie = encodeURIComponent(key) + "=" + encodeURIComponent(value)

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey
        let optionValue = options[optionKey]
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue
        }
    }

    document.cookie = updatedCookie
}

export const deleteCookie = (key) => {
    setCookie(key, "", {
        'max-age': -1
    })
}
