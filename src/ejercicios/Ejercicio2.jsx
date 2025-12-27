import Layout from '../components/Layout';
import { useState } from 'react';
import Button from '../components/Button';
export default function Ejercicio2() {
  
  const [contador, setContador] = useState (0);
  
  const sumarClic = () =>{
    setContador(contador+1);
  }

   const restarClic = () =>{
    setContador(contador-1);
  }

    
  
  return (
    <Layout 
      titulo="Ejercicio 2:"
      objetivo="Practicar el manejo de eventos y la actualización del contenido del DOM."
      descripcion='Crea una página con un botón que diga "Contar clics" y un texto inicial que muestre "Clics: 0". Cada vez que se haga clic en el botón, el texto debe actualizarse para mostrar el número total de clics realizados.'
      >
      <h3>clics: {contador}</h3>  
      <Button onClick={sumarClic} variant="primary">
          Sumar
      </Button> 
      <Button onClick={restarClic} variant="secondary">
          Restar
      </Button>    
      
    </Layout>
  );
}