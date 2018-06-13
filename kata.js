let a = [4, 5, 6];
let b = [5, 8, 3];
let index0 = [];
let index1 = [];
let index2 = [];
for (let i = 0; i < a.length; i++) {
  switch (i) {
    case 0:
      index0.push(a[i]);
      break;
    case 1:
      index1.push(a[i]);
      break;
    case 2:
      index2.push(a[i]);
    default:
  }
}
console.log(index0, index1, index2);
