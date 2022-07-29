const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/index');

app.use(bodyParser.json());

app.use('/users', userRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});



app.listen(5000, () => console.log('Server running successfully'));