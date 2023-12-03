const router = require('express').Router();
const verify = require('./verifyToken')

router.get('/', verify, (req, res) => {
    res.send(req.user)
    console.log("/api/posts")
})

module.exports = router