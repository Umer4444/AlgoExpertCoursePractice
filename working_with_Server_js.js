const BASE_API = 'http://localhost:8080/api';
const JSON_API = 'http://localhost:8080/jsonapi';
const POST_API = 'http://localhost:8080/postapi';
const SLOW_API = 'http://localhost:8080/slowapi';

const url = new URL(BASE_API);
url.searchParams.set('FirstName', 'Corner');
url.searchParams.set('LastName', 'Hello');

fetch(url)
    .then(res => res.text())
    .then(console.log)
    .catch(error => console.error('Oh no:' + error));
console.log('After fetch');

//for POST method
const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

async function onSubmit(event){
    event.preventDefault();

    const options = {
        method: 'POST',
        body: new FormData(form)
    };
    try {
        const response = await fetch(POST_API, options);
        const text = await response.text();
        console.log(text);
    }
    catch (error){
        console.error('Oh no:' + error);
    }
}