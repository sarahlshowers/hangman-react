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

const gameWords = `http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words`

app.get('/linkedin-reach', (request, response) => {
  rp(gameWords)
    .then(results => {response.send(results)})
})

/**
 * Even though it was your intention to extend the app, I would avoid leaving commented out code or make sure it is clearly marked as a TODO, otherwise it just kind of looks like you forgot about it
 * To go a little above and beyond, you could even create and issue for it and link it to here.
 * TODO >> Implement difficulty level
 */

// const wordsDifficulty = `http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words?difficulty=${level}&minLength=${minWordLength}`
//
// app.get('/linkedin-reach/difficulty', (request, response) => {
//   request(wordsDifficulty)
//   .then(results => {response.send(results)})
// })


/**
 * +1 favicon goodness
 */
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
