// import { useState } from 'react'
import './App.css'
import Bye from './components/Bye'
import Hello from './components/Hello'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
     <Hello/>
     <Bye/>
    </>
  )
}

export default App
