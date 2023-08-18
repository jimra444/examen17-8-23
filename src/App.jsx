import { useState } from 'react'
import './App.css'
import Formulario from './Components/Formulario'
import Tarjeta from './Components/Card'

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState('');
  const [styles, setStyles] = useState({
    background: 'transparent',
    color: 'white'
  })
  return (
    <>
      <Formulario setInput1={input1} setInput2={input2} setStyles={setStyles} setError={error} />
      <Tarjeta setInput1={input1} styles={styles}/>
    </>
  )
  


}

export default App
