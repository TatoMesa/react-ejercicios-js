import Button from '../components/Button';
import Layout from '../components/Layout';
import { useEffect, useState } from "react"

export default function Ejercicio9() {
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem("tareas")
    return guardadas ? JSON.parse(guardadas) : []
  })

  const [texto, setTexto] = useState("")

  // Guardar en localStorage cuando cambian las tareas
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas))
  }, [tareas])

  const agregarTarea = () => {
    if (!texto.trim()) return

    setTareas(prev => [
      ...prev,
      { id: Date.now(), texto, completada: false }
    ])

    setTexto("")
  }

  const toggleTarea = id => {
    setTareas(prev =>
      prev.map(t =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    )
  }

  const limpiarCompletadas = () => {
    setTareas(prev => prev.filter(t => !t.completada))
  }
  return (
    <Layout 
      titulo="Ejercicio 9: Lista de tareas con LocalStorage"
      objetivo='Practicar persistencia de datos con localStorage.'
      descripcion='Crea una aplicación de lista de tareas.'
      instrucciones={['Cada tarea debe incluir un texto y un checkbox para marcarla como completada.', 'Las tareas se deben guardar en localStorage para que persistan incluso si la página se recarga.','Debe incluir un botón para limpiar todas las tareas completadas y actualizar el localStorage.']}
      >
         <div>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={texto}
        onChange={e => setTexto(e.target.value)}
        className='bg-white p-2 mt-5 text-2xl w-80'
      />
      <Button onClick={agregarTarea} variant='tertiary'>Agregar</Button>

      <ul className='max-w-md mx-auto flex flex-col gap-2 mb-4'>
        {tareas.map(tarea => (
          <li key={tarea.id} className='px-2 py-2
          
          bg-white flex gap-2 items-center text-2xl '>
            <input
              type="checkbox"
              checked={tarea.completada}
              onChange={() => toggleTarea(tarea.id)}
              
            />
            <span
              style={{
                textDecoration: tarea.completada ? "line-through" : "none"
              }}
            >
              {tarea.texto}
            </span>
          </li>
        ))}
      </ul>

      <Button onClick={limpiarCompletadas} variant='secondary'>
        Limpiar completadas
      </Button>
    </div>
    </Layout>
  );
}