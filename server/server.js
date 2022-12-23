const express = require('express')
const spotifyWebApi = require('spotify-web-api-node')

const app = express()

app.post('/login', (req, res) => {
  const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
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
  }).catch(() => {
    res.sendStatus(400)
  })
})