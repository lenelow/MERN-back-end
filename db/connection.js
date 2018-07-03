const mongoose = require('mongoose')

mongoose.connect('http://localhost:4000')

mongoose.promise = Promise

module.exports = mongoose
