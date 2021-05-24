
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
// Valor esperado no console: Bem-vinda, Margarida
console.log('Bem-vinda,',info.personagem);


// Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
info['recorrente'] = "Sim" ; 
console.log(info);

// Faça um for/in que mostre todas as chaves do objeto.

for (let key in info) {
  console.log(key);
}
for(let key in info) {
  console.log(info[key]);
}

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "'Christmas on Bear Mountain, Dell's Four Color Comics #178'",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}

console.log(info.personagem,"e",info2.personagem);
console.log(info.origem,"e",info2.origem);
console.log(info.nota,"e",info2.nota);
console.log("Ambos recorrentes");
