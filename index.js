const readline = require('readline');

const valor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contarA(texto) {

    const letra = 'a';
    const converteLetra = texto.toLowerCase();

    const contador = converteLetra.match(new RegExp(letra, 'g'))

    if (contador) {
        console.log(`A letra '${letra}' aparece ${contador.length} vezes no texto.`);
    } else {
        console.log(`Não foi encontrada a letra '${letra}' no texto.`);
    }
}

valor.question('Digite uma frase: ', (texto) => {
    contarA(texto);
    valor.close();
});