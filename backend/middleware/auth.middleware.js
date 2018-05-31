const admin = require('firebase-admin');

const serviceAccount = require('../serviceAccountKey.json');


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://exchange-smart-contract.firebaseio.com'
});

const handleError = (res, error) => {
    console.log(error);
    res.status(401).send({error: 'Authentication failed. Unknown error'});
};


module.exports = {
    isAuthenticated: (req, res, next) => {
        let idToken = req.headers['id_token'];
        if (!idToken) {
            res.status(401).send({error: 'Authentication failed. Missing ID Token'});
        } else {
            admin.auth().verifyIdToken(idToken)
                .then(function (decodedToken) {
                    var uid = decodedToken.uid;
                    console.log('uid', uid)
                }).catch(error => handleError(res, error));
        }
    }
};