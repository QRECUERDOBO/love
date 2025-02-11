document.addEventListener('DOMContentLoaded', () => {
    // Control del streaming
    const streamButton = document.getElementById('stream-button');
    const streamIcon = streamButton.querySelector('i');
    const streamText = streamButton.querySelector('span');
    
    streamButton.addEventListener('click', () => {
        // Aquí puedes agregar la lógica para iniciar el streaming
        if (streamIcon.classList.contains('fa-play')) {
            streamIcon.className = 'fas fa-pause';
            streamText.textContent = 'Pausar';
            // Iniciar streaming
        } else {
            streamIcon.className = 'fas fa-play';
            streamText.textContent = 'Ver Episodio';
            // Pausar streaming
        }
    });

    // Control del carrusel con efecto VHS
    const carousel = document.querySelector('.carousel');
    const carouselInner = carousel.querySelector('.carousel-inner');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    const images = carouselInner.querySelectorAll('img');
    
    let currentIndex = 0;
    const slideWidth = carousel.clientWidth;

    function moveCarousel(direction) {
        if (direction === 'next') {
            currentIndex = (currentIndex + 1) % images.length;
        } else {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
        }
        
        // Añadir efecto VHS durante la transición
        carouselInner.style.filter = 'brightness(1.2) contrast(1.5)';
        setTimeout(() => {
            carouselInner.style.filter = '';
        }, 300);

        carouselInner.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // Eventos para los botones del carrusel
    prevButton.addEventListener('click', () => moveCarousel('prev'));
    nextButton.addEventListener('click', () => moveCarousel('next'));

    // Efecto VHS aleatorio
    function addVHSGlitch() {
        const container = document.querySelector('.container');
        container.style.filter = `
            brightness(${1 + Math.random() * 0.2})
            contrast(${1 + Math.random() * 0.3})
            hue-rotate(${Math.random() * 10}deg)
        `;
        setTimeout(() => {
            container.style.filter = '';
        }, 150);
    }

    // Aplicar efecto VHS cada cierto tiempo
    setInterval(addVHSGlitch, 5000);

    // Preloader para videos
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.addEventListener('loadeddata', () => {
            video.parentElement.classList.add('loaded');
        });
    });

    // Efecto de parallax suave en el scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.querySelector('.main-title').style.transform = 
            `translateY(${scrolled * 0.3}px)`;
    });
});
