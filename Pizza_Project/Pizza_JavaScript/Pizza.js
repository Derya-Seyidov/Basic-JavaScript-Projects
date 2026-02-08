// This function runs when the user clicks the "Place Order" button
function getReceipt() {
    // This variable will display the receipt text
    var text1 = "<h3>You Ordered:</h3>";
    // This variable keeps track of the total price

    var runningTotal = 0;
        // This variable stores the price of the selected size

    var sizeTotal = 0;   
     // Get all pizza size radio buttons

    var sizeArray = document.getElementsByClassName("size");
            // Loop through size options to find the selected one

    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
        // Assign price based on selected size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    // Add size price to running total

    runningTotal = sizeTotal;
    // Call the topping function and pass the total and receipt text

    getTopping(runningTotal, text1);
}
// This function calculates the cost of toppings

function getTopping(runningTotal, text1) {
        // Variable to store topping cost

    var toppingTotal = 0;
        // Array to store selected toppings

    var selectedTopping = [];
        // Get all topping checkboxes

    var toppingArray = document.getElementsByClassName("toppings");
    // Loop through toppings and find selected ones

    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    // First topping is free, additional toppings cost $1 each

    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = toppingCount - 1;
    } else {
        toppingTotal = 0;
    }
    // Add topping cost to running total

    runningTotal = runningTotal + toppingTotal;
    // Display order summary and total price

    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML =
        "<h3>Total: <strong>$" + runningTotal + ".00</strong></h3>";
}
