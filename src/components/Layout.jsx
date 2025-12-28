import { Link } from 'react-router-dom';
import Button from './Button';
import Titulo from './Titulo';

export default function Layout({ titulo, objetivo, descripcion, instrucciones, children }) {
  return (
    <div className='flex flex-col items-center gap-2 pt-6 px-6 w-full'>
      <header className="w-full max-w-7xl">
          <Titulo className='bg-[#151515] text-[#f7df1e] p-6 text-3xl text-center'>{titulo}</Titulo>
          
          <p className='p-4 text-2xl'><strong>Objetivo del ejercicio:</strong> {objetivo}</p>
          <p className='p-4 text-2xl'><strong>Ejercicio:</strong> {descripcion}</p>
          {instrucciones && (
        <ul className='p-4 text-2xl'>
          {instrucciones.map((i, idx) => <li key={idx}>{i}</li>)}
        </ul>
      )}
      </header>

      <main>
        {children} {/* Aquí aparecerá el contenido de cada ejercicio */}
      </main>
      
        <Link to="/" >
          Volver
        </Link> 
     
    </div>
  );
}