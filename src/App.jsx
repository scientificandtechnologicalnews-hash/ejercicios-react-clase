import { useState } from 'react'
import { CambiadorColor } from './CambiadorColor'
import { ContadorClics } from './ContadorClics'

function App() {
  // Este estado determinará qué ejercicio vemos
  // 0 = Índice, 1 = Ejercicio 1, 2 = Ejercicio 2...
  const [ejercicioActual, setEjercicioActual] = useState(0)

  // Función para volver al índice
  const volverAlIndice = () => setEjercicioActual(0)

  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      {/* 1. TÍTULO DE LA PÁGINA DE ATERRIZAJE [1] */}
      {ejercicioActual === 0 && (
        <section>
          <h1>Índice de Ejercicios React</h1>
          <p>Selecciona un ejercicio para ver su funcionamiento:</p>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '250px' }}>
            <button onClick={() => setEjercicioActual(1)}>Ejercicio 1: Cambiador de Color</button>
            <button onClick={() => setEjercicioActual(2)}>Ejercicio 2: Contador de Clics</button>
            {/* Aquí añadiremos los botones del 3 al 9 conforme avancemos */}
          </nav>
        </section>
      )}

      {/* 2. RENDERIZADO CONDICIONAL DE LOS EJERCICIOS [6] */}
      {ejercicioActual !== 0 && (
        <div style={{ marginTop: '20px' }}>
          <button onClick={volverAlIndice} style={{ marginBottom: '20px' }}>
            ← Volver al Índice
          </button>
          
          {ejercicioActual === 1 && <CambiadorColor />}
          {ejercicioActual === 2 && <ContadorClics />}
        </div>
      )}
    </main>
  )
}

export default App
