import { CambiadorColor } from './CambiadorColor'
import { ContadorClics } from './ContadorClics' // Importación nombrada [18]

function App() {
  return (
    <main>
      <h1>Mis Ejercicios de React</h1>
      <CambiadorColor />
      <hr /> {/* Una línea divisoria para separar los ejercicios */}
      <ContadorClics />
    </main>
  )
}

export default App
