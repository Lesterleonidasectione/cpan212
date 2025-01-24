const express = require('express');
const router = express.Router();

router.get('/name', (req, res) => {
  res.send('Lester');
});

router.get('/greeting', (req, res) => {
  res.send('Lester - N00022119.');
});

router.get('/add', (req, res) => {
  const x = parseInt(req.query.x);
  const y = parseInt(req.query.y);

  if (isNaN(x) || isNaN(y)) {
    return res.status(400).send('Invalid input. Please provide numbers for x and y.');
  }

  res.send(`The sum of ${x} and ${y} is ${x + y}`);
});

router.get('/calculate', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    const operation = req.query.operation;

    if (isNaN(a) || isNaN(b) || !['+', '-', '*', '/', '**'].includes(operation)) {
        return res.status(400).send("Invalid input. Provide valid numbers for a and b, and a valid operation (+, -, *, /, **).");
    }

    let result;
    switch (operation) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': result = a / b; break;
        case '**': result = a ** b; break;
    }

    res.send(`${a} ${operation} ${b} = ${result}`);
});

module.exports = router;