// Affiche le contenu et le menu immédiatement au chargement
function initPortfolio() {
    const nav = document.getElementById('navbar');
    const main = document.getElementById('main-content');
    const body = document.getElementById('body');

    // Force l'affichage du menu et du contenu principal
    if (nav) {
        nav.style.display = 'block';
        nav.style.opacity = '1';
        nav.style.transform = 'translateY(0)'; // Annule l'effet de "drop" s'il est bloqué
    }
    
    if (main) {
        main.style.opacity = '1';
    }

    // Réactive le scroll au cas où
    if (body) {
        body.classList.remove('overflow-hidden');
    }
}

// Crée et anime les icônes arrière-plan
function createFallingIcon() {
    const container = document.getElementById('bg-animation-container');
    if (!container) return;

    const icons = [
        { name: 'fa-wifi', cat: 'fas' },
        { name: 'fa-linux', cat: 'fab' },
        { name: 'fa-database', cat: 'fas' },
        { name: 'fa-docker', cat: 'fab' },
        { name: 'fa-python', cat: 'fab' },
        { name: 'fa-windows', cat: 'fab' },
        { name: 'fa-java', cat: 'fab' },
        { name: 'fa-bluetooth-b', cat: 'fab' },
        { name: 'fa-phone', cat: 'fas' },
        { name: 'fa-server', cat: 'fas' },
        { name: 'fa-gamepad', cat: 'fas' },
        { name: 'fa-microchip', cat: 'fas' },
        { name: 'fa-code', cat: 'fas' },
        { name: 'fa-terminal', cat: 'fas' },
        { name: 'fa-network-wired', cat: 'fas' }
    ];

    const iconEl = document.createElement('i');
    const choice = icons[Math.floor(Math.random() * icons.length)];
    
    const randomX = Math.random() * 100;
    const duration = Math.random() * 4 + 8; 
    const size = Math.random() * 15 + 20;   
    
    iconEl.classList.add(choice.cat, choice.name, 'falling-icon');
    iconEl.style.left = randomX + '%';
    iconEl.style.animationDuration = duration + 's';
    iconEl.style.fontSize = size + 'px';
    
    container.appendChild(iconEl);

    setTimeout(() => {
        iconEl.remove();
    }, duration * 1000);
}

// Lancement
window.addEventListener('DOMContentLoaded', () => {
    initPortfolio();
    setInterval(createFallingIcon, 300);
});