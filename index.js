'use strict';

const express = require('express');

const PORT = 8080;
const HOST = "localhost";

const app = express();

app.get('/', (req, res) => {
    res.send(`Hello !<br><br>I see you’re from: ${req.ip}`);
    console.log(`Request incoming from: ${req.ip}`);
});

app.listen(PORT, HOST);

console.log(`Server running on http://${HOST}:${PORT}`);