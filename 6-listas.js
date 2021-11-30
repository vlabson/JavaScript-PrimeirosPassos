console.log(`Trabalhando com Listas`);
// const salvador = `salvador`;
// const saoPaulo = `são paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;  

// atalho para comentar varias linhas de uma vez ( Ctrl + k + c )
// atalho para remover o comentario de varias linhas ( Ctrl + k + U)

const listaDeDestinos = new Array(
    `salvador`,
    `são paulo`,
    `Rio de Janeiro`,
    `Curitiba`,
);

listaDeDestinos.push(`Ceara`); // forma de receber novas variaveis e adcionar dentro do Array

console.log("Destinos possiveis:");
//console.log(saoPaulo, salvador, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1],listaDeDestinos[0]);

