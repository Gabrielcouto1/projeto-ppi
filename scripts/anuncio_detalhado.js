document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    function mostrarSlides(n) {
        if (n >= slides.length) {
            slideIndex = 0;
        } else if (n < 0) {
            slideIndex = slides.length - 1;
        }

        slides.forEach((slide, index) => {
            slide.style.display = index === slideIndex ? "block" : "none";
        });
    }

    function mudarSlide(n) {
        slideIndex += n;
        mostrarSlides(slideIndex);
    }

    prevButton.addEventListener("click", () => mudarSlide(-1));
    nextButton.addEventListener("click", () => mudarSlide(1));

    mostrarSlides(slideIndex);
});

document.addEventListener("DOMContentLoaded", function () {
    const botaoInteresse = document.querySelector(".ver");

    botaoInteresse.addEventListener("click", function () {
        window.location.href = "listar_interesses.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const botaoInteresse = document.querySelector(".excluir");

    botaoInteresse.addEventListener("click", function () {
        alert("Em implementação.")
    });
});