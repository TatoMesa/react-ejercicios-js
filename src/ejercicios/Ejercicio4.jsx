import Layout from '../components/Layout';
import { useState } from "react"

export default function Ejercicio4() {
  
  const elementos = ["Perro", "Gato", "Pez", "Conejo", "Caballo"]

  const [busqueda, setBusqueda] = useState("")

  const elementosFiltrados = elementos.filter(item =>
    item.toLowerCase().includes(busqueda.toLowerCase())
  )
  
  return (
    <Layout 
      titulo="Ejercicio 4: Filtro de busqueda en tiempo real"
      objetivo='Practicar la interacción entre eventos del DOM y lógica en JavaScript.'
      descripcion='Crea una página con un campo de texto y una lista predefinida de elementos.'
      instrucciones={['Mientras el usuario escribe en el campo, la lista debe actualizarse en tiempo real para mostrar solo los elementos que contienen el texto escrito.',
                     'Ejemplo: Si la lista contiene ["Perro", "Gato", "Pez", ....] y el usuario escribe "Ga", solo "Gato" debe quedar visible.']} >
      <div>
        <input
          type="text"
          placeholder="Buscar..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
          className='bg-white p-3 py-2 mt-10 mb-2'/>
        <ul className='max-w-md mx-auto flex flex-col'>
          {elementosFiltrados.map((item, index) => (
            <li key={index} className='px-2 bg-white' >{item}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}