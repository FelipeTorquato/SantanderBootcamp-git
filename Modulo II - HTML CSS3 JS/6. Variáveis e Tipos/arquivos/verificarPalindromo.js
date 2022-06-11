function verificarPalindromo1(frase) {
    if (!frase) return;
    if (!frase.length) return;
    let resposta = true;
    frase = frase.split(" ").join("");
    frase = frase.toLowerCase().split("");
    for (let i = 0, j = frase.length - 1; i < frase.length, j > -1; i++, j--) {
        if (frase[i] !== frase[j]) {
            resposta = false;
        }
    }
    console.log(resposta);
}

function verificarPalindromo2(frase) {
    if (!frase) return;
    if (!frase.length) return;
    let resposta = true;
    let fraseInvertida = frase.toLowerCase().split(" ").join("");
    frase = frase.split(" ").join("").toLowerCase().split("").reverse().join("");
    if (frase !== fraseInvertida) {
        resposta = false;
    }
    console.log(resposta);
}

verificarPalindromo1("Anotaram a data da maratona");
verificarPalindromo2("Anotaram a data da maratona");