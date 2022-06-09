// var a = 0;

/*
var b = 0;
var c = 0;
*/

var desconto = 0.2;
const PRECO = 2;
var total = PRECO - desconto;

function soma(a, b) {
    // console.log(a + b);
    return a + b; // 8
}

soma(3, 5);

// console.log("Hello world!");

function returnEvenValues(array) {
    let evenNums = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} não é par!`);
        }
    }
    console.log("os números pares são: ", evenNums);
}

let array = [1, 2, 4, 5, 7, 8];

returnEvenValues(array);