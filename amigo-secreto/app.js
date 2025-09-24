// Array para almacenar amigos
let amigos = [];

// Función agregar amigo
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    input.value = ""; // limpiar campo
    mostrarLista();
}

// Función mostrar lista de amigos
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función sortear amigos
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}
