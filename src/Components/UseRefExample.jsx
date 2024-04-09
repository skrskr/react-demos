import { useRef, useState } from 'react'
import './../App.css'

function UseRefExample() {
  const buttonRef = useRef(null)
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((count) => count + 1)
    buttonRef.current.innerText = `count is ${count+1}`
  }

  return (
    <>
      <h1>Use Ref Example</h1>
      <div className='card'>
        <button ref={buttonRef} onClick={handleClick}>
          count
        </button>
      </div>
    </>
  )
}

export default UseRefExample
