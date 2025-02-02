// Control de la música
const musicButton = document.getElementById('music-button');
const backgroundMusic = document.getElementById('background-music');

musicButton.addEventListener('click', () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    musicButton.textContent = '⏸️';
  } else {
    backgroundMusic.pause();
    musicButton.textContent = '▶️';
  }
});

// Animación del carrusel
const carouselInner = document.querySelector('.carousel-inner');

// Clona las imágenes para crear un efecto de bucle infinito
carouselInner.innerHTML += carouselInner.innerHTML;

// Ajusta la duración de la animación según el número de imágenes
const images = document.querySelectorAll('.carousel img');
const totalWidth = images.length * images[0].clientWidth;
carouselInner.style.width = ${totalWidth}px;
