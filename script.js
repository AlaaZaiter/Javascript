// Inside script.js
const numbers = [1, 2, 4, 6, 8, 11, 45, 98, 102, 66, 73];

for (const number of numbers) {
  if (number % 2 === 0) {
    console.log(`${number} is even.`);
  } else {
    console.log(`${number} is odd.`);
  }
}
