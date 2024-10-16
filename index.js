const express = require('express');
const app = express();
require('dotenv').config();

// Middleware to parse JSON bodies
app.use(express.json());

// Database connection
const dbConnect = require('./config/database');
dbConnect();

// Routes
const route = require('./routes/routes');
app.use('/', route);

// Default route
app.get('/', (req, res) => {
    res.send('<h1>Hello World! Hey There</h1>');
});

// Start server
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
