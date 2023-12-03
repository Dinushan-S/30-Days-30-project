const express = require('express')
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const port = 3000;
const cors = require('cors')

const dbURI = 'mongodb+srv://user:12345@nodet.vcgvult.mongodb.net/user?retryWrites=true&w=majority'

// app.get('/', (req, res) => {
//     console.log("hi")
//     res.send('hello world')
// })

//import route
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')

dotenv.config()
//dbconnect
mongoose.connect(dbURI)
    .then(result => { console.log(`connect ${port}`) })
    .catch(err => console.log(err))

app.use(bodyParser.json());

// app.use('/user', authRoute, (req, res) => {
//     res.send('hi in user')
//     console.log('in user')
// });

app.get('/', (req, res) => {
    res.send('hello world')
})

//middleware
// app.use(express.json)
// app.use(cors())


//route middleware
app.use(express.urlencoded({ extended: true }))
app.use('/user', authRoute);
app.use('/api/posts', postRoute, (req, res) => console.log('api/posts'))

app.listen(port, (req, res) => {
    console.log('server started')
})