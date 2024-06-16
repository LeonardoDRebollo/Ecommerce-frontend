import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login.tsx';
import Registro from './pages/auth/registro.tsx';
import Home from './pages/home/home.tsx';
import Producto from './pages/products/producto.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/producto/:id" element={<Producto />} />
      </Routes>
    </Router>
  );
}

export default App;
