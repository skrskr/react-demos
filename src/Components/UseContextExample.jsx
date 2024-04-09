import { useContext } from 'react'
import './../App.css'
import { ColorContext } from './UseContextProvider'

// 5 use context
function UseContextExample() {
  const {data, changeData} = useContext(ColorContext)

  changeData('greeen')

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
