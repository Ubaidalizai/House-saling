"use strict";
///////////////////////////
//    ELements
//////////////////////////
const btnselect = document.querySelector(".agent-list");
const btnselect2 = document.querySelector(".agent-list2");
///////////////////////
// Functions
//////////////////////
////////////////////////
// Event Handler
///////////////////////
btnselect.addEventListener("click", ()=>{
    const btnlist = document.querySelector(".agent-list2");
    const btnlis = document.querySelector(".agent-list");
    btnlist.style.border = "none";
    btnlis.style.border = "1px solid #007882";
});
btnselect2.addEventListener("click", ()=>{
    const btnlis = document.querySelector(".agent-list");
    const btnlist = document.querySelector(".agent-list2");
    btnlist.style.border = "1px solid #007882";
    btnlis.style.border = "none";
});

//# sourceMappingURL=index.fc6d1c95.js.map
