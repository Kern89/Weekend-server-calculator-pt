console.log('client.js is sourced!');

// global variables
let addition = document.querySelector('#addOp');
let subtration = document.querySelector('#subtractOp');
let multiply = document.querySelector('#multiplyOp');
let division = document.querySelector('#divideOp');
let numberOne = document.querySelector('#numOne');
let numberTwo = document.querySelector('#numTwo');

// variable to send to server
let calculate = {
    numOne: numberOne,
    numTwo: numberTwo,
    operator: currentOperator,
};

// variable to hold chosen operator
let currentOperator = [];

// functions to set operator array to current choice
function addOperator(event) {
    event.preventDefault();
    currentOperator = '+';
    console.log(currentOperator);
};
function subtractOperator(event) {
    event.preventDefault();
    currentOperator = '-';
    console.log(currentOperator);
};
function multiplyOperator(event) {
    event.preventDefault();
    currentOperator = '*';
    console.log(currentOperator);
};
function divideOperator(event) {
    event.preventDefault();
    currentOperator = '/';
    console.log(currentOperator);
};


// function to send calculation to server
function sendToServer(event) {
    event.preventDefault();
    console.log('In send to server');

    // if else statement to send nujmbers and operator to server 

}

// send