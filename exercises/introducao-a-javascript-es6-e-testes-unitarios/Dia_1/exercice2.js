//Crie uma função que receba um número e retorne seu fatorial.
//Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
//Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .
const fatorial = numero => {
    let mult = numero - 1;
    let resultado = numero;
    for (let i = mult; i > 0; i--)
    {
        resultado *= i;
    }
    return resultado
}

console.log(fatorial(7));

const longestWord = string => {
    let palavras = string.split(' ');
    let result = '';
    for (let j = 0; j < palavras.length; j += 1) {
        const resultado = (result.length < palavras[j].length) ? result = palavras[j]: result = result;
        console.log(result);
        console.log(palavras[j].length);
    }   
    return result;
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu';