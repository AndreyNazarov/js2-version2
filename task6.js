
 let input = prompt("tap a number");
 let total = 0;
do {
  
  const numbers = [];
  if (input === null) {
    break;
  }
  input = parseInt(input);
  numbers.push(input);
  console.log(input);

 
  
} while (true);
for (const number of numbers) {
  total += number;
}
console.log(total);