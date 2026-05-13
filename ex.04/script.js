let nomeProduto;

do {
    nomeProduto = prompt("Cadastre o nome do produto (mínimo 3 caracteres):");
    
    if (nomeProduto.length < 3) {
        alert("Nome inválido. O produto deve ter no mínimo 3 caracteres");
    }
} while (nomeProduto.length < 3);

alert("Produto cadastrado com sucesso: " + nomeProduto);