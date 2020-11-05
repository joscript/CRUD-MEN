const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message: error});
    }
});

router.post('/', async (req, res) => {
    if(!req.body.firstName || !req.body.lastName) return res.status(422).json('First name and last name fields cant be empty!');
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })

    try{
        const saveUser = await user.save();
        res.status(200).json(saveUser);
    }catch(error){
        res.status(500).json({message: error});
    }
}); 

router.get('/:id', async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error});
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const remove = await User.remove({_id: req.params.id});
        res.status(200).json(remove);
    } catch (error) {
        res.status(500).json({message: error});
    }
})

router.patch('/:id', async(req, res) => {
    if(!req.body.firstName || !req.body.lastName) return res.status(422).json('First name and last name fields cant be empty!');
    try {
        const updateUser = await User.updateOne(
            {
                _id: req.params.id
            },
            {
                $set: {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName
                }
            }
        );
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(500).json({message: error});
    }
})

module.exports = router;