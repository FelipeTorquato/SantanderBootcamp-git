numberOne = 1; // hoisting

console.log(numberOne + 2);

var numberOne;

var firstName = "João";
var lastName = "Souza";

if (firstName === "João") {
    let lastName = "Rodirgues";
    var firstName = "Pedro";
    lastName = "Silva";

    console.log(lastName);
}

console.log(firstName, lastName);

const FIRST_NAME = "Stephany";

console.log(FIRST_NAME);