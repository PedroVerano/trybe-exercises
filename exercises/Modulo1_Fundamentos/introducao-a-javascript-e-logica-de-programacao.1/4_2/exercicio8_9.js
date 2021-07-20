// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let array1a25 = [];

for (let index = 1; index <= 25; index+=1) {
  array1a25.push(index);
}
console.log(array1a25);


// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 
let divisao = 0
for(let index = 0; index < array1a25.length; index +=1) {
  divisao = array1a25[index] /  2; 
  console.log("resultado da divisão de:",array1a25[index], "por 2=", divisao);
}