// Create a dictionary using a JavaScript object
var dictionary = {
    apple: "A red or green fruit",
    banana: "A yellow fruit",
    orange: "A citrus fruit"
};

// Function to output a key-value pair into HTML
function showDictionary() {

    // Delete a key BEFORE displaying its value
    delete dictionary.banana;

    // Output a value from the dictionary
    document.getElementById("Dictionary").innerHTML =
        dictionary.banana;
}
