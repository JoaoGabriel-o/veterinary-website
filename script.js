let botaoWhats = document.querySelector(".chat-toggle");

let servicos = document.querySelectorAll(".servico");
console.log("Lista de servicos:", servicos);
console.log("Primeiro:", servicos[0]);
console.log("Segundo:", servicos[1]);

function mostrarMensagem(){
    alert("Você clicou em um serviço!");
}

let primeiroServico = document.querySelector(".servico");
primeiroServico.addEventListener("click", mostrarMensagem);


botaoWhats.addEventListener("click", function abrirWhats(e) {
    e.preventDefault();
    alert("Você será redirecionado para o WhatsApp!");
    window.open("https://wa.me/5511999999999", "blank");
});

servicos[0].addEventListener("click", function(){
    alert("licou no primeiro servico");
});

servico[1].addEventListener("click", function(){
    alert("Clicou no segundo servico");
});