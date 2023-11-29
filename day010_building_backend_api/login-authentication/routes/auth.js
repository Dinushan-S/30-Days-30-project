const route = require('express').Router();
const user = require('../model/User');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const verify = require('./verifyToken');
const { registerValidate, loginValidate } = require('../validation');
const User = require('../model/User');


//Registration Route
route.post('/register', async (req, res) => {
    //validate data before making user
    const validate = registerValidate(req.body);
    if (validate.error) {
        return res.status(400).send(validate.error.details[0].message);
    }

    //checking if the user is already in database
    const emailExist = await User.findOne({
        email: req.body.email
    })
    if (emailExist) return res.status(400).send("Email exists");

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.hashedPassword
    });
    try {
        const sendUser = await user.save();
        res.send({ 'user': user._id })
    } catch (err) {
        res.status(400).send(err)
    }
})

//login route
route.post('/login', async (req, res) => {
    //validate data before making user
    const validation = loginValidate(req.body)
    if (validation.error) {
        return res.status(400).send(validation.error.details[0].message);
    }

    //checking email already exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email not found');


    //password correct
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) return res.status(400).send('Password is wrong');

    //create and assign token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send({ "token": token });
})

route.get('/me', verify, async (req, res) => {
    try {
        // request.user is getting fetched from Middleware after token authentication
        const user = await User.findOne(req.body._id);
        res.json({ "response": "sucess" })
    } catch (e) {
        res.send({ message: "error in fetching user" })
    }
})

module.exports = route;