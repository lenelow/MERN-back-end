const mongoose = require('../db/connection')

const PictureSchema = new mongoose.Schema({
  name: String,
  image: String
})

mongoose.model('Picture', PictureSchema)

module.exports = mongoose;
