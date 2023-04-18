const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const intervalTime = 3000;

function resetSlides() {
  slides.forEach(slide => {
    slide.style.left = '0%';
  });
}

function changeSlide() {
  slides[currentSlide].getElementsByClassName.left = '-100%';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.left = '0';
}

setInterval(() => {
  changeSlide();
  resetSlides();
}, intervalTime);