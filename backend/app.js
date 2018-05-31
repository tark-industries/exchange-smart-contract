const express = require('express');
const mainController = require('./controller/main.controller');
const authMiddleware = require('./middleware/auth.middleware');


let app = express();
const cors = require('cors');

const corsOptions = {
    origin: 'http://127.0.0.1:4200'
};

app.use(cors())

const port = 3000;


app.get('/api/test', cors(corsOptions), authMiddleware.isAuthenticated, mainController.test);

app.listen(port, () => {
    console.log(`Server started up on port ${port}`)
});