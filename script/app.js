const nav = document.querySelector("nav");
const btnToggleNav = document.querySelector(".hamburger-menu");
const form = document.querySelector(".hero-gauche form");

btnToggleNav.addEventListener("click", () => {
  nav.classList.toggle("active");
  btnToggleNav.classList.toggle("active");
});
