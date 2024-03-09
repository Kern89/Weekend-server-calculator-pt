console.log('client.js is sourced!');

// global variables
let addition = document.querySelector('#addOp');
let subtration = document.querySelector('#subtractOp');
let multiply = document.querySelector('#multiplyOp');
let division = document.querySelector('#divideOp');

// variable to hold chosen operator
let currentOperator = [];

// variable to send to server
// let calculate = {
//     numOne: numberOne,
//     numTwo: numberTwo,
//     operator: currentOperator,
// };

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

function getFromServer() {
    axios.get('/calculations').then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    })  
};

// function to send calculation to server
function sendToServer(event) {
    event.preventDefault();
    console.log('In send to server');

    // variables to select inputs
    let numberOne = document.querySelector('#numOne').value;
    let numberTwo = document.querySelector('#numTwo').value;

    // variable to send to server
    let calculate = {
        numOne: numberOne,
        numTwo: numberTwo,
        operator: currentOperator,
    };

    // send calculate object to server with axios.get
    axios.post('/calculations', calculate).then((response) => {
        console.log(response);


        getFromServer();
    }).catch((error) => {
        console.log(error);
    })
}

// clear function 
function clearNums(event) {
    event.preventDefault();
    console.log('in clear function');
    event.target.parentElement.reset();
}
