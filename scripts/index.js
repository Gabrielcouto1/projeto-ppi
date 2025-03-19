document.addEventListener("DOMContentLoaded", function () {
    const botoesInteresse = document.querySelectorAll(".botao-interesse");

    botoesInteresse.forEach(botao => {
        botao.addEventListener("click", function () {
            window.location.href = "demonstrar_interesse.html";
        });
    });
});
