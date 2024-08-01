///////////////////////////
//   Elements
//////////////////////////
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
const show_more = document.getElementById("show-more-less");

const second_more = document.getElementById("show-more-less1");
const thirdsvg = document.getElementById("third-more-less2");
////////////////
// function
///////////////
function showNavBar() {
  nav.classList.toggle("show-nav");
}
function showModal() {
  modal.classList.add("show-modal");
}
function removeModal() {
  modal.classList.remove("show-modal");
}
function show_buy() {
  // e.preventDefault();
  const col = document.querySelector(".buy-ul");
  // console.log(col);
  col.style.display = col.style.display === "block" ? "none" : "block";
}
function show_rent() {
  const ullist = document.querySelector(".rent-ul");
  ullist.style.display = ullist.style.display === "block" ? "none" : "block";
}
function show_Mortgage() {
  const ullist1 = document.querySelector(".mortgage-ul");
  ullist1.style.display = ullist1.style.display === "block" ? "none" : "block";
}
function show_local() {
  const ullist2 = document.querySelector(".local-ul");
  ullist2.style.display = ullist2.style.display === "block" ? "none" : "block";
}
function show_additional() {
  const list = document.querySelector(".additional-ul");
  list.style.display = list.style.display === "block" ? "none" : "block";
}
////////////
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
show_more.addEventListener("click", function () {
  const showmore = document.querySelector(".show-more-less");
  const btntext = document.querySelector(".contents-more");
  // console.log(btntext);
  const windowWidth = window.innerWidth;
  // showmore.style.display = showmore.style.display === "none" ? "block" : "none";
  const svgarrow2 = document.querySelector("#hide-showsvg");
  const svgarrow1 = document.getElementById("svgarrow");
  if (showmore.style.display === "none") {
    // showmore.style.display = "inline";
    svgarrow1.style.display = "none";
    svgarrow2.style.display = "inline";
    btntext.innerHTML = "Less";
    if (windowWidth > 770) {
      showmore.style.display = "block";
    } else {
      showmore.style.display = "inline";
    }
  } else {
    svgarrow1.style.display = "inline";
    svgarrow2.style.display = "none";
    showmore.style.display = "none";
    btntext.innerHTML = "More";
  }
  // console.log(showmore);
});
second_more.addEventListener("click", () => {
  const windowWidth = window.innerWidth;
  const showmore = document.querySelector(".show-more-less1");
  const btntext = document.querySelector(".secont-contents-more");
  const showsvgarrow = document.getElementById("svgarrow2");
  const showsvgarrow1 = document.getElementById("svgarrow21");
  if (showmore.style.display === "none") {
    // showmore.style.display = "inline";
    btntext.innerHTML = "Less";
    showsvgarrow.style.display = "none";
    showsvgarrow1.style.display = "inline";
    if (windowWidth > 770) {
      showmore.style.display = "block";
    } else {
      showmore.style.display = "inline";
    }
  } else {
    showmore.style.display = "none";
    showsvgarrow.style.display = "inline";
    showsvgarrow1.style.display = "none";
    btntext.innerHTML = "More";
  }
});
thirdsvg.addEventListener("click", function () {
  const showmore = document.querySelector(".show-more-less23");
  const btntext = document.querySelector(".third-contents-more");
  const showsvgarrow = document.getElementById("svg3");
  const windowWidth = window.innerWidth;
  const showsvgarrow1 = document.getElementById("svg4");
  if (showmore.style.display === "none") {
    // showmore.style.display = "block";
    btntext.innerHTML = "Less";
    showsvgarrow.style.display = "none";
    showsvgarrow1.style.display = "block";
    if (windowWidth > 770) {
      showmore.style.display = "block";
    } else {
      showmore.style.display = "inline";
    }
  } else {
    showmore.style.display = "none";
    showsvgarrow.style.display = "block";
    showsvgarrow1.style.display = "none";
    btntext.innerHTML = "More";
  }
});
// swiper
//initialize swiper when document ready
const swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    570: {
      slidesPerView: 1.55,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 1.85,
      spaceBetween: 0,
    },
    718: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    880: {
      slidesPerView: 2.3,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 3.5,
      spaceBetween: 30,
    },
  },
  // Optional parameters
});
