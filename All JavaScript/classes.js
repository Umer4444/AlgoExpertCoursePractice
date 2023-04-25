const person = {
    isHuman : true
};
const child = Object.create(person);
child.maxAge = 18;
console.log(person.maxAge);
console.log(child.maxAge);



//
function Person(name){
    this.name = name;
}

Person.prototype = {
    constructor: Person,
    isHuman: true
};
const Umer = new Person("Umer")
const Ali = new Umer.constructor("Ali")
Person.prototype.speak = function(){
    console.log("Hello I am " + this.name);
    console.log(this.isHuman);
};
Umer.speak();
Ali.speak();

//class
class Person2{
    isHuman2 = true;
    constructor(name){
        this.name = name
    }
    speak(){
        console.log("Hello this " + this.name);
    }
}
const first = new Person2('First');
const second = new Person2('Second');
first.speak();
console.log(first.isHuman2);
console.log(second.isHuman2);
