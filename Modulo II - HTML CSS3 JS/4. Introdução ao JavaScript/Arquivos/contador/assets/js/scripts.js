let currentNumberWrapper = document.getElementById('currentNumber');
let currentNumber = 0;

const elementS = document.getElementById("subtrair");
elementS.addEventListener("click", decrement);

const elementA = document.getElementById("adicionar");
elementA.addEventListener("click", increment)

function increment() {
    if (currentNumber == 10) {
        console.log('stop');
    } else {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
        if (currentNumber >= 0) {
            currentNumberWrapper.style.color = 'black';
        }
    }
}

function decrement() {
    if (currentNumber == -10) {
        console.log('stop');
    } else {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
        if (currentNumber < 0) {
            currentNumberWrapper.style.color = 'red';
        }
    }
}