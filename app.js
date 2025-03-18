let amigos = [];

function adicionarAmigo() {
    let inputField = document.getElementById("amigo");
    let nome = inputField.value.trim();
    
    if (nome === "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nome);
        inputField.value = ""; // Limpa o campo de entrada
        atualizarLista(); // Atualiza a lista na interface
    }
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de adicionar novos elementos
    
    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione pelo menos um nome antes de sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    document.getElementById("resultado").innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}
