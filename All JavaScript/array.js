const arr = [1,2,3];
console.log(arr);

//
const arr1 = new Array(4);
arr1.fill(0);
console.log(arr1)

//finding an element in array
const arr3 = [1,2,3];
console.log(arr3.indexOf(3));

//adding element in array
const arr4 = [1,2,3];
arr4.push(6,7,8);
console.log(arr4);

//deleting element in array
const arr5 = [1,2,3];
arr5.pop();
console.log(arr5);

//for add an delete
const arr6 = [1,2,3];
arr6.push(9,8,10);
console.log(arr6.pop(2));
console.log(arr6);

//remove and replace
const arr7 = [1,2,3];
arr7.splice(0,2, 'HELLO');
console.log(arr7)

//slice
const arr8 = [1,2,3];
const newArr = arr8.slice(0,2);
console.log(newArr);
console.log(arr8);

//concat
const arr9 = [1,2,3];
const newArr2 = arr9.concat([7,8]);
console.log(newArr2);
console.log(arr9);

//reverse
const arr10 = [1,2,3,4];
arr10.reverse();
console.log(arr10);

//join
const arr11 = [1,2,3,4];
console.log(arr11.join("|"));
console.log(arr11);

//foreach
const arr12 = [1,2,3,4];
arr.forEach(function(value, index){
    console.log(value, index);
});

//
const arr13 = [1,2,3,4];
arr.forEach(function(value, index){
    console.log(value, index, arr13);
});

//
const arr14 = [1,2,3,4];
arr.forEach(function(value, index){
    console.log(value, index, this);
}, {num:10}
);

//map
const arr15 = [1,2,3,4];
const mappedArray = arr15.map(function(value, index, array){
    return value + index + this.num;
}, {num:10});
console.log(arr15)
console.log(mappedArray)

//filter
const arr16 = [6,7,8];
const filterArray = arr16.filter(function(value, index, array){
    return value > this.num;
}, {num:7});
console.log(filterArray);
console.log(arr16)

//find is same as filter but it is used to only find one element nor a array element such  as filter, to find index use .findIndex
const arr17 = [4,5,6,7];
const findArray = arr17.find(function(value, index, array){
    return value > this.num;
}, {num:5});
console.log(findArray);
console.log(arr17)

//every use such as true condition of checking every number
const arr18 = [4,5,6,7];
const everyArray = arr18.every(function(value, index, array){
    return value > this.num;
}, {num:5});
console.log(everyArray);
console.log(arr18)

//some use to check some thing is available or not
const arr19 = [4,5,6,7];
const someArray = arr19.some(function(value, index, array){
    return value > this.num;
}, {num:5});
console.log(someArray);
console.log(arr19)

//reduce is used for addition and subtraction of array
const arr20 = [1,2,3,4];
const sum = arr20.reduce(function(accumulator, currValue){
    return accumulator + currValue;
}, 0);
console.log(arr20);
console.log(sum);

const arr21 = [1,2,3,4];
const sub = arr21.reduce(function(accumulator, currValue){
    return accumulator - currValue;
}, 0);
console.log(arr21);
console.log(sub);

//sort
const arr22 = [9,4,6,2,1];
arr22.sort();
console.log(arr22);

const arr23 = [3,2,5,4];
arr23.sort(compareNumber);
function compareNumber(firstNumber, SecondNumber){
    return firstNumber - SecondNumber;
};
console.log(arr23)