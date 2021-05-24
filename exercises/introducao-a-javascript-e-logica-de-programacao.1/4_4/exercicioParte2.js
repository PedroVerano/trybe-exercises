// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

function verificaPalindrome(palavra) {
  let vouF = true
  for(let i = 0; i < palavra.length / 2; i+=1) {
    if(palavra[i]!= palavra[palavra.length -i -1]){
      return false;
    } 
  }
  return true;
}
console.log(verificaPalindrome("arara"));
console.log(verificaPalindrome("reler"));
console.log(verificaPalindrome("ovo"));
console.log(verificaPalindrome("sapo"));
console.log(verificaPalindrome("java"));

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let arrayTeste = [2, 3, 6, 7, 10, 1];

function maiorIndice(array) {
  let indice = 0;
  let maior = 0 ;
  for(let i = 0; i < array.length; i+=1){
    if(i == 0) {
      maior = array[i];
    }
    if(array[i] > maior){
      maior = array[i];
      indice = i;
    }
  }
  return indice;
} 
console.log(maiorIndice(arrayTeste));

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
let array2 =  [2, 4, 6, 7, 10, 0, -3];
function menorIndice(array) {
  let indice = 0;
  let menor = 0 ;
  for(let i = 0; i < array.length; i+=1){
    if(i == 0) {
      menor = array[i];
      indice = i;
    }
    if(array[i] < menor){
      menor = array[i];
      indice = i;
    }
  }
  return indice;
} 
console.log(menorIndice(array2))

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(array) {
  let maior = "";
  for(let i=0; i < array.length; i+=1) {
    if(array[i].length > maior.length ) {
      maior = array[i]
    }
  }
  return maior;
}
console.log("O maior nome é",maiorNome(nomes));

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let array3 = [2, 3, 2, 5, 8, 2, 3];

function contadorNumeros(array) {
  let contadorN1 = 0;
  let contadorN2 = 0;
  let numeroTeste = 0
  let numeromaior = 0;
  for(let i=0; i < array.length; i+=1) {
    if(contadorN2 > contadorN1) {
      contadorN1 = contadorN2;
      numeromaior = numeroTeste;
      contadorN2 = 0;
    }
    contadorN2 = 0;
    for(let j=0; j < array.length; j+=1)
    {
      numeroTeste = array[i];
      if(array[i] === array[j]){
        contadorN2 += 1;
      }
    }
  }
  return numeromaior;
}

console.log('O numero que mais se repete é o numero:',contadorNumeros(array3));

// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
let n = 5;
function soma1aN(numero) {
  soma = 0;
  for(let i =0; i <= numero; i += 1) {
    soma += i; 
  }
  return soma;
}

console.log(soma1aN(n));

// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

