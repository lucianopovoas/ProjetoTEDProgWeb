const entradas = ["Bolinho de Bacalhau", "Bruschetta", "Casquinha de Siri"];
const pratosPrincipais = ["Moqueca Camarão", "Risoto Cogumelo", "Ravioli", "File Mignon", "Stroganoff"];
const sobremesas = ["Brownie", "Banoffe", "Petit Gateau"];

function exibirOpcoes(secao, opcoes) {
    const secaoElement = document.getElementById(secao);

    opcoes.forEach((opcao, index) => {
        const opcaoDiv = document.createElement("div");
        opcaoDiv.innerHTML = `<input type="radio" name="${secao}" value="${opcao}" id="${secao}-${index}">
                              <label for="${secao}-${index}">${opcao}</label>`;
        secaoElement.appendChild(opcaoDiv);
    });
}

exibirOpcoes("entrada", entradas);
exibirOpcoes("prato-principal", pratosPrincipais);
exibirOpcoes("sobremesa", sobremesas);

function mostrarMenuFinal() {
    const menuFinal = document.getElementById("menu-final");
    const escolhas = document.querySelectorAll('input[type="radio"]:checked');
    menuFinal.innerHTML = "<h3>Seu Pedido:</h3>";

    escolhas.forEach((escolha) => {
        const nomePrato = escolha.value;
        menuFinal.innerHTML += `<p>${nomePrato}</p>`;
    });
}

const botaoEnviar = document.createElement("button");
botaoEnviar.innerText = "Pedir";
botaoEnviar.addEventListener("click", mostrarMenuFinal);
document.body.appendChild(botaoEnviar);
