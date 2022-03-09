
const dotenv = require('dotenv')
dotenv.config()

var path = require('path')
const express = require('express')
const fetch = require('node-fetch')
const FormData= require('form-data')
const { send } = require('process')

// Require bodyparser
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
const cors = require('cors')

// Cors for cross origin allowance
app.use(cors());


const app = express()

app.listen(8080, function(){
  console.log("Server has started on port 8080")
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Initialize the dist project folder
app.use(express.static('dist'))


//Received API Data
apiData = {}

// Get Route
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// Post route 
app.post('/analyzeTest', async function (req, res) {
    const apiURL = 'https://api.meaningcloud.com/sentiment-2.1'
    const formdata = new FormData()

    formdata.append("key", process.env.API_KEY)
    formdata.append("lang", "en")
    formdata.append("of","json")
    formText = req.body.url
    formdata.append("url", formText)

    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        body: formdata,
        redirect: 'follow'
    }

    let response = await fetch(apiURL, requestOptions)
    let data = await response.json()
    apiData.message = data.message;
    res.send(apiData)
    console.log(apiData)
})







