let lastScrollTop = 0; // Stocke la position précédente du défilement

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Défilement vers le bas
        document.querySelector("header").style.top = "-100px"; // Modifiez cette valeur en fonction de la hauteur de votre en-tête
    } else {
        // Défilement vers le haut
        document.querySelector("header").style.top = "0";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Pour les navigateurs mobiles qui permettent de dépasser le scroll
}, false);

/* pour le bouton remonter */

document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("gotoTopBtn");
    var section = document.getElementById("first-section");

    if (btn && section) {
        btn.addEventListener("click", function() {
            section.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
/* Fin bouton remonter*/

