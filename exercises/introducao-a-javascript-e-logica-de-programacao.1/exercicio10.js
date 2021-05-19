// Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

let valorProduto = 13;
let valorVenda = 20;
let lucro = 0;

let valorcustoTotal = valorProduto + (valorProduto* 0.20);


if (valorProduto < 0 || valorVenda < 0) {
  console.log("valor do produto invalido");
}else {
  lucro = (valorVenda * 1000) - (valorcustoTotal * 1000);
  console.log("valor de lucro de 1000 produtos vendidos =", lucro);
}