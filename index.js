// calculator program with if-else...

const number1 = Number(prompt("Enter 1. number"));
const operation = prompt("Enter Math Operation.(+, -, * , /)");
const number2 = Number(prompt("Enter 2. number"));

let result = 0;

if (operation == "+") {
  result = number1 + number2;
  console.log("Result: " + result);
} else if (operation == "-") {
  result = number1 - number2;
  console.log("Result: " + result);
} else if (operation == "*") {
  result = number1 * number2;
  console.log("Result: " + result);
} else if (operation == "/") {
  result = number1 / number2;
  console.log("Result: " + result);
} else {
  console.log("Wrong Math Operation.");
}
