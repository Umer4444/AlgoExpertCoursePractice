// for (let i = 0; i < 3000000000; i++); {
//     1 + 2;
// }

self.addEventListener('message', event => {
    console.log(event.data);
    postMessage(event.data * 10);
});
console.log('slow operation finished');