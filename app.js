const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'views')));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
var cookieParser = require('cookie-parser')

app.use(cookieParser())

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render("index.html", {});
});

app.get('/about-us', (req, res) => {
  res.render("about-us.html");
});

app.get('/services', (req, res) => {
  res.render('services.html');
});

app.get('/contact-us', (req, res) => {
  res.render('contact-us.html');
});

app.get('/register', (req, res) => {
  res.send('Welcome to register page');
});

app.get('/about', (req, res) => {
  res.send('about us');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;