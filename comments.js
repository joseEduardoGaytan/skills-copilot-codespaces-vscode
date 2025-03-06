// create web server
var express = require('express');
var app = express();

// create a route
app.get('/comments', function(req, res) {
  res.send('This is the comments page');
});

// start the server
app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000/');
});

// run the server by typing node comments.js in the terminal
// open a web browser and type http://localhost:3000/comments
// you should see 'This is the comments page' in the browser
// to stop the server, press control+c in the terminal
// you can also change the port number in the listen function, if you want
// to run the server on a different port