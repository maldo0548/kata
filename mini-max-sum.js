/*
Our initial numbers are 1, 2, 3, 4, and 5. We can calculate the following sums using four of the five integers:
If we sum everything except 1, our sum is 2 + 3 + 4 + 5 = 14 .
If we sum everything except 2, our sum is 1 + 3 + 4 + 5 = 13 .
If we sum everything except 3, our sum is 1 + 2 + 4 + 5 = 12 .
If we sum everything except 4, our sum is 1 + 2 + 3 + 5 = 11 .
If we sum everything except 5, our sum is 1 + 2 + 3 + 4 = 10 .
Output the range of the min and maximum values in an array with two integers.
*/
const control = [34, 12, 67, 13, 23];
function miniMaxSum(arr) {
  let storage = [];
  for (var i = 0; i < arr.length; i++) {
    let filteredArray = arr.filter(num => num != arr[i]);

    let filteredSum = filteredArray.reduce(function(prev, cur) {
      return prev + cur;
    });

    storage.push(filteredSum);
  }
  let max = storage.reduce(function(a, b) {
    return Math.max(a, b);
  });
  let min = storage.reduce(function(a, b) {
    return Math.min(a, b);
  });
  let result = [min, max];
  console.log(result);
  return result;
}
miniMaxSum(control);
