function calculaSaldo(arr, s) {
    return arr.reduce(function(prev, current) {
        return prev - current
    }, s);
}

const precos = [10.5, 11.75, 24, 78.99];
const saldo = 500;

console.log(calculaSaldo(precos, saldo));