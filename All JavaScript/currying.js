function sum(a,b,c,){
    return a+b+c;
}
function subtract(a,b,c,){
    return a-b-c;
}
function curry(func){
    return (a) => (b) => (c) => func(a,b,c);
}

const curriedSum = curry(sum);    
const curriedSubtract = curry(subtract);

console.log(sum(1,4,11))
console.log(curriedSum(1)(4)(11))
console.log(curriedSubtract(1)(4)(10))