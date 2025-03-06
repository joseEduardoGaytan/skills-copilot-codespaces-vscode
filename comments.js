// create web server
// use express library
const express = require('express');
const app = express();

// use body-parser to parse the body of the request
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// create a comments array
const comments = [];

// create a route to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// create a route to add a comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

// create a route to get a comment by id
app.get('/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = comments[id];
    res.json(comment);
});

// create a route to update a comment by id
app.put('/comments/:id', (req, res) => {
    const id = req.params.id;
    const newComment = req.body;
    comments[id] = newComment;
    res.json(newComment);
});

// create a route to delete a comment by id
app.delete('/comments/:id', (req, res) => {
    const id = req.params.id;
    comments.splice(id, 1);
    res.json(id);
});

// run the web server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});