// introdução ao javascript

console.log("Hello World");

alert("hello world");

prompt("Qual seu nome");

let nomeUsuario = prompt("Qual seu nome?");

alert(nomeUsuario);

console.log("Nome digitado:", nomeUsuario);

let mensagem = "Olá, " + nomeUsuario + "! Bem-vindo ao meu site!";


// ==================
// Manipulação de DOM
// ==================
// selecionar título principal
let titulo = document.querySelector(".hero h2");

titulo.innerText = mensagem

document.body.style.background = "yellow"

