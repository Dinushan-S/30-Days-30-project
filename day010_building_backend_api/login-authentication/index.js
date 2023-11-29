const express = require('express')
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const port = process.env.PORT || 5000;
const cors = require('cors')

const dbURI = 'mongodb+srv://user:12345@nodet.vcgvult.mongodb.net/user?retryWrites=true&w=majority'


//import route
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')

dotenv.config()
//dbconnect
mongoose.connect(dbURI, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Connected to DB");
    }
})

//middleware
app.use(express.json)
app.use(cors())

//route middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute)

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port)