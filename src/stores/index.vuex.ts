import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {

}

// webpack require.context()
const modulesFiles = require.context('./modules', true, /\.ts$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    // set './app.js' => 'app'
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
    return modules
}, {})

const getters = {

}

const store = new Vuex.Store({
    state,
    modules,
    getters
})

export default store