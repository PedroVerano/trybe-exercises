// Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const pessoa = (name) => {nomeCompleto:name}
const newEmployees = () => {
  const employees = {
    id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const checknumbers = (num1, num2) => { 
  if (num1 === num2) {
    return true
  } else { false }
} 

const resultsorteio = (numero, checagem) => {
  const numeroSorteado = parseInt(Math.random() * 5);
  //console.log(`O numero sorteado foi: ${numeroSorteado}`);
  if(checagem(numero, numeroSorteado) === true) 
  {
    console.log('Parabéns você ganhou !')
  } else { console.log('Tente novamente')}
}
resultsorteio(1,checknumbers)