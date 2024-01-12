import { isRef, watch } from "vue"
import { $checkType } from "@/utils"

export type T_Include_Options = {

}

export const watchInclude = (source: Object|[]|Function, cb = () => {}, options = {}) => {
    // 1. value, 如 ref
    if ($checkType(source, 'object')) {

    } else if ($checkType(source, 'array')) {

    }

    // 2. getter, 如 props
    if ($checkType(source, 'function')) {
        const data = source()

        const func = () => {
            const arr = []

            return arr
        }

        return watch(func, cb)
    }


    return watch(source, cb)
}