// This function demonstrates the use of variables, operators, and DOM manipulation
function displayMessage() {

  // Assign a string variable
  var message = "JavaScript functions are ";

  // Use the += operator to concatenate text
  message += "easy to understand.";

  // Display the result in the HTML paragraph
  document.getElementById("result").innerHTML = message;
}
