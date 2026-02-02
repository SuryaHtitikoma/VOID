// 1. Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Tutup menu saat link diklik
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// 2. Scroll Animation (Intersection Observer)
const observerOptions = {
    threshold: 0.2 // Elemen akan muncul saat 20% terlihat
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-show');
        }
    });
}, observerOptions);

// Target elemen untuk animasi
const hiddenElements = document.querySelectorAll('.animate-hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Tambahan: Animasi untuk kartu pemain saat discroll
const playerCards = document.querySelectorAll('.player-card');
playerCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = `all 0.6s ease-out ${index * 0.1}s`; // Staggered effect
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    cardObserver.observe(card);
});