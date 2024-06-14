const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'media')));
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
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/', (req, res) => {
  res.sendFile('media.html');
});

app.get('/', (req, res) => {
  res.render("index.html", {});
});

app.get('/about-us', (req, res) => {
  res.render("about-us.html");
});

app.get('/services', (req, res) => {
  res.render('services.html');
});

app.get('/service-details', (req, res) => {
  res.render('service-details.html');
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
  console.log(`Server running at http://localhost:${port}`);
});



module.exports = app;