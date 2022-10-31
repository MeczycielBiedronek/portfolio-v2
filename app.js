"use strict"
const wrapper = document.getElementById("wrapper");
const intro = document.getElementById("intro");
const shape = document.querySelectorAll(".shape");
const skip = document.querySelector(".skip");

// { configuration: 3, roundness: 3 }, // idea 1
// { configuration: 1, roundness: 4 },
// { configuration: 2, roundness: 2 },
// { configuration: 1, roundness: 2 }, // develop 4
// { configuration: 2, roundness: 3 }

const combinations = [
  // { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 3 }, // idea 1
  { configuration: 2, roundness: 4 },
  { configuration: 3, roundness: 2 },
  { configuration: 4, roundness: 2 }, // develop 4
  { configuration: 5, roundness: 5 }

];

wrapper.dataset.configuration = combinations[0].configuration;
wrapper.dataset.roundness = combinations[0].roundness
let index = 1;


setInterval(() => {

  let combination = combinations[index];
  
  wrapper.dataset.configuration = combination.configuration;
  wrapper.dataset.roundness = combination.roundness;
  index ++;
  if (index == 5) {
    index = 0
    skip.style.color = "#333333"
    // skip.innerHTML = "next"
  }
}, 4000);

// Opcja statyczna
// let index = 4;
// wrapper.dataset.configuration = combinations[index].configuration;
// wrapper.dataset.roundness = combinations[index].roundness

// intro.addEventListener('click', ()=> {
//   intro.setAttribute('status', 'off')
// })