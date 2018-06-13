// Print the absolute difference between the sums of the matrix's two diagonals as a single integer.

const a = [
  [-01, +01, +07, +08],
  [-10, -08, -05, -02],
  [+00, +09, +07, -01],
  [+04, +04, -02, +01]
];
const b = [[-01, +01, +07], [-10, -08, -05], [+00, +09, +07]];
function diagonalDifference(a) {
  let firstDiagonal = 0;
  // a[0][0]
  // a[1][1]
  // a[2][2]
  // a[3][3]
  let secondDiagonal = 0;
  // a[3][0]
  // a[2][1]
  // a[1][2]
  // a[0][3]

  // Loops upwards and gets firstDiagonal sum.
  for (let i = 0; i < a.length; i++) {
    // console.log(`${firstDiagonal} = ${firstDiagonal} + ${a[i][i]}`);
    firstDiagonal += a[i][i];
  }

  // Outer loop desencends; inner loop ascends.
  for (let j = a.length - 1; j > -1; j--) {
    // console.log(`original j: ${j}`);

    // inner loop is ascending
    for (let k = 0; k < a.length; k++) {
      /* I want k and j to be opposites, so when k = 0, j = 3, or when j = 3, k = 0.
         to accomplish this, I used an if statement, that checks to see if k & j = total number of indexes.
         When it does, I know that they must be the correct number and store that to the running total.
      *
      */
      if (j + k === a.length - 1) {
        // console.log(`original k: ${k}`,"\n",`a[${j}][${k}] = ${a[j][k]}`,"\n","________________","\n");
        secondDiagonal += a[j][k];
      }
    }
  }
  console.log(a);
  console.log(
    `firstDiagonal: ${a[0][0]} + ${a[1][1]} + ${a[2][2]} + ${
      a[3][3]
    }  = ${a[0][0] + a[1][1] + a[2][2] + a[3][3]}`
  );
  console.log(
    `secondDiagonal: ${a[3][0]} + ${a[2][1]} + ${a[1][2]} + ${
      a[0][3]
    }  = ${a[3][0] + a[2][1] + a[1][2] + a[0][3]}`
  );

  let diff = firstDiagonal - secondDiagonal;
  let absDiff = Math.abs(diff);
  console.log(absDiff);
  return absDiff;
}

diagonalDifference(a);
