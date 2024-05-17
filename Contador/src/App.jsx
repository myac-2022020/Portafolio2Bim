import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [cont2, setCont2] = useState(100)

  function aumentar(){
    setCont2(cont2+100)
  }
  function restar(){
    if(count <= -200){

    }else{
      setCount(count-1)
    }
  }
  function restar8(){
    if(count <= -200){
      
    }else{
      setCount(count-8)
    }
  }
  function aumentar1(){
    if(count >= 200){

    }else{
      setCount(count+1)
    }
  }
  function sumar8(){
    if(count >= 200){

    }else{
      setCount(count+8)
    }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div class="caja">
          <button class="boton" onClick={restar8}>Restar 8</button>
          <button class="boton" onClick={restar}>Restar</button>
          <p>count is {count}</p>
          <button class="boton" onClick={aumentar1}>Aumentar</button>
          <button class="boton" onClick={sumar8}>Sumar 8</button>
        </div>
        <div></div>
        <p>Contador 2 {cont2}</p>
        <button onClick={aumentar}>Aumentar contador 2</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
