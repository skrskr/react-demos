import { useMemo, useState } from 'react'
import './../App.css'
import BackToHome from './BackToHome';

function UseMemoExample() {
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

  const [counter, setCounter] = useState(0)
  const [test, setTest] = useState(0)

  const result = useMemo(() => {
    return (
      <div style={{color: randomColor}}>value is {counter} := {counter * 2}</div>
    )
  }, [counter])

  return (
    <>
      <h1>Use Memo Example</h1>
      <div className='card'>
        {result}
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setTest(test + 1)}>test</button>
      </div>

      <BackToHome />
    </>
  )
}

export default UseMemoExample
