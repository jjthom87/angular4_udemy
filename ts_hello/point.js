"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    // private x: number;
    // private y: number;
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
        // this not needed
        // this.x = x;
        // this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this._x + ", Y: " + this._y);
    };
    Point.prototype.getDistance = function (another) {
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error("Value Can not be less than 0");
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
