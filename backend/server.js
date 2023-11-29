const express = require('express');
const cors = require('cors');

// create app
const app = express();

// server port
const port = 3000;

app.use(cors());
app.use(express.json());

let data = [];

// route GET requests
app.get('/api/data', function(request, response) {
    response.json(data);
});

// route POST request
app.post('/api/data', function(request, response) {

    const item = request.body;

    data.push(item);

    // respond
    response.json(item);
});


// start the server
app.listen(port, function() {
    console.log(`Running server on http:://localhost:${port}`);
});