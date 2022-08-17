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

// function calcAge1(birthYear) {
//   const age = 2037 - birthYear;
//   return age;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age1, age2);

// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearUntilRetirement = (birthYear) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };

// console.log(yearUntilRetirement(1991));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apple pieces, and ${orangePieces} orange pieces.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearUntilRetirement(2001, "Muhamed"));

// const friends = ["Muhamed", "Amar", "Murat"];
// console.log(friends);

// const years = new Array(1991, 1984, 1994, 2023);

// console.log(friends[0]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Šaban";
// console.log(friends);

// const friends = ["Muhamed", "Amar", "Murat"];

// // add elements

// friends.push("Hasan");

// friends.unshift("Ekrem");

// //remove elements

// friends.pop();

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Amar"));
// console.log(friends.includes("Amar"));

// if (friends.includes("Amar")) {
//   console.log("You have a friend called Amar");
// }

// const muhamed = {
//   firstName: "Muhamed",
//   lastName: "Ajanovic",
//   age: 2022 - 2021,
//   job: "programer",
//   friends: ["Hasan", "Amar", "Murat"],
// };

// console.log(muhamed.lastName);
// console.log(muhamed["lastName"]);

// const interestedIn = prompt("What do you want to know about Muhamed");

// if (muhamed[interestedIn]) {
//   console.log(muhamed[interestedIn]);
// } else {
//   console.log("Wrong request");
// }

// muhamed.location = "Essen";
// muhamed["twitter"] = "@ayan_ci";

// console.log(muhamed);

// console.log(
//   `${muhamed.firstName} has ${muhamed.friends.length} friends, and his best friend is called ${muhamed.friends[0]} `
// );

// const muhamed = {
//   firstName: "Muhamed",
//   lastName: "Ajanovic",
//   birthYear: 2001,
//   job: "programer",
//   friends: ["Hasan", "Amar", "Murat"],
//   hasDriversLicence: true,

//   calcAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },

//   textMessage: function () {
//     console.log(
//       `${this.firstName} is ${this.calcAge()}-year old ${this.job} and he has ${
//         this.hasDriversLicence ? "a" : "no"
//       } driving licence`
//     );
//   },
// };

// console.log(muhamed.calcAge());
// muhamed.textMessage();

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`ide ${rep}. ponavljanje`);
// }

const muhamedArray = [
  "Muhamed",
  "Ajanovic",
  2022 - 2001,
  "programmer",
  ["Hasan", "Murat", "Osman"],
];

const types = [];

for (let i = 0; i < muhamedArray.length; i++) {
  console.log(muhamedArray[i], typeof muhamedArray[i]);
  // types[i] = typeof muhamedArray[i];
  types.push(typeof muhamedArray[i]);
}

console.log(types);

const years = [1991, 1997, 2001, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}

console.log(ages);

for (let i = 0; i < muhamedArray.length; i++) {
  if (typeof muhamedArray[i] !== "string") continue;
  console.log(muhamedArray[i], typeof muhamedArray[i]);
}
for (let i = 0; i < muhamedArray.length; i++) {
  if (typeof muhamedArray[i] === "number") break;
  console.log(muhamedArray[i], typeof muhamedArray[i]);
}
