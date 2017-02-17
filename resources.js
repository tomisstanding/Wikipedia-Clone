// declare our express router which directs requests to the appropriate controller
const express = require('express');

// method that express provides us that allows us to connect to all of our controllers
const router = express.Router();

// localhost.3000/wiki use ---> this controller ./controllers/wiki_controller
router.use('/wiki', require('./controllers/wiki_controller'));

// exporting the router enabling you to use elsewhere
module.exports = router;
