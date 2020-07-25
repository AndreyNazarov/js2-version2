
let total = 0;
const numbers = [];
do {
  let input = prompt("tap a number");
  if (input === null) {
    break;
  }
  input = parseInt(input);
  numbers.push(input);
} while (true);

for (const number of numbers) {
  total += number;
}
console.log(`Summary: ${total}`);
