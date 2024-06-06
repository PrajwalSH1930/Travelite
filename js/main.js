// HERO SLIDER
var swiper = new Swiper(".bg-slider-thumbs", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 0,
});
var swiper2 = new Swiper(".bg-slider", {
  loop: true,
  spaceBetween: 0,
  thumbs: {
    swiper: swiper,
  },
  speed: 2000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
// LOGIN REGISTER FORMS
const wrapper = document.querySelector(".wrapper");
const loginlink = document.querySelector(".login-link");
const registerlink = document.querySelector(".register-link");
const btnpopup = document.querySelector(".btnlogin-signup");
const iconclose = document.querySelector(".icon-closed-cross");
registerlink.addEventListener("click", () => {
  wrapper.classList.add("active");
});
loginlink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
btnpopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});
iconclose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});
// PACKAGE SLIDER
var swiper = new Swiper(".packageSwiper", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 1000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});
// IMAGE FADE EFFECT
document.addEventListener("DOMContentLoaded", function () {
  var imgs = document.querySelectorAll(".destBox");
  imgs.forEach(function (img) {
    img.addEventListener("mouseenter", function (e) {
      e.preventDefault();
      img.classList.add("dark-layer");
    });
    img.addEventListener("mouseleave", function (e) {
      e.preventDefault();
      img.classList.remove("dark-layer");
    });
  });
});
// TESTIMONIALS
var swiper = new Swiper(".testSwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  speed: 1500,
  autoplay: {
    delay: 3000,
  },
});
