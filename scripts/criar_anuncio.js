document.addEventListener("DOMContentLoaded", function () {
    const formAnuncio = document.getElementById("form-anuncio");

    formAnuncio.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Anúncio criado com sucesso!");
        formAnuncio.reset();
    });
});