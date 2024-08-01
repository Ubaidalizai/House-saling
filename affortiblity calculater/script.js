const purchaseButton = document.querySelector(".purchas-button");
const arrowup = document.querySelector(".arrow-up");
const arrowdown = document.querySelector(".arrow-down");
const hide_data = document.querySelector(".hide-advance-data");
const advance_btn = document.querySelector(".advance");
// nav
const toggle1 = document.getElementById("toggle");
const nav = document.querySelector("nav");
const close_nav = document.querySelector(".close-nav");
const collapsibel = document.querySelector(".collapsible");
// modal
const modal = document.getElementById("modal");
const close_signup = document.getElementById("signup-loginbtn-close");
const open1 = document.getElementById("open1");
const open3btn = document.getElementById("open2");
const open2btn = document.getElementById("open3");

// function
function showNavBar() {
  nav.classList.toggle("show-nav");
}
function showModal() {
  modal.classList.add("show-modal");
}
function removeModal() {
  modal.classList.remove("show-modal");
}

// event handler
toggle1.addEventListener("click", showNavBar);
close_nav.addEventListener("click", showNavBar);
open3btn.addEventListener("click", showModal);
open2btn.addEventListener("click", showModal);
open1.addEventListener("click", showModal);
close_signup.addEventListener("click", removeModal);
purchaseButton.addEventListener("click", () => {
  // arrowup.style.display=arrowup.style.display==='none' ?'block': 'none';
  arrowdown.style.display = arrowup.style.display === "none" ? "block" : "none";
  hide_data.style.display =
    hide_data.style.display === "none" ? "block" : "none";
  // advance_btn.innerHTML=advance_btn.innerHTML==='Adnace'? 'block' : 'Less';
  if (hide_data.style.display === "none") {
    advance_btn.innerHTML = "Advance";
    // arrowdown.style.display='block';
    // arrowup.style.display='none';
  } else {
    // arrowdown.style.display='none';
    // arrowup.style.display='block';
    advance_btn.innerHTML = "Simple";
  }
});
// modal

// -------------------code for footer section-------------------------------------
const clickFooter = document.querySelectorAll(".footer-link-card");
clickFooter.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("active");
  });
});
