function substituirPares(array) {
    if (!array) return -1;
    if (!array.length) return -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            array[i] = 0;
        }
    }
    console.log(array);
}

substituirPares([1, 3, 4, 6, 80, 33, 23, 90]);
substituirPares([]);
substituirPares();