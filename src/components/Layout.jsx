import { Link } from 'react-router-dom';

export default function Layout({ titulo, objetivo, descripcion, instrucciones, children }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <header>
          <h2>{titulo}</h2>
          <p><strong>Objetivo del ejercicio:</strong> {objetivo}</p>
          <p><strong>Ejercicio:</strong> {descripcion}</p>
          {instrucciones && (
        <ul>
          {instrucciones.map((i, idx) => <li key={idx}>{i}</li>)}
        </ul>
      )}
      </header>

      <main>
        {children} {/* Aquí aparecerá el contenido de cada ejercicio */}
      </main>
      <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>
         Volver
      </Link>
    </div>
  );
}