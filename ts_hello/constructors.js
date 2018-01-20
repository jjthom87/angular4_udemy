"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var point = new point_1.Point(1, 2);
//to prevent the coordinates from being changed after being initialized
//look at the private, try to write point.
point.draw();
point.x;
point.x = 10;
point.draw();
