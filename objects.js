myKey = 'key'
const website = {
    Name : "Algoexopert",
    Rating: 5,
    Founder: ["Umer", "Ali"],
    'multi word key': 0,
    [myKey]: 4
}
console.log(website)

//
const name = "UMER";
const obj = {
    name: name,
};
console.log(obj);

//another way creating an object
const obj1 = new Object();
obj.name = "Umer";
console.log(obj)

//
function Website(name, age, num){
    this.name = name;
    this.age = age;
    this.num = num;
}
const frontEndExpert = new Website('Umer', 21, '03435576829');
console.log(frontEndExpert)

//symbol
const id = Symbol('id');
const id2 = Symbol('id2');
console.log(id === id2);
const obj2 = {
    [id]: 4,
    [id2]: 8,
    id: 'hello',
    id: 'Ali'
};
console.log(obj2);

//get
const website2 = {
    Name : "Algoexopert",
    Rating: 5,
    Founder: ["Umer", "Ali"],
    sayHello(){
        console.log('hello');
    },
    get getRating(){
        return this.Rating * 2;
    },
    set setRating(value){
        this.Rating = value;
    }
};
website2.sayHello();
console.log(website2.getRating);
website2.setRating = 6;
console.log(website2.getRating);

//inherit from other object
const website3 = {
    Name : "Algoexopert",
    Rating: 5,
    Founder: ["Umer", "Ali"]
}
const obj3 = {
    title: 'Hello',
    __proto__: website
};
console.log(obj3.Name)

//
website2.sayHello();
console.log(website2.getRating);
website2.setRating = 6;
console.log(website2.getRating);

//inherit from other object
const website4 = {
    Name : "Algoexopert",
    Rating: 5,
    Founder: ["Umer", "Ali"]
}
const obj4 = {
    title: 'Hello',
    foo: 10,
    __proto__: website
};
const obj5 = {
    orginal: 1234
}
Object.assign(obj5, obj4);
console.log(obj5);

//
const website5 = {
    Name : "Algoexopert",
    Rating: 5,
    Founder: ["Umer", "Ali"]
}
const obj6 = {
    title: 'Hello',
    foo: 10,
    __proto__: website
};
Object.seal(website5);
website5.Name = "Frontend";
website.foo = 9;
console.log(Object.isSealed(website5));
console.log(website5);