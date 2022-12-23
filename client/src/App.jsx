import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
