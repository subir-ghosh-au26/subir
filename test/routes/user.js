const { User, validate } = require('../model/user');
const express = require('express');
const router = express.Router();
const path = require('path');


let templates = path.join(process.cwd())


router.post('/register', async (req, res) => {
    // First Validate The Request
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    // Check if this user already exisits
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('That user already exisits!');
    } else {
        // Insert the new user if they do not exist yet
        user = new User({
            name: req.body.name,
            email: req.body.email
        });
        await user.save();
        res.send(user);
    }
});

router.get('/login', (req, res) => {
    res.sendFile('/pages/login.html', { root: templates });
});


router.post('/login', async(req, res) =>{
    let user = await User.findOne({ email: req.body.email });
    console.log(req.body.email)
    if (user) {
        res.status(200).send(`Welcome ${user.name}`);
    } else {
        res.send('User does not exist');
    }
});



module.exports = router;