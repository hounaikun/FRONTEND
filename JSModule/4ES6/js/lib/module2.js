"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var a = exports.a = 5;
var fun = function fun() {
    exports.a = a += 1;
    console.log(a);
};
exports.fun = fun;