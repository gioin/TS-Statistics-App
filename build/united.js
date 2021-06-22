"use strict";
var HoldAnything = /** @class */ (function () {
    function HoldAnything() {
    }
    HoldAnything.prototype.add = function (a) {
        return a;
    };
    return HoldAnything;
}());
var holdAnything = new HoldAnything();
holdAnything.data = 123;
holdAnything.add(10);
var holdString = new HoldAnything();
holdString.data = 'gdsgsfa';
