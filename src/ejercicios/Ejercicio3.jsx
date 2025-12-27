import Layout from '../components/Layout';
import { useState } from "react"
import Button from "../components/Button"

export default function Ejercicio3() {
  
  const [texto, setTexto] = useState("")
  const [lista, setLista] = useState([])

  const agregar = () => {
    if (texto.trim() === "") return
    setLista([...lista, texto])
    setTexto("")
  }

  const eliminar = (index) => {
    setLista(lista.filter((_, i) => i !== index))
  }

  return (
    <Layout 
      titulo="Ejercicio 3: Lista Dinamica"
      objetivo='Trabajar con la creación, eliminación y manipulación de elementos del DOM'
      descripcion='Crea una página con un campo de texto, un botón que diga "Agregar", y una lista vacía debajo.'    
      instrucciones={['Cuando el usuario escriba un texto y haga clic en "Agregar", el texto debe añadirse como un nuevo elemento de la lista.',
                     'Añade un botón al lado de cada elemento para eliminarlo de la lista.']} >
      <div>
      <input
        type="text"
        value={texto}
        onChange={e => setTexto(e.target.value)}
        placeholder="Escribí algo..."
      />

      <Button variant="primary" onClick={agregar}>
        Agregar
      </Button>

      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            {item}
            <Button variant="secondary" onClick={() => eliminar(index)}>
              Eliminar
            </Button>
          </li>
        ))}
      </ul>
    </div>    
    </Layout>
  );
}