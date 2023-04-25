const start = document.getElementById('start');
const stop = document.getElementById('stop');
const count = document.getElementById('count');
const reset = document.getElementById('reset');


let timerID;
let isRunning = false;

start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);

function startTimer(){
    if (!isRunning) {
        timerID = setInterval(()=>{
            count.textContent++;
        }, 1000);
        isRunning = true;
    }
}
function stopTimer(){
    clearInterval(timerID);
    isRunning = false;
}
function resetTimer(){
    clearTimeout(count);
    clearInterval(timerID);
    count.textContent = 0;
    isRunning = false;
}