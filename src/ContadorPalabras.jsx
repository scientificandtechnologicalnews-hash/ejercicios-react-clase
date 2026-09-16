import { useState } from 'react'

export const ContadorPalabras = () => {
  // 1. Único estado: el texto que escribe el usuario
  const [texto, setTexto] = useState('')

  // 2. LÓGICA DE CÁLCULO EN TIEMPO REAL (Estado derivado)

  // Caracteres sin espacios ni saltos de línea:
  // La expresión regular /\s/g busca todos los espacios en blanco, pestañas y saltos de línea (\n)
  // y los reemplaza por una cadena vacía '' antes de contar la longitud.
  const numCaracteres = texto.replace(/\s/g, '').length

  // Palabras separadas por espacios:
  // Usamos .trim() para quitar espacios al inicio y al final.
  // Luego usamos .split(/\s+/) para separar por uno o más espacios/saltos de línea.
  // Si el texto está vacío, el conteo debe ser 0.
  const palabrasArray = texto.trim().split(/\s+/).filter(Boolean)
  const numPalabras = texto.trim() === '' ? 0 : palabrasArray.length

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px', maxWidth: '500px' }}>
      <h2>8. Contador de Palabras y Caracteres</h2>

      {/* ÁREA DE TEXTO CONTROLADA */}
      <textarea
        rows="6"
        cols="50"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe o pega tu párrafo aquí..."
        style={{ width: '100%', padding: '10px', boxSizing: 'border-box', fontFamily: 'inherit' }}
      />

      {/* RESULTADOS EN TIEMPO REAL */}
      <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'space-between', backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px' }}>
        <p><strong>Caracteres (sin espacios):</strong> {numCaracteres}</p>
        <p><strong>Palabras:</strong> {numPalabras}</p>
      </div>
    </div>
  )
}