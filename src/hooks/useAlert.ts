const originalAlert = window.alert

window.alert = function ()  {
    console.log('before alert hook')

    originalAlert.apply(this, arguments)

    console.log('after alert hook')
}

window.alert.toString = function () {
    return '[function alert() { [native code] }]'
}