import { useContext } from 'react'
import './../App.css'
import { ColorContext } from './UseContextProvider'

function UseContextExample() {
  const data = useContext(ColorContext)

  return (
    <>
      <h1>Use Context Example</h1>
      <div className='card'>
       {data}
      </div>
    </>
  )
}

export default UseContextExample
