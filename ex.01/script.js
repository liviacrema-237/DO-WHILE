const senhaCorreta = "1234";
let tentativa;

do {
    tentativa = prompt("Digite a senha:");
    if (tentativa !== senhaCorreta) {
        alert("Senha incorreta! Tente novamente.");
    }
} while (tentativa !== senhaCorreta);

console.log("Acesso Permitido");
alert("Acesso Permitido");