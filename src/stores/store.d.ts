import { createPinia, setMapStoreSuffix } from 'pinia'

setMapStoreSuffix('') // completely remove the suffix
export const pinia = createPinia()

declare module 'pinia' {
    export interface MapStoresCustomization {
        // set it to the same value as above
        suffix: ''
    }
}