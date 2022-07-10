// access the DOM using the id of the result and clear its value by assigning it an empty string
function clearScreen() {
    document.getElementById("result").value = "";
}

// This function display values
function display(value) {
    document.getElementById("result").value += value;
}

// This function evaluates the expression and returns result
function calculate() {
    var input = document.getElementById("result").value;
    var output = eval(input);
    document.getElementById("result").value = output;
}

// The JavaScript eval() function evaluates an expression that you pass to it.
// It returns the result of that expression
