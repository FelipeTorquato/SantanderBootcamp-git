/*
Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.
*/

function valoresUnicos(array) {
    const meuSet = new Set(array);
    return [...meuSet];
}

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log(valoresUnicos(meuArray));