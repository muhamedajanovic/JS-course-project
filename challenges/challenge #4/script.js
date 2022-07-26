const bill = 400;
const tipPercent = 50 <= bill <= 300 ? 0.15 : 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tipPercent * bill}, and total value is ${
    bill + tipPercent * bill
  }`
);
