"use strict";

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log(`I can drive`);

// function logger() {
//   console.log(`Ide gas`);
// }

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples, and ${oranges} oranges.`;
//   return juice;
// }

// fruitProcessor(5, 0);

function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
}

const age1 = calcAge1(1991);
console.log(age1);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2);
