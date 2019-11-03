const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [currentResult];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const description = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, description);
}

function writeToLog(
  opeationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: opeationIdentifier,
    previous: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}
function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLICATION") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVISION") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLICATION");
}
function divide() {
  calculateResult("DIVISION");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
