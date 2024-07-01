const prompt = require("prompt-sync")();

function ehNumero(num) {
  return !isNaN(Number(num));
}

function maiorNumero(num) {
  if (ehNumero(num)) {
    let array = num.split("");

    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] < array[j]) {
          let aux = array[j];
          array[j] = array[i];
          array[i] = aux;
        }
      }
    }

    return array.join("");
  }
  console.log("Número inválido");
}

const numero = prompt("Digite um número: ");

let maior = maiorNumero(numero);
console.log(maior);
