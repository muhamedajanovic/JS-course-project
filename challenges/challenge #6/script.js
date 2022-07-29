function calcTip(billValue) {
  let tip;
  if (50 < billValue && billValue < 300) {
    tip = billValue * 0.15;
  } else {
    tip = billValue * 0.2;
  }
  return tip;
}

bills = [125, 555, 44];
tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

console.log(calcTip(10));
