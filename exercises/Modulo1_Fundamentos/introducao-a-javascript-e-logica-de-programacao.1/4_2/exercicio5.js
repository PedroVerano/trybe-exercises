let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
numbers.sort();
let numeroMaior = 0;

for(let index = 0; index < numbers.length ; index +=1){
  if(numeroMaior < numbers[index]) {
    numeroMaior = numbers[index];
  } 
}
console.log(numeroMaior);