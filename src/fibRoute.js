"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fibonacci = require("./fib");
exports.default = (function (req, res) {
    var num = req.params.num;
    var fibN = fibonacci(parseInt(num));
    var result = "fibonacci(".concat(num, ") is ").concat(fibN);
    if (fibN < 0) {
        result = "fibonacci(".concat(num, ") is undefined");
    }
    res.send(result);
});
