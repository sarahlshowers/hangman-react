const express = require('express')
const path = require('path')
const logger = require('morgan')
const favicon = require('serve-favicon')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')


const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config.js')
const rp = require('request-promise')

const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

io.on('connection', function(client) {
  console.log('A client connected')

  client.emit('welcome')

  io.emit('newClientConnected', client.id)

  client.on('newClientConnected', function (data){
    console.log('A new client with id', data, 'connected to the server')
  })

  client.on('makeAnnouncement', function (data) {

    io.emit('announcement', data)
  })

  client.on('disconnect', function () {
    io.emit('clientDisconnected', client.id)
  })

  server.listen(3000)
})

const gameWords = `http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words`

app.get('/linkedin-reach', (request, response) => {
  rp(gameWords)
    .then(results => {response.send(results)})
})

// const wordsDifficulty = `http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words?difficulty=${level}&minLength=${minWordLength}`
//
// app.get('/linkedin-reach/difficulty', (request, response) => {
//   request(wordsDifficulty)
//   .then(results => {response.send(results)})
// })

app.use(favicon(path.join(__dirname, 'client', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

const compiler = webpack(config)
const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'src',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false,
  }
})

app.use(middleware)
app.use(webpackHotMiddleware(compiler))
app.use(express.static('client'))

if (app.get('env') === 'development') {
  app.use((err, req, res) => {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

app.use((err, req, res) => {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})

module.exports = app
