function comparaNumeros(num1, num2) {
    if (!(typeof (num1) === typeof (1)) || !(typeof (num2) === typeof (1))) {
        return console.log("Defina dois números.");
    }
    let soma = num1 + num2;
    let resposta = `Os números ${num1} e ${num2} `;
    if (num1 === num2) {
        resposta += `são iguais. `;
    } else {
        resposta += `não são iguais. `;
    }
    resposta += `Sua soma é ${soma}, que é `;
    if (soma > 10) {
        resposta += `maior que 10 e `;
    } else if (soma === 10) {
        resposta += `igual a 10 e `;
    } else {
        resposta += `menor que 10 e `;
    }

    if (soma > 20) {
        resposta += `maior que 20.`;
    } else if (soma === 20) {
        resposta += `igual a 20.`;
    } else {
        resposta += `menor que 20.`;
    }
    console.log(resposta);
}

comparaNumeros(1, 2);