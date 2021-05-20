let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);


let indexOfPortfolio = menu.indexOf("Portfólio");

console.log(indexOfPortfolio);

menu.push("Contato");

console.log(menu);

// Utilize o for para imprimir os elementos da lista groceryList com o console.log() :

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let indice = 0; indice < groceryList.length; indice +=1){

  console.log(groceryList[indice]);

}

// Utilize o for/of para imprimir os elementos da lista names com o console.log() :
console.log("");

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let nomes of names) {
  console.log(nomes);
}
