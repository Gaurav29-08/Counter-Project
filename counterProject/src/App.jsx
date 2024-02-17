import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter] = useState(10)

  const addValue = ()=>{
    setCounter(counter+1);
  }

    const removeValue = ()=>{
      setCounter(counter-1);
    }
  
return (
  <>
  <h1>Counter Project</h1>
  <button onClick={addValue}>Add Vlue{counter}</button>
<br />
  <button onClick={removeValue}>Remove Value{counter}</button>
    </>
  )
}

export default App
