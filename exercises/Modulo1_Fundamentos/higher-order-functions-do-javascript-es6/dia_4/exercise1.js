//Dada uma matriz, transforme em um array.

const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((acc,currentValue) => {
      console.log(`Acumulador: ${acc} Valor Atual: ${currentValue}`);
      return acc.concat(currentValue)
  }, [])
}

console.log(flatten());
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);