let cookieValue = document.cookie

Object.defineProperty(document, 'cookie', {
    // writable: false,
    // configurable: false,

    get: function () {
        console.log('读取 cookie 前')
        return cookieValue
    },
    set: function (value) {
        console.log('设置 cookie 前', cookieValue)

        cookieValue = value

        console.log('设置 cookie 后', cookieValue)
    },
})