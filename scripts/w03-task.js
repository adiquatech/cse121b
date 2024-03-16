/* FUNCTIONS */

/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let add1 = Number(document.querySelector("#add1").value);
    let add2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(add1, add2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */
let subtract = function(number1, number2) {
    return number1 - number2;
};

function subtractNumbers() {
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;

function multiplyNumbers() {
    let numb1 = Number(document.querySelector("#factor1").value);
    let numb2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(numb1, numb2);
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divideNumbers() {
    let divideNumber1 = Number(document.querySelector("#dividend").value);
    let divideNumber2 = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divideNumber1 / divideNumber2;
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
document.getElementById("getTotal").addEventListener("click", function() {
    // Declare and instantiate a variable to store the numeric value entered by the user in the subtotal field
    let subtotal = parseFloat(document.getElementById("subtotal").value);
  
    // Check if the membership checkbox is checked
    let isMember = document.getElementById("member").checked;
  
    // Apply a 20% discount if the membership checkbox is checked
    let discount = isMember ? subtotal * 0.20 : 0;
    let totalDue = subtotal - discount;
  
    // Output the total to the 'totalSpan' with two decimals using a template string
    document.getElementById("total").textContent = `$${totalDue.toFixed(2)}`;
  });
  
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").innerHTML = numberArray;

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numberArray.filter(number => number % 2 != 0);

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numberArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numberArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numberArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = numberArray.map(number => number * 2).reduce((sum, number) => sum + number);
