const imagensPratos = {
    "Bolinho de Bacalhau": "Bolinho de Bacalhau.png",
    "Bruschetta": "Bruschetta.png",
    "Casquinha de Siri": "Casquinha de Siri.png",
    "Moqueca Camarão": "Moqueca Camarão.png",
    "Risoto Cogumelo": "Risoto Cogumelo.png",
    "Ravioli": "Ravioli.png",
    "File Mignon": "File Mignon.png",
    "Stroganoff": "Stroganoff.png",
    "Brownie": "Brownie.png",
    "Banoffe": "Banoffe.png",
    "Petit Gateau": "Petit Gateau.png"
};


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
        const imagemPrato = imagensPratos[nomePrato]; // Obtém a URL da imagem
        const imagemElement = document.createElement("img");
        imagemElement.src = imagemPrato;
        imagemElement.alt = nomePrato; // Define um texto alternativo para a imagem

        // Crie um parágrafo para cada imagem e nome do prato
        const paragrafo = document.createElement("p");
        paragrafo.appendChild(imagemElement);
        paragrafo.innerHTML += `<br>${nomePrato}`;
        
        menuFinal.appendChild(paragrafo); // Adicione o parágrafo ao menu final
    });
}


const botaoEnviar = document.createElement("button");
botaoEnviar.innerText = "Pedir";
botaoEnviar.addEventListener("click", mostrarMenuFinal);
document.body.appendChild(botaoEnviar);
