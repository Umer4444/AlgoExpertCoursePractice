function* genNumbers(){
    yield 1;
    yield 2;
    yield 3;
    return 4;
    yield 5;
}
const generator = genNumbers();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next())
console.log(generator.next())

//
function* generators(){
    yield 1;
    yield 2;
}
function* generators2(){
    yield 3;
    yield 4;
}

function* genNumbers(){
    yield* generators();
    yield 4.4;
    yield* generators2();
}

const generator1 = genNumbers();
console.log(generator1.next())
console.log(generator1.next())
console.log(generator1.next())
console.log(generator1.next())
console.log(generator1.next())