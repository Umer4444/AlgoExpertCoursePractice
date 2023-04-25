const arr = [1,2,3,4];
const double = arr.map(num => num * 2);
console.log(double);

//
const arr1 = [1,2,3,4];
const [first,second, ...rest] = arr1;
console.log(first,second);
console.log(rest);
console.log(arr1);

//
const arr2 = [1,2,3,4];
function add(x,y){
    console.log(x + y);
}
add(arr2[0], arr2[1]);

//OR

//we can use spread array
const arr3 = [1,2,3,4];
function add(x,y){
    console.log(x + y);
}
add(...arr3);

//combining array
const arr4 = [1,2,3,4];
const arr5 = [5,6,7,8];
const combined = [0,...arr4,0.4,...arr5];
console.log(combined);

//
const name = 'Corner';
console.log('Hello ' + name);
console.log(`Hello ${name}`);

//checking 
const person = {
    company : {
        website: "Umer"
    }
}
console.log(person?.company?.website ?? 'Foo');

//
const shouldRUnCode = true;
function logWorld(){
    console.log('Helo World');
};
if (shouldRUnCode){
    logWorld();
};

//here && is used for false and false

const shouldRUnCode2 = true;
function logWorld2(){
    console.log('Helo World');
};
shouldRUnCode2 && logWorld2();