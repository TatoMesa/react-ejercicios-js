import Layout from '../components/Layout';
import { useEffect, useState } from "react"
import Button from '../components/Button';

export default function Ejercicio6() {
  const [segundos, setSegundos] = useState(0)
  const [activo, setActivo] = useState(false)

  useEffect(() => {
    let interval = null

    if (activo) {
      interval = setInterval(() => {
        setSegundos(prev => prev + 1)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [activo])

  const formatearTiempo = () => {
    const horas = Math.floor(segundos / 3600)
    const minutos = Math.floor((segundos % 3600) / 60)
    const secs = segundos % 60

    return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`
  }

  return (
    <Layout 
      titulo="Ejercicio 6: Temporizador con inicio, pausa y reinicio"
      objetivo='Practicar manejo de eventos, funciones de temporización y manipulación del DOM.'
      descripcion='Crea una página con un temporizador que comience en 00:00:00. Incluye tres botones: “Iniciar”, “Pausar” y “Reiniciar”.'
      instrucciones={['Al hacer clic en “Iniciar”, el temporizador debe comenzar a contar los segundos, minutos y horas.','“Pausar” detiene el conteo pero mantiene el tiempo actual.','“Reiniciar” pone el temporizador en 00:00:00.']}>
      <div>
      <h2>{formatearTiempo()}</h2>

      <Button onClick={() => setActivo(true)} variant="primary">Iniciar</Button>
      <Button onClick={() => setActivo(false)} variant="tertiary">Pausar</Button>
      <Button onClick={() => {setActivo(false); setSegundos(0)}} variant="secondary">Reiniciar</Button>
    </div>
    </Layout>
  );
}