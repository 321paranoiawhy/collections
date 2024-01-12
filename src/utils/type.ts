// [Promise.resolve](https://262.ecma-international.org/6.0/#sec-promise.resolve)
export const isPromise = <T>(value: any): value is PromiseLike<T> => {
    return value instanceof Promise && Promise.resolve(value) == value

    // https://www.cnblogs.com/Yiero/p/17686480.html

    // return !!value
    //     && (typeof value === 'object' || typeof value === 'function')
    //     && typeof value.then === 'function'
    //
    // return !!value
    //     && typeof value === 'object'
    //     && typeof value.then === 'function'
    //     && typeof value.finally === 'function'
}

export const isAsyncFunction = (value: any): boolean => {
    return value.constructor.name === 'AsyncFunction'
}

/**
 * 判断是否为函数 (Function)
 * @param value
 */
export const isFunction = (value: any): boolean => {
    return typeof value === 'function' && value.constructor.name === 'Function'
}