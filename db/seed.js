const mongoose = require('./model')
const Picture = mongoose.model('Picture')
const dogData = require('./dog-data.json')

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
