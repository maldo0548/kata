let a = [7, 26, 6];
let b = [37, 13, 99];
let result = [];

function solve(array1, array2) {
  let score = [0, 0];
  for (let i = 0; i < array1.length; i++) {
    switch (i) {
      case 0:
        if (array1[i] > array2[i]) {
          score[0]++;
        } else if (array1[i] === array2[i]) {
        } else {
          score[1]++;
        }
        break;
      case 1:
        if (array1[i] > array2[i]) {
          score[0]++;
        } else if (array1[i] === array2[i]) {
        } else {
          score[1]++;
        }
        break;
      case 2:
        if (array1[i] > array2[i]) {
          score[0]++;
        } else if (array1[i] === array2[i]) {
        } else {
          score[1]++;
        }
        break;
    }
    console.log("computing...");
  }
  setTimeout(function() {
    console.log(`a:${score[0]}`, `b:${score[1]}`);
  }, 1500);
  return score;
}

solve(a, b);
