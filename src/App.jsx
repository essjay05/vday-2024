import { useState } from 'react'
import { Envelope } from './components/envelope'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Kat, Be My Valentine?</h1>
      <Envelope/>
      
    </>
  )
}

export default App
