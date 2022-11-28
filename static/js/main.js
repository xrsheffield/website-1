// For the responsive menu used on small screens (mobile devices)

const hamburgerBtn = document.querySelector('.hamburger');
const responsiveMenu = document.querySelector('.main-menu');

hamburgerBtn.addEventListener('click', tggle);

function tggle() {
  hamburgerBtn.classList.toggle('is-active');
  responsiveMenu.classList.toggle('show');
}
