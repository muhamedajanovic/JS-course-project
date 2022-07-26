// let js = "amazing";
// // if (js === "amazing") alert("JavaScript is FUN!");

// let result = 40 + 8 + 23 - 10;
// console.log(result);

// console.log("Muhamed");
// console.log(21);

// let firstName = "Muhamed";
// console.log(firstName);

// let javascirptIsFun = true;

// console.log(javascirptIsFun);

// console.log(typeof 41);
// console.log(typeof "Muhamed");
// console.log(typeof javascirptIsFun);
// console.log(typeof true);

// javascirptIsFun = "Yes";
// console.log(typeof javascirptIsFun);

// // reassigning the value of a variable
// let age = 30;
// age = 31;

// // variables thats not gonna change
// const birthYear = 2001;
// // birthYear = 2002; not working

// // var is the old way of assigning variables

// const now = 2037;
// const ageAyan = now - 1991;
// const ageMuradifa = now - 2001;
// console.log(ageAyan, ageMuradifa);

// console.log(ageAyan / 2, ageAyan * 2, 2 ** 3);
// // 2**3 means 2 to the power of 3

// // const firstName = "Muhamed";
// const lastName = "Ajanovic";

// console.log(firstName + " " + lastName);

// let x = 10 + 5;
// x += 10; // x=x+10
// x *= 4;
// x++;
// console.log(x);

// const now = 2037;
// const ageMuhamed = now - 1991;
// const ageMerhunisa = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;

// console.log(x, y);

// const firstName = "Muhamed";
// const job = "dev";
// const birthYear = 2001;
// const year = 2022;

// const sentence = `I'm ${firstName}. And I am ${job}. I am ${
//   year - birthYear
// } years old`;

// console.log(sentence);

// // multiline string

// console.log(`string
// ide gas

// sad
// sda
// `);

//if else statement

// const age = 12;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
// console.log(`Person is old enough`);
// } else {
// const yearsLeft = 18 - age;
// console.log(`Wait another ${yearsLeft} to take driving test`);
// }

// let inputYear = "1991";

// console.log(Number(inputYear));
// console.log(inputYear + 18);
// console.log(Number(inputYear) + 18);

// inputYear = Number(inputYear);
// console.log(inputYear);

// inputYear = String(inputYear);
// console.log(inputYear);

// 5 falsy values: 0, "", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 0;

if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("defined");
} else {
  console.log("undefined");
}
