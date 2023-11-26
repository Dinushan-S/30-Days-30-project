const express = require('express')
const app = express();
const quotesJSONArray = require('./quoteSource.json')
const port = 3000;

//mongodb
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv').config()

//mongoDb connection
mongoose.connect('')
    .then(() => console.log('connected'))
    .catch(err => console.log("not connected", err));;

//allow localhost access in frontend
app.use(cors());

//routes for quotes
const quotesRoute = require('./routes/quotes');
app.use(bodyParser.json());
app.use('/quotes', quotesRoute);
app.get('/', (req, res) => {
    res.send('hello')
});

// app.get('/quoteList', (req, res) => {
//     res.send({ 'quoteList': quotesJSONArray });
// });

// app.get('/randomQuote', (req, res) => {
//     const randomNumber = Math.floor(Math.random() * 21);
//     const quoteItem = quotesJSONArray[randomNumber];
//     res.send(quoteItem);
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
