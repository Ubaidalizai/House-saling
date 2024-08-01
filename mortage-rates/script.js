// -----------------code for the chart-----------------

// Sample data for interest rates over time
const labels = [
  "Jan 2023",
  "Feb 2023",
  "Mar 2023",
  "Apr 2023",
  "May 2023",
  "Jun 2023",
];
const fifteenYearFixed = [
  4.0, 4.75, 4.25, 4.5, 5.25, 5.0, 6.0, 6.5, 7.0, 7.5, 8.0,
];
const thirtyYearFixed = [
  4.5, 5.0, 4.75, 5.25, 5.75, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0,
];
const fiveOneArm = [3.5, 4.0, 3.75, 4.25, 4.75, 4.5, 6.0, 6.5, 7.0, 7.5, 8.0];

// Create the chart
const ctx = document.getElementById("interestRatesChart").getContext("2d");
const chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "15-Year Fixed",
        data: fifteenYearFixed,
        borderColor: "yellow",
        backgroundColor: "yellow",
        tension: 1, // Set tension to 0 for more irregular lines
      },
      {
        label: "30-Year Fixed",
        data: thirtyYearFixed,
        borderColor: "red",
        backgroundColor: "red",
        tension: 1, // Set tension to 0 for more irregular lines
      },
      {
        label: "5/1 ARM",
        data: fiveOneArm,
        borderColor: "green",
        backgroundColor: "green",
        tension: 0, // Set tension to 0 for more irregular lines
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,

    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: "#ccc", // Lighter gray grid lines
          lineWidth: 2, // Increase the line width of the grid lines
        },
        ticks: {
          color: "#333",
          font: {
            size: "10rem",
          },
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Average Interest Rates",
      },
    },
  },
});

// -------------------code for footer section-------------------------------------
const clickFooter = document.querySelectorAll(".footer-link-card");
clickFooter.forEach((element) => {
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
