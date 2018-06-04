const firebaseService = require('../service/firebase.service');

module.exports = {
    authCheck: (req, res) => {
        let UID = req.UID;

        let result = {};

        firebaseService.getUserFromDbByUID(UID)
            .then((user) => {
                if (!user) {
                    result.registered = false;
                } else {
                    result.registered = true;
                }
                res.status(200).send(result);
            })
            .catch(err => {
                console.log(err)
                res.status(500).write();
            });

    },
    registerUser: (req, res) => {
        let UID = req.UID;
        firebaseService.registerUserByUID(UID).then(() => {
            console.log('success');
            res.status(200).send();
        }).catch(err => {
            console.log(err);
            res.status(500).send();
        });
    }
}
;