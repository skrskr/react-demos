import { useEffect, useState } from 'react'
import './../App.css'

function UseEffectExample() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('rendered when component first mounted')
  }, [])
  useEffect(() => {
      console.log('render when count changed to', count)
  }, [count])

  return (
    <>
      <h1>Use Effect Example</h1>
      <div className="card">
       <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
       </div>
    </>
  )
}

export default UseEffectExample
