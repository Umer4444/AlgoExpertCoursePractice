const secondli = document.getElementById('second-li');
const listItems = document.querySelectorAll('li')
listItems[0].setAttribute('class', 'big blue');
listItems[0].style.background='green';

// listItems[0].classList.toggle('big');
// listItems[0].classList.toggle('big');
// these bot are used manually add or remove
// listItems[0].classList.add('blue');
// listItems[0].classList.remove('big');

const p = document.createElement('p');
p.textContent = 'Hello World';

document.body.append(p);

for (let i = 0; i < 3; i++){
    const parent = document.querySelector('ol');
    const li = document.createElement('li');
    li.textContent = `List item with i=${i}`;
    parent.append(li);
}

console.log(listItems[0].parentNode);

//listItems[0].remove();

const listItems2 = document.querySelectorAll('li');
listItems2[0].classList.add('big');
console.log(window.getComputedStyle(listItems2[0]).fontSize);

const scrollable = document.getElementById('scrollable');
console.log(scrollable.clientHeight);
console.log(scrollable.offsetHeight);
console.log(scrollable.scrollHeight);

console.log(scrollable.offsetTop);
scrollable.querySelectorAll('p')[5].scrollIntoView();

scrollable.scrollTo({
    top: scrollable.querySelectorAll('p')[2].offsetTop,
    behavior : "smooth"
})