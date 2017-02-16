const express = require('express')
const router = express.Router()

router.get('http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words', (request, response) => response.JSON('words'))
console.log({words})
