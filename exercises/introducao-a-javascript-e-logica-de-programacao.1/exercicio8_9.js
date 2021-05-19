// Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .
// Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

let numero1 = 11;
let numero2 = 21;
let numero3 = 31;

// para par 
if(numero1 % 2 == 0 || numero2 % 2 == 0 || numero3 % 2 == 0 ) { 
  console.log(true);
} else {
  console.log(false);
}

// para impar 
if(numero1 % 2 == 1 || numero2 % 2 == 1 || numero3 % 2 == 1 ) { 
  console.log(true);
} else {
  console.log(false);
}