let n = 5;
let symbol = '*';
let inputLine = '';
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;

for (let lineIndex = 0; lineIndex <= middle; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
}
