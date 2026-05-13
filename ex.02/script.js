let somaTotal = 0;
let continuar;

do {
    let numero = parseInt(prompt("Digite um número inteiro para somar:"));
    
    if (!isNaN(numero)) {
        somaTotal += numero;
    } else {
        alert("Por favor, digite um número válido.");
    }

    continuar = prompt("Deseja inserir outro número? (s/n)").toLowerCase();
} while (continuar === 's');

console.log(`Soma total: ${somaTotal}`);
alert(`A soma total dos números inseridos é: ${somaTotal}`);