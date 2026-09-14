import { useState } from 'react' // Importamos el Hook necesario [3]

export const ContadorClics = () => {
  // 1. Definimos el estado inicial en 0.
  // 'count' es el valor actual y 'setCount' es la función para actualizarlo [10].
  const [count, setCount] = useState(0)

  // 2. Función manejadora del evento (handler).
  // Es una buena práctica profesional separar la lógica del return [11].
  const manejarClic = () => {
    // IMPORTANTE: La actualización del estado es asíncrona [12].
    // Si el nuevo valor depende del anterior, lo ideal es usar una función callback [13].
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {/* 3. Mostramos el estado actual entre llaves para evaluar la expresión [14] */}
      <h2>Clics: {count}</h2>
      
      {/* 4. Asociamos el evento clic a nuestra función [15] */}
      <button onClick={manejarClic}>
        Contar clics
      </button>
      
      {/* Botón extra para practicar el reseteo del estado [16] */}
      <button onClick={() => setCount(0)} style={{ marginLeft: '10px' }}>
        Reiniciar
      </button>
    </div>
  )
}