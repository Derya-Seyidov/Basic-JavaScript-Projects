// Declare variables
let numberValue = 10;
let stringValue = "10";

// 1. Display data type using typeof
document.write("Type of numberValue: " + typeof numberValue + "<br>");
document.write("Type of stringValue: " + typeof stringValue + "<br><br>");

// 2. Expression combining a string and a number (type coercion)
document.write("String + Number result: " + (stringValue + numberValue) + "<br><br>");

// 3. Comparison operators
document.write("== comparison: " + (numberValue == stringValue) + "<br>");
document.write("=== comparison: " + (numberValue === stringValue) + "<br>");
document.write("> comparison: " + (numberValue > 5) + "<br>");
document.write("< comparison: " + (numberValue < 20) + "<br><br>");

// Logical operators
document.write("&& operator: " + (numberValue > 5 && numberValue < 20) + "<br>");
document.write("|| operator: " + (numberValue > 20 || numberValue < 15) + "<br>");
document.write("! operator: " + !(numberValue === stringValue) + "<br>");
