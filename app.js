const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'views')));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.status(200).send('Hello, World!');
});

app.get('/login', (req, res) => {
  res.render("index.html");
});

app.get('/register', (req, res) => {
  res.send('Welcome to register page');
});

app.get('/about', (req, res) => {
  res.send('about us');
});

app.post('/about', (req, res) => {
  res.send('about us');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;