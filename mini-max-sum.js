/*
Our initial numbers are 1, 2, 3, 4, and 5. We can calculate the following sums using four of the five integers:
If we sum everything except 1, our sum is 2 + 3 + 4 + 5 = 14 .
If we sum everything except 2, our sum is 1 + 3 + 4 + 5 = 13 .
If we sum everything except 3, our sum is 1 + 2 + 4 + 5 = 12 .
If we sum everything except 4, our sum is 1 + 2 + 3 + 5 = 11 .
If we sum everything except 5, our sum is 1 + 2 + 3 + 4 = 10 .
Output the range of the min and maximum values in an array with two integers.
*/
const control = [1, 2, 3, 4, 5];
const problem = [2, 2, 2, 2, 2];
const problem2 = [5, 5, 5, 5, 5];

function miniMaxSum(arr) {
  let storage = [];
  let filteredSum = [arr[0] * (arr.length - 1)];

  for (var i = 0; i < arr.length; i++) {
    let filteredArray = arr.filter(num => num != arr[i]);
    if (filteredArray.length > 1) {
      filteredSum = filteredArray.reduce(function(prev, cur) {
        return prev + cur;
      });
    }
    // console.log(filteredArray);
    // console.log(`storage.push(filteredSum): ${storage.push(filteredSum)}`);
    storage.push(filteredSum);
  }
  let max = storage.reduce(function(a, b) {
    return Math.max(a, b);
  });
  let min = storage.reduce(function(a, b) {
    return Math.min(a, b);
  });
  let result = `${min} ${max}`;
  console.log(result);
  return result;
}
miniMaxSum(control);
miniMaxSum(problem);
miniMaxSum(problem2);
