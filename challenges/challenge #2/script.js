let massMark, massJohn;
let heightMark, heightJohn;

massMark = 78;
massJohn = 92;

heightMark = 1.69;
heightJohn = 1.95;

let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / heightJohn ** 2;

let markHigerBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn);
console.log(markHigerBMI);

if (bmiJohn > bmiMark) {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`);
} else {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`);
}
