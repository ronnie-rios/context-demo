
import './App.css'
import Layer1 from './components/Layer1'
import { DataProvider } from './context/context'

function App() {

  return (
    <>
    <DataProvider>
     <main>
      <h1>Hi this is a context </h1>
      <Layer1 />
     </main>
    </DataProvider>
    </>
  )
}

export default App
