// const scoreDolphins = 96 + 108 + 89;
// const scoreKoalas = 88 + 91 + 110;

// const avgDolphins = scoreDolphins / 3;
// const avgKoalas = scoreKoalas / 3;

// if (avgDolphins > avgKoalas) {
//   console.log(`Dolphins won with score ${avgDolphins}`);
// } else if (avgKoalas > avgDolphins) {
//   console.log(`Koalas won with score ${avgKoalas}`);
// } else {
//   console.log(`It's draw and both teams scored ${avgDolphins}`);
// }

// Bonus 1

// const scoreDolphins = 97 + 112 + 101;
// const scoreKoalas = 109 + 95 + 106;

// const avgDolphins = scoreDolphins / 3;
// const avgKoalas = scoreKoalas / 3;

// if (avgDolphins > avgKoalas && avgDolphins > 100) {
//   console.log(`Dolphins won with score ${avgDolphins}`);
// } else if (avgKoalas > avgDolphins && avgKoalas > 100) {
//   console.log(`Koalas won with score ${avgKoalas}`);
// } else if (avgDolphins === avgKoalas) {
//   console.log(`It's draw and both teams scored ${avgDolphins}`);
// } else {
//   console.log(`There's no winner`);
// }

// Bonus 2

const scoreDolphins = 97 + 112 + 101;
const scoreKoalas = 109 + 95 + 106;

const avgDolphins = scoreDolphins / 3;
const avgKoalas = scoreKoalas / 3;

if (avgDolphins > avgKoalas && avgDolphins > 100) {
  console.log(`Dolphins won with score ${avgDolphins}`);
} else if (avgKoalas > avgDolphins && avgKoalas > 100) {
  console.log(`Koalas won with score ${avgKoalas}`);
} else if (avgDolphins === avgKoalas && avgDolphins > 100) {
  console.log(`It's draw and both teams scored ${avgDolphins}`);
} else {
  console.log(`There's no winner`);
}
