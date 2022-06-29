/*
function soma(a: number, b: number) {
    return a + b;
}
*/

// types
// interface

/*
interface IAnimal {
    nome: string;
    tipo: "terrestre" | "aquático";
    domestico: boolean;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    porte: "pequeno" | "medio" | "grande";
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
    domestico: true,
    nome: "Cachorro",
    porte: "medio",
    tipo: "terrestre",
};
*/

/*
const felino: IFelino = {
    nome: "Leão",
    tipo: "terrestre",
    visaoNoturna: true,
}
*/

/*
const input = document.getElementById("input") as HTMLInputElement;

input.addEventListener("input", (event) => {
    const i = event.currentTarget as HTMLInputElement;
    // console.log(i.value);
});
*/

// Generic types

/*
function adicionaApendiceALista<T>(array: T[], valor: T) {
    return array.map(() => valor);
}

adicionaApendiceALista([1, 2, 3], 1);
*/

/*
interface IUsuario {
    id: string;
    email: string;
    cargo?: "gerente" | "coordenador" | "supervisor" | "funcionário";
}


function redirecione(usuario: IUsuario) {
    if (usuario.cargo) {
        // redirecionar(usuario.cargo);
    }

    // redirecionar para a área de usuário
}
*/

/*
interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
    +readonly [K in keyof Cachorro]-?: Cachorro[K];
}

class MeuCachorro implements CachorroSomenteLeitura {
    idade;
    nome;
    parqueFavorito;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro("Apolo", 14);
*/

/*
import $ from "jquery";

$.fn.extend({
    novaFuncao() {
        console.log("Chamou nova funcao");
    }
});

$("body").novaFuncao();
*/

// export const numero = 2;

// omit

/*
interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface Brasileiro extends Omit<Pessoa, "nacionalidade"> {

}

const brasileiro: Brasileiro = {
    nome: "a",
    idade: 18
}
*/