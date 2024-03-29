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

