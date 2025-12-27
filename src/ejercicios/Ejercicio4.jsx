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
          onChange={e => setBusqueda(e.target.value)}/>
        <ul>
          {elementosFiltrados.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}