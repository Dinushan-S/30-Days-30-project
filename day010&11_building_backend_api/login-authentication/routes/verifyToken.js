const jwt = require('jsonwebtoken');
//check user is authrised
module.exports = (req, res, next) => {
    const token = req.header('token');
    if (!token) return res.status(401).send('Access Denied')
    try {
        const verified = jwt.verify(token, "dasfsdf");
        req.user = verified;
        next()
    } catch (err) {
        res.status(400).send('Invalid Token')
    }
}