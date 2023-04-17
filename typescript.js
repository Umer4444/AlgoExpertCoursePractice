var test = 123;
test = '1234';
console.log(test);
var test2 = 'Off';
test2 = 'On';
console.log(test2);
//enum
var State2;
(function (State2) {
    State2["On1"] = "on";
    State2["Off1"] = "off";
})(State2 || (State2 = {}));
var test3 = State2.Off1;
test3 = State2.On1;
console.log(test3);
//function
// function add(x:number, y:number): void{
//     console.log(x + y)
// }
// add(1,2);
function add(x, y) {
    return x + y;
}
console.log(add(1, 2));
