const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 3003;

app.use(bodyParser.json());

// Main Endpoint
app.get('/', (req, res) => {
    res.send('This is the default endpoint for Authentication-MS.');
});

app.listen(PORT, () => {
    console.log(`Service running on ${PORT}.`);
})

