const express = require('express');
const mainController = require('./controller/main.controller');
const authMiddleware = require('./middleware/auth.middleware');


let app = express();
const cors = require('cors');

const corsOptions = {
    origin: 'http://127.0.0.1:4200'
};

app.use(cors());

const port = 3000;


app.get('/api/auth/check', cors(corsOptions), authMiddleware.isAuthenticated, mainController.authCheck);
app.get('/api/user/register', cors(corsOptions), authMiddleware.isAuthenticated, mainController.registerUser);
app.get('/api/user/getAll', cors(corsOptions), authMiddleware.isAuthenticated, mainController.getAllUsers);

app.listen(port, () => {
    console.log(`Server started up on port ${port}`)
});