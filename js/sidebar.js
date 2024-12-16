const mobileMenuBtn = document.querySelector(".gnb-mobile .menu");
const sideBar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".sidebar .btn-close");

mobileMenuBtn.addEventListener("click", function () {
  sideBar.classList.toggle("is-active");
  overlay.classList.toggle("is-active");
});

closeBtn.addEventListener("click", function () {
  sideBar.classList.toggle("is-active");
  overlay.classList.toggle("is-active");
});
