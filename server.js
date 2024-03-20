const express = require('express');
const { addNumbers } = require('./calculator');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// Defining route for adding two numbers
app.get('/add', (req, res) => {
  const { num1, num2 } = req.query;

  if (!num1 || !num2) {
    return res.status(400).json({ error: 'Both numbers are required' });
  }

  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  if (isNaN(number1) || isNaN(number2)) {
    return res.status(400).json({ error: 'Invalid numbers provided' });
  }

  const result = addNumbers(number1, number2);

  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
