const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('menu-open');
    menu.classList.toggle('open');
});

const navLinks = document.querySelectorAll('.menu');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove('menu-open');
    menu.classList.remove('open');
  });
}); 

 /*  */
let slideIndex = 0;
const slideInterval = 5000; // 5 seconds

function showSlide(index) {
  const slides = document.querySelectorAll('.slider-item');
  const prevIndex = slideIndex;
  slideIndex = (index + slides.length) % slides.length;

  slides[prevIndex].style.display = 'none';
  slides[slideIndex].style.display = 'block';
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function autoSlide() {
  nextSlide();
  setTimeout(autoSlide, slideInterval);
}

// Start auto slide when the page loads
autoSlide();


/* ps */

document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.querySelector(".slider-container");
  const slider = document.querySelector(".product-slider");
  const leftButton = document.querySelector(".left-button");
  const rightButton = document.querySelector(".right-button");

  leftButton.addEventListener("click", () => {
    slider.scrollBy({
      left: -300, // Adjust this value to scroll the desired amount
      behavior: "smooth",
    });
  });

  rightButton.addEventListener("click", () => {
    slider.scrollBy({
      left: 300, // Adjust this value to scroll the desired amount
      behavior: "smooth",
    });
  });
});