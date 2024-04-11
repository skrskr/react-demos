import { useState } from 'react'
import './../App.css'
import BackToHome from './BackToHome'

function UseStateExample() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState('')

  return (
    <>
      <h1>Use State Example</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      <label htmlFor="input">{value}</label>
        <input type="text"  value={value} onChange={(e) => setValue(e.target.value)}/>
      </div>
      <BackToHome />
    </>
  )
}

export default UseStateExample
