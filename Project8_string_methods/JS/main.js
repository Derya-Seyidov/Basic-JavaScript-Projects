// CONCAT METHOD
// This function combines multiple strings into one
function useConcat() {
    let part1 = "Hello ";
    let part2 = "JavaScript ";
    let part3 = "World!";
    let result = part1.concat(part2, part3);
    document.getElementById("concat").innerHTML = result;
}

// SLICE METHOD
// This function extracts a section of a string
function useSlice() {
    let text = "Hello JavaScript World!";
    let result = text.slice(6, 16);
    document.getElementById("slice").innerHTML = result;
}

// toString METHOD
// This function converts a number to a string
function useToString() {
    let number = 100;
    let result = number.toString();
    document.getElementById("toString").innerHTML = result;
}

// toPrecision METHOD
// This function formats a number to a specified length
function useToPrecision() {
    let number = 123.456;
    let result = number.toPrecision(5);
    document.getElementById("toPrecision").innerHTML = result;
}
