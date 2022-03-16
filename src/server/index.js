require('dotenv').config()
var path = require('path')
const express = require('express')
const fetch = require("node-fetch")
var bodyParser = require('body-parser')
var cors = require('cors')
var validator = require('validator')
const app = express()

//Setting the default value to txt
let reqType = 'txt'
const { send } = require('process')

app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Evaluate-news-NLP app listening on port 8080!')
})

app.post('/userData', async(req, res) => {
    // check if user input is url, text is default
    console.log(reqType)
    if (validator.isURL(req.body.input)) {
        reqType = 'url'
        console.log(reqType)
    }
     console.log(reqType,process.env.API_KEY)
    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=auto&${reqType}=${req.body.input}`)
    try {
        const data = await response.json()
        res.send(data);
        console.log(data)
    } catch(error) {
        console.log("error", error);
    }
})
