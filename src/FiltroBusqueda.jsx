import { useState } from 'react'

export const FiltroBusqueda = () => {
  // 1. Lista predefinida de elementos (Datos estáticos)
  const listaAnimales = ['Perro', 'Gato', 'Pez', 'Pájaro', 'Conejo', 'Tortuga', 'Hámster']

  // 2. Único estado necesario: el texto de búsqueda
  const [busqueda, setBusqueda] = useState('')

  // 3. LÓGICA DE FILTRADO (Estado derivado)
  // No necesitamos un useEffect ni un segundo estado. 
  // Filtramos la lista original en cada renderizado usando JS puro [1].
  const animalesFiltrados = listaAnimales.filter((animal) =>
    animal.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>4. Filtro de Búsqueda en Tiempo Real</h2>
      
      {/* Input controlado: su valor depende del estado 'busqueda' [3] */}
      <input
        type="text"
        placeholder="Escribe para filtrar (ej. Ga)..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ padding: '8px', width: '250px' }}
      />

      <ul style={{ marginTop: '20px', listStyle: 'none', padding: 0 }}>
        {/* Renderizado de la lista filtrada [4] */}
        {animalesFiltrados.length > 0 ? (
          animalesFiltrados.map((animal) => (
            // Usamos el animal como key porque en esta lista estática son únicos [5]
            <li key={animal} style={{ padding: '5px 0', borderBottom: '1px thin #eee' }}>
              {animal}
            </li>
          ))
        ) : (
          <p style={{ color: 'gray' }}>No se encontraron coincidencias.</p>
        )}
      </ul>
    </div>
  )
}