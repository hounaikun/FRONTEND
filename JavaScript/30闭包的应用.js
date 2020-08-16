(function(window) {
    var msg = "我是一个函数内部的变量"
    function doSomething() {
        console.log('doSomething' + msg.toUpperCase());
    }
    function doOtherthing() {
        console.log('doOtherthing' + msg.toLowerCase());
    }
    window.myModule = {
        doSomething : doSomething,
        doOtherthing: doOtherthing
    }
}(window));