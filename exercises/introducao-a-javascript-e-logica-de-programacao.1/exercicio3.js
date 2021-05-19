// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let numero1 = 70;
let numero2 = 80;
let numero3 = 90;

if (numero1 > numero2 && numero1 > numero3) {
  console.log("Primeiro numero maior",numero1);
} else if (numero2 > numero1 && numero2 > numero3) {
  console.log("Segunto numero maior",numero2);
} else {
  console.log("terceiro numero maior",numero3);
}