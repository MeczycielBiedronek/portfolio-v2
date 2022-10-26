"use strict"
const wrapper = document.getElementById("wrapper");
const shape = document.querySelectorAll(".shape");

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
  { configuration: 5, roundness: 3 }

];
let index = 4;
wrapper.dataset.configuration = combinations[index].configuration;
wrapper.dataset.roundness = combinations[index].roundness



// setInterval(() => {

//   let combination = combinations[index];
  
//   wrapper.dataset.configuration = combination.configuration;
//   wrapper.dataset.roundness = combination.roundness;
//   console.log(index)
//   index ++;
//   if (index == 5) {
//     index = 0
//   }
// }, 4000);