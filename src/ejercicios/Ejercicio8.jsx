import Layout from '../components/Layout';
import { useState } from "react"

export default function Ejercicio8() {
   const [texto, setTexto] = useState("")
   const palabras = texto
    .trim()
    .split(/\s+/)
    .filter(p => p.length > 0)

  const caracteres = texto.replace(/\s/g, "").length

  return (
    <Layout 
      titulo="Ejercicio 8: Contador de Palabras y Caracteres"
      objetivo='Practicar eventos en tiempo real y manipulación avanzada del DOM.'
      descripcion='Crea una página con un campo de texto donde el usuario pueda escribir un párrafo.'
      instrucciones={['Muestra en tiempo real el número de caracteres y palabras ingresados debajo del campo.','Palabras deben ser separadas por espacios, y los caracteres no deben incluir espacios ni saltos de línea.']}>
          
      <textarea
        rows="5"
        placeholder="Escribí un párrafo..."
        value={texto}
        onChange={e => setTexto(e.target.value)}
      />

      <p>Palabras: {palabras.length}</p>
      <p>Caracteres (sin espacios): {caracteres}</p>  
    </Layout>
  );
}