// WHILE LOOP example
function Call_Loop() {
  let number = "";
  let i = 1;

  while (i < 6) {
    number += "The number is " + i + "<br>";
    i++;
  }

  document.getElementById("Loop").innerHTML = number;
}

// STRING LENGTH example
function Show_Length() {
  const text = "Hello JavaScript";
  document.getElementById("Length").innerHTML =
    "The length of the string is: " + text.length;
}

// FOR LOOP example
function For_Loop() {
  let text = "";

  for (let i = 1; i < 6; i++) {
    text += "The number is " + i + "<br>";
  }

  document.getElementById("For_Loop").innerHTML = text;
}

// ARRAY + innerHTML example
function Show_Array() {
  const cars = ["BMW", "Volvo", "Toyota", "Honda"];
  document.getElementById("Array").innerHTML =
    "My favorite cars are: " + cars.join(", ");
}

// CONST KEYWORD assignment
function constant_function() {
  // Create an object using const
  const car = {
    brand: "Toyota",
    type: "Sedan",
    color: "Red"
  };

  // Display using a property value
  document.getElementById("Constant").innerHTML =
    "Original: " + car.color + " " + car.brand + " " + car.type;

  // Change a property's value
  car.color = "Black";

  // Add a new property
  car.year = 2024;

  // Display string including changed + added properties
  document.getElementById("Constant").innerHTML =
    "Updated: " + car.color + " " + car.brand + " " + car.type +
    " (" + car.year + ")";
}

// LET KEYWORD assignment
function let_example() {
  let message = "This message was created using the let keyword.";
  document.getElementById("Let").innerHTML = message;
}

// RETURN STATEMENT challenge
function return_example() {
  let result = multiplyNumbers(4, 5);
  document.getElementById("Return").innerHTML =
    "The result of 4 x 5 is: " + result;
}

// Function that uses return
function multiplyNumbers(a, b) {
  return a * b;
}

// OBJECT assignment using let
function object_example() {
  let person = {
    firstName: "Derya",
    lastName: "Seyidov",
    age: 30,
    // Object method
    fullInfo: function () {
      return this.firstName + " " + this.lastName + ", Age: " + this.age;
    }
  };

  document.getElementById("Object").innerHTML = person.fullInfo();
}

// BREAK statement example
function break_example() {
  let text = "";

  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      break; // stop the loop when i is 5
    }
    text += "The number is " + i + "<br>";
  }

  document.getElementById("Break").innerHTML = text;
}

// CONTINUE statement example
function continue_example() {
  let text = "";

  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      continue; // skip number 5
    }
    text += "The number is " + i + "<br>";
  }

  document.getElementById("Continue").innerHTML = text;
}
