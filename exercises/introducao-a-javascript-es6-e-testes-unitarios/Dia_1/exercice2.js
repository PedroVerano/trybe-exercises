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

// Crie uma função que receba uma frase e retorne qual a maior palavra.
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

//Crie uma página que contenha:
//Um botão ao qual será associado um event listener ;
//Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
//Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

let clickCount = 0;
const contador = document.querySelector('#contador');
const button = document.querySelector('#buttonContator')

button.addEventListener('click', () => {
    clickCount += 1;
    contador.innerText = `Numeros de cliques: ${clickCount}`;
})

//Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar 
// e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
//Exemplo:
//String determinada: "Tryber x aqui!"
//Parâmetro: "Bebeto"
//Retorno: "Tryber Bebeto aqui!"
//Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
//Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que 
// foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
//Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
//JavaScript;
//HTML; ... #goTrybe".


