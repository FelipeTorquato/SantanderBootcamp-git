/*
Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!
*/

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos
        } anos de idade.`;
}

const obj1 = {
    nome: "Felipe",
    idade: 20
}

const obj2 = {
    nome: "Rebecca",
    idade: 27
}

console.log(calculaIdade.call(obj1, 5));
console.log(calculaIdade.apply(obj2, [3]));