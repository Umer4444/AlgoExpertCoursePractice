type NumString = number | string;
let test: NumString = 123;
test = '1234';
console.log(test)

//
type State = 'On' | 'Off';
let test2: State = 'Off';
test2 = 'On';
console.log(test2)

//enum
enum State2{
    On1 = 'on',
    Off1 = 'off'
}
let test3: State2= State2.Off1;
test3 = State2.On1;
console.log(test3)

//function
// function add(x:number, y:number): void{
//     console.log(x + y)
// }
// add(1,2);

function add(x:number, y:number): number{
    return x + y;
}
console.log(add(1,2));


//
interface GetterSetter<Key,Value>{
    set :(key: Key, value: Value) => void;
    get : (key: Key) => Value;
}

class StringNumGetterSetter implements GetterSetter<string, number> {
    map: Map<string, number> = new Map();
    set(key: string, value:number): void{
        this.map.set(key,value);
    }
    get(key: string): number{
        return this.map.get(key);
    }
}
