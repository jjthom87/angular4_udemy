function log(message) {
    console.log(message);
}
log("Hello");
var count = 2;
var loopThis = function () {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    //console.log(i)
};
loopThis();
var counter = 5;
//counter = 'a';
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a'];
// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
;
console.log(Color);
var backgroundColor = Color.Green;
a = 1;
// a = true;
// a = 'a' 
