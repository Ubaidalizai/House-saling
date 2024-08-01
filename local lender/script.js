// Elements
const toggle1 = document.getElementById("toggle");
const nav = document.querySelector("nav");
const close_nav = document.querySelector(".close-nav");
const collapsibel = document.querySelector(".collapsible");
const open = document.getElementById("open");
const open1 = document.getElementById("open1");
const modal = document.getElementById("modal");
const close_signup = document.getElementById("signup-loginbtn-close");
const open3btn = document.getElementById("open2");
const open2btn = document.getElementById("open3");
const buyimg = document.getElementById("buyimg"); // buybtn and img both
const rentimg = document.getElementById("rentimg-btn-nav");
const mortgageimg = document.getElementById("mortgageimg");
const localimg = document.getElementById("localimg");
const additionalimg = document.getElementById("additional-img");
// -------------------code for up and down buttons in question part----------------
const clickElement = document.querySelectorAll(".click");
clickElement.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("active");
  });
});

// -------------------code for footer section-------------------------------------
const clickFooter = document.querySelectorAll(".footer-link-card");
clickFooter.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("active");
  });
});

// functions
function showNavBar() {
  nav.classList.toggle("show-nav");
}
function showModal() {
  modal.classList.add("show-modal");
}
function removeModal() {
  modal.classList.remove("show-modal");
}
// handler
toggle1.addEventListener("click", showNavBar);
close_nav.addEventListener("click", showNavBar);
open3btn.addEventListener("click", showModal);
open2btn.addEventListener("click", showModal);
open1.addEventListener("click", showModal);
open.addEventListener("click", showModal);
close_signup.addEventListener("click", removeModal);
buyimg.addEventListener("click", show_buy);
rentimg.addEventListener("click", show_rent);
mortgageimg.addEventListener("click", show_Mortgage);
localimg.addEventListener("click", show_local);
additionalimg.addEventListener("click", show_additional);
