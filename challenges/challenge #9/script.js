"use strict";

function printForecast(arr) {
  let str = "... ";
  for (let i = 1; i <= arr.length; i++) {
    str += `${arr[i - 1]}C in ${i} days ... `;
  }
  return str;
}

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
