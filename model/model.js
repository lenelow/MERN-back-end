const mongoose = require('../db/connection.js')

const PictureSchema = new mongoose.Schema({
  text: String
})

mongoose.model('Picture', PictureSchema)

const Picture = mongoose.model('Picture', PictureSchema)
module.exports = Picture
