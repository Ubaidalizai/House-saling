// /-----------------------------codeing for chart section------------------------
   // Create the chart instance
   var myChart;

   // Calculate monthly payment
   function calculatePayment() {
     var loanAmount = document.getElementById('loanAmount').value;
     var interestRate = document.getElementById('interestRate').value / 1200; // Monthly interest rate
     var loanTerm = document.getElementById('loanTerm').value * 12; // Loan term in months

     var monthlyPayment = loanAmount * (interestRate / (1 - Math.pow(1 + interestRate, -loanTerm)));
     var principal = monthlyPayment * (loanTerm / 12);
     var interest = principal - loanAmount;

     document.getElementById('monthlyPayment').textContent = '$' + monthlyPayment.toFixed(2);
     document.getElementById('principal').textContent = '$' + principal.toFixed(2);
     document.getElementById('interest').textContent = '$' + interest.toFixed(2);

     updateChart(principal, interest);
   }

   // Update the chart
   function updateChart(principal, interest) {
     var ctx = document.getElementById('myChart').getContext('2d');

     // Destroy the previous chart if it exists
     if (myChart) {
       myChart.destroy();
     }

     myChart = new Chart(ctx, {
       type: 'doughnut',
       data: {
         labels: ['Principal', 'Interest'],
         datasets: [{
           label: 'Mortgage Payment',
           data: [principal, interest],
           backgroundColor: [
             getChartColor(principal, interest, 0.6),
             getChartColor(interest, principal, 0.6)
           ],
           hoverBackgroundColor: [
             getChartColor(principal, interest, 0.8),
             getChartColor(interest, principal, 0.8)
           ]
         }]
       },
       options: {
         responsive: true,
         maintainAspectRatio: false
       }
     });
   }

   // Helper function to get chart colors based on input values
   function getChartColor(value1, value2, opacity) {
     var hue = Math.floor(120 * (value1 / (value1 + value2)));
     return `hsla(${hue}, 100%, 50%, ${opacity})`;
   }

   // Initialize the chart
   calculatePayment();


   // -------------------code for footer section-------------------------------------
const clickFooter=document.querySelectorAll(".footer-link-card");
clickFooter.forEach(element=>{
element.addEventListener('click',()=>{
  element.classList.toggle('active');
});
});

// -------------------code for up and down buttons in question part----------------
const clickelement=document.querySelectorAll(".addres-click");
clickelement.forEach(element=>{
  element.addEventListener('click',()=>{
    element.classList.toggle('active');

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
