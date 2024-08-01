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
////////////
toggle1.addEventListener("click", ()=>{
    nav.classList.toggle("show-nav");
// document.nav.display = "block";
});
close_nav.addEventListener("click", ()=>{
    nav.classList.toggle("show-nav");
});
open3btn.addEventListener("click", ()=>modal.classList.add("show-modal"));
open2btn.addEventListener("click", ()=>modal.classList.add("show-modal"));
open1.addEventListener("click", ()=>{
    modal.classList.add("show-modal");
});
open.addEventListener("click", ()=>{
    modal.classList.add("show-modal");
});
close_signup.addEventListener("click", ()=>{
    modal.classList.remove("show-modal");
});
buyimg.addEventListener("click", (e)=>{
    e.preventDefault();
    const col = document.querySelector(".buy-ul");
    console.log(col);
    col.style.display = col.style.display === "block" ? "none" : "block";
});
rentimg.addEventListener("click", function(e) {
    const ullist = document.querySelector(".rent-ul");
    console.log(ullist);
    ullist.style.display = ullist.style.display === "block" ? "none" : "block";
});
mortgageimg.addEventListener("click", ()=>{
    const ullist = document.querySelector(".mortgage-ul");
    ullist.style.display = ullist.style.display === "block" ? "none" : "block";
});
localimg.addEventListener("click", ()=>{
    const ullist = document.querySelector(".local-ul");
    ullist.style.display = ullist.style.display === "block" ? "none" : "block";
});
additionalimg.addEventListener("click", ()=>{
    const list = document.querySelector(".additional-ul");
    list.style.display = list.style.display === "block" ? "none" : "block";
});
show_more.addEventListener("click", function() {
    const showmore = document.querySelector(".show-more-less");
    const btntext = document.querySelector(".contents-more");
    // console.log(btntext);
    // showmore.style.display = showmore.style.display === "none" ? "block" : "none";
    const svgarrow2 = document.querySelector("#hide-showsvg");
    const svgarrow1 = document.getElementById("svgarrow");
    if (showmore.style.display === "none") {
        showmore.style.display = "block";
        svgarrow1.style.display = "none";
        svgarrow2.style.display = "inline";
        btntext.innerHTML = "Less";
    } else {
        svgarrow1.style.display = "inline";
        svgarrow2.style.display = "none";
        showmore.style.display = "none";
        btntext.innerHTML = "More";
    }
// console.log(showmore);
});
second_more.addEventListener("click", ()=>{
    const showmore = document.querySelector(".show-more-less1");
    const btntext = document.querySelector(".secont-contents-more");
    const showsvgarrow = document.getElementById("svgarrow2");
    const showsvgarrow1 = document.getElementById("svgarrow21");
    if (showmore.style.display === "none") {
        showmore.style.display = "block";
        btntext.innerHTML = "Less";
        showsvgarrow.style.display = "none";
        showsvgarrow1.style.display = "inline";
    } else {
        showsvgarrow.style.display = "inline";
        showsvgarrow1.style.display = "none";
        showmore.style.display = "none";
        btntext.innerHTML = "More";
    }
});
thirdsvg.addEventListener("click", function() {
    const showmore = document.querySelector(".show-more-less23");
    const btntext = document.querySelector(".third-contents-more");
    const showsvgarrow = document.getElementById("svg3");
    const showsvgarrow1 = document.getElementById("svg4");
    if (showmore.style.display === "none") {
        showmore.style.display = "block";
        btntext.innerHTML = "Less";
        showsvgarrow.style.display = "none";
        showsvgarrow1.style.display = "inline";
    } else {
        showsvgarrow.style.display = "inline";
        showsvgarrow1.style.display = "none";
        showmore.style.display = "none";
        btntext.innerHTML = "More";
    }
});

//# sourceMappingURL=index.92667023.js.map
