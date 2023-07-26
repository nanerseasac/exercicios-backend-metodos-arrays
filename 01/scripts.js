const frutas = ["Banana", "Maçã", "Abacaxi", "Pêra", "Uva"];

const reversedArr = frutas.slice().reverse();
const strArr = reversedArr.join(", ");
console.log(strArr);

const arrReversed = strArr.split(", ");

frutas.pop();
frutas.shift();
frutas.push("Melão");

console.log(frutas, reversedArr);
