function example(){
    const num = 5;
    return function(){
        console.log(num);
    }
}
 const innerFunction = example();
 innerFunction();