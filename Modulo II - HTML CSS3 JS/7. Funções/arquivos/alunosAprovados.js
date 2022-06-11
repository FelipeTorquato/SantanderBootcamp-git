/*
Crie uma função que recebe o array alunos e um número que irá representar a média final;
Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.
*/

function alunosAprovados(alunos, mediaFinal) {
    let arrayAprovados = [];
    for (i in alunos) {
        let {nota, nome} = alunos[i];
        if (nota >= mediaFinal) {
            arrayAprovados.push(nome);
        }
    }
    console.log(arrayAprovados);
}

const alunos = [
    {
        nome: "Felipe",
        nota: 8.5
    },
    {
        nome: "Pedro",
        nota: 7
    },
    {
        nome: "Denise",
        nota: 6
    },
    {
        nome: "Rebecca",
        nota: 5.5
    }
];

alunosAprovados(alunos, 7);