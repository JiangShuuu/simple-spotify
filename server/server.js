const express = require('express')
const cors = require("cors")
const bodyParser = require("body-parser")
const spotifyWebApi = require('spotify-web-api-node')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.post('/login', (req, res) => {
  const code = req.body.code
  const spotifyApi = new spotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
  })

  spotifyApi.authorizationCodeGrant(code).then(data => {
    res.json({
      accessToken: data.body.accessToken,
      refreshToken: data.body.refreshToken,
      expiresIn: data.body.expires_in
    })
  }).catch((err) => {
    console.log(err)
    res.sendStatus(400)
  })
})

app.listen(3000)