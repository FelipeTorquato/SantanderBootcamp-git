/*
Crie uma função getAdmins que recebe um Map;
Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usuários que são administradores.
*/

function getAdmins(map) {
    let arrayAdmins = [];
    for (let [key, value] of map) {
        if (value === "Admin") {
            arrayAdmins.push(key);
        }
    }
    return arrayAdmins;
}

let meuMap = new Map([["Luiz", "Admin"], ["Felipe", "User"], ["Ana", "Admin"], ["Pedro", "User"]]);
meuMap.set("Marcelo", "Admin");
console.log(getAdmins(meuMap));