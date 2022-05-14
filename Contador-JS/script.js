var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

function changeColor(){
    currentNumber > 0 ? currentNumberWrapper.style.color = '#00FF00' : currentNumberWrapper.style.color = 'red';
}

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    changeColor()
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    changeColor()
}

