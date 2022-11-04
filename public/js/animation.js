"use strict"
const wrapper = document.getElementById("wrapper");
const intro = document.getElementById("intro");
const shape = document.querySelectorAll(".shape");
const skip = document.querySelector(".skip");
const combinations = [
  { configuration: 1, roundness: 3 }, 
  { configuration: 2, roundness: 4 },
  { configuration: 3, roundness: 2 },
  { configuration: 4, roundness: 2 },
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
  }
}, 4000);