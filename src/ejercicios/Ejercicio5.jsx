import { useState } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Titulo from '../components/Titulo';

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
      <div className='flex gap-2'>
        <input className='bg-white p-3 py-2 mt-10 mb-2 text-2xl' type="number" onChange={(e) => setNums({...nums, n1: +e.target.value})} placeholder='num1'/>
        <input className='bg-white p-3 py-2 mt-10 mb-2 text-2xl' type="number" onChange={(e) => setNums({...nums, n2: +e.target.value})} placeholder='num2'/>
      </div>
      <div className='flex gap-2 max-w-md mx-auto'>
        <Button onClick={() => calcular('suma')} variant='primary'>Sumar</Button>
        <Button onClick={() => calcular('resta')} variant='secondary'>Restar</Button>
        <Button onClick={() => calcular('multiplicacion')} variant='tertiary'>Multiplicar</Button>
        <Button onClick={() => calcular('division')} variant=''>Dividir</Button>
      </div>
      <Titulo>Resultado: {resultado}</Titulo>
    </Layout>
  );
};

