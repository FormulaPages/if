(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "module"], factory);
    } else if (typeof exports !== "undefined" && typeof module !== "undefined") {
        factory(exports, module);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod);
        global.index = mod.exports;
    }
})(this, function (exports, module) {
    "use strict";

    module.exports = IF;

    function IF(true_or_false, true_value, false_value) {
        return true_or_false ? true_value : false_value;
    }
});
