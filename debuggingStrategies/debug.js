const button = document.querySelector('button');
button.addEventListener('click', onclick);

function onclick(){
    const circle = document.getElementById('circle');
    const {left} = getComputedStyle(circle);
    circle.style.left = parseInt(left) + 10 + 'px';   
}