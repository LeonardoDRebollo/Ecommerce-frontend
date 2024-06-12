import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login.tsx';
import Registro from './pages/auth/registro.tsx';
import Home from './pages/home/home.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
