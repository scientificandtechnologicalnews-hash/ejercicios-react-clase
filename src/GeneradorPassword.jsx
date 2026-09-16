import { useState } from 'react'

export const GeneradorPassword = () => {
  // 1. Estados locales
  const [longitud, setLongitud] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // 2. Función para generar la contraseña (Lógica pura de JS)
  const manejarGeneracion = () => {
    // Validación según el requisito: longitud >= 4 y no vacío [2]
    const numLongitud = parseInt(longitud)

    if (!longitud || isNaN(numLongitud) || numLongitud < 4) {
      setError('La longitud debe ser mayor o igual a 4')
      setPassword('') // Limpiamos la password anterior si había error
      return
    }

    // Si pasa la validación, limpiamos el error
    setError('')

    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+_+'
    let nuevaPassword = ''
    
    for (let i = 0; i < numLongitud; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length)
      nuevaPassword += caracteres.charAt(indiceAleatorio)
    }

    // 3. Actualizamos el estado con la nueva contraseña [6, 7]
    setPassword(nuevaPassword)
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #444', borderRadius: '10px' }}>
      <h2>7. Generador de Contraseñas</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <label>Longitud: </label>
        <input
          type="number"
          value={longitud}
          onChange={(e) => setLongitud(e.target.value)}
          placeholder="Mínimo 4"
          style={{ padding: '5px', width: '80px' }}
        />
        <button onClick={manejarGeneracion} style={{ marginLeft: '10px' }}>
          Generar contraseña
        </button>
      </div>

      {/* Renderizado condicional de error y resultado [8, 9] */}
      {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}

      {password && (
        <div style={{ 
          marginTop: '20px', 
          padding: '15px', 
          backgroundColor: '#e0e0e0', 
          borderRadius: '5px',
          wordBreak: 'break-all',
          fontFamily: 'monospace' 
        }}>
          <strong>Tu contraseña:</strong> {password}
        </div>
      )}
    </div>
  )
}