let totalPedido = 0;
let opcao;
do {
    opcao = prompt(
        "--- MENU CAFETERIA ---\n" +
        "1 - Café Expresso (R$ 5,00)\n" +
        "2 - Cappuccino (R$ 7,00)\n" +
        "3 - Pão de Queijo (R$ 4,00)\n" +
        "0 - Finalizar Pedido\n\n" +
        "Escolha uma opção:"
    );

    opcao = parseInt(opcao);

    switch (opcao) {
        case 1:
            totalPedido += 5.00;
            alert("Café Expresso adicionado ao pedido!");
            break;
        case 2:
            totalPedido += 7.00;
            alert("Cappuccino adicionado ao pedido!");
            break;
        case 3:
            totalPedido += 4.00;
            alert("Pão de Queijo adicionado ao pedido!");
            break;
        case 0:
            alert("Processando sua conta...");
            break;
        default:
            alert("Opção inválida. Por favor, escolha um item do menu.");
            break;
    }

} while (opcao !== 0);

alert(`Pedido finalizado. O total da sua conta é R$ ${totalPedido.toFixed(2)}`);