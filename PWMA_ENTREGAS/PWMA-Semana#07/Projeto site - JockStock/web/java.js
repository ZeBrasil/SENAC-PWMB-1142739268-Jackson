

function logar() {
    let nome = window.prompt('Qual é o seu nome?')
    let res = window.document.getElementById('resultado')

    res.innerHTML = `<p>Olá, ${nome}`;

}
const article = document.querySelector("#conteudo");
const button = document.querySelector("#Ler");

button.addEventListener("click", lermais);

function lermais() {
    if (article.className === "abrir") {
        // Ler menos
        article.className = "";
        button.innerHTML = "Mostrar Mais"; // Mostrar mais
    } else {
        article.className = "abrir";
        button.innerHTML = "Mostrar Menos"; // Mostrar menos
    }
}

const listaDeMateriais = [
    "1. Cadernos - MÉDIO",
    "2. Documentos Contratuais - PEQUENO",
    "3. Brinquedos - MÉDIO",
    "4. Peças Automotivas - GRANDE",
    "5. Livros, HQ's e Mangás - MÉDIO"
];

function montaLista(){
    const divList = document.getElementById("lista");
    const list = document.getElementById("list");
    const estocados = document.createElement("e");
    for(i = 0; i < listaDeMateriais.length; i++) {
<<<<<<< HEAD
        list.innerHTML += `<li> ${listaDeMateriais[i]}</li>`;
=======
        list.innerHTML += `<li><a href="#">${listaDeMateriais[i]}</a></li>`;
>>>>>>> 0d2a51cdd856a24a447b09c39ed47af238a67427
    }
}







