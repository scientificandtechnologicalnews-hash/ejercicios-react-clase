/*import { useState } from 'react'

export const CambiadorColor = () => {
  // 1. Definimos el estado para el color de fondo. 
  // useState nos devuelve el valor actual (color) y una función para actualizarlo (setColor) [6].
  const [color, setColor] = useState('#ffffff')

  // 2. Función para generar un color hexadecimal aleatorio (Lógica de JS puro)
  const generarColorAleatorio = () => {
    const letras = '0123456789ABCDEF'
    let nuevoColor = '#'
    for (let i = 0; i < 6; i++) {
      nuevoColor += letras[Math.floor(Math.random() * 16)]
    }
    // 3. Actualizamos el estado. React detectará el cambio y volverá a renderizar [4, 7].
    setColor(nuevoColor)
  }

  // 4. Los estilos en React se pasan como objetos y usan camelCase (backgroundColor en vez de background-color) [8, 9].
  const estiloFondo = {
    backgroundColor: color,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.5s ease'
  }

  return (
    <div style={estiloFondo}>
      <h1>Color de fondo: {color}</h1>
      
      <button onClick={generarColorAleatorio}>
        Cambiar color
      </button>
    </div>
  )
}*/