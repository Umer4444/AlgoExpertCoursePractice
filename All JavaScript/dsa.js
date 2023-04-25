                                    //maps have key value pair with key beign unique and set is a set of unique
                                    //we can only add objects as keys in weak map
                                    //the values of weak sets can only be objects

//stack lifo
const stack = [];
stack.push(1);
stack.push(2);
console.log(stack.pop());


//fifo
const queue = [];
queue.push(1);
queue.push(2);
console.log(queue.shift());

//
const map = new Map();
map.set('test', 4444);
map.set(10, 'ten');
console.log(map.has('test'))

//iteration
// const map2 = new Map();
// map2.set('test', 4444);
// map2.set(10, 'ten');
// for([key, value] of map2){
//     console.log(key,value)
// }
// console.log(map2.has('test'))
// map2.forEach((value, key) => {
//     console.log(key, value);
// });

//using above code for printing full array, its key and its value
const map2 = new Map([['test', 4444],[10,'ten']]);
        //for array
const iter = map2.entries();
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
        //for array's key
const iter2 = map2.keys();
console.log(iter2.next().value);
console.log(iter2.next().value);
        //for array's key
const iter3 = map2.values();
console.log(iter3.next().value);
console.log(iter3.next().value);

//array to remove dublicate numbers
const arrr = [1,2,3,4,5,5,6,6,7,8,8,9];
console.log(Array.from((new Set(arrr))))

//linked list
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  
    prepend(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
    }
  
    delete(data) {
      if (!this.head) {
        return;
      }
      if (this.head.data === data) {
        this.head = this.head.next;
        return;
      }
      let current = this.head;
      while (current.next) {
        if (current.next.data === data) {
          current.next = current.next.next;
          if (current.next === null) {
            this.tail = current;
          }
          return;
        }
        current = current.next;
      }
    }
  
    print() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.prepend(0);
  list.delete(2);
  list.print(); // Output: 0 1 3
  