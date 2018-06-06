const firebaseService = require('../service/firebase.service');
const web3Service = require('../service/web3.service');


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
                console.log(err);
                res.status(500).write();
            });

    },

    registerUser: (req, res) => {
        let UID = req.UID;

        firebaseService
            .registerUserByUID(UID)
            .then(() => web3Service.generateAddress())
            .then(address => firebaseService.addAddressToUser(UID, address))
            .then(() => res.status(200).send())
            .catch((err) => {
                console.log(err);
                res.status(500).send()
            })
    },

    getCurrentUser: (req, res) => {
        let UID = req.UID;
        let userInfo = req.userInfo;
        let result = {};
        result.name = userInfo.name;
        result.picture = userInfo.picture;
        res.status(200).json(result)
    },

    getAllUsers: (req, res) => {
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