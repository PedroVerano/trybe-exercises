//Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acumulador, valorAtual) =>{
      console.log(acumulador + valorAtual.split(''));
     return acumulador + valorAtual.split('').reduce((acc, currentValue) => {
          if (currentValue === 'a' || currentValue ==='A') return acc + 1
          return acc
      }, 0)
  }, 0);
}

assert.deepStrictEqual(containsA(), 20);