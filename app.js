// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//array para almacenar los nombres de los amigos

let amigos=[];

//Función para agregar un amigo a la lista
function agregarAmigo(){
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === ""){
        alert("Por favor, ingresar un nombre válido.");
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    input.value="";
}

//Función para mostrar la lista de amigos
function mostrarLista(){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    amigos.forEach((amigo)=> {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

//Función para sortear un amigo secreto
function sortearAmigo(){
    if (amigos.length ===0){
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    const indiceAleatorio= Math.floor(Math.random()* amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.getElementById ('resultado');
    resultado.innerHTML =`<li>El amigo secreto es: ${amigoSecreto}</li>`;
}