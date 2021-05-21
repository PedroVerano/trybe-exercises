// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// n = 5

// *
// **
// ***
// ****
// *****

let valor = 5 ;
let asterisco = "*";
let linha = "";


  for (index = 0 ; index < valor; index +=1) {
    linha += asterisco;
    console.log(linha);
  }
