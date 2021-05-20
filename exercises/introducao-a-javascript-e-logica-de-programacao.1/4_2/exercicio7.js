let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27,];

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numeroMenor = 0 ;

for(let index = 0; index < numbers.length ; index +=1){
  if (index == 0){
    numeroMenor = numbers[0]
  }
  if(numeroMenor > numbers[index]) {
    numeroMenor = numbers[index];
  } 
}
console.log(numeroMenor);