import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';




export default function Ejercicio1() {

  const [color, setColor] = useState (generarColor())
  
  useEffect(()=>{
    return () =>{
      document.body.style.backgroundColor = '#f7df1e';
    };
  },[]);
  
  function generarColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
  
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  const cambiarColor = () =>{
    setColor(generarColor());
    document.body.style.backgroundColor = color;
  }
  
  
  return (
    <Layout 
      titulo="Ejercicio 1: Cambiar color"
      objetivo="Practicar eventos en JavaScript y manipulación de estilos del DOM."
      descripcion= 'Crea una página web con un botón que diga "Cambiar color". Cada vez que el usuario haga clic en el botón, el color de fondo de la página debe cambiar a un color aleatorio.'>
      <Button onClick={cambiarColor} variant="primary">
          Cambiar Color Aleatorio
      </Button>
    </Layout>
  );
}