const express = require('express');
const app = express();
let PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.static('server/public'));

// Global variable that will contain all of the
// calculation objects:
let calculations = [];
//variable to contain answer
let answer = '';
// Here's a wonderful place to make some routes:

// GET /calculations
app.get('/calculations', (req, res) => {
  //console.log('GET request made for /calculations');
  //console.log('calculations on server', calculations);
  res.send(calculations);
})
// POST /calculations
app.post('/calculations', (req, res) => {
  //console.log('POST request made for /calculations');
  //console.log('Request body: ',req.body);

  // function to make calculation 
function makeCalculation() {
  if(req.body.operator === '+') {
    //console.log(req.body.numOne, 'PLUS', req.body.numTwo);
    answer = parseFloat(req.body.numOne)+parseFloat(req.body.numTwo);
    //console.log(answer);
  }
  else if(req.body.operator === '-') {
    // console.log(req.body.numOne, 'MINUS', req.body.numTwo;
    answer = parseFloat(req.body.numOne)-parseFloat(req.body.numTwo);
    //console.log(answer);
  }
  else if(req.body.operator === '*') {
    // console.log(req.body.numOne, 'TIMES', req.body.numTwo;
    answer = parseFloat(req.body.numOne)*parseFloat(req.body.numTwo);
    //console.log(answer);
  }
  else if(req.body.operator === '/') {
    // console.log(req.body.numOne, 'DIVIDE', req.body.numTwo);
    answer = parseFloat(req.body.numOne)/parseFloat(req.body.numTwo);
    //console.log(answer);
  };
  req.body.result = answer;
  //console.log('req.body:', req.body);
  calculations.push(req.body);
 //console.log('Calculations array:', calculations);
};
makeCalculation();
  // response status code
  res.sendStatus(201)
})

// PLEASE DO NOT MODIFY ANY CODE BELOW THESE BEARS:
// 🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸

// Makes it so you don't have to kill the server
// on 5000 in order to run the tests:
if (process.env.NODE_ENV === 'test') {
  PORT = 5001;
}

// This starts the server...but also stores it in a variable.
// This is weird. We have to do it for testing reasons. There
// is absolutely no need for you to reason about this.
const server = app.listen(PORT, () => {
  console.log('server running on: ', PORT);
});

// server.setTimeout(500)

// This is more weird "for testing reasons" code. There is
// absolutely no need for you to reason about this.
app.closeServer = () => {
  server.close();
}

app.setCalculations = (calculationsToSet) => {
  calculations = calculationsToSet;
}

module.exports = app;
