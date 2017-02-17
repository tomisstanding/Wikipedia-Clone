// Declare our express app
const express = require('express');
const app = express();

// configure time stamp to keep track of when articles are authored
const timestamp = require('time-stamp');
// app.use(timestamp());

// configure our app to log messages to the console
const logger = require('morgan');
app.use(logger('dev'));

// configure our app view engine to use ejs templating
app.set('view engine', 'ejs');

// app.set('views', './views');

// configure body-parser so that our app can handle our data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Link our CSS, JS, HTML with easier path names
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


// setting up our port and console logging which port we are listening on
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('listening on', PORT);
});

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// Connect our app to resources which allows us to connect our app
// to our controllers and routers to keep everything organized.
app.use(require('./resources'));
