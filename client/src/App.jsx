import Login from './Login'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return code ? <Dashboard code={code} /> : <Login />
}

export default App

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="/Login" element={<Login />}></Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }
