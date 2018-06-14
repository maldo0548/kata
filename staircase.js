// Write a program that prints a staircase of size n aligned to the right.
const n = 6;
function staircase(n) {
  let i = 1;
  while (i <= n) {
    const total = n;
    let symbols = i;
    let spaces = total - symbols;
    let blank = " ".repeat(spaces);
    let line = `#`.repeat(symbols);
    console.log(blank + line);
    i++;
  }
}

staircase(n);
