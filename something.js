window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollThreshold = 300; // Le nombre de pixels de défilement avant de masquer le header

    if (window.scrollY > scrollThreshold) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
});



let lastScrollTop = 0;
let scrollUpDistance = 0;
const scrollThreshold = 300; // Modifiez ce seuil si nécessaire

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    let currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Défilement vers le bas
        header.classList.add('hidden');
        scrollUpDistance = 0;
    } else {
        // Défilement vers le haut
        scrollUpDistance += (lastScrollTop - currentScroll);

        if (scrollUpDistance >= scrollThreshold && header.classList.contains('hidden')) {
            header.classList.remove('hidden');
        }
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);