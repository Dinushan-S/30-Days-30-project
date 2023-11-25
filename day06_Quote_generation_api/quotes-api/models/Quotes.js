const mongoose = require('mongoose')

const QuotesScheme = mongoose.Schema({
    'quote': {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('Quotes', QuotesScheme, "Quotes")