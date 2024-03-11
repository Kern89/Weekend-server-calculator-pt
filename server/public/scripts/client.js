console.log('client.js is sourced!');

// global variables
let addition = document.querySelector('#addOp');
let subtration = document.querySelector('#subtractOp');
let multiply = document.querySelector('#multiplyOp');
let division = document.querySelector('#divideOp');
let resultsDiv = document.querySelector('#resultHist');
let lastResultDiv = document.querySelector('#lastResult')

// variable to hold chosen operator
let currentOperator = [];

// functions to set operator array to current choice
function addOperator(event) {
    event.preventDefault();
    currentOperator = '+';
    //console.log(currentOperator);
};
function subtractOperator(event) {
    event.preventDefault();
    currentOperator = '-';
   // console.log(currentOperator);
};
function multiplyOperator(event) {
    event.preventDefault();
    currentOperator = '*';
    //console.log(currentOperator);
};
function divideOperator(event) {
    event.preventDefault();
    currentOperator = '/';
    //console.log(currentOperator);
};

function getFromServer() {
    axios.get('/calculations').then((response) => {
        console.log('calculations back from server', response.data);
        let calculationsFromServer = response.data;
        //console.log('last result: ', response.data[response.data.length-1].result);
        lastResultDiv.innerHTML = `${response.data[response.data.length-1].result}`
        //console.log('calculation from server: ', calculationsFromServer);
         // for loop to populate calculation onto the DOM
        for(calculation of calculationsFromServer) {
            resultsDiv.innerHTML += `
            <li>${calculation.numOne} ${calculation.operator} ${calculation.numTwo} = ${calculation.result}</li>
            `;
        }
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
        result: '',
    };

    // send calculate object to server with axios.get
    axios.post('/calculations', calculate).then((response) => {
        console.log(response);
        resultsDiv.innerHTML = '';
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
