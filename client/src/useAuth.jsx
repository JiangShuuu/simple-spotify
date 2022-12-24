import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [expiresIn, setExpiresIn] = useState()

  useEffect(() => {
    if (accessToken) return

    axios
      .post('http://localhost:3000/login', {
        code,
      })
      .then((res) => {
        setAccessToken(res.data.accessToken)
        setRefreshToken(res.data.refreshToken)
        setExpiresIn(res.data.expiresIn)
        window.history.pushState({}, null, '/')
      })
      .catch((err) => {
        console.log(err)
        // window.location = '/'
      })
  }, [code])

  return accessToken
}
