function fizzbuzz(num) {
  const divisible = (divisor, num) => num % divisor === 0;

  if (typeof num !== "number") return "Error: the argument must be a number";
  else if (num === 0) return 0;
  else if (divisible(3, num) && divisible(5, num)) return "fizzbuzz";
  else if (divisible(3, num)) return "fizz";
  else if (divisible(5, num)) return "buzz";

  return num;
}

function print(num) {
  for (let i = 0; i <= num; i++) {
    console.log(`${i}: ${fizzbuzz(i)}`);
  }
}

print(16);

module.exports = fizzbuzz;
