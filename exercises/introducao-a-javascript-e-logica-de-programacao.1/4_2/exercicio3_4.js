let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let soma= 0;
let media =0;
let numeroElementos = 0;
for (let contador = 0 ; contador < numbers.length; contador +=1){
  soma +=  numbers[contador];
}

console.log(soma);
numeroElementos = numbers.length;
console.log(numeroElementos)
media = soma/numeroElementos;
console.log("A media é",media);

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if(media > 20){
  console.log("Valor maior que 20");
}else{
  console.log("Valor menor que 20");
}