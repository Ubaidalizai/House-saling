///////////////////////////
//    ELements
//////////////////////////
const toggle1 = document.getElementById("toggle");
const nav = document.querySelector("nav");
const close_nav = document.querySelector(".close-nav");
const collapsibel = document.querySelector(".collapsible");
const btnselect = document.querySelector(".agent-list");
const btnselect2 = document.querySelector(".agent-list2");
const any_price = document.getElementById("any-price");
const all_beds = document.getElementById("all-beds");
const More_btn = document.getElementById("more");
const home_type = document.getElementById("home-type");
const more = document.getElementById("more");
const modal = document.getElementById("modal");
const close_signup = document.getElementById("signup-loginbtn-close");
const saveHomeBtn = document.getElementById("o-modal");
const saveSearchBtn = document.getElementById("o-modal1");
const saveLoginBtn = document.getElementById("o-modal2");
const savesearch = document.getElementById("save_search");
const filter = document.getElementById("filter");
const show_hide_btn = document.getElementById("btnshow-hide");
const anyPriceButton = document.getElementById("any-price");
const filter1 = document.getElementById("filter1");
const filter2 = document.getElementById("filter2");
const resultDiv = document.getElementById("filter-title");
const svg0 = document.querySelector(".svgfile0");
const svg1 = document.querySelector(".svgfile");
const price = document.querySelector(".any-price");
const viewas_graph = document.getElementById("viewasgraph");
const sumofHomeValues = document.querySelector("#sumOfHomeValues");
const buyimg = document.getElementById("buyimg"); // buybtn and img both
const rentimg = document.getElementById("rentimg-btn-nav");
const mortgageimg = document.getElementById("mortgageimg");
const localimg = document.getElementById("localimg");
const additionalimg = document.getElementById("additional-img");
const hide_content_near = document.getElementById("hide-c-near");
const hide_zipcode = document.getElementById("hide-zipcode");
const neighborcontentshide = document.getElementById("hide-neighbor");
const hide_property = document.getElementById("hide-property");
const show_map = document.getElementById("show-mapslide");
const valuesOfHome = document.querySelectorAll(".value");
const filter_content = document.getElementById("close-filterbtn");
const hide_medainvalue = document.getElementById("hide-medain");
const calculate = document.querySelector(".calculates");
const values = [395, 396, 398, 399, 400, 400, 400, 400, 401, 402, 402, 401];
const months = [
  "july 2023",
  "August 2023",
  "September 2023",
  "October 2023",
  "November 2023",
  "December 2023",
  "January 2024",
  "february 2024",
  "March 2024",
  "April 2024",
  "May 2024",
  "June 2024",
  "July 2024",
];

// calculate the sum of the values
const sum = values.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);
calculate.innerHTML = sum;

// sum of homes
let sumofHouses = 0;

valuesOfHome.forEach((valueElement) => {
  const valueText = valueElement.innerHTML;
  const valueNumber = parseInt(valueText.replace(/\D/g, ""), 10);
  sumofHouses += valueNumber;
});
sumofHomeValues.innerHTML = sumofHouses;
// console.log(sumofHomeValues);
// const sumOfhome = valuesOfHome.reduce((acc, curr) => acc + curr, 0);
// console.log(sumOfhome);
// console.log(calculate);
////////////////////////
// Functions
//////////////////////
// function of nav show or hide
function showNavBar() {
  nav.classList.toggle("show-nav");
}
function show_buy() {
  const col = document.querySelector(".buy-ul");
  const svgicon1 = document.querySelector(".svg1");
  const svgicon2 = document.querySelector(".svg11");
  col.style.display = col.style.display === "block" ? "none" : "block";
  svgicon1.style.display = svgicon1.style.display === "none" ? "block" : "none";
  svgicon2.style.display =
    svgicon2.style.display === "block" ? "none" : "block";
}
function show_rent() {
  const ullist = document.querySelector(".rent-ul");
  ullist.style.display = ullist.style.display === "block" ? "none" : "block";
  const svgicon1 = document.querySelector(".svg2");
  const svgicon2 = document.querySelector(".svg21");
  svgicon1.style.display = svgicon1.style.display === "none" ? "block" : "none";
  svgicon2.style.display =
    svgicon2.style.display === "block" ? "none" : "block";
}
function show_Mortgage() {
  const ullist1 = document.querySelector(".mortgage-ul");
  ullist1.style.display = ullist1.style.display === "block" ? "none" : "block";
  const svgicon1 = document.querySelector(".svg3");
  const svgicon2 = document.querySelector(".svg31");
  svgicon1.style.display = svgicon1.style.display === "none" ? "block" : "none";
  svgicon2.style.display =
    svgicon2.style.display === "block" ? "none" : "block";
}
function show_local() {
  const ullist2 = document.querySelector(".local-ul");
  ullist2.style.display = ullist2.style.display === "block" ? "none" : "block";
  const svgicon1 = document.querySelector(".svg4");
  const svgicon2 = document.querySelector(".svg41");
  svgicon1.style.display = svgicon1.style.display === "none" ? "block" : "none";
  svgicon2.style.display =
    svgicon2.style.display === "block" ? "none" : "block";
}
function show_additional() {
  const list = document.querySelector(".additional-ul");
  list.style.display = list.style.display === "block" ? "none" : "block";
  const svgicon1 = document.querySelector(".svg5");
  const svgicon2 = document.querySelector(".svg51");
  svgicon1.style.display = svgicon1.style.display === "none" ? "block" : "none";
  svgicon2.style.display =
    svgicon2.style.display === "block" ? "none" : "block";
}
function updateTitle() {
  const filter1Value = filter1.options[filter1.selectedIndex].text;
  const filter2Value = filter2.options[filter2.selectedIndex].text;
  let newTitle = "Any price";

  if (filter1Value !== "No Min" && filter2Value !== "No Max") {
    newTitle = `${filter1Value} - ${filter2Value}`;
  } else if (filter1Value === filter2Value) {
    newTitle = filter1Value;
  } else if (filter1Value !== "No Min") {
    newTitle = filter1Value;
  } else if (filter2Value !== "No Max") {
    newTitle = filter2Value;
  }
  resultDiv.title = newTitle;
  resultDiv.innerHTML = newTitle;
}
// show modal function
function showModal() {
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}
//////////
//
/////////
function changeTextOfNear() {
  const near_Button = document.querySelector(".near-btn");
  if (near_Button.innerHTML === "See All") {
    near_Button.innerHTML = "See Less";
  } else {
    near_Button.innerHTML = "See All";
  }
}
function changetext() {
  const zipbtn = document.querySelector(".zip-btn");

  if (zipbtn.innerHTML === "See All") {
    zipbtn.innerHTML = "See Less";
  } else {
    zipbtn.innerHTML = "See All";
  }
}
function changeTextOfNeigbor() {
  const neighborbtn = document.querySelector(".neighbor-btn");
  console.log(neighborbtn);
  if (neighborbtn.innerHTML === "See All") {
    neighborbtn.innerHTML = "See Less";
  } else {
    neighborbtn.innerHTML = "See All";
  }
}
function changeTextOfproperty() {
  const propertybtn = document.querySelector(".property-btn");
  if (propertybtn.innerHTML === "See All") {
    propertybtn.innerHTML = "See Less";
  } else {
    propertybtn.innerHTML = "See All";
  }
}
function selectbtns() {
  const btnlist = (document.querySelector(".agent-list2").style.border =
    "none");
  const btnlis = (document.querySelector(".agent-list").style.border =
    "1px solid #007882");
}
function showPrice_title() {
  svg0.style.display = svg0.style.display === "none" ? "block" : "none";
  svg1.style.display = svg1.style.display === "block" ? "none" : "block";
  price.style.display = price.style.display === "block" ? "none" : "block";
  // update the title
  updateTitle();
  filter1.addEventListener("change", updateTitle);
  filter2.addEventListener("change", updateTitle);
}
function showFilterContents() {
  const contents = document.querySelector(".content-fill");
  contents.style.display =
    contents.style.display === "block" ? "none" : "block";
}
function showMapContents() {
  const showing_map = document.querySelector(".show-map");
  const map_contents = document.querySelector(".map-content");
  const map_house = document.querySelector(".map-house");
  const hidemap = document.querySelector(".hidemap");
  map_house.style.display =
    map_house.style.display === "block" ? "none" : "block";
  if (showing_map.style.display === "none") {
    showing_map.style.display = "block";
    map_contents.style.display = "block";
    hidemap.style.display = "block";
    showing_map.style.width = "100%";
    show_hide_btn.style.display = "block";
    map_contents.style.position = "relative";
  } else {
    show_hide_btn.style.display = "none";
    hidemap.style.display = "none";
    showing_map.style.display = "none";
    map_contents.style.display = "none";
  }
}
////////////////////////
// Event Handler
///////////////////////
toggle1.addEventListener("click", showNavBar);
close_nav.addEventListener("click", showNavBar);
buyimg.addEventListener("click", show_buy);
rentimg.addEventListener("click", show_rent);
mortgageimg.addEventListener("click", show_Mortgage);
localimg.addEventListener("click", show_local);
additionalimg.addEventListener("click", show_additional);
btnselect.addEventListener("click", selectbtns);
btnselect2.addEventListener("click", () => {
  const btnlis = (document.querySelector(".agent-list").style.border = "none");
  const btnlist = (document.querySelector(".agent-list2").style.border =
    "1px solid #007882");
  // btnlist.style.border = "1px solid #007882";
  // btnlis.style.border = "none";
});

anyPriceButton.addEventListener("click", showPrice_title);

all_beds.addEventListener("click", () => {
  const svg = document.querySelector(".svgfile2");
  const svg1 = document.querySelector(".svgfile21");
  const bedsShow = document.querySelector(".d_bed_none");
  svg.style.display = svg.style.display === "none" ? "block" : "none";
  svg1.style.display = svg1.style.display === "block" ? "none" : "block";
  bedsShow.style.display =
    bedsShow.style.display === "block" ? "none" : "block";
});
home_type.addEventListener("click", () => {
  const svg = document.querySelector(".svgfile3");
  const svg1 = document.querySelector(".svgfile31");
  const listtype = document.querySelector(".list-type1");
  svg.style.display = svg.style.display === "none" ? "block" : "none";
  svg1.style.display = svg1.style.display === "block" ? "none" : "block";
  listtype.style.display =
    listtype.style.display === "block" ? "none" : "block";
});
// more code
More_btn.addEventListener("click", function () {
  const svg = document.querySelector(".svgfile4");
  const svg1 = document.querySelector(".svgfile41");
  const listtype = document.querySelector(".More-content");
  svg.style.display = svg.style.display === "none" ? "block" : "none";
  svg1.style.display = svg1.style.display === "block" ? "none" : "block";
  listtype.style.display =
    listtype.style.display === "block" ? "none" : "block";
});
// modal code
saveHomeBtn.addEventListener("click", showModal);
saveSearchBtn.addEventListener("click", showModal);
saveLoginBtn.addEventListener("click", showModal);
savesearch.addEventListener("click", showModal);
close_signup.addEventListener("click", showModal);

// filter code
filter.addEventListener("click", () => {
  const svg = document.querySelector(".svgfile5");
  const svg1 = document.querySelector(".svgfile51");
  const contents = document.querySelector(".content-fill");
  svg.style.display = svg.style.display === "none" ? "block" : "none";
  svg1.style.display = svg1.style.display === "block" ? "none" : "block";
  contents.style.display =
    contents.style.display === "block" ? "none" : "block";
});
show_hide_btn.addEventListener("click", () => {
  const listhide = document.querySelector(".img-contents");
  const hidemaps = document.querySelector(".map-content");
  const map = document.querySelector(".show-map");
  const showlist = document.querySelector(".showlist");
  const hidemap = document.querySelector(".hidemap");
  showlist.style.display = showlist.style.display === "none" ? "flex" : "none";
  listhide.style.display =
    listhide.style.display === "block" ? "none" : "block";
  hidemaps.style.width = "100%";
  map.style.width = "100%";
});
hide_medainvalue.addEventListener("click", () => {
  const btn1 = document.querySelector(".hide-medainbtn0");
  const btn2 = document.querySelector(".hide-medainbtn1");
  const medain_value = document.querySelector(".medaincontainer");
  if (medain_value.style.display !== "none") {
    medain_value.style.display = "none";
    btn2.style.display = "none";
    btn1.style.display = "block";
  } else {
    medain_value.style.display = "block";
    btn2.style.display = "block";
    btn1.style.display = "none";
  }
});

// show graph or table
viewas_graph.addEventListener("click", () => {
  const table = document.querySelector(".table");
  const chartofTable = document.querySelector(".chart-container");
  console.log(chartofTable);
  if (chartofTable.style.display === "none") {
    chartofTable.style.display = "block";
    table.style.display = "none";
  } else {
    chartofTable.style.display = "none";
    table.style.display = "block";
  }
});
// chart of line
const data1 = {
  labels: [
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
  ],
  datasets: [
    {
      label: "Median Home Value",
      data: [395, 396, 398, 399, 400, 400, 400, 400, 400, 402, 402, 401],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderWidth: 2,
    },
  ],
};

// Configuration for the chart
const config = {
  type: "line",
  data: data1,
  options: {
    scales: {
      y: {
        min: 390,
        max: 403,
        // beginAtZero: true,
        ticks: {
          callback: function (value1) {
            return "$" + value1 + "k";
          },
        },
      },
    },
  },
};
// Create and render the chart
const myChart = new Chart(document.getElementById("myChart"), config);

hide_content_near.addEventListener("click", () => {
  const near_content = document.querySelector(".near-hidecontents");
  near_content.style.display =
    near_content.style.display === "none" ? "block" : "none";
});
hide_zipcode.addEventListener("click", () => {
  const hideconten = document.querySelector(".zip-hidecontents");

  hideconten.style.display =
    hideconten.style.display === "none" ? "block" : "none";
});
neighborcontentshide.addEventListener("click", () => {
  const neighborbtn = document.querySelector(".neighbor-btn");
  const neighborcontents = document.querySelector(".neighbor-textsOfcontents");
  neighborcontents.style.display =
    neighborcontents.style.display === "none" ? "block" : "none";
});
hide_property.addEventListener("click", () => {
  const propertycontents = document.querySelector(".property-contentsall");
  propertycontents.style.display =
    propertycontents.style.display === "none" ? "block" : "none";
});
filter_content.addEventListener("click", showFilterContents);
show_map.addEventListener("click", showMapContents);
