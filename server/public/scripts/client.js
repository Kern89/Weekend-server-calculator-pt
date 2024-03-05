console.log('client.js is sourced!');

// global variables
let addition = document.querySelector('#addOp');
let subtration = document.querySelector('#subtractOp');
let multiply = document.querySelector('#multiplyOp');
let division = document.querySelector('#divideOp');
let numOne = document.querySelector('#numOne');
let numTwo = document.querySelector('#numTwo');

// variable to hold chosen operator
let operator = [];

// functions to set operator array to current choice
function addOperator(event) {
    event.preventDefault();
    operator = '+';
    console.log(operator);
};
function subtractOperator(event) {
    event.preventDefault();
    operator = '-';
    console.log(operator);
};
function multiplyOperator(event) {
    event.preventDefault();
    operator = '*';
    console.log(operator);
};
function divideOperator(event) {
    event.preventDefault();
    operator = '/';
    console.log(operator);
};


// function to send calculation to server
function sendToServer(event) {
    event.preventDefault();
    console.log('In send to server');

    // if else statement to send nujmbers and operator to server 

}