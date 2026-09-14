import { useState } from 'react'

export const ListaDinamica = () => {
  // 1. Estado para el texto del input
  const [textoInput, setTextoInput] = useState('')
  // 2. Estado para la lista de tareas (un array vacío al inicio)
  const [items, setItems] = useState([])

  // Función para agregar un nuevo elemento
  const agregarElemento = () => {
    // Validación: no agregar si el campo está vacío [8]
    if (textoInput.trim() === '') return

    // Creamos un nuevo objeto para el elemento con un ID único
    // Usamos Date.now() para simular un ID único de base de datos [9, 10]
    const nuevoItem = {
      id: Date.now(),
      texto: textoInput
    }

    // ACTUALIZACIÓN INMUTABLE: Usamos el spread operator (...) para crear
    // un nuevo array con todos los items anteriores más el nuevo [5, 11]
    setItems([...items, nuevoItem])
    
    // Limpiamos el input para mejorar la UX
    setTextoInput('')
  }

  // Función para eliminar un elemento
  const eliminarElemento = (id) => {
    // Filtramos el array para obtener todos menos el que queremos borrar
    const listaFiltrada = items.filter(item => item.id !== id)
    setItems(listaFiltrada)
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>3. Lista Dinámica</h2>
      
      {/* Input controlado por React */}
      <input 
        type="text" 
        value={textoInput}
        onChange={(e) => setTextoInput(e.target.value)}
        placeholder="Escribe algo..."
      />
      
      <button onClick={agregarElemento} style={{ marginLeft: '10px' }}>
        Agregar
      </button>

      {/* Renderizado de listas con .map() [12, 13] */}
      <ul style={{ marginTop: '20px' }}>
        {items.map((item) => (
          // Súper importante: cada elemento de la lista necesita una 'key' única [14]
          <li key={item.id} style={{ marginBottom: '10px' }}>
            {item.texto}
            <button 
              onClick={() => eliminarElemento(item.id)}
              style={{ marginLeft: '10px', color: 'red' }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      
      {items.length === 0 && <p>La lista está vacía. ¡Agrega algo!</p>}
    </div>
  )
}