const purchaseButton = document.querySelector(".purchas-button");
const arrowup = document.querySelector(".arrow-up");
const arrowdown = document.querySelector(".arrow-down");
const hide_data = document.querySelector(".hide-advance-data");

const advance_btn = document.querySelector(".advance");

purchaseButton.addEventListener("click", () => {
  // arrowup.style.display=arrowup.style.display==='none' ?'block': 'none';
  arrowdown.style.display = arrowup.style.display === "none" ? "block" : "none";
  hide_data.style.display =
    hide_data.style.display === "none" ? "block" : "none";
  advance_btn.innerHTML =
    advance_btn.innerHTML === "Adnace" ? "block" : "Simple";
  if (hide_data.style.display === "none") {
    advance_btn.innerHTML = "Advance";
    arrowdown.style.display = "block";
    arrowup.style.display = "none";
  } else {
    arrowdown.style.display = "none";
    arrowup.style.display = "block";
    advance_btn.innerHTML = "Simple";
  }
});

// ---------------------------code for chart section-------------------------------
window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "Refinancing could save you $54 /month",
    },
    axisX: {
      interval: 1,
    },
    axisY: {
      title: "Expenses in Billion Dollars",
      includeZero: true,
      scaleBreaks: {
        type: "wavy",
        customBreaks: [
          {
            startValue: 80,
            endValue: 210,
          },
          {
            startValue: 230,
            endValue: 600,
          },
        ],
      },
    },
    data: [
      {
        type: "bar",
        toolTipContent:
          '<img src="https://canvasjs.com/wp-content/uploads/images/gallery/javascript-column-bar-charts/"{url}"" style="width:40px; height:20px;"> <b>{label}</b><br>Budget: ${y}bn<br>{gdp}% of GDP',
        dataPoints: [
          { label: "Costs", y: 17.8, gdp: 5.8, url: "israel.png" },
          { label: "1-10year", y: 22, gdp: 5, url: "uae.png" },
        ],
      },
    ],
  });
  chart.render();
};
// -------------------------------second chart------------------------
window.onload = function () {
  var chart = new CanvasJS.Chart("chart", {
    animationEnabled: true,
    title: {
      text: "Total Savings / Break Even",
    },
    axisY: {
      title: "Units Sold",
      valueFormatString: "#0,,.",
      suffix: "mn",
      stripLines: [
        {
          value: 3366500,
          label: "Average",
        },
      ],
    },
    data: [
      {
        yValueFormatString: "#,### Units",
        xValueFormatString: "YYYY",
        type: "spline",
        dataPoints: [
          { x: new Date(2002, 0), y: 2506000 },
          { x: new Date(2003, 0), y: 2798000 },
          { x: new Date(2004, 0), y: 3386000 },
          { x: new Date(2005, 0), y: 6944000 },
          { x: new Date(2006, 0), y: 6026000 },
          { x: new Date(2007, 0), y: 2394000 },
          { x: new Date(2008, 0), y: 1872000 },
          { x: new Date(2009, 0), y: 2140000 },
          { x: new Date(2010, 0), y: 7289000 },
          { x: new Date(2011, 0), y: 4830000 },
          { x: new Date(2012, 0), y: 2009000 },
          { x: new Date(2013, 0), y: 2840000 },
          { x: new Date(2014, 0), y: 2396000 },
          { x: new Date(2015, 0), y: 1613000 },
          { x: new Date(2016, 0), y: 2821000 },
          { x: new Date(2017, 0), y: 2000000 },
        ],
      },
    ],
  });
  chart.render();
};

// ----------------------------code for calculator climer btn-----------------------
const affortBtn = document.querySelector(".affort-btn");
const affortModal = document.querySelector(".modal");

affortBtn.addEventListener("click", function () {
  affortModal.style.display =
    affortModal.style.display === "block" ? "none" : "block";
});
// --------crosse button-----------
const crossBtn = document.querySelector(".cross-btn");
const modal = document.querySelector(".modal");
crossBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// -------------------code for footer section-------------------------------------
const clickFooter = document.querySelectorAll(".footer-link-card");
clickFooter.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("active");
  });
});

// -------------------code for up and down buttons in question part----------------
const clickelement = document.querySelectorAll(".addres-click");
clickelement.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("active");
  });
});
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
