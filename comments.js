// Create web server
// Start web server

// 1. Import Express
const express = require('express');
const bodyParser = require('body-parser');

// 2. Create an instance of express
const app = express();

// 3. Configure the express instance
app.use(bodyParser.json());

// 4. Define routes
const comments = [
  { username: 'Petter', comment: 'That is so funny!' },
  { username: 'Richard', comment: 'I like it' },
  { username: 'Mario', comment: 'Hello World!' },
];

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});