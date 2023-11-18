// Create web server 
// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Define a route for the home page
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
