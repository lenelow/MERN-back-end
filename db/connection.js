const mongoose = require('mongoose')

if (process.env.NODE_ENV === 'production') {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect('mongodb://localhost/mern_lab')
}

mongoose.promise = Promise

module.exports = mongoose


