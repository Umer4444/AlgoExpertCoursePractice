const  button = document.querySelector('button');

button.addEventListener('mouseup', onClick);

// function onClick(event){
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(this);
//     console.log("You clicked me");
// }

function onClick(event){
    console.log(event.target);
    console.log(this);
}

window.addEventListener('keypress', event =>{
    console.log(event.code);
});

const scrollable = document.getElementById('scrollable');
scrollable.addEventListener('scroll', event =>{
    console.log(event.target.scrollTop);
})
button.addEventListener('dragstart', event =>{
    console.log(event);
})
scrollable.addEventListener('drop', event =>{
    scrollable.prepend(button);
})
scrollable.addEventListener('dragover', event =>{
    event.preventDefault();
})
scrollable.addEventListener('click', event =>{
    if (event.target !== this){
        event.target.textContent = 'Clicked';
    }
})