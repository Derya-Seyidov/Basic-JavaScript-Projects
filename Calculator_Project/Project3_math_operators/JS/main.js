// Project 3: Math Operators
// Each function runs when you click a button in index.html
// and displays the result inside a specific HTML element.

// + Addition
function addition() {
  var result = 10 + 5;
  document.getElementById("AddResult").innerHTML = "10 + 5 = " + result;
}

// - Subtraction
function subtraction() {
  var result = 10 - 5;
  document.getElementById("SubResult").innerHTML = "10 - 5 = " + result;
}

// * Multiplication
function multiplication() {
  var result = 10 * 5;
  document.getElementById("MulResult").innerHTML = "10 * 5 = " + result;
}

// / Division
function division() {
  var result = 10 / 5;
  document.getElementById("DivResult").innerHTML = "10 / 5 = " + result;
}

// % Modulus (remainder)
function modulus() {
  var result = 25 % 4; // remainder of 25 divided by 4
  document.getElementById("ModResult").innerHTML = "25 % 4 = " + result;
}

// ++ Increment
function increment() {
  var x = 5;
  x++; // increment by 1
  document.getElementById("IncResult").innerHTML = "After x++ (starting from 5): " + x;
}

// -- Decrement
function decrement() {
  var x = 5;
  x--; // decrement by 1
  document.getElementById("DecResult").innerHTML = "After x-- (starting from 5): " + x;
}

// Multiple operators in one expression
function multipleOperators() {
  // (10 + 5) * 2 = 30
  var result = (10 + 5) * 2;
  document.getElementById("MultiResult").innerHTML = "(10 + 5) * 2 = " + result;
}

// Negation operator
function negation() {
  var x = 10;
  var result = -x; // makes it negative
  document.getElementById("NegResult").innerHTML = "Negation of 10 is " + result;
}

// Math.random() function
function randomNumber() {
  var r = Math.random(); // random number between 0 and 1
  document.getElementById("RandomResult").innerHTML = "Random number: " + r;
}
