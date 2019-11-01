const defaultResult = 0;
let currentResult = defaultResult;

function add(a, b) {
  const result = a + b;
  return result;
}

currentResult = add(1, 2);

let calculationDescription = `( ${currentResult} + 10) * 10 / 2 - 4`;

outputResult(currentResult, calculationDescription);
