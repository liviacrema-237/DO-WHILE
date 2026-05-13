# DO-WHILE - Exercícios com Laços em JavaScript

Projeto desenvolvido com o objetivo de aprender e praticar estruturas de repetição em JavaScript, especialmente o `do...while`. Este repositório contém 5 exercícios progressivos que cobrem validações, interações com usuário e lógica de programação.

---

## 📋 Exercícios

### Ex. 01 - Validação de Senha

**Objetivo:** Implementar um sistema de validação de senha com laço contínuo.

**Requisitos:**
- Senha fixa definida no código (ex: "1234")
- O programa deve pedir a senha pelo menos uma vez
- Continuar pedindo até o usuário digitar a senha correta
- Exibir "Acesso Permitido" quando correto

**Estrutura de Controle:** `do...while`

---

### Ex. 02 - Soma com Confirmação

**Objetivo:** Acumular números com confirmação do usuário a cada iteração.

**Requisitos:**
- Pedir para o usuário digitar um número inteiro
- Adicionar o número a uma variável de soma total
- Após inserir, perguntar: "Deseja inserir outro número? (s/n)"
- Repetir enquanto a resposta for "s"
- Exibir a soma total ao final

**Estrutura de Controle:** `while` ou `do...while`

---

### Ex. 03 - Jogo de Adivinhação

**Objetivo:** Criar um jogo interativo onde o usuário tenta adivinhar um número.

**Requisitos:**
- Número "secreto" pré-definido entre 1 e 10
- Pedir para o usuário tentar adivinhar
- Continuar o laço até acertar
- **Avanço:** Implementar contador de tentativas
- Exibir mensagem de parabéns com o número de tentativas

**Estrutura de Controle:** `while` ou `do...while`

---

### Ex. 04 - Validação de Cadastro

**Objetivo:** Validar entrada do usuário com mensagem de erro.

**Requisitos:**
- Pedir para cadastrar o nome de um produto
- Nome deve ter no mínimo 3 caracteres
- Usar `do...while` para garantir execução na primeira vez
- Se inválido, exibir: "Nome inválido. O produto deve ter no mínimo 3 caracteres"
- Repetir até entrada válida

**Estrutura de Controle:** `do...while` (obrigatório)

---

### Ex. 05 - Sistema de Cafeteria 🍰

**Objetivo:** Criar um menu interativo com acúmulo de pedidos.

**Requisitos:**
- Exibir menu repetidamente até finalizar pedido:
  - 1 - Café Expresso (R$ 5,00)
  - 2 - Cappuccino (R$ 7,00)
  - 3 - Pão de Queijo (R$ 4,00)
  - 0 - Finalizar Pedido
- A cada opção (1, 2 ou 3), somar valor ao total do pedido
- Avisar que item foi adicionado
- Para opções inválidas, exibir: "Opção inválida"
- Encerrar apenas quando digitar 0
- Exibir: "Pedido finalizado. O total da sua conta é R$ [valor total]"

**Estrutura de Controle:** `do...while` ou `while`

---

## 🚀 Como Usar

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Git instalado (para clonar/atualizar o repositório)

### Executando os Exercícios

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/DO-WHILE.git
cd DO-WHILE
```

2. Abra o arquivo HTML do exercício desejado no navegador:
   - `ex.01/index.html` - Validação de Senha
   - `ex.02/index.html` - Soma com Confirmação
   - `ex.03/index.html` - Jogo de Adivinhação
   - `ex.04/index.html` - Validação de Cadastro
   - `ex.05/index.html` - Sistema de Cafeteria

3. Interaja com o programa através dos `prompts` que aparecerão na tela

---

## 📁 Estrutura do Projeto

```
DO-WHILE/
├── README.md              # Este arquivo
├── ex.01/
│   ├── index.html        # Página HTML
│   └── script.js         # Lógica do programa
├── ex.02/
│   ├── index.html
│   └── script.js
├── ex.03/
│   ├── index.html
│   └── script.js
├── ex.04/
│   ├── index.html
│   └── script.js
└── ex.05/
    ├── index.html
    └── script.js
```

---

## 🔧 Tecnologias Utilizadas

- **HTML5** - Estrutura das páginas
- **JavaScript (ES6+)** - Lógica dos programas
- **Git** - Controle de versão

---

## 📚 Conceitos Abordados

- ✅ Laços `while`
- ✅ Laços `do...while`
- ✅ Estruturas condicionais `if/else`
- ✅ Variáveis e tipos de dados
- ✅ Funções `prompt()` e `alert()`
- ✅ Contadores e acumuladores
- ✅ Validação de entrada de usuário

---

## 📝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/melhoria`)
3. Commit suas mudanças (`git commit -m 'Adiciona melhoria'`)
4. Push para a branch (`git push origin feature/melhoria`)
5. Abra um Pull Request

---

## 💡 Dicas de Desenvolvimento

- Use o **Flowgorithm** para visualizar o fluxo de execução antes de codificar
- Teste cada exercício no console do navegador (F12)
- Valide as entradas do usuário adequadamente
- Use comentários para explicar a lógica
- Mantenha o código limpo e legível

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

## ✨ Autor

Desenvolvido como exercício prático de JavaScript com foco em estruturas de repetição.

**Data de Criação:** Maio de 2026
