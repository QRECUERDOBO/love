// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Variables para el control de música
    const musicButton = document.getElementById('music-button');
    const backgroundMusic = document.getElementById('background-music');
    const musicIcon = musicButton.querySelector('i');
    const musicText = musicButton.querySelector('span');
    
    // Control de la música
    function toggleMusic() {
        if (backgroundMusic.paused) {
            backgroundMusic.play()
                .then(() => {
                    musicIcon.className = 'fas fa-pause';
                    musicText.textContent = 'Pausar';
                })
                .catch(error => {
                    console.error('Error al reproducir la música:', error);
                    alert('No se pudo reproducir la música. Por favor, inténtalo de nuevo.');
                });
        } else {
            backgroundMusic.pause();
            musicIcon.className = 'fas fa-play';
            musicText.textContent = 'Reproducir';
        }
    }

    musicButton.addEventListener('click', toggleMusic);

    // Control del carrusel
    const carousel = document.querySelector('.carousel');
    const carouselInner = carousel.querySelector('.carousel-inner');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    const images = carouselInner.querySelectorAll('img');
    
    let currentIndex = 0;
    const slideWidth = images[0].clientWidth;
    let isAnimating = false;

    // Duplicar imágenes para el efecto infinito
    const clonedImages = Array.from(images).map(img => {
        const clone = img.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        return clone;
    });
    clonedImages.forEach(clone => carouselInner.appendChild(clone));

    // Configurar el ancho total del carrusel
    const totalWidth = images.length * 2 * slideWidth;
    carouselInner.style.width = `${totalWidth}px`;

    // Función para mover el carrusel
    function moveCarousel(direction) {
        if (isAnimating) return;
        isAnimating = true;

        const movement = direction === 'next' ? -slideWidth : slideWidth;
        currentIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;

        carouselInner.style.transition = 'transform 0.5s ease-in-out';
        carouselInner.style.transform = `translateX(${currentIndex * movement}px)`;

        // Verificar si necesitamos resetear la posición
        setTimeout(() => {
            if (currentIndex >= images.length || currentIndex <= -images.length) {
                carouselInner.style.transition = 'none';
                currentIndex = 0;
                carouselInner.style.transform = 'translateX(0)';
            }
            isAnimating = false;
        }, 500);
    }

    // Eventos para los botones del carrusel
    prevButton.addEventListener('click', () => moveCarousel('prev'));
    nextButton.addEventListener('click', () => moveCarousel('next'));

    // Autoplay del carrusel
    let autoplayInterval;
    
    function startAutoplay() {
        autoplayInterval = setInterval(() => moveCarousel('next'), 3000);
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    // Iniciar autoplay
    startAutoplay();

    // Detener autoplay cuando el usuario interactúa
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);

    // Efectos de hover para los botones
    [prevButton, nextButton].forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.opacity = '1';
            button.style.transform = 'scale(1.1)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.opacity = '0.7';
            button.style.transform = 'scale(1)';
        });
    });

    // Manejar cambios de visibilidad de la página
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            backgroundMusic.pause();
            musicIcon.className = 'fas fa-play';
            musicText.textContent = 'Reproducir';
            stopAutoplay();
        } else {
            startAutoplay();
        }
    });

    // Efecto de corazones flotantes
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Crear corazones cada cierto tiempo
    setInterval(createFloatingHeart, 10000);
});
