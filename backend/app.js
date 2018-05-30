const express = require('express');

let app = express();

const port = 3000;

app.get('/', function(req, res) {
    res.status(200);
    res.send({})
});

app.listen(port, () => {
    console.log(`Server started up on port ${port}`)
});