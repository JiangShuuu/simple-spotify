import React from 'react'

const AUTH_URL = import.meta.env.VITE_AUTH_ENDPOINT

export default function Login() {
  const URL = `${AUTH_URL}?client_id=${
    import.meta.env.VITE_CLIENT_ID
  }&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <a className="btn btn-success btn-lg" href={URL}>
        Login with Spotify
      </a>
    </div>
  )
}
