console.log(`\n Trabalhando com Loops`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São paulo`,
    `Rio de Janeiro`,
    `Curitiba`,
);

const idadeComprador = 15;
const estaAcompanhada = false;
let estaComPassagemComprada = false;
const destino = "Curitiba";

console.log("\n Destinos possiveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

//let contador = 0;
//let destinoExiste = false;

// while (contador <= listaDeDestinos.length) {
//     if (listaDeDestinos[contador] == destino) {
//         console.log(`Destino ${destino} existe!`);
//         destinoExiste = true;
//         break;
//     } else if ( contador == listaDeDestinos.length && destinoExiste == false){
//         console.log(`Destino ${destino} Não Existe`)
//     }
//     contador += 1;

// }

let destinoExiste = false;

for (contador = 1; contador <= listaDeDestinos.length; contador++) {
    if (listaDeDestinos[contador] == destino) {
        console.log(`Destino ${destino} existe!`);
        destinoExiste = true;
        break;
    } else if (contador == listaDeDestinos.length && destinoExiste == false) {
        console.log(`Destino ${destino} Não Existe`)
    }
}

if (podeComprar && destinoExiste) {
    console.log("Boa Viagem!");
} else {
    console.log("não tem requisitos para compra!");
}




