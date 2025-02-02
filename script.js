// Control de la música
const musicButton = document.getElementById('music-button');
const backgroundMusic = document.getElementById('background-music');

musicButton.addEventListener('click', () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    musicButton.textContent = '⏸️ Pausar';
  } else {
    backgroundMusic.pause();
    musicButton.textContent = '▶️ Reproducir';
  }
});

// Animación del carrusel
const carouselInner = document.querySelector('.carousel-inner');
carouselInner.innerHTML += carouselInner.innerHTML;

const images = document.querySelectorAll('.carousel img');
const totalWidth = images.length * images[0].clientWidth;
carouselInner.style.width = `${totalWidth}px`;
