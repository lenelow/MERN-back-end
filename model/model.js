const mongoose = require('mongoose')

const PictureSchema = new mongoose.Schema({
  name: String,
  image: String
})

mongoose.model('Picture', PictureSchema)

const Picture = mongoose.model('Picture', PictureSchema)
module.exports = Picture
