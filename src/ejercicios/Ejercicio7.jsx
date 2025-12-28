import Layout from '../components/Layout';
import { useState } from "react"
import Button from '../components/Button';
import Titulo from '../components/Titulo';

export default function Ejercicio7() {
  const [longitud, setLongitud] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const generarPassword = () => {
    if (!longitud || longitud < 4) {
      setError("La longitud debe ser mayor o igual a 4")
      setPassword("")
      return
    }

    setError("")

    const caracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"

    let resultado = ""

    for (let i = 0; i < longitud; i++) {
      const indice = Math.floor(Math.random() * caracteres.length)
      resultado += caracteres[indice]
    }

    setPassword(resultado)
  }

  return (
    <Layout 
      titulo="Ejercicio 7: Generador de Contraseñas Aleatorias"
      objetivo='Practicar generación de cadenas aleatorias y uso de formularios.'
      descripcion='Crea una página con un campo de entrada para especificar la longitud de una contraseña y un botón que diga “Generar      contraseña”.'
      instrucciones={['Al hacer clic en el botón, se debe mostrar una contraseña generada aleatoriamente usando letras, números y caracteres especiales.','Si la longitud es menor a 4 o el campo está vacío, muestra un mensaje de error indicando que la longitud debe ser mayor o igual a 4.']}>

     
      <input
        type="number"
        placeholder="Longitud de la contraseña"
        value={longitud}
        onChange={e => setLongitud(e.target.value)}
        className='bg-white p-2 mt-5 text-2xl w-80'
      />

      <Button onClick={generarPassword} variant='primary'>Generar contraseña</Button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {password && (
        <p className='p-2 mt-5 text-2xl'>
          <strong className='mt-5 text-2xl'>Contraseña:</strong> {password}
        </p>
      )}
   

          
    </Layout>
  );
}