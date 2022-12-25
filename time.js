//countdown function
let inputVal = document.getElementById('inputVal');
let resultBox = document.getElementById('result');
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
// resultBox.innerText = 0;

let x;
let diff;

function setDisabled(){
    inputVal.disabled = true
    startBtn.disabled = true
}
function setEnabled(){
    inputVal.removeAttribute('disabled');
    startBtn.removeAttribute('disabled');
}

function start(){
    resultBox.innerText = inputVal.value;
    let countDown = resultBox.innerText;
    setDisabled()
    let sub = 0;
    x = setInterval(function(){
    diff = countDown - sub;
    resultBox.innerText = diff;
    if(diff <= 0){
        clearInterval(x);
        resultBox.innerText="0";
        setEnabled()
    }
    sub++;
}, 1000)}

function stop(){
    resultBox.innerText = "0"
    clearInterval(x)
    inputVal.value = 0
    setEnabled()
}

startBtn.addEventListener('click', start)
stopBtn.addEventListener('click', stop)
resetBtn.addEventListener('click', reset)

// function count(){
//     resultBox.innerText = inputVal.value;
//     let countDown = resultBox.innerText;
//     let sub = 0;
//     // console.log(resultBox.innerText);
//     x = setInterval(function(){
//     diff = countDown - sub;
//     console.log(diff);
//     if(diff <= 0){
//         clearInterval(x);
//         console.log("done");
//     }
//     sub++;
// }, 1000)}

// function abort(){
//     clearInterval(x)
//     console.log(diff)
// }

function reset(){
    clearInterval(x)
    start()
}


// count()