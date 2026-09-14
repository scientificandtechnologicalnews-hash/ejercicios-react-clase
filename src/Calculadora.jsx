import { useState } from 'react'

export const Calculadora = () => {
  // 1. Estados para los inputs y el resultado
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  // 2. Función de validación (El toque del "Pro")
  const validarYCalcular = (operacion) => {
    setError('') // Limpiamos errores previos
    
    // Convertimos a número
    const n1 = parseFloat(num1)
    const n2 = parseFloat(num2)

    // Validación de campos vacíos o no numéricos
    if (isNaN(n1) || isNaN(n2)) {
      setError('Por favor, introduce números válidos en ambos campos.')
      setResultado(null)
      return
    }

    // Lógica de operaciones
    switch (operacion) {
      case 'sumar':
        setResultado(n1 + n2)
        break
      case 'restar':
        setResultado(n1 - n2)
        break
      case 'multiplicar':
        setResultado(n1 * n2)
        break
      case 'dividir':
        if (n2 === 0) {
          setError('No se puede dividir por cero.')
          setResultado(null)
        } else {
          setResultado(n1 / n2)
        }
        break
      default:
        break
    }
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px', maxWidth: '400px' }}>
      <h2>5. Calculadora Sencilla</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="number"
          placeholder="Número 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Número 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>

      <div style={{ marginTop: '15px', display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
        <button onClick={() => validarYCalcular('sumar')}>Sumar</button>
        <button onClick={() => validarYCalcular('restar')}>Restar</button>
        <button onClick={() => validarYCalcular('multiplicar')}>Multiplicar</button>
        <button onClick={() => validarYCalcular('dividir')}>Dividir</button>
      </div>

      {/* Renderizado condicional del error y el resultado */}
      {error && <p style={{ color: 'red', marginTop: '15px' }}>{error}</p>}
      
      {resultado !== null && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
          <strong>Resultado: {resultado}</strong>
        </div>
      )}
    </div>
  )
}