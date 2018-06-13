/*
**
***
Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.
Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.
Input Format:
The first line contains an integer, , denoting the size of the array.
The second line contains  space-separated integers describing an array of numbers .

Output Format:
You must print the following  lines:
A decimal representing of the fraction of positive numbers in the array compared to its size.
A decimal representing of the fraction of negative numbers in the array compared to its size.
A decimal representing of the fraction of zeros in the array compared to its size.
***
**
*/
const sample = [-4, 3, -9, 0, 4, 1];
function plusMinus(arr) {
  let positives = arr.filter(num => num > 0);
  let zeroes = arr.filter(num => num === 0);
  let negatives = arr.filter(num => num < 0);
  let posFraction = (positives.length / arr.length).toFixed(6);
  let zeroesFraction = (zeroes.length / arr.length).toFixed(6);
  let negFraction = (negatives.length / arr.length).toFixed(6);

  console.log(posFraction);
  console.log(negFraction);
  console.log(zeroesFraction);
}

plusMinus(sample);
