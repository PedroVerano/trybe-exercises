// 3- Agora inverta o lado do triângulo. Por exemplo:

// n = 5

//     *
//    **
//   ***
//  ****
// *****

let valor = 5;
let asterisco = "*";
let linha = "";
let posicaoDoAsterisco = valor;

for(let index = 0; index <= valor; index+=1){

  for(let nDaColuna = 0; nDaColuna <= valor; nDaColuna +=1) {

      if(nDaColuna < posicaoDoAsterisco) {
        linha = linha + " ";
    } else {
      linha = linha + asterisco;
    }
    
  }

  console.log(linha);
  linha = "" ;
  posicaoDoAsterisco -=1;
}