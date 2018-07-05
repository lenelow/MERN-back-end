const mongoose = require('../model/model')
const Picture = mongoose.model('Picture')
const dogData = require('./dog-data.json')

Picture.remove({})
  .then(() => {
    return Picture.collection.insert(dogData)
  }).then(() => {
    process.exit()
  })
  .catch((err) => {
    console.log(err)
  })
