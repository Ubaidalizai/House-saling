
var mapOptions = {
    center: [51.505, -0.09],
    zoom: 13
};

var map = L.map('map', mapOptions);

var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

tiles.addTo(map);




var swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // Responsive settings
      980:{
        slidesPerView:4,
      },
      780:{
        slidesPerView:3,
      },
      580: {
        slidesPerView: 2,
      },
      300: {
        slidesPerView: 1,
      },
    },
  });

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