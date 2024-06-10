import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login.tsx';
import Registro from './pages/auth/registro.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/registro" element={<Registro />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
