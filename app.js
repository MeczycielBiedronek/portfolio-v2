"use strict"
const wrapper = document.getElementById("wrapper");
const shape = document.querySelectorAll(".shape");

// shape.forEach((element) => {
//   element.addEventListener('click', ()=>{
//     let color = element.style.color
//     element.style.backgroundColor = "red"
//     setInterval(()=>{
//       element.style.backgroundColor = color
//     }, 2000)
// })
// })


// const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// const uniqueRand = (min, max, prev) => {
//   let next = prev;
  
//   while(prev === next) next = rand(min, max);
  
//   return next;
// }

const combinations = [
  // { configuration: 1, roundness: 1 },
  { configuration: 3, roundness: 3 }, // idea 1
  { configuration: 1, roundness: 4 },
  { configuration: 2, roundness: 2 },
  { configuration: 1, roundness: 2 }, // develop 4
  { configuration: 2, roundness: 3 }

];
let index = 0;
wrapper.dataset.configuration = combinations[index].configuration;
wrapper.dataset.roundness = combinations[index].roundness



setInterval(() => {

  let combination = combinations[index];
  
  wrapper.dataset.configuration = combination.configuration;
  wrapper.dataset.roundness = combination.roundness;
  console.log(index)
  index ++;
  if (index == 5) {
    index = 0
  }
}, 3000);