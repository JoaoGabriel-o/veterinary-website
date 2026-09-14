let botaoWhats = document.querySelector(".chat-toggle");

let servicos = document.querySelectorAll(".servico");
console.log("Lista de serviços:", servicos);
console.log("Primeiro serviços:", servicos[0]);
console.log("Segundo serviços:", servicos[1]);

function mostrarMensagem() {
    alert("Você ciclou em um serviço!");
}

let primeiroServico = document.querySelector(".servico");
primeiroServico.addEventListener("click", mostrarMensagem);

function abrirWhats(e) {
    e.preventDefault();
    alert("Você será redirecionado para o WhatsApp!");
    window.open("Https://wa.me/5586999327053", "_blank")
}
botaoWhats.addEventListener("click", abrirWhats);
