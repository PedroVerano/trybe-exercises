// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let pecaDeXadrez = "PEÃO";

switch(pecaDeXadrez.toLowerCase()){
  case "peão":
    console.log("Uma casa pra frente se tiver na posição inicial pode andar 2 casas");
    break;

  case "bispo":
    console.log("Em diagonal");
    break;

  case "cavalo":
    console.log("Em L");
    break;

  case "rei":
    console.log("Apenas 1 casa");
    break;

  case "torre":
    console.log("Somente em linha reta");
    break;

  case "rainha":
    console.log("Todas as direções");
    break;

  default:
    console.log("Não é uma peça de xadrez");
}