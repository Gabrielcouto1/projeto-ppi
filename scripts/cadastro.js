document.addEventListener("DOMContentLoaded", function () {
    const botaoInteresse = document.querySelector("#cadastrou");

    botaoInteresse.addEventListener("click", function (event) {
        event.preventDefault()
        window.location.href = "/interno/inicial_interna.html";
    });
});