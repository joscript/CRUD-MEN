const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.get('/', (req, res) => {
    res.send('OKINAYO');
});

router.post('/', (req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })

    user.save()
        .then(response => res.status(200).json(response))
        .catch(err => res.status(500).json({message: err}))
}); 

module.exports = router;