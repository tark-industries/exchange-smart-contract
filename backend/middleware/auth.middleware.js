const firebaseService = require('../service/firebase.service');

const handleError = (res, error) => {
    console.log(error);
    res.status(401).send({error: 'Authentication failed. Unknown error'});
};

const handleAuth = (decodedToken, idToken, req, next) => {
    req.idToken = idToken;
    req.UID = decodedToken.uid;
    req.userInfo = decodedToken;
    next();
};


module.exports = {
    isAuthenticated: (req, res, next) => {
        let idToken = req.headers['id_token'];
        if (!idToken) {
            res.status(401).send({error: 'Authentication failed. Missing ID Token'});
        } else {
            firebaseService.verifyIdToken(idToken)
                .then(decodedToken => handleAuth(decodedToken, idToken, req, next))
                .catch(error => handleError(res, error));
        }
    }
};