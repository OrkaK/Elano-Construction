const hamburger = document.querySelector('.hamburger');
const navLinks = document.getElementById('nav-links');

function toggleMenu() {
  navLinks.classList.toggle('active');
}

let currentSlide = 0;
const track = document.getElementById('carousel-track');
const slides = document.querySelectorAll('.carousel-slide');

function updateSlide() {
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    updateSlide();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlide();
  }
}