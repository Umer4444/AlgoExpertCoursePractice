document.cookie = 'user = UmerMalik secure; samesite = strict';
console.log(document.cookie);

//Storage Api
localStorage.setItem('user', 'Umer');
localStorage.setItem('course', 'frontendexpert');
console.log(localStorage.getItem('user'));
// localStorage.clear();
console.log(localStorage.getItem('user'));

//indexed db and create databae
const request = indexedDB.open('myDatabase', 1);
request.addEventListener('upgradeneeded', event => {
    const database = event.target.result;
    const store = database.createObjectStore('users', {keyPath : 'id'});
    store.add({
        id: 0,
        name: 'Umer',
        course: 'FrontendExpert'
    })
    store.add({
        id: 1,
        name: 'Ali',
        course: 'BackendExpert'
    });
})

//when database is already ready and we have to add data
// const request2 = indexedDB.open('myDatabase', 1);
// request2.addEventListener('success', event => {
//     const database = event.target.result;
//     database
//     .transaction(['users'], 'readwrite')
//     .objectStore('users')
//     .add({
//         id: 2,
//         name: 'Hello',
//         course: 'Cloud'
//     });
// })
