// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja:

const assert = require('assert');

// escreva sum abaixo
const sum = (...numbers) => {
    let soma = 0;
   numbers.forEach((number) => soma += number);
   return soma;
}

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);