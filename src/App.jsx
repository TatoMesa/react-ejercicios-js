import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Ejercicio1 from './ejercicios/Ejercicio1';
import Ejercicio2 from './ejercicios/Ejercicio2';
import Ejercicio3 from './ejercicios/Ejercicio3';
import Ejercicio4 from './ejercicios/Ejercicio4';
import Ejercicio5 from './ejercicios/Ejercicio5';
import Ejercicio6 from './ejercicios/Ejercicio6';
import Ejercicio7 from './ejercicios/Ejercicio7';
import Ejercicio8 from './ejercicios/Ejercicio8';
import Ejercicio9 from './ejercicios/Ejercicio9';


// Supongamos que ya lo creaste

const Index = () => (

  
  <div style={{ padding: '20px' }}>
    <h1>Índice de Ejercicios Full Stack</h1>
    <nav>
      <ul>
        <li><Link to="/Ejercicio1">Ejercicio 1: Color Aleatorio</Link></li>
        <li><Link to="/Ejercicio2">Ejercicio 2: </Link></li>
        <li><Link to="/Ejercicio3">Ejercicio 3: </Link></li>
        <li><Link to="/Ejercicio4">Ejercicio 4: </Link></li>
        <li><Link to="/Ejercicio5">Ejercicio 5: Calculadora</Link></li>
        <li><Link to="/Ejercicio6">Ejercicio 6: </Link></li>
        <li><Link to="/Ejercicio7">Ejercicio 7: </Link></li>
        <li><Link to="/Ejercicio8">Ejercicio 8: </Link></li>
        <li><Link to="/Ejercicio9">Ejercicio 9: </Link></li>
      </ul>
    </nav>
  </div>
);

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Ejercicio1" element={<Ejercicio1 />} />
        <Route path="/Ejercicio2" element={<Ejercicio2 />} />
        <Route path="/Ejercicio3" element={<Ejercicio3 />} />
        <Route path="/Ejercicio4" element={<Ejercicio4 />} />
        <Route path="/Ejercicio5" element={<Ejercicio5 />} />
        <Route path="/Ejercicio6" element={<Ejercicio6 />} />
        <Route path="/Ejercicio7" element={<Ejercicio7 />} />
        <Route path="/Ejercicio8" element={<Ejercicio8 />} />
        <Route path="/Ejercicio9" element={<Ejercicio9 />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;