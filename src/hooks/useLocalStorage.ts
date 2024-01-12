import mitt from 'mitt'

const emitter = mitt()

const originalSetLocalStorage = localStorage.setItem
const originalGetLocalStorage = localStorage.getItem
const originalRemoveLocalStorage = localStorage.removeItem

const BEFORE_SET_LOCAL_STORAGE_EVENT = 'beforeSetLocalStorageEvent'
const BEFORE_GET_LOCAL_STORAGE_EVENT = 'beforeGetLocalStorageEvent'
const BEFORE_REMOVE_LOCAL_STORAGE_EVENT = 'beforeRemoveLocalStorageEvent'

const AFTER_SET_LOCAL_STORAGE_EVENT = 'afterSetLocalStorageEvent'
const AFTER_GET_LOCAL_STORAGE_EVENT = 'afterGetLocalStorageEvent'
const AFTER_REMOVE_LOCAL_STORAGE_EVENT = 'afterRemoveLocalStorageEvent'

localStorage.setItem = function (key, newValue) {
    const beforeSetLocalStorageEvent = new Event(BEFORE_SET_LOCAL_STORAGE_EVENT)
    beforeSetLocalStorageEvent.key = key
    beforeSetLocalStorageEvent.newValue = newValue
    window.dispatchEvent(beforeSetLocalStorageEvent)

    originalSetLocalStorage.apply(this, arguments)

    const afterSetLocalStorageEvent = new Event(AFTER_SET_LOCAL_STORAGE_EVENT)
    afterSetLocalStorageEvent.key = key
    afterSetLocalStorageEvent.newValue = newValue
    window.dispatchEvent(afterSetLocalStorageEvent)
}

export const useSetLocalStorage = (key, before = () => {
}, after = () => {
}, options = {once: true, logging: false,}) => {
    const onBeforeSetLocalStorage = (e) => {
        // e.type: setLocalStorageEvent
        options.logging && console.log(e, e.type, e.key, e.newValue)

        typeof before === 'function' && before()

        options.once && window.removeEventListener(BEFORE_SET_LOCAL_STORAGE_EVENT, onBeforeSetLocalStorage)
    }

    window.addEventListener(BEFORE_SET_LOCAL_STORAGE_EVENT, onBeforeSetLocalStorage)

    const onAfterSetLocalStorage = (e) => {
        // e.type: setLocalStorageEvent
        options.logging && console.log(e, e.type, e.key, e.newValue)

        typeof after === 'function' && after()

        options.once && window.removeEventListener(AFTER_SET_LOCAL_STORAGE_EVENT, onAfterSetLocalStorage)
    }

    window.addEventListener(AFTER_SET_LOCAL_STORAGE_EVENT, onAfterSetLocalStorage)

    if (options.once) {
        return () => {
        }
    }

    return {
        removeBefore: () => window.removeEventListener(BEFORE_SET_LOCAL_STORAGE_EVENT, onBeforeSetLocalStorage),
        removeAfter: () => window.removeEventListener(AFTER_SET_LOCAL_STORAGE_EVENT, onAfterSetLocalStorage),
    }
}

localStorage.getItem = function (key, newValue) {
    const getLocalStorageEvent = new Event(BEFORE_GET_LOCAL_STORAGE_EVENT)
    getLocalStorageEvent.key = key
    getLocalStorageEvent.newValue = newValue
    window.dispatchEvent(getLocalStorageEvent)

    originalGetLocalStorage.apply(this, arguments)

    const afterGetLocalStorageEvent = new Event(AFTER_GET_LOCAL_STORAGE_EVENT)
    afterGetLocalStorageEvent.key = key
    afterGetLocalStorageEvent.newValue = newValue
    window.dispatchEvent(afterGetLocalStorageEvent)
}

export const useGetLocalStorage = (key, before = () => {
}, after = () => {
}, options = {once: true, logging: false,}) => {
    const onBeforeGetLocalStorage = (e) => {
        // e.type: setLocalStorageEvent
        options.logging && console.log(e, e.type, e.key, e.newValue)

        typeof before === 'function' && before()

        options.once && window.removeEventListener(BEFORE_GET_LOCAL_STORAGE_EVENT, onBeforeGetLocalStorage)
    }

    window.addEventListener(BEFORE_GET_LOCAL_STORAGE_EVENT, onBeforeGetLocalStorage)

    const onAfterGetLocalStorage = (e) => {
        // e.type: setLocalStorageEvent
        options.logging && console.log(e, e.type, e.key, e.newValue)

        typeof after === 'function' && after()

        options.once && window.removeEventListener(AFTER_GET_LOCAL_STORAGE_EVENT, onAfterGetLocalStorage)
    }

    window.addEventListener(AFTER_GET_LOCAL_STORAGE_EVENT, onAfterGetLocalStorage)

    if (options.once) {
        return () => {
        }
    }

    return {
        removeBefore: () => window.removeEventListener(BEFORE_GET_LOCAL_STORAGE_EVENT, onBeforeGetLocalStorage),
        removeAfter: () => window.removeEventListener(AFTER_GET_LOCAL_STORAGE_EVENT, onAfterGetLocalStorage),
    }
}

localStorage.removeItem = function (key, newValue) {
    const removeLocalStorageEvent = new Event(BEFORE_REMOVE_LOCAL_STORAGE_EVENT)
    removeLocalStorageEvent.key = key
    removeLocalStorageEvent.newValue = newValue
    window.dispatchEvent(removeLocalStorageEvent)

    originalRemoveLocalStorage.apply(this, arguments)

    const afterRemoveLocalStorageEvent = new Event(AFTER_REMOVE_LOCAL_STORAGE_EVENT)
    afterRemoveLocalStorageEvent.key = key
    afterRemoveLocalStorageEvent.newValue = newValue
    window.dispatchEvent(afterRemoveLocalStorageEvent)
}

export const useRemoveLocalStorage = (key, before = () => {
}, after = () => {
}, options = {once: true, logging: false,}) => {
    const onBeforeRemoveLocalStorage = (e) => {
        // e.type: setLocalStorageEvent
        options.logging && console.log(e, e.type, e.key, e.newValue)

        typeof before === 'function' && before()

        options.once && window.removeEventListener(BEFORE_REMOVE_LOCAL_STORAGE_EVENT, onBeforeRemoveLocalStorage)
    }

    window.addEventListener(BEFORE_REMOVE_LOCAL_STORAGE_EVENT, onBeforeRemoveLocalStorage)

    const onAfterRemoveLocalStorage = (e) => {
        // e.type: setLocalStorageEvent
        options.logging && console.log(e, e.type, e.key, e.newValue)

        typeof after === 'function' && after()

        options.once && window.removeEventListener(AFTER_REMOVE_LOCAL_STORAGE_EVENT, onAfterRemoveLocalStorage)
    }

    window.addEventListener(AFTER_REMOVE_LOCAL_STORAGE_EVENT, onAfterRemoveLocalStorage)

    if (options.once) {
        return () => {
        }
    }

    return {
        removeBefore: () => window.removeEventListener(BEFORE_REMOVE_LOCAL_STORAGE_EVENT, onBeforeRemoveLocalStorage),
        removeAfter: () => window.removeEventListener(AFTER_REMOVE_LOCAL_STORAGE_EVENT, onAfterRemoveLocalStorage),
    }
}