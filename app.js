const express = require('express')
const Picture = require('./model/model')
const cors = require('cors')
const parser = require('body-parser')

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express()

app.set('port', 4001)
app.use(parser.json())
app.use(cors())

app.get('/api/dogs', (req, res) => {
  Picture.find({})
    .then((dogs) => {
      res.json(dogs)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.post('/api/dogs', (req, res) => {
  Picture.create(req.body)
    .then((dogs) => {
      res.json(dogs)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.get('/api/dogs/:id', (req, res) => {
  Picture.findById(req.params.id)
    .then((dog) => {
      res.json(dog)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.put('/api/dogs/:id', (req, res) => {
  Picture.findByIdAndUpdate(req.params.id, req.body)
    .then((dog) => {
      res.json(dog)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.delete('/api/dogs/:id', (req, res) => {
  Picture.findByIdAndRemove(req.params.id)
    .then((dog) => {
      res.json(dog)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})

module.exports = app