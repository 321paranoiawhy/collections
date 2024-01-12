export const $checkType = (value: any, type: string): boolean => {
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase() === type.toString().toLowerCase()
}