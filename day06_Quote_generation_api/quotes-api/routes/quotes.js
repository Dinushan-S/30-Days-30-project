const express = require('express')
const router = express.Router()
const Quotes = require('../models/Quotes')

router.post('/add', async (req, res) => {
    const quoteObject = new Quotes({
        'quotes': req.body.quotes
    });
    try {
        await quoteObject.save((err, response) => {
            if (err) {
                console.log(err)
            } else {
                console.log('saved', response)
            }
        })
    } catch (err) {
        console.log(err.message)
        res.status(500).send("error in saving")
    }
    res.status(200).json({
        response: "success"
    })
});

router.get('/list', async (req, res) => {
    const quotesObject = await Quotes.find({});
    res.json({ 'result': quotesObject[0].quotes });
});

router.get('/raondom', async (req, res) => {
    const randomNumber = Math.floor(Math.random() * 21);
    const quoteObject = await Quotes.find({});
    const quotesItem = quoteObject[0].quotes[randomNumber]
    res.send(quotesItem)
})

module.exports = router;