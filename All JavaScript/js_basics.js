// let is used to assign value
let num = 10;
console.log(num);

// const is also used to asign value but it can not rearrange like let
const num1 = 11;
console.log(num1);

//floor used for round off to its number before point
let num3 = 16.5
console.log(Math.floor(num3))

//round used for round off
let num4 = 16.5
console.log(Math.round(num4))

const person = {
    name:"Umer",
    age:"21"
}
console.log(person)

//for json
const person2 = {
    name:"Umer",
    age:"21"
}
console.log(JSON.parse(JSON.stringify(person2)));


//
const set = new Set();
set.add('hello')
set.add('world')
console.log(set.has('hello'))
console.log(set);

//function
function addTwo(num) {
    return num + 2;
}
function callFunc(func, param){
    console.log(func(param));
}
callFunc(addTwo, 10);

//for loop 
for (let i = 0; i < 4; i++){
    console.log(i);
    if(i === 2){
    break;
    }
}

for (const value of 'abc'){
    console.log(value);
}

//do while
let i = 10;
do{
    console.log(i);
    i++;
}
while(i<1)

//
const obj = {
    name:"Corner",
    age: 22
};
for(const key in obj){
    console.log(key, obj[key]);
}

//if else
const condition = true;
if(condition){
    console.log('It was true');
}
else if(condition === false){
    console.log('It was false')
}
else{
    console.log('Default')
}

//switch statement
const myNum = 4;
switch (myNum){
    case 1:
        console.log("It was 1");
        break;
    case 2:
        console.log("It was 2");
        break;
    default:
        console.log("Default");
}

//ternary 
const myNum2 = 8;
console.log(myNum2 > 4 ? 'greater than 4' : 'less than 4')

//error handling
try {
    throw new Error('Oh no');
}
catch(error){
    console.log(error);
}
throw new Error('Oh no');
console.log('Here')