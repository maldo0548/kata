let instructions =
  "Find the sum of all the multiples of 3 or 5 below 1000. For example, If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.";
let result = [];
for (let i = 1; i < 1000; i++) {
  if (i % 5 === 0) {
    result.push(i);
  } else if (i % 3 === 0) {
    result.push(i);
  }

  let sum = 0;
  for (let j = 0; j < result.length; j++) {
    sum += result[j];
  }

  setTimeOut(console.log(sum), 4000);
}
