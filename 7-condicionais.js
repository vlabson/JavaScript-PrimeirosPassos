console.log(`Trabalhando com Condicionais`);
const listaDeDestinos = new Array(
    `salvador`,
    `são paulo`,
    `Rio de Janeiro`,
    `Curitiba`,
);

// shift + alt + f atalho para identar o codigo 


const idadeComprador = 17;
const estaAcompanhada = true;
const estaComPassagemComprada = true;

console.log("Destinos possiveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de Idade")
//     listaDeDestinos.splice(1, 1); // removendo item da lista 
// } else if (estaAcompanhada == 1) {
//     console.log("Comprador menor de idade mais esta acompanhado!");
//     listaDeDestinos.splice(1, 1); // removendo item da lista 
// } else {
//     console.log("Comprador não é maior de Idade e esta desacompanhado não posso vender!");
// }


if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem!")
    listaDeDestinos.splice(1, 1); // removendo item da lista 
} else {
    console.log("Comprador não é maior de Idade ou esta desacompanhado não posso vender!");
}

console.log("Embarque: /n /n" );
if( idadeComprador > 18 && estaComPassagemComprada == true){
    console.log("Boa Viagem");
}else{
    console.log("Você não pode embarcar!");
}
console.log(listaDeDestinos);

console.log(idadeComprador > 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador == 18);



