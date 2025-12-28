import { HashRouter, Routes, Route, Link } from 'react-router-dom';
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

  
  <div className= "flex flex-col items-center gap-2 pt-6 px-6 w-full bg-[#f7df1e] text-[#000000] min-h-screen">
    <h1 className="font-semibold mb-4 bg-[#000000] text-[#f7df1e] p-5 text-3xl text-center w-full max-w-7xl border border-black">Índice de Ejercicios realizados en ReactJS</h1>
    <nav>
      <ul className="flex flex-col items-center gap-2 pt-6">
        <li className='p-2 text-2xl'><Link to="/Ejercicio1">Ejercicio 1: Color aleatorio</Link></li>
        <li className='p-2 text-2xl'><Link to="/Ejercicio2">Ejercicio 2: Contador de clics</Link></li>
        <li className='p-2 text-2xl'><Link to="/Ejercicio3">Ejercicio 3: Lista dinamica</Link></li>
        <li className='p-2 text-2xl'><Link to="/Ejercicio4">Ejercicio 4: Filtro de busqueda en tiempo real</Link></li>
        <li className='p-2 text-2xl'><Link to="/Ejercicio5">Ejercicio 5: Calculadora sencilla</Link></li>
        <li className='p-2 text-2xl'><Link to="/Ejercicio6">Ejercicio 6: Temporizador con Inicio, pausa y reinicio</Link></li>
        <li className='p-2 text-2xl'><Link to="/Ejercicio7">Ejercicio 7: Generador de contraseñas aleatorias</Link></li>
        <li className='p-2 text-2xl'><Link to="/Ejercicio8">Ejercicio 8: Contador de palabras y caracteres</Link></li>
        <li className='p-2 text-2xl'><Link to="/Ejercicio9">Ejercicio 9: Lista de tareas con LocalStorage</Link></li>
      </ul>
    </nav>
  </div>
);

function App() {
  
  return (
    
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
