import { useState } from 'react';
import Layout from '../components/Layout';

export default function Ejercicio5 () {
  const [nums, setNums] = useState({ n1: 0, n2: 0 });
  const [resultado, setRes] = useState('');

  const calcular = (operacion) => {
    const { n1, n2 } = nums;
    if (operacion === 'division' && n2 === 0) return setRes('Error: Division por 0');
    
    const operaciones = {
      suma: n1 + n2,
      resta: n1 - n2,
      multiplicacion: n1 * n2,
      division: n1 / n2
    };
    setRes(operaciones[operacion]);
  };

  return (
    <Layout 
      titulo="Ejercicio 5: Calculadora Sencilla"
      objetivo="Practicar la manipulación de formularios, eventos, y lógica básica de JavaScript"
      descripcion='Crea una página con dos campos de entrada de números y cuatro botones: "Sumar", "Restar", "Multiplicar", y "Dividir".'
      instrucciones={["Al hacer clic en cualquiera de los botones, debe mostrarse el resultado de la operación en un área de texto o debajo de los botones",
                      "Asegúrate de validar los datos para evitar errores (como división por cero o entradas vacías)."]}
    >
      <input type="number" onChange={(e) => setNums({...nums, n1: +e.target.value})} />
      <input type="number" onChange={(e) => setNums({...nums, n2: +e.target.value})} />
      <div>
        <button onClick={() => calcular('suma')}>Sumar</button>
        <button onClick={() => calcular('resta')}>Restar</button>
        <button onClick={() => calcular('multiplicacion')}>Multiplicar</button>
        <button onClick={() => calcular('division')}>Dividir</button>
      </div>
      <h3>Resultado: {resultado}</h3>
    </Layout>
  );
};

