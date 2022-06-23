function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {
        return prev + current;
    });
}

const nums = [1, 4, 623, 53, 13, 7];
console.log(somaNumeros(nums));