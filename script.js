// Animación del carrusel
const carouselInner = document.querySelector('.carousel-inner');

// Clona las imágenes para crear un efecto de bucle infinito
carouselInner.innerHTML += carouselInner.innerHTML;

// Ajusta la duración de la animación según el número de imágenes
const images = document.querySelectorAll('.carousel img');
const totalWidth = images.length * images[0].clientWidth;
carouselInner.style.width = ${totalWidth}px;
