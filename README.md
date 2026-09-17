# 🚀 Aula: Introdução ao JavaScript e Manipulação do DOM

Este repositório contém o código e o roteiro prático desenvolvidos na aula de **Desenvolvimento Web para I.A.**, ministrada pelo **Prof. M.Sc. Tiago Martins Ribeiro**.

O objetivo desta aula é dar os primeiros passos com a linguagem **JavaScript**, compreendendo como conectar scripts externos a páginas HTML e como interagir dinamicamente com os elementos do site por meio do **DOM (Document Object Model)**.

---

## 📌 Conteúdo da Aula

* O que é e para que serve o JavaScript
* Conexão do JS com o HTML (`<script src="script.js" defer>`)
* Exibição de dados e saídas (`console.log`, `alert`, `prompt`)
* Conceito de variáveis (`let`, `const`, `var`) e manipulação de textos
* Entendendo o **DOM (Document Object Model)**
* Métodos de seleção e manipulação de elementos HTML:
  * `document.querySelector()`
  * `document.getElementById()`
  * `document.getElementsByClassName()`
  * `document.getElementsByTagName()`
* Alteração de conteúdo (`innerText`) e estilos (`style`) via JS

---

## 📁 Estrutura do Projeto

Para realizar as práticas da aula no **VS Code**, a estrutura de arquivos do projeto deve estar organizada da seguinte forma:

```text
├── index.html       # Estrutura da página (Projeto MartinsVet)
├── style.css        # Estilização visual
└── script.js        # Arquivo JavaScript para os exercícios da aula
```

> **Nota:** Certifique-se de vincular o arquivo `script.js` dentro da tag `<head>` no seu `index.html` utilizando o atributo `defer`:
> ```html
> <script src="script.js" defer></script>
> ```

---

## 🛠️ Como Executar o Projeto

1. Abra a pasta do projeto no **VS Code**.
2. Abra o arquivo `index.html`.
3. Inicie o servidor local usando a extensão **Live Server** (ou abra o arquivo `index.html` diretamente no seu navegador).
4. Pressione a tecla **F12** (ou clique com o botão direito na página e selecione **Inspecionar**) e navegue até a aba **Console** para acompanhar as saídas dos comandos `console.log()`.

---

👨‍🏫 **Professor:** MSc. Tiago Martins Ribeiro  
📚 **Disciplina:** Desenvolvimento Web para I.A.
