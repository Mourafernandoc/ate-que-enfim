document.addEventListener('DOMContentLoaded', function() {

    // --- Lógica do Carrossel ---
    const slides = document.querySelectorAll('.slide');
    const carouselSlide = document.querySelector('.carousel-slide');
    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSlidePosition() {
        carouselSlide.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    window.moveSlide = function(direction) {
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        } else if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }

        updateSlidePosition();
    };
    
    // Autoplay do carrossel (opcional)
    setInterval(() => {
        moveSlide(1);
    }, 5000); // Muda de slide a cada 5 segundos


    // --- Lógica do Scroll Reveal ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // O elemento é revelado quando 10% dele está visível
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
    
    // --- Lógica da Animação de Pétalas ---
    const petalContainer = document.querySelector('.petal-container');
    if (petalContainer) {
        const numberOfPetals = 20; // Ajuste a quantidade de pétalas
        for (let i = 0; i < numberOfPetals; i++) {
            let petal = document.createElement('div');
            petal.className = 'petal';
            petal.style.left = `${Math.random() * 100}vw`;
            petal.style.animationDuration = `${Math.random() * 5 + 5}s`; // Duração entre 5 e 10 segundos
            petal.style.animationDelay = `${Math.random() * 5}s`;
            petalContainer.appendChild(petal);
        }
    }
});