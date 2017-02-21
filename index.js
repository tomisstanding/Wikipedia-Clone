// Declare our express app
const express = require('express');
const app = express();

// configure markdown-it to use for application text
const marked = require('marked');

// configure our app to log messages to the console
const logger = require('morgan');
app.use(logger('dev'));

// configure our app view engine to use ejs templating
app.set('view engine', 'ejs');


//configure time-stamp to keep track of date updated/created
const timestamp = require('time-stamp');

// configure body-parser so that our app can handle our data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Link our CSS, JS, HTML with easier path names
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// setting up our port and console logging which port we are listening on
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('listening on', PORT);
});


// Connect our app to resources which allows us to connect our app
// to our controllers and routers to keep everything organized.
app.use(require('./resources'));
