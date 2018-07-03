const mongoose = require('./schema.js')
const Picture = mongoose.model('Picture')
const dogData = require('https://dog.ceo/dog-api/documentation/random')

Picture.remove({})
  .then(() => {
    Picture.collection.insert(dogData)
      .then((dogs) => {
        console.log(dogs)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })
