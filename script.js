// const creations = document.querySelectorAll(".creation");

// creations.forEach((creation) => {
//   const overlay = creation.querySelector(".overlay");
//   overlay.addEventListener("mouseover", () => {
//     creation.style.color = "black";
//   });
//   overlay.addEventListener("mouseout", () => {
//     creation.style.color = "";
//   });
// });

const hamburger = document.querySelector(".hamburger");
const iconClose = document.querySelector(".icon-close");
const headerNav = document.querySelector(".header-nav");
const header = document.querySelector(".header");
const headerLinksContainer = document.querySelector(".header-links-container");
const headerBlockText = document.querySelector(".header-block-text");
hamburger.addEventListener("click", () => {
  hamburger.classList.remove("hamburger-display");
  iconClose.classList.add("icon-close-display");
  headerNav.classList.add("header-nav-mobile");
  header.classList.add("header-mobile");
  headerLinksContainer.classList.add("header-links-container-mobile");
  header.classList.add("header-text-balancer");
});
iconClose.addEventListener("click", () => {
  hamburger.classList.add("hamburger-display");
  iconClose.classList.remove("icon-close-display");
  headerNav.classList.remove("header-nav-mobile");
  header.classList.remove("header-mobile");
  headerLinksContainer.classList.remove("header-links-container-mobile");
  header.classList.remove("header-text-balancer");
});
