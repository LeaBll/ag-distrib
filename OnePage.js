//JS POUR L'ANIMATION DU SITE AU SCROLL
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.scroll-element');

    function checkScroll() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Pour vérifier si les éléments sont déjà visibles au chargement
});

//JS POUR LE MENU BURGER
document.getElementById('burger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});


//SCROLL AUTOMATIQUE AU CLIQUE DES LIENS NAVBAR
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner tous les liens de navigation
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Empêche le comportement par défaut du lien

            // Récupérer la cible de l'attribut href (l'id de la section)
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            // Calculer la position de la section cible
            const targetPosition = targetSection.offsetTop - 50; // Ajuster pour la hauteur de la nav fixe

            // Défilement fluide vers la section
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        });
    });
});

//JS POUR LE CARROUSEL
const trackAuto = document.querySelector('.slide-track');
const slides = Array.from(trackAuto.children);
const slideWidth = slides[0].getBoundingClientRect().width;

// Dupliquer les slides pour permettre le défilement continu
slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    trackAuto.appendChild(clone);
});

// Fonction pour faire défiler les slides en continu
function startAutoScroll() {
    trackAuto.style.transform = 'translateX(0)';
    let scrollAmount = 0;

    setInterval(() => {
        scrollAmount -= slideWidth + 10; // -10 pour inclure la marge entre les slides
        if (Math.abs(scrollAmount) >= (slideWidth + 10) * slides.length) {
            scrollAmount = 0; // Réinitialise une fois que toutes les slides ont défilé
        }
        trackAuto.style.transform = `translateX(${scrollAmount}px)`;
    }, 3000); // Défiler toutes les 3 secondes
}

// Lancer le défilement automatique
startAutoScroll();



