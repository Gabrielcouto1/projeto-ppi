document.addEventListener("DOMContentLoaded", function () {
    const botoesInteresse = document.querySelectorAll(".botao-interesse");

    botoesInteresse.forEach(botao => {
        botao.addEventListener("click", function () {
            window.location.href = "/interno/listar_interesses.html";
        });
    });

    const botoesExcluir = document.querySelectorAll(".botao-excluir");

    botoesExcluir.forEach(botao => {
        botao.addEventListener("click", function () {
            alert("Em implementação.")
        });
    });
});