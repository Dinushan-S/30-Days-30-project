const joi = require('joi')
const { schema } = require('./model/User')

//register validate
const registerValidate = (data) => {
    const Schema = joi.object({
        name: joi.string().min(3).required(),
        email: joi.string().min(6).required(),
        password: joi.string().min(6).required()
    })
    return Schema.validate(data);
}

//login validate

const loginValidate = (data) => {
    const Schema = joi.object({
        email: joi.string().min(6).required(),
        password: joi.string().min(6).required()
    })
    return Schema.validate(data);
}

module.exports = { registerValidate, loginValidate }
