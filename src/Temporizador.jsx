import { useState, useEffect } from 'react'

export const Temporizador = () => {
  // 1. Estados: uno para los segundos totales y otro para saber si está activo
  const [segundos, setSegundos] = useState(0)
  const [activo, setActivo] = useState(false)

  // 2. El Hook useEffect: Maneja el intervalo de tiempo [2]
  useEffect(() => {
    let intervalo = null

    if (activo) {
      // Si está activo, creamos el intervalo
      intervalo = setInterval(() => {
        setSegundos((prev) => prev + 1)
      }, 1000)
    } else {
      // Si se pausa, limpiamos el intervalo actual
      clearInterval(intervalo)
    }

    // 3. FUNCIÓN DE LIMPIEZA (Vital para el rendimiento) [3, 5]
    // React la ejecuta cuando el componente se desmonta o antes de volver a ejecutar el efecto
    return () => clearInterval(intervalo)
  }, [activo]) // Solo se vuelve a ejecutar si cambia el estado 'activo' [2]

  // 4. Lógica para formatear el tiempo HH:MM:SS
  const formatearTiempo = () => {
    const horas = Math.floor(segundos / 3600)
    const minutos = Math.floor((segundos % 3600) / 60)
    const segs = segundos % 60

    // Usamos padStart para asegurar que siempre haya dos dígitos (ej: 05 en vez de 5)
    return `${horas.toString().padStart(2, '0')}:${minutos
      .toString()
      .padStart(2, '0')}:${segs.toString().padStart(2, '0')}`
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center', border: '2px solid #333', borderRadius: '15px' }}>
      <h2>6. Temporizador Pro</h2>
      <div style={{ fontSize: '3rem', margin: '20px 0', fontFamily: 'monospace' }}>
        {formatearTiempo()}
      </div>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        {/* Cambiamos el texto y la acción según el estado */}
        <button onClick={() => setActivo(!activo)}>
          {activo ? 'Pausar' : 'Iniciar'}
        </button>
        
        <button onClick={() => { setActivo(false); setSegundos(0); }}>
          Reiniciar
        </button>
      </div>
    </div>
  )
}