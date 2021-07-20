// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// n = 5

// *****
// *****
// *****
// *****
// *****

let valor = 5;
let asterisco = "*";
let linha = "";


if ( valor > 1 ) {

  for(let index = 0; index < valor; index+=1) {
    linha += asterisco;
  }
  for (let index = 0; index < valor; index +=1) {
    console.log(linha)
  }
} else {
  console.log("Valor invalido, tem que ser maior que 1");
}