import { useState, useEffect } from 'react'

export const ListaTareas = () => {
  // 1. INICIALIZACIÓN PEREZOSA (Lazy Initialization):
  // La función dentro de useState solo se ejecuta 1 vez cuando se monta el componente
  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = window.localStorage.getItem('tareas_react')
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : []
  })

  const [textoInput, setTextoInput] = useState('')

  // 2. EFECTO DE PERSISTENCIA:
  // Cada vez que cambia la lista de 'tareas', actualizamos el localStorage
  useEffect(() => {
    window.localStorage.setItem('tareas_react', JSON.stringify(tareas))
  }, [tareas])

  // Función para agregar una nueva tarea
  const agregarTarea = () => {
    if (textoInput.trim() === '') return

    const nuevaTarea = {
      id: Date.now(),
      texto: textoInput,
      completada: false
    }

    // Actualización inmutable del array
    setTareas([...tareas, nuevaTarea])
    setTextoInput('')
  }

  // Función para conmutar el estado del checkbox
  const cambiarEstadoTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        return { ...tarea, completada: !tarea.completada }
      }
      return tarea
    })
    setTareas(tareasActualizadas)
  }

  // Función para eliminar únicamente las tareas completadas
  const limpiarCompletadas = () => {
    const tareasPendientes = tareas.filter((tarea) => !tarea.completada)
    setTareas(tareasPendientes)
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px', maxWidth: '500px' }}>
      <h2>9. Lista de Tareas con LocalStorage</h2>

      {/* Entrada de nueva tarea */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <input
          type="text"
          value={textoInput}
          onChange={(e) => setTextoInput(e.target.value)}
          placeholder="Escribe una tarea..."
          style={{ flex: 1, padding: '8px' }}
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>

      {/* Renderizado de la lista de tareas */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tareas.map((tarea) => (
          <li key={tarea.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <input
              type="checkbox"
              checked={tarea.completada}
              onChange={() => cambiarEstadoTarea(tarea.id)}
            />
            <span
              style={{
                textDecoration: tarea.completada ? 'line-through' : 'none',
                color: tarea.completada ? 'gray' : 'inherit'
              }}
            >
              {tarea.texto}
            </span>
          </li>
        ))}
      </ul>

      {tareas.length === 0 && <p style={{ color: 'gray' }}>No hay tareas registradas.</p>}

      {/* Botón para limpiar completadas */}
      {tareas.some((t) => t.completada) && (
        <button
          onClick={limpiarCompletadas}
          style={{ marginTop: '15px', backgroundColor: '#e74c3c', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer' }}
        >
          Limpiar completadas
        </button>
      )}
    </div>
  )
}